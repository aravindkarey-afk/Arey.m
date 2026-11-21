# Google Tag Manager and Google Ads conversions

The site installs the GTM container `GTM-PTMSDF9S` once on each generated HTML page. It also loads the Google Ads Google tag for destination `AW-18553147578`. The GTM container is installed with its own GTM snippet; do not pass the `GTM-...` container ID to `gtag('config', ...)`.

The site pushes these custom events to `dataLayer`:

- `whatsapp_click`: a click on a WhatsApp link, including the prepared-message link.
- `phone_call_click`: a click on a `tel:` link.
- `generate_lead`: a valid contact form submission. This only prepares a WhatsApp message; it does **not** mean the message was sent or received.

On that same valid form submission, the site sends one Google Ads conversion event to `AW-18553147578/do7kCKGjzbkdELqh6o5F`. It does not fire that Ads conversion again on the following WhatsApp click. The event payload does not include form fields or destination link URLs; Google tags may still collect standard page context such as the current page URL.

The direct Google Ads conversion is implemented in the site code. Review the GTM container before publishing any additional Ads Conversion tag for the same conversion label/action, as doing so could double-count a lead. If you prefer to manage this conversion through GTM instead, remove the direct AW Google tag and `trackGoogleAdsContactConversion` call from the site, then use the existing `generate_lead` event as the trigger for a Google Ads Conversion Tracking tag in GTM. Configure the corresponding Google tag and a Conversion Linker there, and use Tag Assistant Preview to verify the chosen setup before publishing.

You can create GTM Custom Event triggers using the exact custom event names above for other analytics needs. The no-JavaScript iframe cannot track JavaScript click or form events.

## Cloudflare Pages deployment

Push these source changes to the branch used by your Cloudflare Pages project or deploy through your existing Git workflow. Use `npm run build` as the build command and `dist` as the output directory, retaining any existing environment variables. Do not upload only the root `index.html`: the build generates all pages and fallback documents. After deployment, use GTM Preview / Tag Assistant on the live site to confirm the container and custom events, and check Google Ads for the direct conversion after a valid test enquiry. Avoid sending real customer data in test conversions.

Run `npm ci`, `npm run build`, and `npm run verify` locally. For interaction checks, run a preview server and `npm run verify -- --browser` with Playwright Chromium installed (or set `CHROME_EXECUTABLE_PATH`).
