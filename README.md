# dylanhias.com — portfolio

Static site for Dylan Hias, built with Astro + Tailwind v4.

## Stack

- **Astro 5** (static output)
- **Tailwind v4** via `@tailwindcss/vite` (tokens live in `src/styles/global.css` under `@theme`)
- **MDX** for case studies (`@astrojs/mdx`)
- **Sitemap** via `@astrojs/sitemap`
- **Self-hosted fonts**: VT323 (display) + Inter (body) via `@fontsource`
- No CMS, no DB, no auth, no client-side JS beyond a tiny IntersectionObserver for scroll reveals

## Local development

```bash
nvm use                 # Node 20 (see .nvmrc)
npm install
npm run dev             # dev server at http://localhost:4321
npm run build           # static output to dist/
npm run preview         # preview the built site
```

## Routes

| Route | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/projects/im-crm/` | `src/pages/projects/im-crm.mdx` |
| `/projects/cloud-architect-copilot/` | `src/pages/projects/cloud-architect-copilot.mdx` |
| `/projects/koma/` | `src/pages/projects/koma.mdx` |

## Content drop-in map

Most content is editable without touching layout code.

| What to update | Where |
|---|---|
| Email address | `src/pages/index.astro` (hero CTA + contact list), `src/components/Footer.astro`, `src/components/SocialColumn.astro` — search for `hello@example.com` |
| Final domain | `astro.config.mjs` (`site:`) and `public/robots.txt` (sitemap URL) |
| CV PDF | replace `public/cv.pdf` |
| Hero portrait | replace `src/assets/portrait.jpg` |
| Case-study prose | edit the three MDX files in `src/pages/projects/` — search for `TODO` markers |
| Case-study screenshots | drop PNGs into `public/projects/<slug>/` with the filenames referenced in the MDX |
| Cloud Architect Copilot launch date | `src/pages/index.astro` and `src/pages/projects/cloud-architect-copilot.mdx` (search `[LAUNCH DATE]`) |
| Employment dates & prior roles | `src/pages/index.astro` (`experience` array) |
| OG image | regenerate with `node scripts/gen-og.mjs`, or replace `public/og.png` directly (1200×630 PNG) |

## SEO

- `<title>`, `<meta description>`, canonical, OG/Twitter tags, `lang="en"` handled in `src/layouts/BaseLayout.astro`.
- One `<h1>` per page; semantic sectioning throughout.
- `Person` JSON-LD on the home page only.
- `sitemap-index.xml` generated at build time.
- `robots.txt` in `public/`.

## Deploy — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo. Framework preset: **Astro**.
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20` (or rely on `.nvmrc`)
4. Deploy. Add custom domain → DNS proxied through Cloudflare → auto TLS.
5. After first deploy: submit `https://<domain>/sitemap-index.xml` to Google Search Console.
6. Add the site URL to your LinkedIn profile.

## Pre-deploy checklist

- [ ] Fill in all `TODO` markers (search the repo for `TODO`).
- [ ] Replace `hello@example.com` with the real address.
- [ ] Replace `https://dylanhias.com` in `astro.config.mjs` and `robots.txt` with the final domain.
- [ ] `npm run build` completes cleanly.
- [ ] View-source on each page confirms title / description / canonical / OG tags / `lang="en"` / one `<h1>`.
- [ ] Lighthouse on `/` (mobile + desktop): SEO 100, Perf ≥ 95, A11y ≥ 95.
- [ ] Google Rich Results Test on `/` — `Person` schema validates clean.
- [ ] Manually resize to 375 / 768 / 1280 / 1920 — no horizontal scroll at any width.
