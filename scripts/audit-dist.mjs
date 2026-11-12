/**
 * Audits the pre-rendered site in dist/:
 *  1. Every local href/src/srcset target in every HTML file must exist on disk.
 *  2. Every HTML page must have exactly one <h1>, <title>, meta description and #main.
 *  3. No page may reference http://localhost or 127.0.0.1.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const htmlFiles = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
await walk(dist);

const exists = async (urlPath) => {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  if (!clean || clean.startsWith('#')) return true;
  const target = path.join(dist, clean);
  try {
    const s = await stat(target);
    if (s.isFile()) return true;
    // directory → index.html
    return (await stat(path.join(target, 'index.html'))).isFile();
  } catch { return false; }
};

let failures = 0;
const fail = (msg) => { console.error('FAIL', msg); failures++; };

for (const file of htmlFiles) {
  const rel = path.relative(dist, file);
  const html = await readFile(file, 'utf8');
  const refs = [];
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) refs.push(match[1]);
  for (const match of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) refs.push(candidate.trim().split(/\s+/)[0]);
  }
  for (const ref of refs) {
    if (/^(https?:|tel:|mailto:|wa\.me|data:|#)/.test(ref) || ref.startsWith('//')) continue;
    if (!ref.startsWith('/') && !ref.startsWith('.')) continue; // relative external-ish, skip
    const localPath = ref.startsWith('/') ? ref : '/' + path.relative(dist, path.resolve(path.dirname(file), ref));
    if (!(await exists(localPath))) fail(`${rel}: missing ${ref}`);
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(`${rel}: expected 1 <h1>, found ${h1}`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${rel}: missing <title>`);
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) fail(`${rel}: missing/short meta description`);
  if (!/id="main"/.test(html)) fail(`${rel}: missing #main`);
  if (/127\.0\.0\.1|localhost/.test(html)) fail(`${rel}: references localhost`);
}

console.log(`\nChecked ${htmlFiles.length} HTML pages.`);
process.exit(failures ? 1 : 0);
