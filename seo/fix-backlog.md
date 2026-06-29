# Trayaam SEO Fix Backlog

Branch: `feature/content-review-seo` · Date: 2026-06-28
Source: `seo/audit-2026-06.md` and `seo/keyword-research.md`.

Priority key: **P0** ship first (high impact, often low effort, or blocks the strategy). **P1** important, schedule next. **P2** nice to have or larger.
Effort: S (under 1 hour), M (half day), L (multi day).

---

## P0, do first

### F1. Unblock AI crawlers at Cloudflare  (Effort S, infra)
**Problem:** Live `robots.txt` (Cloudflare Managed Content) sets `Disallow: /` for GPTBot, ClaudeBot, Google-Extended and others, plus `Content-Signal: ai-train=no`. This blocks the exact engines the AEO and GEO strategy targets.
**Where:** Cloudflare dashboard (not the repo). Audit ref T1.
**Fix:** disable the managed AI-bot block / set content signals to allow `ai-input`, so GPTBot, ClaudeBot, PerplexityBot and Google-Extended can crawl. Reconcile with `public/robots.txt` so the served file is intentional and not self-contradictory.
**Verify:** `curl https://trayaam.com/robots.txt` no longer disallows those agents.

### F2. Replace SVG OG image with 1200x630 PNG  (Effort S)
**Problem:** `og:image` is an SVG; previews do not render on social or AI unfurlers.
**Where:** `src/layouts/Layout.astro:11,47`; new asset in `public/assets/`. Audit ref T3.
**Fix:** add `og-image.png` (1200x630), point `ogImage` default at it, add `og:image:width` and `og:image:height`. Keep SVG only as an optional extra.
**Verify:** rebuild, check `dist` head; test in a sharing debugger after deploy.

### F3. Fix trailing-slash so canonical matches the served URL  (Effort S)
**Problem:** Canonical and `og:url` use no trailing slash but those URLs 308-redirect to the trailing-slash version in the sitemap. Self-canonical points to a redirect.
**Where:** `astro.config.mjs` (add `trailingSlash: 'always'`), `src/layouts/Layout.astro:16` (ensure canonical carries the slash). Audit ref T2.
**Verify:** built `/about/index.html` canonical is `https://trayaam.com/about/`; `curl -I` on the canonical returns 200, not 308.

### F4. Wire the contact form to real delivery  (Effort M, conversion blocker)
**Problem:** Form is a demo that never submits; every CTA dead-ends.
**Where:** `src/pages/contact.astro:101-106,133-158`. Audit ref C3.
**Fix:** connect to Resend or an email endpoint, with success and error states and spam protection.
**Verify:** a test submission arrives in the inbox.

### F5. Reposition titles, meta and hero copy to the new frame  (Effort M)
**Problem:** Titles and copy sell "web design", not "Digital Transformation and Growth Partner".
**Where:** home, `/about`, `/services`, plus the `description`/`title` props site-wide. Audit refs O2, section 3; strategy in `seo/keyword-research.md`.
**Fix:** rewrite home hero, `/services` into a full-funnel hub, and all title and meta tags to Layer-1 umbrella terms. (Part of the Phase 2 content rewrite.)
**Verify:** titles and H1s reflect the umbrella; primary terms present.

### F6. Build the missing service silo pages  (Effort L)
**Problem:** Content, UX/UI, standalone SEO, Social, GMB, Performance marketing and broader automation have no pages, so those services cannot rank.
**Where:** new files under `src/pages/services/`. Strategy and target keywords in `seo/keyword-research.md`.
**Fix:** create one page per silo, each tuned to its head keyword, linked up to the `/services` hub and across to related blog posts.
**Verify:** pages build, appear in sitemap, internally linked.

---

## P1, schedule next

### F7. Fix Article schema dates and enrich  (Effort M)
ISO `datePublished`, add `dateModified`, `image`, consistent author. `src/layouts/Post.astro:7-8`, `src/data/blog.js`. Audit ref T4.

