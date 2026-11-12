/**
 * Smoke-tests that the pre-rendered pages hydrate without React errors.
 * Loads dist HTML into jsdom, imports the built bundle, and reports any
 * console.error / console.warn emitted during hydration.
 * Usage: node scripts/hydration-check.mjs [path-prefix]
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { JSDOM } from 'jsdom';

const dist = path.resolve('dist');

// Test every pre-rendered page: each route shape renders a different App tree.
async function listHtml(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listHtml(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}
const pages = (await listHtml(dist)).map((file) => path.relative(dist, file));

let failures = 0;

for (const rel of pages) {
  const file = path.join(dist, rel);
  const html = await readFile(file, 'utf8');
  const url = 'https://example.com' + (rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, ''));

  const errors = [];
  const dom = new JSDOM(html, {
    url,
    runScripts: 'outside-only',
    pretendToBeVisual: true,
  });
  const { window } = dom;

  // jsdom gaps the bundle might touch
  window.matchMedia ??= () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
  window.scrollTo ??= () => {};
  window.IntersectionObserver ??= class { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ isIntersecting: true, target: el }], this); } unobserve() {} disconnect() {} };
  window.ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
  // Avoid jsdom's Performance implementation (it recurses when re-assigned);
  // the app only needs now() and getEntriesByType().
  const fakePerformance = { now: () => Date.now(), getEntriesByType: () => [] };

  const errorsBefore = [];
  window.console.error = (...args) => errorsBefore.push(args.join(' '));
  window.console.warn = (...args) => errorsBefore.push('warn: ' + args.join(' '));

  const g = globalThis;
  const saved = new Map();
  const assign = (key, value) => {
    saved.set(key, Object.getOwnPropertyDescriptor(g, key));
    Object.defineProperty(g, key, { value, configurable: true, writable: true });
  };
  assign('document', window.document);
  assign('window', window);
  assign('navigator', window.navigator);
  assign('HTMLElement', window.HTMLElement);
  assign('CustomEvent', window.CustomEvent);
  assign('Event', window.Event);
  assign('IntersectionObserver', window.IntersectionObserver);
  assign('matchMedia', window.matchMedia);
  assign('performance', fakePerformance);
  assign('self', window);
  assign('scrollTo', window.scrollTo);
  assign('MutationObserver', window.MutationObserver);
  assign('ResizeObserver', window.ResizeObserver);
  assign('getComputedStyle', window.getComputedStyle.bind(window));

  const bundle = (await readdir(path.join(dist, 'assets'))).find((f) => f.endsWith('.js'));
  try {
    await import(pathToFileURL(path.join(dist, 'assets', bundle)).href);
    await new Promise((resolve) => setTimeout(resolve, 150));
    const hydrationErrors = errorsBefore.filter((line) =>
      /hydrat|mismatch|did not match|Expected server|Minified React error #4(18|19|23)/i.test(line)
    );
    const rootChildren = window.document.getElementById('root')?.childElementCount ?? 0;
    if (hydrationErrors.length) {
      failures++;
      console.error(`FAIL ${rel}: hydration errors:\n  ${hydrationErrors.join('\n  ')}`);
    } else if (rootChildren === 0) {
      failures++;
      console.error(`FAIL ${rel}: #root is empty after hydration`);
    } else {
      console.log(`OK   ${rel} (root children: ${rootChildren})`);
      if (errorsBefore.length) console.log(`     other console output: ${errorsBefore.slice(0, 3).join(' | ')}`);
    }
  } catch (error) {
    failures++;
    console.error(`FAIL ${rel}: bundle threw:`, error);
  } finally {
    for (const [key, descriptor] of saved) {
      if (descriptor) Object.defineProperty(g, key, descriptor);
      else delete g[key];
    }
    window.close();
  }
}
process.exit(failures ? 1 : 0);
