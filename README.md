# Aravindh Invisible Grills

React, TypeScript and Vite website. Run `npm ci`, then `npm run dev` for local development. `npm run build` type-checks and generates the production site in `dist/`, including pre-rendered local and service pages.

## Deployment and SEO

Builds temporarily use `https://aravindinvisiblegrillscoin-git-arena-9c8d5d-7c8f1a-kare-aravind.vercel.app` for canonical URLs, Open Graph URLs, the sitemap and its robots.txt reference. Once the custom domain is connected, set `SITE_URL=https://aravindhinvisiblegrills.in` at build time (or update the default) to use it instead. An existing `SITE_URL` deployment environment variable overrides the temporary default. Configure the domain and HTTPS with your hosting and DNS providers separately; building the site does not connect the domain. Deploy the entire `dist` directory; static hosts should serve the `index.html` in each local and service page directory. Service URLs are physical directories, so direct visits and refreshes work on static hosts that serve directory indexes.

The request form prepares a WhatsApp message; it does not store or transmit submissions itself. Customers must send the message in WhatsApp. Business address is intentionally omitted because none was supplied. The original review data remains in the source, but testimonials are not displayed until their authenticity can be confirmed. Confirm all existing warranty, product and performance claims with the business before publishing.

Service cards use standard page links so browser history and scroll restoration work naturally. The service list retains the selected filter and scroll position when returning from a card. Gallery photos open as normal image links rather than a modal.

## Performance

- Every route in `dist/` is pre-rendered static HTML and is **hydrated** at runtime (`hydrateRoot` in `src/main.tsx`), so the first paint never waits for the JavaScript bundle and there is no client-side re-render flash. In development, where `#root` starts empty, it falls back to a client render.
- All photos live in `public/images/reference/` as WebP. `npm run optimize:images` (sharp) regenerates committed AVIF siblings plus responsive 480w/800w variants and rewrites `src/lib/imageManifest.ts` with intrinsic dimensions and variant widths. Run it after changing photos; the outputs are committed.
- `<Picture>` (`src/components/Picture.tsx`) renders `<picture>` with AVIF + WebP `srcSet`s (via the manifest), explicit `width`/`height` (no layout shift) and caller-provided `sizes`. Plain JPG/PNG assets fall back to a normal `<img>`.
- The hero image is preloaded in `index.html` (`fetchpriority="high"`); other images lazy-load. Google Fonts load with `display=swap` and a non-blocking `media="print"` swap-in (with a `<noscript>` fallback), and only the four weights the design uses (400/500/600/700) are requested.
- Scroll-reveal animations are JS-gated (`.js` class set pre-paint in `index.html`) and pure opacity/transform. Without JavaScript, or with `prefers-reduced-motion: reduce`, all content is visible and unanimated.
- Service pages use `position: sticky` sidebars; `body` uses `overflow-x: clip` so sticky keeps working while horizontal overflow is prevented.
- `vercel.json` sets immutable year-long caching for the hashed `/assets/*` bundle and week-long caching (with `stale-while-revalidate`) for `/images/*`, plus `X-Content-Type-Options`, `X-Frame-Options` and `Referrer-Policy` headers. If the site is not deployed on Vercel, mirror these rules in the host's own config.
- Code splitting was deliberately avoided: the shared bundle is ~90 kB gzipped and every one of the 33 pre-rendered pages needs it, so splitting would add requests without saving bytes.

## Verification

`npm run verify` runs the full gate: type-check + production build + `scripts/audit-dist.mjs` (every local `href`/`src`/`srcset` in `dist/` must resolve, one `<h1>`/title/description/`#main` per page, no localhost references) + `scripts/hydration-check.mjs` (hydrates all 33 pre-rendered pages in jsdom and fails on any React hydration mismatch). Run it before deploying.


The build also generates `404.html` for unknown URLs. Configure your static host to serve it with HTTP status 404 for missing routes (and to serve the generated directory indexes for valid routes); an SPA fallback that returns `index.html` with status 200 is not a proper 404. Do not add the error page to the sitemap. The sitemap is available at `/sitemap.xml` and the crawler instructions at `/robots.txt`.
