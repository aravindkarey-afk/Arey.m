import { readFile, writeFile, mkdir, access, mkdtemp } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { brotliDecompressSync } from 'node:zlib';
import { tmpdir } from 'node:os';
import path from 'node:path';

const withBrowser = process.argv.includes('--browser');
const baseUrl = (process.env.BASE_URL || 'http://127.0.0.1:4173').replace(/\/$/, '');
const errors = [];
const checks = [];
const ok = (label, condition, detail = '') => { checks.push({ label, passed: !!condition, detail }); if (!condition) errors.push(`${label}${detail ? `: ${detail}` : ''}`); };
const exists = async (file) => { try { await access(file); return true; } catch { return false; } };
const report = JSON.parse(await readFile('dist/seo-report.json', 'utf8'));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const robots = await readFile('dist/robots.txt', 'utf8');
const redirects = JSON.parse(await readFile('src/lib/redirects.json', 'utf8'));
const vercel = JSON.parse(await readFile('vercel.json', 'utf8'));
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

ok('Sitemap count matches prerender report', locs.length === report.indexablePages, `${locs.length}/${report.indexablePages}`);
ok('Robots allows crawling and advertises sitemap', robots.includes('Allow: /') && robots.includes(`Sitemap: ${report.origin}/sitemap.xml`));
for (const loc of locs) {
  const pagePath = new URL(loc).pathname;
  const file = path.join('dist', pagePath, 'index.html');
  if (!(await exists(file))) { ok(`Page file ${pagePath}`, false); continue; }
  const html = await readFile(file, 'utf8');
  ok(`Indexable ${pagePath}`, !/name="robots" content="[^"]*noindex/.test(html) && (html.match(/<h1[\s>]/g) || []).length === 1 && html.includes(`<link rel="canonical" href="${loc}"`));
}
const requiredServices = ['invisible-grills', 'ss304-invisible-grills', 'ss316-invisible-grills', 'balcony-safety-nets', 'pigeon-safety-nets', 'bird-protection-nets', 'child-safety-nets', 'sports-safety-nets', 'cricket-practice-nets', 'football-safety-nets', 'anti-bird-spikes', 'bird-spikes-installation', 'cloth-hangers', 'ceiling-cloth-drying-hangers'];
for (const slug of requiredServices) ok(`Required service /${slug}/`, await exists(`dist/${slug}/index.html`));
for (const pagePath of ['/services/', '/gallery/', '/locations/', '/about/', '/contact/']) ok(`Hub ${pagePath}`, await exists(`dist${pagePath}index.html`));
for (const area of ['nallagandla', 'vanasthalipuram']) ok(`Legacy local URL /invisible-grills-${area}/`, await exists(`dist/invisible-grills-${area}/index.html`));
for (const area of ['gachibowli', 'kondapur', 'miyapur', 'kukatpally', 'manikonda', 'madhapur', 'tellapur', 'narsingi', 'hitec-city', 'jubilee-hills', 'banjara-hills', 'secunderabad']) ok(`Area /locations/${area}/`, await exists(`dist/locations/${area}/index.html`));
for (const redirect of redirects) {
  const configured = vercel.redirects?.find((item) => item.source === redirect.source) || vercel.routes?.find((item) => item.status === 301 && item.headers?.Location === redirect.destination && new RegExp(item.src).test(redirect.source));
  ok(`301 ${redirect.source}`, !!configured);
  ok(`Redirect fallback ${redirect.source}`, await exists(`dist${redirect.source}index.html`));
}
const notFound = await readFile('dist/404.html', 'utf8');
ok('404 is noindex', /name="robots" content="noindex, follow"/.test(notFound));
const manifest = JSON.parse(await readFile('dist/site.webmanifest', 'utf8'));
for (const icon of manifest.icons) ok(`Manifest icon ${icon.src}`, await exists(`dist${icon.src}`));
ok('Brand OG image exists', await exists('dist/og-image.png'));
const homeHtml = await readFile('dist/index.html', 'utf8');
ok('Fonts are self-hosted', !homeHtml.includes('fonts.googleapis.com') && !homeHtml.includes('fonts.gstatic.com'));

