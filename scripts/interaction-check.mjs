/**
 * Interaction smoke tests for the pre-rendered home page, run in jsdom:
 * hydrate the bundle, then exercise the main UI flows.
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { JSDOM } from 'jsdom';

const dist = path.resolve('dist');
const html = await readFile(path.join(dist, 'index.html'), 'utf8');

const dom = new JSDOM(html, {
  url: 'https://example.com/',
  runScripts: 'outside-only',
  pretendToBeVisual: true,
});
const { window } = dom;
const doc = window.document;

window.matchMedia ??= () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
window.scrollTo ??= () => {};
window.ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
window.IntersectionObserver ??= class {
  constructor(cb) { this.cb = cb; }
  observe(el) { this.cb([{ isIntersecting: true, target: el }], this); }
  unobserve() {}
  disconnect() {}
};
const fakePerformance = { now: () => Date.now(), getEntriesByType: () => [] };

const g = globalThis;
const saved = new Map();
const assign = (key, value) => {
  saved.set(key, Object.getOwnPropertyDescriptor(g, key));
  Object.defineProperty(g, key, { value, configurable: true, writable: true });
};
assign('document', doc);
assign('window', window);
assign('navigator', window.navigator);
assign('HTMLElement', window.HTMLElement);
assign('Element', window.Element);
assign('CustomEvent', window.CustomEvent);
assign('Event', window.Event);
assign('MouseEvent', window.MouseEvent);
assign('KeyboardEvent', window.KeyboardEvent);
assign('IntersectionObserver', window.IntersectionObserver);
assign('MutationObserver', window.MutationObserver);
assign('ResizeObserver', window.ResizeObserver);
assign('matchMedia', window.matchMedia);
assign('performance', fakePerformance);
assign('self', window);
assign('scrollTo', window.scrollTo);
assign('getComputedStyle', window.getComputedStyle.bind(window));

const errors = [];
window.console.error = (...args) => errors.push(args.join(' '));

const bundle = (await readdir(path.join(dist, 'assets'))).find((f) => f.endsWith('.js'));
await import(pathToFileURL(path.join(dist, 'assets', bundle)).href);
await new Promise((resolve) => setTimeout(resolve, 200));

let failures = 0;
const check = (name, condition) => {
  if (condition) console.log(`OK   ${name}`);
  else { failures++; console.error(`FAIL ${name}`); }
};
const click = (el) => el?.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));

// 1. Core landmarks survived hydration
check('hero heading rendered', !!doc.querySelector('#home h1'));
check('all six hero slides rendered', doc.querySelectorAll('#home img').length >= 6);
check('service cards rendered (28)', doc.querySelectorAll('#services article').length === 28);
check('gallery items rendered (6 initial)', doc.querySelectorAll('#gallery img').length === 6);

// 2. FAQ accordion toggles
const faqButtons = [...doc.querySelectorAll('#faq button[aria-controls]')];
check('FAQ buttons rendered', faqButtons.length === 7);
const firstExpanded = faqButtons[0].getAttribute('aria-expanded');
click(faqButtons[0]);
await new Promise((r) => setTimeout(r, 50));
const faqButtonsAfter = [...doc.querySelectorAll('#faq button[aria-controls]')];
check('FAQ toggles aria-expanded', faqButtonsAfter[0].getAttribute('aria-expanded') !== firstExpanded);

// 3. Services category filter
const filterButtons = [...doc.querySelectorAll('#services button[aria-pressed]')];
const netsFilter = filterButtons.find((b) => b.textContent?.trim() === 'Safety Nets');
click(netsFilter);
await new Promise((r) => setTimeout(r, 50));
const netCards = doc.querySelectorAll('#services article').length;
check('service filter narrows the grid', netCards > 0 && netCards < 28);
click(filterButtons.find((b) => b.textContent?.trim() === 'All'));

// 4. Gallery expand/collapse
const galleryToggle = [...doc.querySelectorAll('#gallery button')].find((b) => /View More Images/i.test(b.textContent ?? ''));
click(galleryToggle);
await new Promise((r) => setTimeout(r, 50));
check('gallery expands', doc.querySelectorAll('#gallery img').length > 6);

// 5. Contact form: invalid phone is rejected, valid submission reaches WhatsApp step
const phone = doc.querySelector('#contact-phone');
const name = doc.querySelector('#contact-name');
const location = doc.querySelector('#contact-location');
const requirement = doc.querySelector('#contact-requirement');
const setValue = (el, value) => {
  const proto = el.tagName === 'SELECT' ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
  Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value);
  el.dispatchEvent(new window.Event('input', { bubbles: true }));
  el.dispatchEvent(new window.Event('change', { bubbles: true }));
};
const form = doc.querySelector('#contact form');
setValue(name, 'Test User');
setValue(phone, '123');
setValue(location, 'Nallagandla');
setValue(requirement, requirement.options[1]?.value ?? '');
form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
await new Promise((r) => setTimeout(r, 50));
check('invalid phone rejected with alert', !!doc.querySelector('[role="alert"]'));
setValue(phone, '9876543210');
form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
await new Promise((r) => setTimeout(r, 50));
const waLink = [...doc.querySelectorAll('#contact a')].find((a) => /wa\.me/.test(a.href));
check('valid form leads to WhatsApp hand-off', !!waLink && /wa\.me\/917995150298/.test(waLink.href));

// 6. Call and WhatsApp links are wired to the business number
const telLinks = [...doc.querySelectorAll('a[href^="tel:"]')];
check('call links use the business number', telLinks.length > 0 && telLinks.every((a) => a.getAttribute('href') === 'tel:+917995150298'));
const waLinks = [...doc.querySelectorAll('a[href*="wa.me/"]')];
check('WhatsApp links use the business number', waLinks.length > 0 && waLinks.every((a) => a.href.includes('wa.me/917995150298')));

// 7. Mobile menu toggles and closes on Escape
const menuButton = doc.querySelector('button[aria-controls="mobile-navigation"]');
click(menuButton);
await new Promise((r) => setTimeout(r, 50));
check('mobile menu opens', !!doc.querySelector('#mobile-navigation'));
window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
await new Promise((r) => setTimeout(r, 50));
check('mobile menu closes on Escape', !doc.querySelector('#mobile-navigation'));

// 8. No console errors during any of the above
const hydrationErrors = errors.filter((line) => !/Download the React DevTools/i.test(line));
check('no React/console errors during interactions', hydrationErrors.length === 0);
if (hydrationErrors.length) console.error(hydrationErrors.join('\n'));

for (const [key, descriptor] of saved) {
  if (descriptor) Object.defineProperty(g, key, descriptor);
  else delete g[key];
}
process.exit(failures ? 1 : 0);
