# Aravindh Invisible Grills

A complete safety-solutions business website for **Aravindh Invisible Grills** — invisible grills, safety nets, sports netting, bird control and ceiling cloth drying hangers in Hyderabad & Telangana. Built with React 19, TypeScript, Vite and Tailwind CSS, with build-time pre-rendering for crawlable local SEO.

## Run locally

```bash
npm ci
npm run dev      # generates responsive images, then starts Vite
npm run build    # images + type-check + client build + pre-render + SEO audits
npm run preview  # serve dist/ locally
npm run verify   # static verification of the built site
npm run verify -- --browser  # also run desktop/mobile browser checks against the preview
```

`npm run build` writes a fully rendered `index.html` for **61 indexable pages**: home, 5 hub/company pages, 33 service pages, 18 location pages and 4 planning guides. It also writes `404.html`, 28 legacy redirect fallbacks, `sitemap.xml`, `robots.txt` and `dist/seo-report.json`. The build fails on duplicate titles/descriptions/H1s, broken internal links, missing assets, invalid related links, accidental `noindex`, or redirect/canonical regressions.

## Main URLs

- `/` — home
- `/services/`, `/gallery/`, `/locations/`, `/about/`, `/contact/`
- 14 featured services at root URLs, including `/invisible-grills/`, `/ss304-invisible-grills/`, `/ss316-invisible-grills/`, `/balcony-safety-nets/`, `/pigeon-safety-nets/`, `/bird-protection-nets/`, `/child-safety-nets/`, `/sports-safety-nets/`, `/cricket-practice-nets/`, `/football-safety-nets/`, `/anti-bird-spikes/`, `/bird-spikes-installation/`, `/cloth-hangers/`, `/ceiling-cloth-drying-hangers/`
- 19 additional specialised services at root URLs
- `/invisible-grills-hyderabad/`, `/invisible-grills-nallagandla/`, `/invisible-grills-vanasthalipuram/`
- `/locations/<area>/` for Gachibowli, Kondapur, Miyapur, Kukatpally, Manikonda, Madhapur, Tellapur, Narsingi, HITEC City, Jubilee Hills, Banjara Hills and Secunderabad
- Service × location guides: `/pigeon-nets-gachibowli/`, `/balcony-safety-nets-kondapur/`, `/cloth-hangers-vanasthalipuram/`
- Guides: `/child-safety-solutions/`, `/invisible-grills-vs-safety-nets/`, `/ss304-vs-ss316-invisible-grills/`, `/safety-solutions-cost-guide/`

Every page has a unique SEO title and meta description, one H1, structured headings, descriptive image ALT text, internal links, and Call + WhatsApp buttons. “View Details” opens a real service page, not a modal.

## Images & fonts

Original images are preserved in `public/images/`. `scripts/optimize-images.mjs` generates responsive AVIF/WebP derivatives in `public/images/optimized/` (ignored by Git) and shared metadata in `src/generated/images.ts`. Below-fold images lazy-load; primary hero images are preloaded. Poppins is self-hosted via `@fontsource/poppins`; no Google Fonts requests remain.

The brand mark is consistent across the header, footer, favicon, app icons and Open Graph image. Raster brand assets are committed in `public/`; regenerate them after editing the SVG with:

```bash
node scripts/brand-assets.mjs
```

## Structured data & deployment

Each page emits a JSON-LD `@graph` with Organization + LocalBusiness, WebSite, WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList, Service where relevant, and FAQPage where FAQs are rendered. Open Graph/Twitter metadata and canonicals use one configurable origin:

- Default: `https://aravindhinvisiblegrills.in` (`src/lib/site.ts`)
- Override: `SITE_URL=https://your-domain.com npm run build`

Deploy the entire `dist/` directory. `vercel.json` supplies permanent 301 redirects for legacy `/services/*` URLs and a true 404 for unknown routes. Static legacy fallback documents are also generated for preview hosts that cannot apply Vercel redirects.

## Google Search Console

Set `GSC_VERIFICATION=<token>` at build time to inject the verification meta tag, or use DNS/HTML-file verification. Submit `https://your-domain/sitemap.xml`. See `docs/SEARCH-CONSOLE.md`, `docs/SEO-STRATEGY.md` and `docs/VERIFICATION.md`.

## Business notes

- The enquiry form **prepares a WhatsApp message**; it does not store or transmit submissions automatically.
- Phone `+91 7995150298` and email `aravindhinvisiblegrills@gmail.com` are preserved. No street address or branch office is invented; listed areas are service locations only.
- Nallagandla refers to the Hyderabad suburb, not Nalgonda town/district.
- Existing testimonials are displayed with a clear “not independently verified” note and no aggregate rating schema. Confirm authenticity, warranty terms and installation-count claims with the business before publishing.
- Gallery images are labelled as product/installation references, not verified customer projects.