### F8. Add BreadcrumbList schema to nested pages  (Effort M)
`/services/*`, `/industries/*`, `/work/*`, `/blog/*`. Audit ref T6.

### F9. Trim oversized meta descriptions to 150 to 160 chars  (Effort S)
`/industries` (200), `/about` (186), `/services/ai-automation` (183), `/work` (176), `/` (172), `/services/full-rebuild` (165), `/tech` (164), `/services/growth` (161), and fix the dynamic industry description in `src/pages/industries/[industry].astro:20`. Audit ref O1.

### F10. Add UK phone and split LocalBusiness by studio  (Effort M)
Add a UK number; consider two LocalBusiness entries for London and Ahmedabad. `src/layouts/Layout.astro:80`, `src/pages/contact.astro`, `src/pages/index.astro`. Audit ref T8.

### F11. Trim areaServed to UK and India  (Effort S)
Remove New York, Amsterdam, Paris, Singapore, Dubai from schema and `llms.txt`. `src/layouts/Layout.astro:75`, `src/pages/index.astro`, `public/llms.txt`. Audit ref T9.

### F12. Remove every em dash from copy  (Effort M)
All page titles and body copy plus `src/data/blog.js` and `src/data/industries.js`. Replace with commas, full stops, colons or "to" for ranges. Audit ref O3. (Folds into the Phase 2 rewrite.)

### F13. Add Person schema and socials on /about; page-type schema elsewhere  (Effort M)
Person entries with `sameAs`, plus AboutPage, CollectionPage or ItemList and CreativeWork where relevant. `src/pages/about.astro`, `/work`, `/industries`, `/tech`. Audit ref T13.

### F14. Reframe industry pages and add geo variants  (Effort M)
Move from "web design for X" to full funnel; add geo-modified keywords (for example "restaurant website design Ahmedabad", "law firm website design UK"). `src/data/industries.js`, `src/pages/industries/[industry].astro`.

---

## P2, later

### F15. Add lastmod to the sitemap  (Effort S)
Real modified dates via `@astrojs/sitemap` serialize. Audit ref T7.

### F16. Remove duplicate geo meta  (Effort S)
`src/layouts/Layout.astro:56-59`. Audit ref T5.

### F17. Security headers  (Effort S, infra)
HSTS, CSP, X-Frame-Options, Permissions-Policy at Cloudflare or host. Audit ref T10.

### F18. Enable edge caching of HTML  (Effort S, infra)
Let Cloudflare cache static HTML with purge on deploy. Audit ref T11.

### F19. OG and Twitter completeness  (Effort S)
`og:site_name`, `article:published_time`, `twitter:site`. Audit ref T12.

### F20. Build location pages  (Effort L)
`/web-design-london`, `/digital-marketing-london`, `/web-design-ahmedabad`, `/digital-marketing-ahmedabad` for service-plus-city head terms. Strategy in `seo/keyword-research.md`.

### F21. Extend the blog to the new silos  (Effort L, ongoing)
Question-led posts for PPC, social, GMB, business process automation, UX, content. Audit ref C2.

### F22. Confirm performance with real metrics  (Effort S)
Run PageSpeed Insights and read GSC Core Web Vitals field data once available; fix only if something fails. Audit ref T14.

### F23. Add individual service links to the main nav  (Effort M)
A services mega-menu so the new silo pages are reachable in one click. Audit ref T15.

---

## Suggested sequencing
1. **Quick technical wins (a day):** F1, F2, F3, F9, F11, F16, F15, F19. Mostly S effort, immediate signal improvement.
2. **Conversion and positioning (the core rewrite):** F4, F5, F12, then F6 and F14. This is the Phase 2 content rewrite.
3. **Schema and depth:** F7, F8, F10, F13.
4. **Growth and infra:** F20, F21, F17, F18, F22, F23.
