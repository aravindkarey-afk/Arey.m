import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';

const escape = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const clip = (text) => (text.length <= 160 ? text : `${text.slice(0, 157).replace(/\s+\S*$/, '')}...`);

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const { SERVICES, servicePath, serviceSeo, SERVICE_DETAILS, HOME_SEO, FAQS } = await vite.ssrLoadModule('/src/lib/data.ts');
  const { SITE, resolveOrigin } = await vite.ssrLoadModule('/src/lib/site.ts');
  const { PLACES } = await vite.ssrLoadModule('/src/sections/LocalPage.tsx');
  const { GUIDES } = await vite.ssrLoadModule('/src/lib/guides.ts');

  // Configurable public origin. Defaults to the intended domain; override with SITE_URL.
  const origin = resolveOrigin(process.env.SITE_URL);
  const gsc = (process.env.GSC_VERIFICATION || '').trim();
  const today = new Date().toISOString().slice(0, 10);
  const HOME_IMAGE = '/images/reference/s26.webp';

  // ---- Assemble every indexable page -------------------------------------
  const pages = [
    { path: '/', ...HOME_SEO, kind: 'home', image: HOME_IMAGE, faqs: FAQS, crumbs: [['Home', '/']] },
    ...Object.entries(PLACES).map(([p, place]) => ({
      path: p, title: place.metaTitle, description: clip(place.metaDescription), kind: 'location',
      area: place.name, image: HOME_IMAGE, faqs: place.faqs,
      serviceName: `Invisible grill installation in ${place.name}`,
      crumbs: [['Home', '/'], [`Invisible Grills in ${place.name}`, p]],
    })),
    ...SERVICES.map((service) => {
      const seo = serviceSeo(service);
      return {
        path: servicePath(service), title: seo.title, description: clip(seo.description), kind: 'service',
        area: 'Hyderabad', image: service.image, faqs: SERVICE_DETAILS[service.short]?.faqs ?? [], serviceName: service.title,
        serviceType: service.category, crumbs: [['Home', '/'], ['Services', '/#services'], [service.short, servicePath(service)]],
      };
    }),
    ...GUIDES.map((guide) => ({
      path: guide.path, title: guide.metaTitle, description: clip(guide.metaDescription), kind: 'guide',
      area: 'Hyderabad', image: guide.image, faqs: guide.faqs, serviceName: guide.h1,
      crumbs: [['Home', '/'], [guide.h1.replace(/ in Hyderabad$/, ''), guide.path]],
    })),
    { path: '/about/', title: 'About Aravindh Invisible Grills | Hyderabad & Telangana', description: 'Meet Aravindh Invisible Grills — a Hyderabad team for invisible grills, safety nets and bird control. Free doorstep measurement, honest advice and written quotes.', kind: 'about', image: HOME_IMAGE, faqs: [], crumbs: [['Home', '/'], ['About Us', '/about/']] },
    { path: '/contact/', title: 'Contact Aravindh Invisible Grills | Free Measurement Hyderabad', description: 'Contact Aravindh Invisible Grills for a free doorstep measurement in Hyderabad. Call +91 7995150298 or WhatsApp for invisible grills and safety nets.', kind: 'contact', image: null, faqs: [
      { q: 'Is the doorstep measurement really free?', a: 'Yes. We visit your home anywhere in Hyderabad and Telangana, measure your openings and provide a written quote at no charge.' },
      { q: 'How do I book a visit?', a: 'Call or WhatsApp us, or fill in the form below. Share your area and the spaces you want to cover and we will arrange a convenient time.' },
      { q: 'Which areas do you cover?', a: 'We serve all of Hyderabad and Telangana, including Gachibowli, Kondapur, Nallagandla, Kukatpally, LB Nagar and Vanasthalipuram. If your area is not listed, ask us.' },
    ], crumbs: [['Home', '/'], ['Contact Us', '/contact/']] },
  ];

  // ---- Structured data ----------------------------------------------------
  const businessId = `${origin}/#business`;
  const websiteId = `${origin}/#website`;
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const business = {
    '@type': ['Organization', 'LocalBusiness'], '@id': businessId, name: SITE.name,
    url: `${origin}/`, description: SITE.description, slogan: SITE.slogan,
    logo: { '@type': 'ImageObject', url: `${origin}${SITE.logo}`, width: 512, height: 512 },
    image: `${origin}${SITE.ogImage}`, telephone: SITE.telephone, email: SITE.email, priceRange: SITE.priceRange,
    address: { '@type': 'PostalAddress', addressLocality: SITE.locality, addressRegion: SITE.region, addressCountry: SITE.country },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens: '08:00', closes: '21:00' },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'City', name: name === 'Hyderabad' ? 'Hyderabad, Telangana' : `${name}, Hyderabad` })),
    contactPoint: { '@type': 'ContactPoint', telephone: SITE.telephone, contactType: 'customer service', areaServed: 'IN', availableLanguage: ['English', 'Telugu', 'Hindi'] },
    knowsAbout: ['Invisible Grills', 'SS304 Invisible Grills', 'SS316 Invisible Grills', 'Balcony Safety Nets', 'Pigeon Safety Nets', 'Bird Protection Nets', 'Child Safety', 'Ceiling Cloth Hangers'],
  };
  const website = { '@type': 'WebSite', '@id': websiteId, url: `${origin}/`, name: SITE.name, description: SITE.description, inLanguage: 'en-IN', publisher: { '@id': businessId } };

  function schemaFor(page) {
    const url = `${origin}${page.path}`;
    const webpageType = page.kind === 'about' ? 'AboutPage' : page.kind === 'contact' ? 'ContactPage' : 'WebPage';
    const graph = [
      business, website,
      { '@type': webpageType, '@id': `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { '@id': websiteId }, about: { '@id': businessId }, breadcrumb: { '@id': `${url}#breadcrumb` }, inLanguage: 'en-IN', ...(page.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: `${origin}${page.image}` } } : {}) },
      { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: page.crumbs.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${origin}${p}` })) },
    ];
    if (page.serviceName) {
      graph.push({ '@type': 'Service', '@id': `${url}#service`, name: page.serviceName, serviceType: page.serviceType || page.serviceName, description: page.description, provider: { '@id': businessId }, areaServed: { '@type': 'City', name: page.area || 'Hyderabad' }, url });
    }
    if (page.faqs && page.faqs.length) {
      graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
    }
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  // ---- Render & write each page ------------------------------------------
  const template = await readFile('dist/index.html', 'utf8');
  const rendered = [];
  for (const page of pages) {
    const url = `${origin}${page.path}`;
    const schema = schemaFor(page);
    const head = [
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:url" content="${url}" />`,
      gsc ? `<meta name="google-site-verification" content="${escape(gsc)}" />` : '',
      page.image ? `<link rel="preload" as="image" href="${page.image}" fetchpriority="high" />` : '',
      `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`,
    ].filter(Boolean).join('');
    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escape(page.title)}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escape(page.description)}" />`)
      .replaceAll('content="/og-image.png"', `content="${origin}/og-image.png"`)
      .replace('</head>', `${head}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { pathname: page.path }))}</div>`);
    const directory = path.join('dist', page.path);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
    rendered.push({ page, html });
  }

  // ---- 404 (noindex, never in sitemap) -----------------------------------
  const notFoundHtml = template
    .replace(/<title>.*?<\/title>/, '<title>Page Not Found | Aravindh Invisible Grills</title>')
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, '<meta name="description" content="The requested page could not be found. Explore our invisible grill and safety net services or return to the homepage." />')
    .replace(/<meta name="robots" content="[^"]*"\s*\/?>/, '<meta name="robots" content="noindex, follow" />')
    .replace('</head>', '</head>')
    .replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { pathname: '/404.html' }))}</div>`);
  await writeFile('dist/404.html', notFoundHtml);

  // ---- Sitemap & robots ---------------------------------------------------
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((p) => `\n  <url><loc>${escape(origin + p.path)}</loc><lastmod>${today}</lastmod></url>`).join('')}\n</urlset>\n`;
  await writeFile('dist/sitemap.xml', sitemap);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

  // ---- SEO audits (fail the build on regressions) -------------------------
  const errors = [];
  const dup = (label, values) => {
    const seen = new Map();
    for (const v of values) seen.set(v, (seen.get(v) || 0) + 1);
    const dups = [...seen.entries()].filter(([, n]) => n > 1).map(([v]) => v);
    if (dups.length) errors.push(`Duplicate ${label}: ${JSON.stringify(dups)}`);
  };
  dup('page paths', pages.map((p) => p.path));
  dup('SEO titles', pages.map((p) => p.title));
  dup('meta descriptions', pages.map((p) => p.description));

  const pagePaths = new Set(pages.map((p) => p.path));
  const fileExists = async (rel) => { try { await access(path.join('dist', rel)); return true; } catch { return false; } };
  const internalLinks = new Set();
  for (const { html } of rendered) {
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) errors.push('An indexable page contains noindex');
    for (const m of html.matchAll(/href="([^"]+)"/g)) {
      const href = m[1];
      if (/^(https?:|tel:|mailto:|\/\/|#|data:)/.test(href)) continue;
      const clean = href.split('#')[0].split('?')[0];
      if (!clean) continue;
      internalLinks.add(clean.startsWith('/') ? clean : `/${clean}`);
    }
  }
  for (const link of internalLinks) {
    const normalized = link.endsWith('/') ? link : `${link}/`;
    if (pagePaths.has(link) || pagePaths.has(normalized)) continue;
    if (await fileExists(link)) continue;
    errors.push(`Broken internal link: ${link}`);
  }

  if (errors.length) { console.error('SEO audit failed:\n - ' + errors.join('\n - ')); throw new Error('SEO audit failed'); }

  console.log(`Prerendered ${pages.length} pages + 404. Origin: ${origin}`);
  console.log(`Sitemap: ${origin}/sitemap.xml · robots.txt written · ${internalLinks.size} internal links checked · all titles/descriptions unique.`);
  if (!process.env.SITE_URL) console.log(`Note: using default origin ${origin}. Set SITE_URL at build time to change canonicals/sitemap/schema.`);
  if (!gsc) console.log('Note: set GSC_VERIFICATION to inject the Google Search Console meta tag.');
} finally { await vite.close(); }
