# Google Search Console setup

The website is fully prepared for Search Console. Ownership verification and indexing
requests require access to your Google account and your live domain, so those final
steps are done by you (or with your verification token). Everything else is built in.

## 0. Connect the real domain first

Canonicals, the sitemap and schema currently default to `https://aravindhinvisiblegrills.in`.
When your domain is live, either keep that default or build with:

```bash
SITE_URL=https://your-domain.com npm run build
```

Deploy the `dist/` folder over HTTPS. Search Console can only verify a domain that resolves
and serves the site.

## 1. Add a property

In https://search.google.com/search-console add a property:

- **Domain property** (recommended, covers all subdomains + http/https): verify via **DNS TXT**
  record at your DNS provider. No code change needed.
- **URL-prefix property** (`https://your-domain.com/`): verify with one of the methods below.

## 2. Verify ownership (choose one)

**a) HTML meta tag** — copy the `content` value from Search Console's "HTML tag" method and build with:

```bash
GSC_VERIFICATION=your-token-here npm run build
```

This injects `<meta name="google-site-verification" content="your-token-here">` into every page.
Deploy, then click **Verify**.

**b) HTML file** — download the `googleXXXXXXXX.html` file from Search Console, drop it into
`public/`, rebuild and deploy. It will be served at `/googleXXXXXXXX.html`.

**c) DNS TXT** — add the TXT record at your DNS provider (works for Domain properties).

## 3. Submit the sitemap

In Search Console → **Sitemaps**, submit:

```
https://your-domain.com/sitemap.xml
```

It already lists all 37 indexable pages with `lastmod`. `robots.txt` also points to it.

## 4. Request indexing for priority pages

Use **URL Inspection** → paste each URL → **Request indexing**. Start with:

- `/`
- `/invisible-grills-hyderabad/`
- `/invisible-grills-nallagandla/`
- `/invisible-grills-vanasthalipuram/`
- `/ss304-invisible-grills/`
- `/ss316-invisible-grills/`
- `/services/balcony-invisible-grills/`
- `/services/balcony-safety-nets/`
- `/services/pigeon-safety-nets/`
- `/child-safety-solutions/`

## 5. Validate structured data

Test key URLs in the **Rich Results Test** (https://search.google.com/test/rich-results) and
**Schema Markup Validator** (https://validator.schema.org). You should see Organization/LocalBusiness,
WebSite, BreadcrumbList, Service and FAQPage entities. Fix any warnings Google reports.

## 6. Monitor

- **Pages** report: confirm important pages are "Indexed" and none are accidentally "Excluded by noindex"
  (only `/404.html` should be noindex).
- **Performance**: track queries like "invisible grills in Hyderabad", "invisible grills Nallagandla",
  "pigeon safety nets Hyderabad", "SS316 invisible grills".
- **Core Web Vitals** and **Mobile Usability**: review after the site is live and crawled.

## What is already handled in code

- Unique title + meta description per page (build fails on duplicates).
- One H1 per page; descriptive ALT text; internal links (build fails on broken links).
- Canonical URL, Open Graph + Twitter card, and JSON-LD on every page.
- `sitemap.xml` (all indexable pages) and `robots.txt` (allows crawling, references the sitemap).
- `404.html` with `noindex, follow`, excluded from the sitemap; `vercel.json` returns a true 404 status.
- Server-rendered HTML so metadata and content are visible without JavaScript.
