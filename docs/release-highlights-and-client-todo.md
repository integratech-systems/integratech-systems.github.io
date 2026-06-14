# IntegraTech Release Highlights & Fast Client TODO

> Updated: 2026-06-14  
> Site: https://integratech-systems.github.io  
> Purpose: preserve the best release decisions and keep the next tasks focused on clients, cash flow, and crypto/fintech opportunities.

---

## 1. Releases that worked especially well

### Static interactive graph background

**Why it is a good release:**  
The site now has one stable Vanta NET graph behind all pages. Sections scroll above it like a content ribbon, while the graph stays fixed, interactive, and visually consistent in dark/light themes.

**What makes it valuable for buyers:**
- creates an immediate high-tech impression without heavy 3D complexity;
- works across index, services, case studies, tech stack, contact and 404;
- keeps buttons/cards clickable because the background has `pointer-events:none`;
- still reacts to pointer/touch/click through global forwarding in `assets/theme.js`;
- avoids the earlier noisy version with multiple graphs and data-packet overlays.

**Implementation guardrails:**
- Vanta is owned only by `assets/theme.js`;
- no per-page inline Vanta init;
- no `#data-canvas` packet overlay unless redesigned later;
- light hero must stay transparent so the fixed graph remains visible behind typed text.

### Mobile centering and responsive polish

**Why it is a good release:**  
The mobile version now avoids the subtle right-edge drift and keeps major section shells centered over the graph background.

**Important details:**
- `html/body` have `overflow-x:hidden`;
- mobile shell blocks use `width:100%; max-width:100%; margin:auto`;
- grid/flex children use `min-width:0`;
- manifesto stats become one column on small screens;
- side AOS transforms are disabled on tablet/mobile to prevent visual edge drift.

### Full i18n coverage + regression checks

**Why it is a good release:**  
The site is now genuinely multilingual, not just nav/title translated. Service bodies, lists, case studies, CTAs and contact content are covered.

**Guardrails:**
- `tests/i18n-check.sh` verifies translation key coverage and structural placement;
- `data-i18n-html` is used only where HTML list markup is required;
- runtime fallback is safe and does not break UI if a key is missing.

### Smoke vs full visual regression split

**Why it is a good release:**  
The full visual matrix is useful but slow. It now runs only with `--full`.

Routine check:
```bash
python3 tests/static_background_check.py --url https://integratech-systems.github.io
```

Full regression only when changing global layout/background/theme:
```bash
python3 tests/static_background_check.py --full --url https://integratech-systems.github.io
```

### Tracker + Telegram reporting

**Why it is a good release:**  
We have a safe first-party analytics loop: GitHub Pages → openstreaming.online tracker → SQLite → Telegram reports.

**Business value:**
- shows whether LinkedIn/outreach traffic converts to visits;
- can report countries, visits and session activity;
- keeps raw data local on the host.

---

## 2. Best current assets for client attraction

| Asset | Why it helps sell |
|-------|-------------------|
| **IntegraTech site** | polished proof of engineering taste, i18n, responsive UX, interactive background |
| **FluidTrader** | live fintech/internal product: Java WebFlux, exchange APIs, AI market brief, uptime |
| **Services portfolio** | clear B2B offer: AI, data engineering, Java, security, Web3, legacy, BI, AI media |
| **LinkedIn research/outreach templates** | direct channel to Israeli/fintech/security decision makers |
| **Visitor tracker** | closes feedback loop: campaign → visit → Telegram report |
| **Israel outreach folder** | ready-to-send pitch package for Microsoft, NVIDIA, CyberArk, NICE, eToro, Tipalti |

---

## 3. Fastest TODOs for clients and money

### Priority A — fastest path to inbound leads

1. **Add OG preview for LinkedIn/Telegram**
   - Why: every shared link should look premium in DMs/posts.
   - Output: `assets/og-preview.png` + `og:*` / `twitter:*` meta on all pages.
   - Expected impact: higher click-through from LinkedIn and Telegram outreach.

2. **Enable contact form**
   - Why: email link alone loses warm leads.
   - Output: working form on `contact.html` via Web3Forms or similar lightweight backend.
   - Expected impact: prospects can submit project context instantly.

3. **Expand services page into paid offers**
   - Why: current site proves skill; expanded service cards convert skill into buyable packages.
   - Add: AI Integration, Zero-Trust, Web3, Legacy Modernization, Data Vault/BI, AI Media.
   - Expected impact: buyers understand what to request and budget for.

### Priority B — outbound lead generation

4. **Run LinkedIn outreach week 1**
   - Use `/root/my/outreach-israel/`.
   - Target 20 high-quality contacts, not mass spam:
     - CyberArk: OpenBao/Vault production story;
     - NICE Actimize: SWIFT/financial data pipelines;
     - eToro: FluidTrader proof;
     - Tipalti/Payoneer: payments and SWIFT;
     - Microsoft Israel: Azure integration/distributed systems.
   - Goal: 3-5 replies or calls.

5. **Publish 3 LinkedIn proof posts**
   - Post 1: "Technology made engineers stronger, not weaker."
   - Post 2: "How one engineer runs a 5-service trading system with OpenBao."
   - Post 3: "SWIFT/NiFi lessons from production financial pipelines."
   - Goal: credibility before direct asks.

### Priority C — crypto/fintech monetization without risky capital trading

6. **Package FluidTrader as a lead magnet**
   - Add a stronger public page/card: architecture, dashboards, uptime, AI market brief, exchange integrations.
   - CTA: "Request investor/demo access."
   - Goal: fintech leads and investor curiosity.

7. **Package a crypto signal / market brief offer**
   - Do not trade client funds.
   - Sell information product: AI market brief, volatility snapshots, exchange-flow notes, Telegram subscription.
   - Add disclaimer: educational/analytics, not financial advice.
   - Goal: recurring revenue with low operational risk.

---

## 4. Recommended next sprint order

| Order | Task | Why now |
|-------|------|---------|
| 1 | OG social preview | quickest improvement for sharing/outreach |
| 2 | Contact form | closes lead capture gap |
| 3 | Services expansion | makes the offer buyable |
| 4 | FluidTrader lead magnet | strongest proof for fintech/crypto |
| 5 | LinkedIn week-1 outreach | turns site into conversations |
| 6 | Crypto signal offer | possible recurring revenue, but needs careful wording |

---

## 5. Current operational TODO state

Active / pending focus:
- `fluid-trader-showcase` — case card is live; optional dedicated lead-magnet page remains.
- `lead-magnet-fluidtrader` — publish stronger FluidTrader sales/proof section.
- `linkedin-outreach-week1` — send targeted Israel/fintech outreach.
- `services-page-expansion` — add paid service cards.
- `og-preview-social` — add social preview image/meta.
- `contact-form-web3forms` — enable simple lead capture form.
- `crypto-signal-offer` — package analytics subscription safely.

Done/research complete:
- site design research;
- LinkedIn marketing research;
- mobile/static graph release;
- i18n coverage and tests;
- tracker and Telegram reports.

