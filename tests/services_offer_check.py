#!/usr/bin/env python3
"""Fast smoke test for the paid offer section on services.html.

Usage:
  python3 tests/services_offer_check.py --url http://127.0.0.1:8765
  python3 tests/services_offer_check.py --url https://integratech-systems.github.io
"""

from __future__ import annotations

import argparse
import asyncio
import sys

from playwright.async_api import async_playwright


class Check:
    def __init__(self) -> None:
        self.passed = 0
        self.failed: list[str] = []

    def ok(self, condition: bool, label: str, detail: str = "") -> None:
        if condition:
            self.passed += 1
            print(f"  \033[32m✓\033[0m {label}" + (f" ({detail})" if detail else ""))
        else:
            self.failed.append(label + (f" ({detail})" if detail else ""))
            print(f"  \033[31m✗\033[0m {label}" + (f" ({detail})" if detail else ""))


def services_url(base: str) -> str:
    return f"{base.rstrip('/')}/services.html"


async def inspect_services(page, check: Check, base_url: str, width: int, height: int, lang: str = "en") -> None:
    await page.set_viewport_size({"width": width, "height": height})
    await page.add_init_script(
        f"""
        window.localStorage.setItem('it_theme', 'dark');
        window.localStorage.setItem('it_lang', '{lang}');
        """
    )
    await page.goto(services_url(base_url), wait_until="domcontentloaded")
    await page.wait_for_timeout(700)

    print(f"\n── services.html / {lang} / {width}x{height} ─────────────────────────────")

    offer_cards = page.locator(".offer-card")
    offer_pills = page.locator(".offer-pills a")
    ctas = page.locator(".offer-footer a")
    card_count = await offer_cards.count()
    pill_count = await offer_pills.count()
    cta_count = await ctas.count()

    check.ok(card_count == 6, "six paid offer cards are rendered", f"got {card_count}")
    check.ok(pill_count == 6, "six offer navigation pills are rendered", f"got {pill_count}")
    check.ok(cta_count == 6, "each offer card has a CTA", f"got {cta_count}")

    overflow = await page.evaluate(
        "() => ({ innerWidth, htmlScrollWidth: document.documentElement.scrollWidth, bodyScrollWidth: document.body.scrollWidth })"
    )
    check.ok(
        overflow["htmlScrollWidth"] <= overflow["innerWidth"] + 1
        and overflow["bodyScrollWidth"] <= overflow["innerWidth"] + 1,
        "offer section does not create horizontal page overflow",
        str(overflow),
    )

    if width <= 480:
        widths = await offer_cards.evaluate_all(
            """
            cards => cards.map(card => {
              const rect = card.getBoundingClientRect();
              return { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) };
            })
            """
        )
        centered = all(0 <= item["left"] <= 18 and width - 18 <= item["right"] <= width for item in widths)
        check.ok(centered, "mobile offer cards stay centered in viewport", str(widths[:2]))

    if lang == "ru":
        heading = (await page.locator("#offer-heading").inner_text()).strip()
        cta_text = (await ctas.first.inner_text()).strip()
        check.ok("бизнес-результат" in heading, "RU offer heading is translated", heading)
        check.ok("Запустить проект" in cta_text, "RU offer CTA is translated", cta_text)


async def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://127.0.0.1:8765", help="Base site URL")
    args = parser.parse_args()

    check = Check()
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await inspect_services(page, check, args.url, 1440, 900, "en")
        await inspect_services(page, check, args.url, 390, 844, "en")
        await inspect_services(page, check, args.url, 390, 844, "ru")
        await browser.close()

    total = check.passed + len(check.failed)
    print(f"\nServices offer checks: {check.passed}/{total} passed")
    if check.failed:
        print("Failures:")
        for failure in check.failed:
            print(f"  - {failure}")
        return 1
    print("All services offer checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
