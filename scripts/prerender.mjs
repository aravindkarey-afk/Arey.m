import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { readFile, writeFile, mkdir, access, readdir } from 'node:fs/promises';
import path from 'node:path';

const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const clip = (text) => text.length <= 160 ? text : `${text.slice(0, 157).replace(/\s+\S*$/, '')}…`;
const normalize = (value) => value.endsWith('/') ? value : `${value}/`;
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const { SERVICES, FEATURED_SERVICES, servicePath } = await vite.ssrLoadModule('/src/lib/services.ts');
  const { SERVICE_CONTENT } = await vite.ssrLoadModule('/src/lib/service-content.ts');
  const { PLACES } = await vite.ssrLoadModule('/src/lib/locations.ts');
  const { GUIDES } = await vite.ssrLoadModule('/src/lib/guides.ts');
  const { FAQS } = await vite.ssrLoadModule('/src/lib/data.ts');
  const { HOME_SEO, PAGE_META, CONTACT_FAQS } = await vite.ssrLoadModule('/src/lib/pages.ts');
  const { SITE, resolveOrigin } = await vite.ssrLoadModule('/src/lib/site.ts');
  const { IMAGE_META, optimizedSrc } = await vite.ssrLoadModule('/src/generated/images.ts');

  const origin = resolveOrigin(process.env.SITE_URL);
  const gsc = (process.env.GSC_VERIFICATION || '').trim();
  const today = new Date().toISOString().slice(0, 10);
  const redirects = JSON.parse(await readFile('src/lib/redirects.json', 'utf8'));
  const vercel = JSON.parse(await readFile('vercel.json', 'utf8'));
  const staticLabels = { '/services/': 'Services', '/gallery/': 'Gallery', '/locations/': 'Locations', '/about/': 'About Us', '/contact/': 'Contact' };

  const pages = [
    { path: '/', ...HOME_SEO, kind: 'home', area: 'Hyderabad', image: '/images/reference/s26.webp', faqs: FAQS, crumbs: [['Home', '/']], preloadSizes: '(max-width: 1023px) calc(100vw - 40px), 580px' },
    ...Object.entries(PAGE_META).map(([pagePath, meta]) => ({
      path: pagePath, title: meta.title, description: clip(meta.description), kind: meta.kind, area: 'Hyderabad', image: meta.image,
      faqs: pagePath === '/contact/' ? CONTACT_FAQS : [], crumbs: [['Home', '/'], [staticLabels[pagePath], pagePath]],
      preloadSizes: pagePath === '/locations/' ? '450px' : pagePath === '/gallery/' ? '(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 46vw, 380px' : undefined,
    })),
    ...SERVICES.map((service) => {
      const content = SERVICE_CONTENT[service.slug];
      if (!content) throw new Error(`Missing service content: ${service.slug}`);
      return { path: servicePath(service), title: content.title, description: clip(content.description), kind: 'service', area: 'Hyderabad', image: service.image, faqs: content.faqs, serviceName: service.title, serviceType: service.category, crumbs: [['Home', '/'], ['Services', '/services/'], [service.short, servicePath(service)]], preloadSizes: '(max-width: 1023px) calc(100vw - 40px), 600px' };
    }),
    ...PLACES.map((place) => {
      const service = SERVICES.find((item) => item.slug === place.primaryService);
      return { path: place.path, title: place.metaTitle, description: clip(place.metaDescription), kind: 'location', area: place.area, image: place.image, faqs: place.faqs, serviceName: place.combination ? `${service.short} in ${place.area}` : place.h1, serviceType: place.combination ? service.category : 'Safety and installation services', crumbs: [['Home', '/'], ['Locations', '/locations/'], [place.area, place.path]], preloadSizes: '(max-width: 1023px) calc(100vw - 40px), 600px' };
    }),
    ...GUIDES.map((guide) => ({ path: guide.path, title: guide.metaTitle, description: clip(guide.metaDescription), kind: 'guide', area: 'Hyderabad', image: guide.image, faqs: guide.faqs, crumbs: [['Home', '/'], ['Services & Guides', '/services/'], [guide.h1, guide.path]], preloadSizes: '(max-width: 1023px) calc(100vw - 40px), 600px' })),
  ];

  const errors = [];
  const serviceSlugs = new Set(SERVICES.map((service) => service.slug));
  const areaNames = new Set(PLACES.filter((place) => !place.combination).map((place) => place.area));
  for (const service of SERVICES) {
    const content = SERVICE_CONTENT[service.slug];
    if (content.related.length < 3) errors.push(`Too few related services: ${service.slug}`);
    for (const slug of content.related) if (!serviceSlugs.has(slug)) errors.push(`Unknown related service ${slug} on ${service.slug}`);
  }
  for (const place of PLACES) {
    for (const slug of place.services) if (!serviceSlugs.has(slug)) errors.push(`Unknown location service ${slug} on ${place.path}`);
    for (const name of place.nearby) if (!areaNames.has(name)) errors.push(`Unknown nearby area ${name} on ${place.path}`);
  }

  const businessId = `${origin}/#business`;
  const websiteId = `${origin}/#website`;
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const placeSchema = (name) => ({ '@type': name === 'Hyderabad' || name === 'Secunderabad' ? 'City' : 'Place', name: name === 'Hyderabad' ? 'Hyderabad, Telangana' : `${name}, Hyderabad, Telangana` });
  const business = {
    '@type': ['Organization', 'LocalBusiness'], '@id': businessId, name: SITE.name, url: `${origin}/`, description: SITE.description, slogan: SITE.slogan,
    logo: { '@type': 'ImageObject', url: `${origin}${SITE.logo}`, width: 512, height: 512 }, image: `${origin}${SITE.ogImage}`,
    telephone: SITE.telephone, email: SITE.email, priceRange: SITE.priceRange,
    address: { '@type': 'PostalAddress', addressLocality: SITE.locality, addressRegion: SITE.region, addressCountry: SITE.country },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: '08:00', closes: '21:00' },
    areaServed: SITE.areaServed.map(placeSchema),
    contactPoint: { '@type': 'ContactPoint', telephone: SITE.telephone, contactType: 'customer service', areaServed: 'Hyderabad, Telangana, IN', availableLanguage: ['English', 'Telugu', 'Hindi'] },
    knowsAbout: FEATURED_SERVICES.map((service) => service.short),
  };
  const website = { '@type': 'WebSite', '@id': websiteId, url: `${origin}/`, name: SITE.name, description: SITE.description, inLanguage: 'en-IN', publisher: { '@id': businessId } };

  function schemaFor(page) {
    const url = `${origin}${page.path}`;
    const webpageType = page.kind === 'about' ? 'AboutPage' : page.kind === 'contact' ? 'ContactPage' : page.kind === 'hub' ? 'CollectionPage' : 'WebPage';
    const serviceId = `${url}#service`;
    const graph = [
      business, website,
      { '@type': webpageType, '@id': `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { '@id': websiteId }, about: { '@id': page.serviceName ? serviceId : businessId }, breadcrumb: { '@id': `${url}#breadcrumb` }, inLanguage: 'en-IN', ...(page.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: `${origin}${page.image}` } } : {}) },
      { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: page.crumbs.map(([name, crumbPath], index) => ({ '@type': 'ListItem', position: index + 1, name, item: `${origin}${crumbPath}` })) },
    ];
    if (page.serviceName) graph.push({ '@type': 'Service', '@id': serviceId, name: page.serviceName, serviceType: page.serviceType || page.serviceName, description: page.description, provider: { '@id': businessId }, areaServed: placeSchema(page.area || 'Hyderabad'), url });
    if (page.faqs?.length) graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: page.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) });
    if (page.path === '/services/') graph.push({ '@type': 'ItemList', '@id': `${url}#services`, name: 'All Aravind safety and installation services', itemListElement: SERVICES.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.short, url: `${origin}${servicePath(service)}` })) });
    if (page.path === '/locations/') graph.push({ '@type': 'ItemList', '@id': `${url}#locations`, name: 'Hyderabad service locations', itemListElement: PLACES.map((place, index) => ({ '@type': 'ListItem', position: index + 1, name: place.area, url: `${origin}${place.path}` })) });
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  const template = await readFile('dist/index.html', 'utf8');
  const assetFiles = await readdir('dist/assets');
  const fontPreloads = assetFiles.filter((file) => /^poppins-latin-(400|600|700)-normal-.*\.woff2$/.test(file)).map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`);
  const rendered = [];

  function updateHead(html, page, indexable = true) {
    const url = `${origin}${page.path}`;
    const meta = IMAGE_META[page.image];
    const preload = indexable && page.preloadSizes && meta ? `<link rel="preload" as="image" type="image/avif" imagesrcset="${meta.widths.map((width) => `${optimizedSrc(page.image, width, 'avif')} ${width}w`).join(', ')}" imagesizes="${escape(page.preloadSizes)}" fetchpriority="high" />` : '';
    const head = [
      indexable ? `<link rel="canonical" href="${url}" />` : '',
      indexable ? `<meta property="og:url" content="${url}" />` : '',
      gsc && indexable ? `<meta name="google-site-verification" content="${escape(gsc)}" />` : '',
      ...fontPreloads, preload,
      indexable ? `<script type="application/ld+json">${JSON.stringify(schemaFor(page)).replaceAll('<', '\\u003c')}</script>` : '',
    ].filter(Boolean).join('\n    ');
    return html
      .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace(/<meta name="robots" content="[^"]*"\s*\/?>/, `<meta name="robots" content="${indexable ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, follow'}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escape(page.title)}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escape(page.description)}" />`)
      .replaceAll('content="/og-image.png"', `content="${origin}/og-image.png"`)
      .replace('</head>', `    ${head}\n  </head>`);
  }

  for (const page of pages) {
    const body = renderToString(React.createElement(App, { pathname: page.path }));
    const html = updateHead(template, page).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    const directory = path.join('dist', page.path);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
    rendered.push({ page, html });
  }

  const notFound = { path: '/404.html', title: 'Page Not Found | Aravind Invisible Grills', description: 'The requested page could not be found. Explore Aravind Invisible Grills services, locations or contact options.', image: null, faqs: [], crumbs: [] };
  const notFoundHtml = updateHead(template, notFound, false).replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { pathname: '/404.html' }))}</div>`);
  await writeFile('dist/404.html', notFoundHtml);

  // Vercel applies the permanent redirects in vercel.json before filesystem routing.
  // These small fallback documents keep legacy links usable on static preview hosts.
  for (const redirect of redirects) {
    const target = `${origin}${redirect.destination}`;
    const html = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page Moved | Aravind Invisible Grills</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0; url=${escape(redirect.destination)}"></head><body style="font-family:sans-serif;padding:24px"><p>This service page has moved. <a href="${escape(redirect.destination)}">Continue to ${escape(redirect.destination)}</a>.</p></body></html>`;
    const directory = path.join('dist', redirect.source);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `\n  <url><loc>${escape(origin + page.path)}</loc><lastmod>${today}</lastmod></url>`).join('')}\n</urlset>\n`;
  await writeFile('dist/sitemap.xml', sitemap);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

  const duplicate = (label, values) => {
    const seen = new Map();
    for (const value of values) seen.set(value, (seen.get(value) || 0) + 1);
    const duplicates = [...seen.entries()].filter(([, count]) => count > 1).map(([value]) => value);
    if (duplicates.length) errors.push(`Duplicate ${label}: ${JSON.stringify(duplicates)}`);
  };
  duplicate('page paths', pages.map((page) => page.path));
  duplicate('SEO titles', pages.map((page) => page.title));
  duplicate('meta descriptions', pages.map((page) => page.description));
  duplicate('redirect sources', redirects.map((redirect) => redirect.source));
  duplicate('H1 headings', rendered.map(({ html }) => (html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] || '').replace(/<[^>]+>/g, '').trim()));

  const pagePaths = new Set(pages.map((page) => page.path));
  const htmlByPath = new Map(rendered.map(({ page, html }) => [page.path, html]));
  const fileExists = async (relative) => { try { await access(path.join('dist', relative)); return true; } catch { return false; } };
  const internalLinks = new Set();
  const assetLinks = new Set();
  for (const { page, html } of rendered) {
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) errors.push(`Indexable page contains noindex: ${page.path}`);
    if ((html.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`Expected one H1: ${page.path}`);
    if ((html.match(/<link rel="canonical"/g) || []).length !== 1) errors.push(`Expected one canonical: ${page.path}`);
    if (!html.includes(`<link rel="canonical" href="${origin}${page.path}"`)) errors.push(`Canonical mismatch: ${page.path}`);
    if (!html.includes(`<title>${escape(page.title)}</title>`)) errors.push(`Title mismatch: ${page.path}`);
    if (html.includes('This page isn’t here.')) errors.push(`Indexable route rendered NotFound: ${page.path}`);
    const schemaMatch = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
    if (!schemaMatch) errors.push(`Missing JSON-LD: ${page.path}`);
    else { try { const schema = JSON.parse(schemaMatch[1]); if (!schema['@graph']?.some((node) => node['@type'] === 'BreadcrumbList')) errors.push(`Missing breadcrumb schema: ${page.path}`); } catch { errors.push(`Invalid JSON-LD: ${page.path}`); } }
    for (const match of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="[^"]+"/.test(match[0])) errors.push(`Image missing useful alt: ${page.path}`);
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      if (/^(https?:|tel:|mailto:|\/\/|data:)/.test(href)) continue;
      const [rawPath, fragment] = href.split('#');
      const clean = rawPath.split('?')[0];
      const targetPath = clean ? normalize(clean.startsWith('/') ? clean : `/${clean}`) : page.path;
      if (clean && !path.extname(clean)) internalLinks.add(targetPath);
      if (fragment) {
        const targetHtml = htmlByPath.get(targetPath);
        if (targetHtml && !targetHtml.includes(`id="${fragment}"`)) errors.push(`Missing fragment #${fragment} on ${targetPath} (linked from ${page.path})`);
      }
    }
    for (const match of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) assetLinks.add(match[1].split('?')[0].split('#')[0]);
    for (const match of html.matchAll(/srcset="([^"]+)"/g)) for (const candidate of match[1].split(',')) { const url = candidate.trim().split(/\s+/)[0]; if (url.startsWith('/')) assetLinks.add(url); }
    for (const match of html.matchAll(/imagesrcset="([^"]+)"/g)) for (const candidate of match[1].split(',')) { const url = candidate.trim().split(/\s+/)[0]; if (url.startsWith('/')) assetLinks.add(url); }
  }
  for (const link of internalLinks) if (!pagePaths.has(link) && !(await fileExists(link))) errors.push(`Broken internal link: ${link}`);
  for (const link of assetLinks) if (!(await fileExists(link))) errors.push(`Missing local asset: ${link}`);
  for (const redirect of redirects) {
    if (redirect.source === '/services/') errors.push('The Services hub must not be redirected');
    if (pagePaths.has(redirect.source)) errors.push(`Redirect source is also an indexable page: ${redirect.source}`);
    if (!pagePaths.has(redirect.destination)) errors.push(`Redirect destination missing: ${redirect.destination}`);
    const configured = vercel.redirects?.find((item) => item.source === redirect.source) || vercel.routes?.find((item) => item.status === 301 && item.headers?.Location === redirect.destination && new RegExp(item.src).test(redirect.source));
    if (!configured) errors.push(`Vercel 301 missing or incorrect: ${redirect.source}`);
  }
  for (const area of ['Nallagandla', 'Vanasthalipuram', 'Gachibowli', 'Kondapur', 'Miyapur', 'Kukatpally', 'Manikonda', 'Madhapur', 'Tellapur', 'Narsingi', 'HITEC City', 'Jubilee Hills', 'Banjara Hills', 'Secunderabad']) {
    if (!PLACES.some((place) => place.area === area && !place.combination)) errors.push(`Missing dedicated area page: ${area}`);
  }
  if (errors.length) { console.error('SEO audit failed:\n - ' + errors.join('\n - ')); throw new Error('SEO audit failed'); }

  const report = { generatedAt: new Date().toISOString(), origin, indexablePages: pages.length, services: SERVICES.length, featuredServices: FEATURED_SERVICES.length, locationPages: PLACES.length, guides: GUIDES.length, permanentRedirects: redirects.length, internalLinksChecked: internalLinks.size, localAssetsChecked: assetLinks.size, uniqueTitles: true, uniqueDescriptions: true, brokenLinks: 0, pages: pages.map(({ path: pagePath, title, kind }) => ({ path: pagePath, title, kind })) };
  await writeFile('dist/seo-report.json', JSON.stringify(report, null, 2) + '\n');
  console.log(`Prerendered ${pages.length} indexable pages + noindex 404 + ${redirects.length} legacy fallbacks. Origin: ${origin}`);
  console.log(`Sitemap: ${origin}/sitemap.xml · robots.txt written · ${internalLinks.size} internal links and ${assetLinks.size} local assets checked · all titles/descriptions unique.`);
  if (!process.env.SITE_URL) console.log(`Note: using default origin ${origin}. Set SITE_URL at build time to change canonicals/sitemap/schema.`);
  if (!gsc) console.log('Note: set GSC_VERIFICATION to inject the Google Search Console meta tag.');
} finally { await vite.close(); }
