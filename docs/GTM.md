# Google Tag Manager and conversions

The site loads container `GTM-PTMSDF9S` once on each generated HTML page. It pushes these custom events to `dataLayer`:

- `whatsapp_click`: a click on a WhatsApp link, including the prepared-message link.
- `phone_call_click`: a click on a `tel:` link.
- `generate_lead`: a valid contact form submission. This only prepares a WhatsApp message; it does **not** mean the message was sent or received.

No form details or link URLs are included in these events. The events do not themselves send a Google Ads conversion. In GTM, create Custom Event triggers with the exact event names above. Once you have real Google Ads conversion IDs and labels, configure Google Ads Conversion Tracking tags and a Conversion Linker in the container, attach the appropriate triggers, preview with Tag Assistant, and publish the container. Decide which actions should count as conversions to avoid counting the form preparation and subsequent WhatsApp click as the same lead twice. Review existing tags and triggers in GTM first to avoid duplicate tracking.

## Cloudflare Pages deployment

Push these source changes to the branch used by your Cloudflare Pages project or deploy through your existing Git workflow. Use `npm run build` as the build command and `dist` as the output directory, retaining any existing environment variables. Do not upload only the root `index.html`: the build generates all pages and fallback documents. After deployment, use GTM Preview / Tag Assistant on the live site to check each action and confirm the published container, and check Google Ads after configuring conversion tags. The no-JavaScript iframe cannot track JavaScript click or form events.

Run `npm ci`, `npm run build`, and `npm run verify` locally. For interaction checks, run a preview server and `npm run verify -- --browser` with Playwright Chromium installed (or set `CHROME_EXECUTABLE_PATH`).
