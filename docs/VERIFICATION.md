# Verification summary

## Commands run

```bash
npm run build
npm run verify
npm run verify -- --browser
```

For browser checks, start the production preview first (`npm run preview -- --port 4173`). If a Playwright Chromium binary is unavailable, the optional sandbox fallback is:

```bash
npm install --no-save @sparticuz/chromium
npm run verify -- --browser
```

## Build result

- `npm run build`: **passed**
- TypeScript: **clean**
- Indexable pre-rendered pages: **61**
  - 1 home
  - 5 hub/company pages (`/services/`, `/gallery/`, `/locations/`, `/about/`, `/contact/`)
  - 33 service pages (14 featured + 19 additional)
  - 18 location pages (Hyderabad hub + 14 areas + 3 service × location guides)
  - 4 planning guides
- Noindex 404 page: **1**
- Legacy redirect fallbacks: **28**
- Sitemap URLs: **61**
- Internal links checked: **61**
- Local assets checked: **186**
- Duplicate titles / meta descriptions / H1s: **0**
- Broken internal links / missing local assets: **0**

## Static verification

`npm run verify`: **158 checks, 0 failures**.

Covers sitemap/report parity, robots.txt, required service and area URLs, hub pages, redirect configuration/fallbacks, noindex 404, manifest icons, OG image, and self-hosted fonts.

## Browser verification

`npm run verify -- --browser`: **341 checks, 0 failures** across **22 route/viewport combinations** (11 key routes × desktop 1440px and mobile 390px).

Checked: HTTP 200, one H1, no horizontal overflow, no console/page errors, no failed local assets, images loaded, no modal dialogs, mobile menu navigation, contextual WhatsApp form prefill/prepare flow, gallery filtering, and legacy service fallback navigation.

Screenshots are written to `verification/` (ignored by Git). Report: `dist/verification-report.json`.

## Deployment notes

- `vercel.json` uses route-level **301** redirects for legacy `/services/*` URLs, then filesystem handling, then a true **404** via `/404.html`.
- Canonicals/sitemap/schema follow `SITE_URL`; default is `https://aravindinvisiblegrills.in`.
- Set `GSC_VERIFICATION` at build time if using meta-tag verification, then submit `/sitemap.xml`.

## Owner follow-ups before publishing

1. Connect the real domain / confirm `SITE_URL`.
2. Verify Search Console and submit the sitemap.
3. Confirm warranty terms, “5,000+ installations” and existing testimonial authenticity.
4. Replace reference gallery images with real project photos where available.
5. Create/verify a Google Business Profile for the service area (no branch addresses are claimed on the site).
