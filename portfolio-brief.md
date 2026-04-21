# Portfolio Site — Build Brief

A brief for Claude Code to scaffold and build my portfolio site. Read this fully before starting. Ask me for clarification on anything ambiguous before writing code.

---

## Goal

A credible, low-maintenance portfolio site for **Dylan Hias** — Technical Account Manager at Ingram Micro (Belgium), working toward Cloud Architect roles.

**Primary audience:** recruiters and hiring managers for Cloud Architect / Solutions Architect / TAM roles.
**Success metric:** site reads as credible and technical; prompts recruiter outreach.
**Maintenance posture:** occasional project updates. No blog. No CMS.

---

## Tech stack

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS
- **Deployment target:** Cloudflare Pages or Vercel (static export, either works)
- **Content format:** Astro components + MDX for case studies
- **Fonts:** self-hosted via `@fontsource` — no Google Fonts CDN
- **Analytics:** none at launch (add Plausible later if wanted)
- **No:** CMS, database, auth, backend, client-side JS beyond what Astro ships by default

Keep dependencies minimal. If a package is avoidable, avoid it.

---

## Structure

```
/                       # Home — hero, about, selected work, experience, certs, contact
/projects/im-crm        # Case study
/projects/cloud-architect-copilot  # Case study
/projects/koma          # Case study
/cv.pdf                 # Static asset — I'll drop the file in myself
```

No other routes at launch. No /blog, no /uses, no /now.

---

## Visual style

Style reference (mood only, not content): dark background with one bright accent, oversized display type for the name, floating stat callouts with thin connector lines, strong typographic hierarchy, generous whitespace.

**Do:**
- Near-black background (`#0a0a0a` or similar warm dark grey)
- Single accent color — **chartreuse** (`#DFFF00` range). Use sparingly: links, one CTA, one or two highlights. Not everywhere.
- Display font with character for name/headers — pick something like Clash Display, Boogy Brut, or a pixel/glitch face. One display font only.
- Body font: Inter or Geist Sans.
- 12-column grid, lots of whitespace.
- Floating callouts near the hero (e.g. "AWS SAA-C03 certified", "Goal: AWS Golden Jacket — 12 certs") with thin connector lines.
- Subtle motion: fade-in on scroll, no bouncy or slide-heavy animations.

**Don't:**
- Full-bleed hero photo of me. Small headshot in the About section is fine; no photo in the hero.
- "Book a Call" or "Hire me" CTAs. Use "Get in touch" / "Email me".
- "My Services" section. I'm not selling services as the primary offer.
- Skills grid with technology logos. Certifications and project stacks communicate range better.
- Social icon column on the hero. LinkedIn + email in contact section; that's it.
- Gradients, glassmorphism, or anything that screams "SaaS landing page".
- Dark mode toggle. The site is dark. Done.

---

## Content

All copy below is close to final. Use as-is unless noted. Do **not** rewrite or embellish.

### Home — Hero

> **Dylan Hias**
> Technical Account Manager & Cloud Engineer — Belgium
>
> I help customers get real value out of cloud infrastructure, and I build the tools I wish existed. Currently at Ingram Micro, working toward the AWS Golden Jacket.
>
> [Email] [LinkedIn] [Download CV]

Floating callouts around or near the hero:
- "AWS Solutions Architect Associate"
- "Goal: AWS Golden Jacket — 12 certifications"
- "Based in Belgium · CET"

### Home — About

> I'm a Technical Account Manager at Ingram Micro in Belgium, focused on AWS and enterprise cloud. My day job is helping customers architect and run cloud workloads. Outside of it, I build software that solves problems I've seen up close — most recently a desktop CRM for our internal sales team that integrates with Dynamics 365.
>
> I'm working toward all twelve active AWS certifications (the Golden Jacket), currently holding the Solutions Architect Associate. I learn by building — Terraform, CDK, and a lot of diagrams.
>
> Open to conversations about Cloud Architect, Solutions Architect, and TAM roles, as well as contract work.

Small professional headshot goes in this section, not the hero.

### Home — Selected Work

Three project cards. Each links to its case study page.

**IM-CRM** — Desktop CRM, Ingram Micro (internal)
Local-first desktop CRM for our sales team, integrating with Microsoft Dynamics 365. Built solo, outside my assigned role. In production use internally.
*TypeScript · Electron · Dynamics 365 · Azure AD OAuth*

