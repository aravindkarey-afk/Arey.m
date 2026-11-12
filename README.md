# Aravindh Invisible Grills

React, TypeScript and Vite website. Run `npm ci`, then `npm run dev` for local development. `npm run build` type-checks and generates the production site in `dist/`, including pre-rendered local and service pages.

## Deployment and SEO

Set `SITE_URL` to the **actual public origin** at build time (for example, `SITE_URL=https://your-real-domain.com npm run build`). This generates canonical URLs, Open Graph URLs, the sitemap and its robots.txt reference. Without it, canonical URLs are deliberately omitted and the sitemap is empty rather than publishing a fabricated domain. Deploy the entire `dist` directory; static hosts should serve the `index.html` in each local and service page directory. Service URLs are physical directories, so direct visits and refreshes work on static hosts that serve directory indexes.

The request form prepares a WhatsApp message; it does not store or transmit submissions itself. Customers must send the message in WhatsApp. Business address is intentionally omitted because none was supplied. The original review data remains in the source, but testimonials are not displayed until their authenticity can be confirmed. Confirm all existing warranty, product and performance claims with the business before publishing.

Service cards use standard page links so browser history and scroll restoration work naturally. The service list retains the selected filter and scroll position when returning from a card. Gallery photos open as normal image links rather than a modal.
