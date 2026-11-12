# Aravindh Invisible Grills

React, TypeScript and Vite website. Run `npm ci`, then `npm run dev` for local development. `npm run build` type-checks and generates the production site in `dist/`, including pre-rendered local and service pages.

## Deployment and SEO

Builds temporarily use `https://aravindinvisiblegrillscoin-git-arena-9c8d5d-7c8f1a-kare-aravind.vercel.app` for canonical URLs, Open Graph URLs, the sitemap and its robots.txt reference. Once the custom domain is connected, set `SITE_URL=https://aravindhinvisiblegrills.in` at build time (or update the default) to use it instead. An existing `SITE_URL` deployment environment variable overrides the temporary default. Configure the domain and HTTPS with your hosting and DNS providers separately; building the site does not connect the domain. Deploy the entire `dist` directory; static hosts should serve the `index.html` in each local and service page directory. Service URLs are physical directories, so direct visits and refreshes work on static hosts that serve directory indexes.

The request form prepares a WhatsApp message; it does not store or transmit submissions itself. Customers must send the message in WhatsApp. Business address is intentionally omitted because none was supplied. The original review data remains in the source, but testimonials are not displayed until their authenticity can be confirmed. Confirm all existing warranty, product and performance claims with the business before publishing.

Service cards use standard page links so browser history and scroll restoration work naturally. The service list retains the selected filter and scroll position when returning from a card. Gallery photos open as normal image links rather than a modal.

The build also generates `404.html` for unknown URLs. Configure your static host to serve it with HTTP status 404 for missing routes (and to serve the generated directory indexes for valid routes); an SPA fallback that returns `index.html` with status 200 is not a proper 404. Do not add the error page to the sitemap. The sitemap is available at `/sitemap.xml` and the crawler instructions at `/robots.txt`.
