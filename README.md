# Aravindh Invisible Grills

Professional, multi-page business website for **Aravindh Invisible Grills** — invisible grills, safety nets, bird control and ceiling cloth hangers in Hyderabad & Telangana. Built with React 19, TypeScript, Vite and Tailwind CSS, with build-time pre-rendering for strong local SEO.

## Run locally

```bash
npm ci
npm run dev      # local development
npm run build    # type-check + production build + pre-render all pages into dist/
npm run preview  # serve the production build locally
```

`npm run build` type-checks, builds the client bundle, then runs `scripts/prerender.mjs`, which writes a static, fully-rendered `index.html` for **every** page (home, 3 location pages, 28 service pages, 3 material/solution guides, About and Contact), plus `404.html`, `sitemap.xml` and `robots.txt`. The build fails automatically if any SEO audit fails (duplicate titles/descriptions, duplicate paths, broken internal links, or an accidental `noindex`).

## Pages

- `/` — Invisible Grills in Hyderabad (home)
- `/invisible-grills-hyderabad/`, `/invisible-grills-nallagandla/`, `/invisible-grills-vanasthalipuram/` — location pages with genuinely local content
- `/services/<slug>/` — 28 individual service pages
- `/ss304-invisible-grills/`, `/ss316-invisible-grills/`, `/child-safety-solutions/` — material & solution guides
- `/about/`, `/contact/`

Every page has a unique SEO title and meta description, one H1, structured H2/H3 headings, descriptive image ALT text, internal links, and Call + WhatsApp buttons.

## Brand identity & favicons

The brand mark (grill cables on a track) is consistent across the header, footer, favicon, app icons and Open Graph image. Source assets live in `public/` (`favicon.svg`, `logo.svg`, `og-image.svg`). To regenerate the raster favicons, `favicon.ico`, app icons and `og-image.png` after editing the SVG:

```bash
npm i --no-save sharp
node scripts/brand-assets.mjs
```

The generated PNG/ICO files are committed, so the production build does **not** need `sharp`.

## Structured data

Each page emits a JSON-LD `@graph` containing: `Organization` + `LocalBusiness` (one shared business entity with logo, phone, hours and service areas), `WebSite`, a page node (`WebPage` / `AboutPage` / `ContactPage`), `BreadcrumbList`, `Service` where relevant, and `FAQPage` only where the FAQs are unique. Open Graph and Twitter card metadata, canonical URLs and a 1200×630 share image are included on every page.

## Deployment & canonical domain

The site is not on its custom domain yet. Canonicals, the sitemap, Open Graph URLs and schema all use a single configurable origin:

- Default: `https://aravindhinvisiblegrills.in` (set in `src/lib/site.ts`).
- Override at build time: `SITE_URL=https://your-domain.com npm run build` (or set `SITE_URL` in your host's environment). It must be a bare origin (no path/query).

Deploy the entire `dist/` directory. URLs are physical directories, so direct visits and refreshes work on static hosts that serve directory indexes.

### Correct 404 status

`dist/404.html` is generated with `noindex, follow` and is **not** in the sitemap. Configure your host to serve it with HTTP **404** for unknown routes — an SPA fallback that returns `index.html` with status 200 is not a proper 404. A `vercel.json` is included that does this for Vercel. Netlify and Cloudflare Pages use a root `404.html` automatically.

## Google Search Console

Set `GSC_VERIFICATION=<token>` at build time to inject `<meta name="google-site-verification">`, or use DNS / HTML-file verification. Then submit `https://your-domain/sitemap.xml`. See `docs/SEARCH-CONSOLE.md` for step-by-step instructions and `docs/SEO-STRATEGY.md` for the keyword map and competitor analysis.

## Business notes (please confirm before publishing)

- The request form **prepares a WhatsApp message**; it does not store or transmit submissions. Customers must send the message in WhatsApp.
- Business phone (`+91 7995150298`) and email (`aravindhinvisiblegrills@gmail.com`) are preserved from the original project. A street address is intentionally omitted because none was supplied; schema uses Hyderabad/Telangana as the service area.
- Testimonials remain in the source but are not displayed until their authenticity is confirmed.
- Confirm all warranty, product and performance claims (e.g. "15-year warranty", "5,000+ installations") with the business before publishing.
