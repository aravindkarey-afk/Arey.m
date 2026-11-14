import { CONTACT, SERVICE_AREAS } from "./data";

/**
 * Single source of truth for brand identity used by structured data, the
 * sitemap and social metadata. Keep the business name consistent everywhere.
 *
 * The site is not on its custom domain yet. `defaultOrigin` is the intended
 * production domain; override it at build time with `SITE_URL=https://...`
 * (see scripts/prerender.mjs). Canonicals, the sitemap and schema all follow it.
 */
export const SITE = {
  name: "Aravind Invisible Grills",
  shortName: "Aravind",
  slogan: "Safer Homes, Brighter Views",
  description:
    "Invisible grills, safety nets and bird control solutions in Hyderabad and Telangana. Free doorstep measurement and professional installation.",
  defaultOrigin: "https://aravindinvisiblegrills.in",
  logo: "/android-chrome-512x512.png",
  ogImage: "/og-image.png",
  phone: CONTACT.phone,
  telephone: "+91-7995150298",
  email: CONTACT.email,
  whatsapp: "917995150298",
  openingHours: "Mo-Su 08:00-21:00",
  priceRange: "₹₹",
  locality: "Hyderabad",
  region: "Telangana",
  country: "IN",
  areaServed: SERVICE_AREAS,
} as const;

/** Resolve the public origin at build time (Node only). */
export function resolveOrigin(env: string | undefined): string {
  const raw = (env ?? "").trim() || SITE.defaultOrigin;
  const url = new URL(raw);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error("SITE_URL must be a public origin, e.g. https://your-domain.com");
  }
  return url.origin;
}
