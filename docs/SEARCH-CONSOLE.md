# Google Search Console setup

The website is prepared for Search Console. Ownership verification and indexing requests require your Google account and live domain, so those final steps are done by you (or with your verification token). Everything else is built in.

## 0. Connect the real domain first

Canonicals, the sitemap and schema default to `https://aravindinvisiblegrills.in`. When your domain is live, either keep that default or build with:

```bash
SITE_URL=https://your-domain.com npm run build
```

Deploy the `dist/` folder over HTTPS. Search Console can only verify a domain that resolves and serves the site.

## 1. Add a property

In https://search.google.com/search-console add a property:

- **Domain property** (recommended): verify via **DNS TXT** record at your DNS provider. No code change needed.
- **URL-prefix property** (`https://your-domain.com/`): verify with one of the methods below.

## 2. Verify ownership (choose one)

**a) HTML meta tag** — copy the `content` value from Search Console's "HTML tag" method and build with:

```bash
GSC_VERIFICATION=your-token-here npm run build
```

This injects `<meta name="google-site-verification" content="your-token-here">` into every indexable page. Deploy, then click **Verify**.

**b) HTML file** — download the `googleXXXXXXXX.html` file from Search Console, drop it into `public/`, rebuild and deploy. It will be served at `/googleXXXXXXXX.html`.

**c) DNS TXT** — add the TXT record at your DNS provider (works for Domain properties).

## 3. Submit the sitemap

In Search Console → **Sitemaps**, submit:

```
https://your-domain.com/sitemap.xml
```

It lists all **61 indexable pages** with `lastmod`. `robots.txt` also points to it. Legacy redirect URLs and the 404 page are excluded.

## 4. Request indexing for priority pages

Use **URL Inspection** → paste each URL → **Request indexing**. Start with:

- `/`
- `/services/`
- `/invisible-grills/`
- `/ss304-invisible-grills/`
- `/ss316-invisible-grills/`
- `/balcony-safety-nets/`
- `/pigeon-safety-nets/`
- `/child-safety-nets/`
- `/cloth-hangers/`
- `/invisible-grills-hyderabad/`
- `/invisible-grills-nallagandla/`
- `/invisible-grills-vanasthalipuram/`
- `/locations/gachibowli/`
- `/pigeon-nets-gachibowli/`
- `/balcony-safety-nets-kondapur/`
- `/cloth-hangers-vanasthalipuram/`

## 5. Validate structured data

Test key URLs in the **Rich Results Test** (https://search.google.com/test/rich-results) and **Schema Markup Validator** (https://validator.schema.org). You should see Organization/LocalBusiness, WebSite, BreadcrumbList, Service and FAQPage entities. Fix any warnings Google reports.

## 6. Monitor

- **Pages** report: confirm important pages are indexed and none are accidentally excluded by `noindex` (only `/404.html` and legacy redirect fallbacks should be noindex).
- **Performance**: track queries like "invisible grills in Hyderabad", "pigeon safety nets Hyderabad", "balcony safety nets Kondapur", "cloth hangers Vanasthalipuram", "SS316 invisible grills".
- **Core Web Vitals** and **Mobile Usability**: review after the site is live and crawled.

## What is already handled in code

- Unique title + meta description + H1 per page (build fails on duplicates).
- Descriptive ALT text; internal links and local assets (build fails on broken links/missing assets).
- Canonical URL, Open Graph + Twitter card, and JSON-LD on every indexable page.
- `sitemap.xml` (all indexable pages) and `robots.txt` (allows crawling, references the sitemap).
- `404.html` with `noindex, follow`, excluded from the sitemap; `vercel.json` returns a true 404 status.
- Permanent 301 redirects for legacy `/services/*` URLs via `vercel.json`, plus static fallback documents for other hosts.
- Server-rendered HTML so metadata and content are visible without JavaScript.
