# Credit Risk Dynamics — marketing site (static preview)

Static HTML/CSS preview for [creditriskdynamics.com](https://creditriskdynamics.com).

## Local preview

From repo root:

```bash
npx serve preview-html -l 5500
```

Open `http://localhost:5500`.

## Deploy on Vercel

1. Import the GitHub repo **credit-risk-dynamics** (or this monorepo).
2. Set **Root Directory** to `preview-html`.
3. Framework Preset: **Other** (no build command).
4. Add domain `creditriskdynamics.com` in Project → Settings → Domains.

`vercel.json` in this folder enables clean URLs for `.html` pages.