**Cloud Architect Copilot** — Conversational AI for AWS architecture
Chat-based tool that helps engineers design AWS architectures and generate diagrams. Cost-optimized serverless backend using Bedrock for inference.
*AWS · Bedrock · Lambda · SQS · DynamoDB · Terraform*
Status: In progress — launching [LAUNCH DATE — I'll fill in]

**Koma** — Personal iOS app
An app I built for myself, with a custom icon and design system. Not published — built to learn and scratch an itch.
*Swift · SwiftUI*

### Home — Experience

List format. Title, company, dates, one line each. CV PDF has full detail. Leave placeholder entries — I'll fill in dates and prior roles.

```
Technical Account Manager — Ingram Micro · [start] – Present
  Customer-facing cloud role focused on AWS. Architecture guidance, solution design, escalation support.

[Previous role] — [Company] · [dates]
  [one line]
```

### Home — Certifications & Learning

> **AWS Certified Solutions Architect – Associate** (SAA-C03) — held
>
> **Working toward:** Developer Associate, SysOps Administrator, Solutions Architect Professional, DevOps Engineer Professional, and all specialty certifications.
>
> **Goal:** AWS Golden Jacket — all twelve active certifications held simultaneously.

### Home — Contact

> Email: [address — I'll fill in]
> LinkedIn: https://www.linkedin.com/in/dylan-hias/
> Based in Belgium (CET)

Plain links. No contact form.

---

### Case study: IM-CRM

**Header meta:**
- Role: Sole developer
- Stack: TypeScript, Electron, Microsoft Dynamics 365, Azure AD OAuth
- Status: Private, in production at Ingram Micro
- Timeline: [X months — I'll fill in]

**Sections** (I'll fill the prose; scaffold the layout):
1. Overview (1 short paragraph)
2. The problem (1–2 paragraphs)
3. Approach (2–3 paragraphs — architectural decisions)
4. Integration: Azure AD OAuth as a non-admin (call-out section)
5. What I'd do differently (short)
6. Screenshots — 3–5 slots with captions

Leave clear TODO markers where I need to fill in prose. Screenshots go in `/public/projects/im-crm/` — leave placeholder image paths.

---

### Case study: Cloud Architect Copilot

**Header meta:**
- Role: Sole developer and architect
- Stack: AWS (Lambda, SQS, DynamoDB, S3, VPC endpoints), Amazon Bedrock, Terraform, React, Node.js
- Status: In progress — launching [LAUNCH DATE]

**Sections:**
1. Overview
2. The problem
3. Architecture — hero visual slot for the architecture diagram (prominent)
4. Cost decisions (single-AZ, no NAT Gateway, rationale)
5. Why Bedrock over direct API
6. What's left before launch
7. Screenshots — UI slots once shipped

Same deal — scaffold the layout with TODO markers, leave prose to me.

---

### Case study: Koma

**Header meta:**
- Role: Sole developer and designer
- Stack: Swift, SwiftUI
- Status: Personal use only

**Sections:**
1. Overview — why I built it
2. Design — custom icon story (the "k" letterform with chartreuse accent). Icon prominent in this section.
3. Screenshots — 2–4 on-device shots

---

## Implementation notes

- **Accessibility:** semantic HTML, proper heading hierarchy, sufficient contrast against the dark background, `prefers-reduced-motion` respected for any fades.
- **Performance:** Lighthouse ≥ 95 across the board on the home page. No reason this shouldn't be 100 on a static site.
- **SEO:** see dedicated section below.
- **Favicon:** generate from the chartreuse accent. I may swap in my own later.
- **Responsive:** mobile-first. Test at 375px, 768px, 1280px, 1920px.
- **Dark only:** no light-mode styles. Do not add a toggle.

---

## SEO

**Ranking goal:** rank #1 for "Dylan Hias" and variants ("Dylan Hias Belgium", "Dylan Hias AWS", "Dylan Hias Ingram Micro"). Do not attempt to rank for generic terms like "cloud architect Belgium" — that's a content-marketing game I'm not playing.

**Technical SEO — required:**

- Per-page `<title>` tag. Format: `Dylan Hias — [Page Purpose]`
  - Home: `Dylan Hias — Technical Account Manager & Cloud Engineer`
  - IM-CRM: `IM-CRM Case Study — Dylan Hias`
  - Cloud Architect Copilot: `Cloud Architect Copilot Case Study — Dylan Hias`
  - Koma: `Koma Case Study — Dylan Hias`
- Per-page `<meta name="description">`, 140–160 chars. Written like a human, not stuffed. The home description should mention: name, role, location, AWS, Ingram Micro.
- Canonical URL on every page (`<link rel="canonical">`).
- `robots.txt` allowing all, pointing to sitemap.
- `sitemap.xml` — use `@astrojs/sitemap` integration.
- Semantic HTML: one `<h1>` per page (the page's subject), logical heading hierarchy, `<main>`, `<article>`, `<section>`, `<nav>` used correctly.
- `lang="en"` on `<html>`.
- Alt text on every image. Descriptive, not keyword-stuffed. "Screenshot of IM-CRM dashboard showing customer list" — not "CRM AWS cloud architect portfolio Dylan Hias screenshot."

**Open Graph / Twitter Cards — required:**

- `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (`website` for home, `article` for case studies)
- `twitter:card` = `summary_large_image`
- `og:image` — 1200x630 PNG. Dark background, chartreuse accent, my name, role, site URL. Same template across all pages at launch; per-page variants can come later. Generate one static asset for now — do not build a dynamic OG image pipeline.

**Structured data — required (and only these):**

- `Person` schema (JSON-LD) on the home page only. Fields: `name`, `jobTitle`, `worksFor` (Ingram Micro), `url`, `sameAs` (LinkedIn, GitHub when added), `address.addressCountry` ("BE"). This is what Google uses for the knowledge panel if one ever gets built for my name.
- No `Article` schema on case studies — they're not news articles, and incorrect schema hurts more than no schema.
- No `BreadcrumbList`, no `WebSite` with SearchAction, no `Organization`. These do not apply here.

**Do NOT:**

- Stuff keywords anywhere. Write for humans.
- Add hidden text, hidden sections, or white-on-white keyword lists.
- Generate fake reviews, ratings, or testimonials in structured data.
- Add a keywords meta tag. Google ignored it 20 years ago.
- Build a blog "for SEO." I'm not maintaining one.
- Link-spam into the footer.
- Add every social network icon "for backlinks." LinkedIn is the only one that matters for my case.

**Performance = SEO.** The Lighthouse ≥ 95 requirement already in this brief covers Core Web Vitals, which is the one performance-SEO signal Google actually weights.

**Verification before deploy:**

1. View-source on every page — confirm title, description, canonical, OG tags, lang, single h1.
2. Run the home page through Google's Rich Results Test — Person schema should validate clean with no warnings.
3. Run Lighthouse — SEO score must be 100. Accessibility ≥ 95. Performance ≥ 95.
4. Check `sitemap.xml` lists all four pages and nothing else.
5. Confirm `robots.txt` is present and not accidentally disallowing everything.

**Post-deploy (my job, not the build):**

- Submit sitemap to Google Search Console.
- Add site URL to LinkedIn profile and GitHub profile — single strongest ranking signal for "Dylan Hias" searches.

---

## Build steps

1. Scaffold Astro + Tailwind project.
2. Install minimal deps: `@astrojs/mdx`, `@astrojs/tailwind`, `@fontsource/<chosen-display>`, `@fontsource/inter`.
3. Set up the design tokens in `tailwind.config.mjs`: background, text, accent, font families.
4. Build the home page first — hero, about, work, experience, certs, contact. Get it looking right.
5. Build the case study layout component — shared across all three case studies.
6. Populate the three case studies with the structure above and TODO markers.
7. Add meta tags, OG tags, canonical URLs, JSON-LD Person schema on home, OG image asset, favicon, sitemap, robots.txt.
8. Verify SEO checklist (see SEO section — view-source check, Rich Results Test, Lighthouse 100 on SEO).
9. Verify Lighthouse Performance ≥ 95, Accessibility ≥ 95.
10. Commit. Deploy config for Cloudflare Pages or Vercel — whichever you scaffold, document the deploy steps in the README.

---

## What to check with me before starting

1. Exact display font choice — propose 2–3 options with rationale before committing.
2. Accent color — confirm chartreuse shade (`#DFFF00` vs softer `#D4FF4E` vs other).
3. Cloudflare Pages vs Vercel for deployment target.

Don't write code until I confirm those three.

---

## What I'll provide later

- Headshot image
- Project screenshots (IM-CRM, Koma; Cloud Architect Copilot once shipped)
- Architecture diagram for Cloud Architect Copilot
- CV PDF
- Email address
- Launch date for Cloud Architect Copilot
- Prose for TODO sections in case studies
- Employment dates and prior roles

Build the site so these are trivial drop-ins — no code changes needed to swap in real content.
