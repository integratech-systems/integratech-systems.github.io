#!/usr/bin/env python3
"""Check the single static graph background on every page.

The intended architecture is simple:
  - each HTML page has exactly one #page-bg and one #vanta-bg
  - #vanta-bg is fixed to the viewport and contains exactly one Vanta canvas
  - sections scroll above the same fixed background
  - no #data-canvas / packet overlay and no scroll-camera parallax
  - theme switching destroys/recreates Vanta without duplicating canvases

Usage:
  python3 tests/static_background_check.py --url http://127.0.0.1:8123
  python3 tests/static_background_check.py --url https://integratech-systems.github.io
"""

from __future__ import annotations

import argparse
import asyncio
import sys

from playwright.async_api import async_playwright

PAGES = [
    "index.html",
    "services.html",
    "case-studies.html",
    "open-source.html",
    "contact.html",
    "404.html",
]

THEMES = ["dark", "light"]

VIEWPORTS = [
    ("desktop", 1440, 900),
    ("tablet", 768, 1024),
    ("mobile", 390, 844),
]


class Check:
    def __init__(self) -> None:
        self.failed: list[str] = []
        self.passed = 0

    def ok(self, condition: bool, label: str, detail: str = "") -> None:
        if condition:
            self.passed += 1
            print(f"  \033[32m✓\033[0m {label}" + (f" ({detail})" if detail else ""))
        else:
            self.failed.append(label + (f" ({detail})" if detail else ""))
            print(f"  \033[31m✗\033[0m {label}" + (f" ({detail})" if detail else ""))


def join_url(base: str, page: str) -> str:
    base = base.rstrip("/")
    return base if page == "index.html" else f"{base}/{page}"


