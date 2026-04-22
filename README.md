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
