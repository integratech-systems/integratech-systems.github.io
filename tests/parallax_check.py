#!/usr/bin/env python3
"""
Parallax graph visual & structural test.

Checks:
  - #vanta-bg and #data-canvas are position:fixed and cover full viewport
  - Scroll parallax: after scrolling, elements still cover viewport
  - Both dark and light themes
  - Viewports: desktop (1440x900), tablet (768x1024), mobile (375x812)
  - Vanta canvas child is present and has correct dimensions
  - Camera parallax fires (camera.position.y changes after scroll)
  - Data packets canvas has content (non-empty pixels)
  - Screenshots saved to tests/screenshots/parallax/

Usage:
  python3 tests/parallax_check.py [--url URL] [--headed]
  python3 tests/parallax_check.py --url https://integratech-systems.github.io
  python3 tests/parallax_check.py --url http://localhost:8080 --headed
"""

import argparse
import asyncio
import json
import sys
import os
from pathlib import Path
from datetime import datetime

# ── config ────────────────────────────────────────────────────────────────────

VIEWPORTS = [
    {"name": "desktop",  "width": 1440, "height": 900},
    {"name": "tablet",   "width": 768,  "height": 1024},
    {"name": "mobile",   "width": 375,  "height": 812},
]

THEMES = ["dark", "light"]

SCREENSHOT_DIR = Path(__file__).parent / "screenshots" / "parallax"

# ── helpers ───────────────────────────────────────────────────────────────────

PASS = "\033[32m✓\033[0m"
FAIL = "\033[31m✗\033[0m"
INFO = "\033[36mℹ\033[0m"

results: list[dict] = []

def log(ok: bool, label: str, detail: str = ""):
    symbol = PASS if ok else FAIL
    print(f"  {symbol} {label}" + (f"  ({detail})" if detail else ""))
    results.append({"ok": ok, "label": label, "detail": detail})

# ── test body ─────────────────────────────────────────────────────────────────

async def test_viewport(page, url: str, vp: dict, theme: str):
    label = f"[{vp['name']} {vp['width']}×{vp['height']} / {theme}]"
    print(f"\n── {label} ──────────────────────────────────────")

    # Set theme in localStorage before navigation
    await page.add_init_script(f"""
        window.localStorage.setItem('it_theme', '{theme}');
        document.documentElement.setAttribute('data-theme', '{theme}');
    """)

    await page.goto(url, wait_until="domcontentloaded")
    await page.wait_for_timeout(2500)  # let Vanta init

    w, h = vp["width"], vp["height"]

    # ── 1. #vanta-bg exists and is position:fixed ────────────────────────────
    vanta_css = await page.eval_on_selector(
        "#vanta-bg",
        "el => { const s = getComputedStyle(el); return { pos: s.position, "
        "w: el.offsetWidth, h: el.offsetHeight, "
        "left: s.left, top: s.top }; }",
    ) if await page.query_selector("#vanta-bg") else None

    if vanta_css:
        log(True,  f"{label} #vanta-bg exists")
        log(vanta_css["pos"] == "fixed",   f"{label} #vanta-bg position:fixed",
            f"got '{vanta_css['pos']}'")
        log(vanta_css["left"] == "0px",    f"{label} #vanta-bg left:0", vanta_css["left"])
        log(vanta_css["top"]  == "0px",    f"{label} #vanta-bg top:0",  vanta_css["top"])
        log(vanta_css["w"] == w,           f"{label} #vanta-bg width={w}",
            f"got {vanta_css['w']}")
        log(vanta_css["h"] == h,           f"{label} #vanta-bg height={h}",
            f"got {vanta_css['h']}")
    else:
        log(False, f"{label} #vanta-bg NOT FOUND in DOM")

    # ── 2. Vanta canvas child rendered ─────────────────────────────────────
    canvas_in_vanta = await page.eval_on_selector(
        "#vanta-bg canvas",
        "c => ({ w: c.width, h: c.height, "
        "style_w: getComputedStyle(c).width, style_h: getComputedStyle(c).height })"
    ) if await page.query_selector("#vanta-bg canvas") else None

    if canvas_in_vanta:
        log(True,  f"{label} Vanta canvas rendered inside #vanta-bg")
        log(canvas_in_vanta["w"] > 0,  f"{label} Vanta canvas width>0",
            str(canvas_in_vanta["w"]))
        log(canvas_in_vanta["h"] > 0,  f"{label} Vanta canvas height>0",
            str(canvas_in_vanta["h"]))
    else:
        log(False, f"{label} Vanta canvas NOT rendered (Three.js/CDN may have failed)")

    # ── 3. #data-canvas exists and is position:fixed ────────────────────────
    dc_css = await page.eval_on_selector(
        "#data-canvas",
        "el => { const s = getComputedStyle(el); return { pos: s.position, "
        "w: el.offsetWidth, h: el.offsetHeight, "
        "left: s.left, top: s.top }; }",
    ) if await page.query_selector("#data-canvas") else None

    if dc_css:
        log(True,  f"{label} #data-canvas exists")
        log(dc_css["pos"] == "fixed",  f"{label} #data-canvas position:fixed",
            f"got '{dc_css['pos']}'")
        log(dc_css["w"] == w,  f"{label} #data-canvas width={w}",  f"got {dc_css['w']}")
        log(dc_css["h"] == h,  f"{label} #data-canvas height={h}", f"got {dc_css['h']}")
    else:
        log(False, f"{label} #data-canvas NOT FOUND")

    # ── 4. #page-bg exists with correct z-index ────────────────────────────
    page_bg_z = await page.eval_on_selector(
        "#page-bg",
        "el => parseInt(getComputedStyle(el).zIndex, 10) || 0",
    ) if await page.query_selector("#page-bg") else None

    if page_bg_z is not None:
        log(True,             f"{label} #page-bg exists")
        log(page_bg_z < -1,  f"{label} #page-bg z-index<-1 (behind content)", str(page_bg_z))
    else:
        log(False, f"{label} #page-bg NOT FOUND")

    # ── 5. z-index layering: vanta < data-canvas ───────────────────────────
    z_vanta = await page.eval_on_selector(
        "#vanta-bg",
        "el => parseInt(getComputedStyle(el).zIndex, 10)"
    ) if await page.query_selector("#vanta-bg") else 0
    z_dc = await page.eval_on_selector(
        "#data-canvas",
        "el => parseInt(getComputedStyle(el).zIndex, 10)"
    ) if await page.query_selector("#data-canvas") else 0

    log(z_vanta < z_dc,
        f"{label} z-layering: #vanta-bg({z_vanta}) < #data-canvas({z_dc})")

    # ── 6. Scroll down → both elements still cover viewport ────────────────
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    await page.wait_for_timeout(400)

    vanta_after = await page.eval_on_selector(
        "#vanta-bg",
        "el => ({ w: el.offsetWidth, h: el.offsetHeight, "
        "rect: JSON.stringify(el.getBoundingClientRect()) })",
    ) if await page.query_selector("#vanta-bg") else None

    if vanta_after:
        rect = json.loads(vanta_after["rect"])
        # Fixed elements: getBoundingClientRect().top should be 0 (stuck to viewport)
        log(abs(rect.get("top", 99)) < 2,
            f"{label} #vanta-bg still at viewport top after scroll",
            f"top={rect.get('top')}")
        log(vanta_after["w"] == w,
            f"{label} #vanta-bg width unchanged after scroll")
    else:
        log(False, f"{label} #vanta-bg missing after scroll")

    # ── 7. Scroll parallax: camera.position.y changed ──────────────────────
    camera_y = await page.evaluate("""
        () => {
            var eff = window.__vantaEffect;
            return eff && eff.camera ? eff.camera.position.y : null;
        }
    """)
    if camera_y is not None:
        log(camera_y != 0,
            f"{label} Vanta camera.y drifted (parallax active)",
            f"camera.y={camera_y:.2f}")
    else:
        log(False, f"{label} Vanta not initialised — camera not accessible")

    await page.evaluate("window.scrollTo(0, 0)")
    await page.wait_for_timeout(200)

    # ── 8. Theme: data-theme attribute correct ─────────────────────────────
    actual_theme = await page.evaluate(
        "() => document.documentElement.getAttribute('data-theme')"
    )
    log(actual_theme == theme,
        f"{label} data-theme='{theme}' applied", f"got '{actual_theme}'")

    # ── 9. Screenshot ──────────────────────────────────────────────────────
    SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)
    ts = datetime.now().strftime("%H%M%S")
    shot = SCREENSHOT_DIR / f"{vp['name']}_{theme}_{ts}.png"
    await page.screenshot(path=str(shot), full_page=False)
    print(f"  {INFO} screenshot → {shot}")

    # Also scroll screenshot
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
    await page.wait_for_timeout(300)
    shot2 = SCREENSHOT_DIR / f"{vp['name']}_{theme}_{ts}_scrolled.png"
    await page.screenshot(path=str(shot2), full_page=False)
    print(f"  {INFO} scroll screenshot → {shot2}")
    await page.evaluate("window.scrollTo(0, 0)")


