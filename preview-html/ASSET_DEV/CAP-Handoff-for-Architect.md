# CAP / CRD — Handoff for Architect (Claude)

Use this document when collaborating with **Claude (architect)** and **Cursor (coder)** on Credit Risk Dynamics marketing and CAP positioning.

---

## Roles

| Role | Responsibility | Expected output |
|------|----------------|-----------------|
| **Architect (Claude)** | Product vision, IA, copy strategy, CAP vs marketing boundaries, API narrative, governance story, roadmap, acceptance criteria | Short PRD, text wireframes, per-page specs, component list, definition of done |
| **Coder (Cursor)** | Static HTML/CSS/JS, Vercel deploy, GitHub, CTA wiring (email / WhatsApp / CAP demo), nav/footer consistency, responsive polish | Implementation in repo, commit, production deploy |

**Rule:** Architect supplies specs and copy; coder implements using existing repo conventions unless spec says otherwise.

---

## Product context

### CAP (Credit Assessment Portal)

- Governance-first credit decision platform: policy, evidence, decision records, audit trail, institutional memory.
- **SLIK:** manual upload + analysis — not a live bureau API integration in current positioning.

### Surfaces

| Surface | URL | Notes |
|---------|-----|--------|
| Marketing (production) | https://creditriskdynamics.com | Static `preview-html/` |
| CAP app (UAT/demo) | https://cap.creditriskdynamics.com/ | Login POST `/login` — fields `tester_email`, `user_password` |
| GitHub | https://github.com/YuliusOngky/credit-risk-dynamics | Branch `master` |

### Navigation order

Home → Platform → Governance → Decision Records → Resources → Company

---

## Repository layout

```
AA_MARKETING BRANDING FINAL/
├── preview-html/          ← SOURCE OF TRUTH for live marketing site
│   ├── index.html
│   ├── platform.html
│   ├── governance.html
│   ├── decision-records.html
│   ├── resources.html
│   ├── api-docs.html
│   ├── company.html
│   ├── live-demo.html
│   ├── css/
│   │   ├── shared.css     ← header, footer, buttons, tokens
│   │   └── *.css          ← per-page styles
│   ├── js/
│   │   └── site-actions.js ← LIVE DEMO POST, briefing mailto hooks
│   ├── vercel.json
│   └── ASSET_DEV/         ← images, SVG icons, deck content
└── WEB_SOURCECODE/        ← Next.js 15 scaffold; NOT synced with preview-html
```

### Deploy

- **Vercel project:** `project-euewu` (team `yuliusongky-2416s-projects`)
- Deploy from `preview-html/` (CLI linked) or Git import with **Root Directory** = `preview-html`
- No build step (static)

Local preview:

```bash
npx serve preview-html -l 5500
```

---

## Marketing pages (file map)

| Page | File | Primary CSS |
|------|------|-------------|
| Home | `index.html` | inline + `shared.css` |
| Platform | `platform.html` | `platform.css` |
| Governance | `governance.html` | `governance.css` |
| Decision Records | `decision-records.html` | `decision-records.css` |
| Resources | `resources.html` | `resources.css` |
| API documentation | `api-docs.html` | `api-docs.css` |
| Company | `company.html` | `company.css` |
| Live demo entry | `live-demo.html` | auto POST to CAP login |

Related content asset: `ASSET_DEV/CAP-Executive-Deck-Content.md`

---

## CTAs (implemented — do not contradict without explicit change)

| Label | Behavior |
|-------|----------|
| **CONTACT US** (header, all pages) | WhatsApp https://wa.me/628129885679 |
| **REQUEST BRIEFING** | mailto yuliusongky@creditriskdynamics.com (subject: Request Briefing — Credit Risk Dynamics) |
| **LIVE DEMO** | POST to `https://cap.creditriskdynamics.com/login` with demo credentials in `js/site-actions.js` |
| Footer **08129885679** | WhatsApp link, gold bold (`.contact-phone`) |

Home hero primary button: **REQUEST BRIEFING** (replaces former “Explore Platform”).

---

## Design / tech constraints for coder

- **Stack:** vanilla HTML, CSS, minimal JS — no React on production marketing site.
- **Fonts:** Inter + Cormorant Garamond (Google Fonts).
- **Brand gold:** ~`#d6a33a` / `#D8A23A`; dark bg ~`#07111b`.
- **Icons:** prefer SVG under `ASSET_DEV/icons/` (consistent stroke gold).
- **Responsive:** partial `@media` on subpages; home problem grid has 1200px / 768px breakpoints.
- **Clean URLs:** `vercel.json` in `preview-html/`.

---

## Business priorities (stakeholder)

1. **Platform** narrative stable before heavy Governance polish.
2. Marketing must reflect **governance / decision records**, not legacy prescreening-only landing.
3. Executive deck on Resources: email gate (modal); backend/PDF wiring optional later.
4. Optional future: sync `WEB_SOURCECODE` Next.js with `preview-html` — not current production path.

---

## What to ask the architect (Claude) for

For each initiative, request:

1. **Goal** and audience (bank committee, IT, regulator-facing, etc.)
2. **Information architecture** — section order per page
3. **Copy** — headlines, body, CTA labels (EN; ID optional)
4. **Acceptance criteria** — testable bullets
5. **Component reuse** — map to existing patterns (hero, 3×2 cards, timeline CDR, API sidebar, gated modal)

Avoid: full production HTML/CSS unless it is draft copy only.

---

## Handoff template — “For Cursor (coder)”

Architect should end each spec with:

```markdown
## For Cursor (coder)

### Files to touch
- preview-html/...
- preview-html/css/...

### Content changes
- [section]: [old → new]

### New behavior
- ...

### Out of scope
- ...

### Deploy
- commit + push master + `npx vercel deploy --prod --yes` from preview-html
```

---

## Version note

Document created: July 2026. Update this file when nav, CTAs, deploy target, or CAP URLs change.
