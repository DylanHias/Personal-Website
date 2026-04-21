# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository status

This repo is **pre-scaffold**. It currently contains only:
- `portfolio-brief.md` — the full build brief. **Read this first, every time.** It is the spec.
- `Resume.pdf`, `portrait.JPG` — content assets the user will drop into the site.

No Astro project, `package.json`, or build tooling exists yet. Common commands (build, dev, test) will only exist after step 1 of the brief's build steps has been executed.

## Before writing code: three open decisions

The brief explicitly blocks coding on three confirmations from the user. Do not scaffold until these are answered:

1. **Display font** — propose 2–3 options with rationale (candidates the user mentioned: Clash Display, Boogy Brut, a pixel/glitch face). One display font only.
2. **Accent chartreuse shade** — `#DFFF00` vs `#D4FF4E` vs other.
3. **Deploy target** — Cloudflare Pages vs Vercel.

## Stack (fixed by the brief — do not substitute)

- **Astro** (static output) + **Tailwind** + **MDX** for case studies
- **@fontsource** self-hosted fonts — no Google Fonts CDN
- No CMS, database, auth, backend, analytics at launch, or client-side JS beyond Astro defaults
- No dark-mode toggle (site is dark-only)
- Minimal deps: if a package is avoidable, avoid it

## Architecture (planned)

Four static routes, no more at launch:
```
/                                    Home (hero, about, work, experience, certs, contact)
/projects/im-crm                     Case study
/projects/cloud-architect-copilot    Case study
/projects/koma                       Case study
```

A **single shared case-study layout component** backs all three `/projects/*` pages — build it once, reuse three times. Case studies use MDX with placeholder TODO markers; the user fills in prose and screenshots without touching code. Project screenshots live under `/public/projects/<slug>/`.

## Content rules

- **Copy in the brief is final.** Do not rewrite, embellish, or "improve" it. Use as-is.
- Leave clear `TODO` markers where the user will fill in: employment dates, launch date for Cloud Architect Copilot, email address, case-study prose, screenshots.
- Content drop-ins must not require code changes.

## Visual constraints (easy to violate — read carefully)

**Do:** near-black bg (`#0a0a0a`), single chartreuse accent used sparingly (links, one CTA, a highlight or two), oversized display type for the name, floating stat callouts near hero with thin connector lines, 12-column grid, generous whitespace, subtle fade-in on scroll, `prefers-reduced-motion` respected.

**Don't:** full-bleed hero photo (small headshot in About only), "Book a Call" / "Hire me" CTAs (use "Get in touch"), a "My Services" section, a skills grid with tech logos, a social-icon column on the hero, gradients, glassmorphism, SaaS-landing-page vibes, a dark-mode toggle.

## SEO constraints

- Ranking goal is **"Dylan Hias"** and name variants only. Do not optimize for generic terms.
- Title format: `Dylan Hias — [Page Purpose]`. Per-page `<title>`, `<meta description>` (140–160 chars), canonical URL, OG + Twitter tags, one `<h1>` per page, `lang="en"`.
- Structured data: **`Person` JSON-LD on the home page only.** No `Article` schema on case studies. No `BreadcrumbList`, no `WebSite` SearchAction, no `Organization`. Wrong schema hurts more than none.
- `@astrojs/sitemap` for `sitemap.xml`. `robots.txt` allow-all pointing to sitemap.
- Single static 1200x630 OG image for all pages at launch — **do not** build a dynamic OG pipeline.
- No keyword stuffing, hidden text, fake reviews, `keywords` meta tag, SEO blog, or footer link-spam.

## Quality bars (must pass before deploy)

- Lighthouse: **SEO 100**, Performance ≥ 95, Accessibility ≥ 95 on the home page.
- Google Rich Results Test: `Person` schema validates clean, no warnings.
- View-source on every page: confirms title, description, canonical, OG tags, `lang`, single `<h1>`.
- Responsive tested at 375 / 768 / 1280 / 1920 px.
