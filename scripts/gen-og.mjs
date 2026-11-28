import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = process.argv[2] || path.join(__dirname, "..", "public", "og.png");

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0D0B16"/>
      <stop offset="1" stop-color="#15101F"/>
    </linearGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00C4CC"/>
      <stop offset="0.55" stop-color="#7D2AE8"/>
      <stop offset="1" stop-color="#FF5C8A"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.9">
      <stop offset="0" stop-color="#7D2AE8" stop-opacity="0.38"/>
      <stop offset="0.4" stop-color="#FF5C8A" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#15101F" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.08" cy="0.95" r="0.8">
      <stop offset="0" stop-color="#00C4CC" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#0D0B16" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- logo mark: gradient rounded square with stacked bars -->
  <g transform="translate(96,150)">
    <rect width="132" height="132" rx="33" fill="url(#brand)"/>
    <g transform="translate(33,27.5) scale(2.75)">
      <rect x="0"  y="0"  width="24" height="8" rx="3" fill="#FFFFFF" fill-opacity="0.45"/>
      <rect x="0"  y="11" width="24" height="8" rx="3" fill="#FFFFFF" fill-opacity="0.7"/>
      <rect x="0"  y="22" width="16" height="6" rx="3" fill="#FFFFFF"/>
      <circle cx="24.5" cy="25" r="2.5" fill="#FFFFFF" fill-opacity="0.9"/>
    </g>
  </g>

  <!-- wordmark -->
  <text x="262" y="232" font-family="${FONT}" font-size="104" font-weight="800" fill="#FFFFFF" letter-spacing="-3">Manimaker</text>

  <!-- gradient underline -->
  <rect x="266" y="258" width="470" height="8" rx="4" fill="url(#brand)"/>

  <!-- tagline -->
  <text x="98" y="372" font-family="${FONT}" font-size="58" font-weight="700" fill="#F4F2FA" letter-spacing="-1">Design anything, free forever.</text>

  <!-- supporting line -->
  <text x="100" y="432" font-family="${FONT}" font-size="31" font-weight="400" fill="#A9A2C4">Free &amp; open-source graphic design tool — a Canva alternative.</text>

  <!-- feature chips -->
  <g font-family="${FONT}" font-size="26" font-weight="600">
    <rect x="98"  y="500" width="252" height="58" rx="29" fill="#FFFFFF" fill-opacity="0.06" stroke="#FFFFFF" stroke-opacity="0.12"/>
    <text x="224" y="537" fill="#E9E6F4" text-anchor="middle">No watermarks</text>

    <rect x="368" y="500" width="232" height="58" rx="29" fill="#FFFFFF" fill-opacity="0.06" stroke="#FFFFFF" stroke-opacity="0.12"/>
    <text x="484" y="537" fill="#E9E6F4" text-anchor="middle">No paywalls</text>

    <rect x="618" y="500" width="300" height="58" rx="29" fill="#FFFFFF" fill-opacity="0.06" stroke="#FFFFFF" stroke-opacity="0.12"/>
    <text x="768" y="537" fill="#E9E6F4" text-anchor="middle">366 free templates</text>
  </g>

  <!-- subtle brand edge -->
  <rect x="0" y="0" width="1200" height="8" fill="url(#brand)"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log("wrote", OUT);
