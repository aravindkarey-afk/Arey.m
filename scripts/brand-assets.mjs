// One-off brand asset generator. Run with: npm i --no-save sharp && node scripts/brand-assets.mjs
// Outputs (committed to public/) so the production build does NOT need sharp.
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const mark = await readFile('public/logo.svg');

// --- Favicon / app icon PNGs -------------------------------------------------
const pngSizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
  'mstile-150x150.png': 150,
};
for (const [file, size] of Object.entries(pngSizes)) {
  await sharp(mark, { density: 384 }).resize(size, size).png().toFile(`public/${file}`);
  console.log('wrote', file);
}

// --- Multi-resolution favicon.ico (PNG-encoded 16/32/48) ---------------------
const icoSizes = [16, 32, 48];
const images = [];
for (const size of icoSizes) images.push({ size, data: await sharp(mark, { density: 384 }).resize(size, size).png().toBuffer() });
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(images.length, 4);
const dir = Buffer.alloc(16 * images.length);
let offset = 6 + dir.length;
images.forEach((img, i) => {
  const e = i * 16;
  dir.writeUInt8(img.size === 256 ? 0 : img.size, e);
  dir.writeUInt8(img.size === 256 ? 0 : img.size, e + 1);
  dir.writeUInt8(0, e + 2); dir.writeUInt8(0, e + 3);
  dir.writeUInt16LE(1, e + 4); dir.writeUInt16LE(32, e + 6);
  dir.writeUInt32LE(img.data.length, e + 8); dir.writeUInt32LE(offset, e + 12);
  offset += img.data.length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, dir, ...images.map(i => i.data)]));
console.log('wrote favicon.ico');

// --- Open Graph / social share card (1200x630) ------------------------------
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e2f50"/><stop offset="1" stop-color="#081d33"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#34a06a"/>
  <text x="80" y="118" font-family="DejaVu Sans" font-size="24" font-weight="bold" letter-spacing="5" fill="#7fd6a8">HYDERABAD  •  TELANGANA</text>
  <text x="78" y="208" font-family="DejaVu Sans" font-size="72" font-weight="bold" fill="#ffffff">Aravindh</text>
  <text x="78" y="288" font-family="DejaVu Sans" font-size="72" font-weight="bold" fill="#34a06a">Invisible Grills</text>
  <text x="80" y="345" font-family="DejaVu Sans" font-size="30" fill="#dbe7f0">Safer Homes, Brighter Views</text>
  <rect x="80" y="372" width="120" height="4" rx="2" fill="#34a06a"/>
  <text x="80" y="425" font-family="DejaVu Sans" font-size="27" font-weight="bold" fill="#ffffff">Invisible Grills  •  Safety Nets  •  Bird Control</text>
  <text x="80" y="465" font-family="DejaVu Sans" font-size="23" fill="#aebfd0">SS304 &amp; SS316 Stainless Steel  |  Free Doorstep Measurement</text>
  <rect x="80" y="500" width="380" height="66" rx="33" fill="#25845e"/>
  <text x="270" y="543" text-anchor="middle" font-family="DejaVu Sans" font-size="30" font-weight="bold" fill="#ffffff">Call +91 7995150298</text>
  <g>
    <rect x="838" y="120" width="300" height="404" rx="26" fill="#103257" stroke="#2c527a" stroke-width="2"/>
    <rect x="868" y="158" width="240" height="7" rx="3.5" fill="#34a06a"/>
    <g stroke-linecap="round">
      <line x1="894" y1="166" x2="894" y2="486" stroke="#ffffff" stroke-width="7" opacity="0.4"/>
      <line x1="941" y1="166" x2="941" y2="486" stroke="#ffffff" stroke-width="8" opacity="0.68"/>
      <line x1="988" y1="166" x2="988" y2="486" stroke="#34a06a" stroke-width="10"/>
      <line x1="1035" y1="166" x2="1035" y2="486" stroke="#ffffff" stroke-width="8" opacity="0.68"/>
      <line x1="1082" y1="166" x2="1082" y2="486" stroke="#ffffff" stroke-width="7" opacity="0.4"/>
    </g>
    <rect x="868" y="486" width="240" height="7" rx="3.5" fill="#34a06a"/>
  </g>
</svg>`;
await writeFile('public/og-image.svg', og);
await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
console.log('wrote og-image.png');
console.log('Brand assets generated.');