async def inspect_page(page, check: Check, url: str, theme: str, width: int, height: int) -> None:
    await page.add_init_script(
        f"""
        window.localStorage.setItem('it_theme', '{theme}');
        document.documentElement.setAttribute('data-theme', '{theme}');
        """
    )
    await page.goto(url, wait_until="domcontentloaded")
    await page.wait_for_timeout(2800)

    label = f"{url.split('/')[-1] or 'index.html'} / {theme} / {width}x{height}"
    print(f"\n── {label} ─────────────────────────────")

    page_bg_count = await page.locator("#page-bg").count()
    vanta_bg_count = await page.locator("#vanta-bg").count()
    data_canvas_count = await page.locator("#data-canvas").count()
    vanta_canvas_count = await page.locator("#vanta-bg canvas").count()

    check.ok(page_bg_count == 1, "#page-bg exists exactly once", f"got {page_bg_count}")
    check.ok(vanta_bg_count == 1, "#vanta-bg exists exactly once", f"got {vanta_bg_count}")
    check.ok(data_canvas_count == 0, "#data-canvas is absent (no packet overlay)", f"got {data_canvas_count}")
    check.ok(vanta_canvas_count == 1, "exactly one Vanta canvas", f"got {vanta_canvas_count}")

    if vanta_bg_count:
        box = await page.eval_on_selector(
            "#vanta-bg",
            """el => {
              const s = getComputedStyle(el);
              const r = el.getBoundingClientRect();
              return {
                position: s.position,
                zIndex: parseInt(s.zIndex, 10),
                pointerEvents: s.pointerEvents,
                top: Math.round(r.top),
                left: Math.round(r.left),
                width: Math.round(r.width),
                height: Math.round(r.height),
                opacity: parseFloat(s.opacity)
              };
            }""",
        )
        check.ok(box["position"] == "fixed", "#vanta-bg is fixed", box["position"])
        check.ok(box["zIndex"] == -3, "#vanta-bg z-index=-3", str(box["zIndex"]))
        check.ok(box["pointerEvents"] == "none", "#vanta-bg does not capture input", box["pointerEvents"])
        check.ok(box["top"] == 0 and box["left"] == 0, "#vanta-bg pinned to viewport origin", str(box))
        check.ok(box["width"] == width and box["height"] == height, "#vanta-bg covers viewport", str(box))
        check.ok(0.55 <= box["opacity"] <= 0.95, "#vanta-bg is visible but not overpowering", str(box["opacity"]))

    if page_bg_count:
        bg = await page.eval_on_selector(
            "#page-bg",
            """el => {
              const s = getComputedStyle(el);
              const r = el.getBoundingClientRect();
              return {
                position: s.position,
                zIndex: parseInt(s.zIndex, 10),
                top: Math.round(r.top),
                left: Math.round(r.left),
                width: Math.round(r.width),
                height: Math.round(r.height),
                background: s.backgroundImage
              };
            }""",
        )
        check.ok(bg["position"] == "fixed", "#page-bg is fixed", bg["position"])
        check.ok(bg["zIndex"] == -4, "#page-bg z-index=-4", str(bg["zIndex"]))
        check.ok(bg["width"] == width and bg["height"] == height, "#page-bg covers viewport", str(bg))
        check.ok("linear-gradient" in bg["background"], "#page-bg has gradient fallback")

    theme_attr = await page.evaluate("document.documentElement.getAttribute('data-theme')")
    check.ok(theme_attr == theme, "requested theme is applied", f"got {theme_attr}")

    vanta_exists = await page.evaluate("Boolean(window.__vantaEffect && window.__vantaEffect.camera)")
    check.ok(vanta_exists, "Vanta effect initialized")
    interactive = await page.evaluate(
        """() => {
          const e = window.__vantaEffect;
          return Boolean(e && e.options && e.options.mouseControls && e.options.touchControls);
        }"""
    )
    check.ok(interactive, "Vanta mouse/touch controls enabled")

    before_pointer = await page.evaluate(
        """() => {
          const e = window.__vantaEffect;
          return e ? { x: e.mouseX, y: e.mouseY } : null;
        }"""
    )
    await page.mouse.move(width - 80, 90)
    await page.wait_for_timeout(250)
    after_pointer = await page.evaluate(
        """() => {
          const e = window.__vantaEffect;
          return e ? { x: e.mouseX, y: e.mouseY } : null;
        }"""
    )
    if before_pointer and after_pointer:
        check.ok(
            abs(after_pointer["x"] - before_pointer["x"]) > 1
            or abs(after_pointer["y"] - before_pointer["y"]) > 1,
            "Vanta reacts to pointer movement",
            f"{before_pointer} -> {after_pointer}",
        )

    await page.mouse.click(width // 2, height // 2)
    await page.wait_for_timeout(80)
    pulse_class = await page.evaluate("document.getElementById('vanta-bg').classList.contains('vanta-pulse')")
    check.ok(pulse_class, "Vanta background reacts to click with pulse")

    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    await page.wait_for_timeout(500)

    rect_after_scroll = await page.eval_on_selector(
        "#vanta-bg",
        "el => ({ top: Math.round(el.getBoundingClientRect().top), width: Math.round(el.getBoundingClientRect().width), height: Math.round(el.getBoundingClientRect().height) })",
    )
    check.ok(
        rect_after_scroll["top"] == 0
        and rect_after_scroll["width"] == width
        and rect_after_scroll["height"] == height,
        "#vanta-bg still covers viewport after scroll",
        str(rect_after_scroll),
    )

    # Toggle theme twice and ensure Vanta does not duplicate canvases.
    await page.evaluate("window.__setTheme && window.__setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')")
    await page.wait_for_timeout(900)
    await page.evaluate("window.__setTheme && window.__setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')")
    await page.wait_for_timeout(900)
    after_toggle_canvas_count = await page.locator("#vanta-bg canvas").count()
    check.ok(after_toggle_canvas_count == 1, "theme toggle keeps exactly one Vanta canvas", f"got {after_toggle_canvas_count}")


async def run(url: str, headed: bool) -> int:
    check = Check()
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=not headed)
        for viewport_name, width, height in VIEWPORTS:
            for theme in THEMES:
                for page_name in PAGES:
                    context = await browser.new_context(viewport={"width": width, "height": height})
                    page = await context.new_page()
                    try:
                        await inspect_page(page, check, join_url(url, page_name), theme, width, height)
                    except Exception as exc:  # test runner should report all scenarios, not crash early
                        check.ok(False, f"{page_name} / {theme} / {viewport_name} crashed", str(exc))
                    finally:
                        await context.close()
        await browser.close()

    total = check.passed + len(check.failed)
    print("\n" + "=" * 72)
    print(f"Static background checks: {check.passed}/{total} passed")
    if check.failed:
        print("\nFailed checks:")
        for failure in check.failed:
            print(f"  - {failure}")
        return 1
    print("All static background checks passed.")
    return 0


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="https://integratech-systems.github.io")
    parser.add_argument("--headed", action="store_true")
    args = parser.parse_args()
    sys.exit(asyncio.run(run(args.url, args.headed)))


if __name__ == "__main__":
    main()
