// One-shot OG image generator. Run: `node scripts/gen-og.mjs`
// Writes /public/og.png (1200x630). Replace with a real design when you have one.
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/og.png");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <g fill="none" stroke="#262626" stroke-width="1">
    ${Array.from({ length: 12 })
      .map((_, i) => `<line x1="${100 + i * 83}" y1="0" x2="${100 + i * 83}" y2="630"/>`) // faint grid
      .join("")}
  </g>
  <rect x="80" y="80" width="18" height="18" fill="#DFFF00"/>
  <text x="110" y="96" fill="#f5f5f5" font-family="ui-monospace, Menlo, monospace" font-size="18" letter-spacing="2">DYLANHIAS.COM</text>
  <text x="80" y="340" fill="#f5f5f5" font-family="ui-monospace, Menlo, monospace" font-size="180" font-weight="400" letter-spacing="4">DYLAN</text>
  <text x="80" y="500" fill="#DFFF00" font-family="ui-monospace, Menlo, monospace" font-size="180" font-weight="400" letter-spacing="4">HIAS</text>
  <text x="80" y="570" fill="#9a9a9a" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28">Technical Account Manager &amp; Cloud Engineer — Belgium</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(OUT, png);
console.log(`wrote ${OUT} (${png.length} bytes)`);
