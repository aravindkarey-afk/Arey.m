import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

// Use the temporary Vercel URL until the custom domain is connected.
const rawUrl = process.env.SITE_URL?.trim() || "https://aravindinvisiblegrillscoin-git-arena-9c8d5d-7c8f1a-kare-aravind.vercel.app";
let origin = '';
if (rawUrl) {
  const url = new URL(rawUrl);
  if (!['http:', 'https:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash || url.username || url.password) throw new Error('SITE_URL must be a public origin, e.g. https://your-domain.com');
  origin = url.origin;
}
const pages = [
  { path: '/', title: 'Invisible Grills & Safety Nets | Nallagandla & Vanasthalipuram', description: 'Explore invisible grills, balcony safety nets and bird protection in Nallagandla and Vanasthalipuram with Aravindh Invisible Grills.' },
  ...['Nallagandla', 'Vanasthalipuram'].map(name => ({ path: `/invisible-grills-${name.toLowerCase()}/`, title: `Invisible Grills & Safety Nets in ${name} | Aravindh`, description: `Invisible grills, balcony safety nets and pigeon nets in ${name}, Hyderabad. Contact Aravindh Invisible Grills for free doorstep measurement and a quote.` }))
];
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const { SERVICES, servicePath } = await vite.ssrLoadModule('/src/lib/data.ts');
  pages.push(...SERVICES.map(service => ({ path: servicePath(service), title: `${service.short} | Aravindh Invisible Grills`, description: service.desc })));
  if (new Set(pages.map(page => page.path)).size !== pages.length) throw new Error('Duplicate page paths');
  const template = await readFile('dist/index.html', 'utf8');
  for (const page of pages) {
    const schema = { '@context': 'https://schema.org', '@graph': [
      { '@type': 'LocalBusiness', '@id': origin ? `${origin}/#business` : '#business', name: 'Aravindh Invisible Grills', telephone: '+91-7995150298', email: 'aravindhinvisiblegrills@gmail.com', ...(origin ? { url: `${origin}/` } : {}), areaServed: [{ '@type': 'Place', name: 'Nallagandla, Hyderabad' }, { '@type': 'Place', name: 'Vanasthalipuram, Hyderabad' }, { '@type': 'Place', name: 'Hyderabad, Telangana' }], openingHours: 'Mo-Su 08:00-21:00' },
      ...['Invisible grill installation', 'Balcony safety net installation', 'Bird protection net installation'].map(name => ({ '@type': 'Service', name, provider: { '@id': origin ? `${origin}/#business` : '#business' }, areaServed: page.path === '/' || page.path.startsWith('/services/') ? 'Hyderabad and Telangana' : page.path.split('-').pop().replace('/', '').replace(/^./, c => c.toUpperCase()) }))
    ] };
    let html = template.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escape(page.title)}" />`)
      .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${escape(page.description)}" />`)
      .replace('</head>', `${origin ? `<link rel="canonical" href="${origin}${page.path}" /><meta property="og:url" content="${origin}${page.path}" />` : ''}<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script></head>`)
      .replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { pathname: page.path }))}</div>`);
    const directory = path.join('dist', page.path);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
  // Static hosts can serve this file with an HTTP 404 for unknown routes.
  const notFoundHtml = template
    .replace(/<title>.*?<\/title>/, '<title>Page Not Found | Aravindh Invisible Grills</title>')
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, '<meta name="description" content="The requested page could not be found. Explore our services or return to the homepage." />')
    .replace('</head>', '<meta name="robots" content="noindex, follow" /></head>')
    .replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { pathname: '/404.html' }))}</div>`);
  await writeFile('dist/404.html', notFoundHtml);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin ? pages.map(p => `\n  <url><loc>${escape(origin + p.path)}</loc></url>`).join('') : ''}\n</urlset>\n`;
  await writeFile('dist/sitemap.xml', sitemap);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`);
  if (!origin) console.warn('SITE_URL is not set: canonical URLs and sitemap entries require the real public origin.');
} finally { await vite.close(); }