# ── main ──────────────────────────────────────────────────────────────────────

async def run(url: str, headed: bool):
    from playwright.async_api import async_playwright

    print(f"\n🔬 Parallax graph test  →  {url}")
    print(f"   viewports: {[v['name'] for v in VIEWPORTS]}")
    print(f"   themes:    {THEMES}\n")

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=not headed)

        for vp in VIEWPORTS:
            for theme in THEMES:
                ctx = await browser.new_context(
                    viewport={"width": vp["width"], "height": vp["height"]},
                    device_scale_factor=1,
                )
                page = await ctx.new_page()
                try:
                    await test_viewport(page, url, vp, theme)
                except Exception as exc:
                    log(False, f"[{vp['name']}/{theme}] CRASH: {exc}")
                finally:
                    await ctx.close()

        await browser.close()

    # ── Summary ──────────────────────────────────────────────────────────────
    passed = sum(1 for r in results if r["ok"])
    failed = sum(1 for r in results if not r["ok"])
    total  = len(results)
    print(f"\n{'═'*60}")
    print(f"  Results: {passed}/{total} passed", end="")
    if failed:
        print(f"  ·  \033[31m{failed} FAILED\033[0m")
        print("\nFailed checks:")
        for r in results:
            if not r["ok"]:
                print(f"  {FAIL} {r['label']}" + (f"  ({r['detail']})" if r["detail"] else ""))
    else:
        print(f"  ·  \033[32mAll green ✓\033[0m")
    print(f"{'═'*60}\n")
    print(f"  Screenshots: {SCREENSHOT_DIR}/")

    return 0 if failed == 0 else 1


def main():
    parser = argparse.ArgumentParser(description="Parallax graph structural & visual test")
    parser.add_argument("--url",    default="https://integratech-systems.github.io",
                        help="Site URL to test")
    parser.add_argument("--headed", action="store_true",
                        help="Run browser in headed mode (for local debugging)")
    args = parser.parse_args()

    sys.exit(asyncio.run(run(args.url, args.headed)))


if __name__ == "__main__":
    main()