let browserResults = null;
if (withBrowser) {
  const { chromium: playwrightChromium } = await import('@playwright/test');
  let executablePath = process.env.CHROME_EXECUTABLE_PATH;
  let args = [];
  const env = { ...process.env };
  if (!executablePath) {
    try {
      const { default: chromium } = await import('@sparticuz/chromium');
      executablePath = await chromium.executablePath();
      args = chromium.args.filter((arg) => arg !== '--single-process');
      if (process.platform === 'linux') {
        const packageDir = path.dirname(new URL(import.meta.resolve('@sparticuz/chromium')).pathname);
        const archive = path.join(packageDir, '..', 'bin', 'al2023.tar.br');
        if (await exists(archive)) {
          const dir = await mkdtemp(path.join(tmpdir(), 'aravindh-browser-'));
          const tar = path.join(dir, 'al2023.tar');
          await writeFile(tar, brotliDecompressSync(await readFile(archive)));
          execFileSync('tar', ['-xf', tar, '-C', dir]);
          env.LD_LIBRARY_PATH = `${path.join(dir, 'lib')}:${env.LD_LIBRARY_PATH || ''}`;
        }
      }
    } catch {
      executablePath = undefined;
    }
  }
  const browser = await playwrightChromium.launch({ executablePath, args, env, headless: true });
  await mkdir('verification', { recursive: true });
  browserResults = [];
  const routes = ['/', '/services/', '/invisible-grills/', '/pigeon-safety-nets/', '/cloth-hangers/', '/locations/', '/invisible-grills-nallagandla/', '/balcony-safety-nets-kondapur/', '/gallery/', '/about/', '/contact/'];
  try {
    for (const route of routes) {
      for (const viewport of [{ width: 1440, height: 1000, name: 'desktop' }, { width: 390, height: 844, name: 'mobile' }]) {
        const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
        const consoleErrors = [];
        const pageErrors = [];
        const failedAssets = [];
        page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
        page.on('pageerror', (error) => pageErrors.push(error.message));
        page.on('response', (response) => { if (response.url().startsWith(baseUrl) && response.status() >= 400) failedAssets.push(`${response.status()} ${response.url()}`); });
        const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
        await page.evaluate(() => { for (const image of document.images) image.loading = 'eager'; });
        await page.waitForLoadState('networkidle');
        await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((resolve) => setTimeout(resolve, 35)); } window.scrollTo(0, 0); });
        await page.waitForTimeout(250);
        const state = await page.evaluate(() => ({
          title: document.title, h1: document.querySelectorAll('h1').length,
          overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          brokenImages: [...document.images].filter((image) => !image.closest('[aria-hidden="true"]') && (!image.complete || image.naturalWidth === 0)).map((image) => image.src),
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          dialogs: document.querySelectorAll('dialog, [role="dialog"]').length,
        }));
        const label = `${route} ${viewport.name}`;
        ok(`${label} HTTP 200`, response?.status() === 200);
        ok(`${label} one H1`, state.h1 === 1);
        ok(`${label} no horizontal overflow`, !state.overflow);
        ok(`${label} no console errors`, consoleErrors.length === 0, consoleErrors.join(' | '));
        ok(`${label} no page errors`, pageErrors.length === 0, pageErrors.join(' | '));
        ok(`${label} no failed local assets`, failedAssets.length === 0, failedAssets.join(' | '));
        ok(`${label} eager images loaded`, state.brokenImages.length === 0, state.brokenImages.join(' | '));
        ok(`${label} no modal dialogs`, state.dialogs === 0);
        browserResults.push({ route, viewport: viewport.name, ...state, consoleErrors, pageErrors, failedAssets });
        const screenshotRoutes = { '/': 'home', '/services/': 'services', '/invisible-grills/': 'service', '/locations/': 'locations', '/contact/': 'contact', '/gallery/': 'gallery' };
        if (screenshotRoutes[route]) await page.screenshot({ path: `verification/${screenshotRoutes[route]}-${viewport.name}.png`, fullPage: route === '/' && viewport.name === 'mobile' });
        await page.close();
      }
    }
    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobile.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    await mobile.getByRole('button', { name: 'Open menu' }).click();
    ok('Mobile menu opens', await mobile.locator('#mobile-navigation').isVisible());
    await mobile.locator('#mobile-navigation').getByRole('link', { name: 'Services' }).click();
    await mobile.waitForURL('**/services/');
    ok('Mobile menu navigates to Services', new URL(mobile.url()).pathname === '/services/');
    await mobile.close();
    const form = await browser.newPage();
    await form.goto(`${baseUrl}/contact/?service=Pigeon%20Safety%20Nets&area=Gachibowli#enquiry`, { waitUntil: 'networkidle' });
    ok('Contact query prefills service', await form.locator('#contact-requirement').inputValue() === 'Pigeon Safety Nets');
    ok('Contact query prefills area', await form.locator('#contact-location').inputValue() === 'Gachibowli');
    await form.locator('#contact-name').fill('Test Customer');
    await form.locator('#contact-phone').fill('9876543210');
    await form.getByRole('button', { name: 'Prepare WhatsApp Request' }).click();
    const href = await form.getByRole('link', { name: 'Continue to WhatsApp' }).getAttribute('href');
    ok('Form prepares contextual WhatsApp message', href.includes('wa.me/917995150298') && decodeURIComponent(href).includes('Pigeon Safety Nets') && decodeURIComponent(href).includes('Gachibowli'));
    await form.close();
    const gallery = await browser.newPage();
    await gallery.goto(`${baseUrl}/gallery/`, { waitUntil: 'networkidle' });
    await gallery.getByRole('button', { name: 'Sports Nets', exact: true }).click();
    ok('Gallery category filter works', await gallery.locator('figure').count() === 4);
    await gallery.close();
    const legacy = await browser.newPage();
    await legacy.goto(`${baseUrl}/services/pigeon-safety-nets/`, { waitUntil: 'networkidle' });
    ok('Legacy service fallback reaches root URL', new URL(legacy.url()).pathname === '/pigeon-safety-nets/');
    await legacy.close();
  } finally { await browser.close(); }
}

const output = { generatedAt: new Date().toISOString(), baseUrl: withBrowser ? baseUrl : null, staticChecks: checks.length, browserRoutes: browserResults?.length || 0, passed: errors.length === 0, errors, checks, browserResults };
await writeFile('dist/verification-report.json', JSON.stringify(output, null, 2) + '\n');
console.log(`${checks.length} checks run; ${errors.length} failed.${withBrowser ? ` Browser routes/viewports: ${browserResults.length}.` : ' Static verification only.'}`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Verification passed. Report: dist/verification-report.json${withBrowser ? ' · screenshots: verification/' : ''}`);
