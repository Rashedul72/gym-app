/**
 * Regenerate icon + splash from assets/logo-source.png
 * Run: node scripts/generate-brand-assets.mjs
 */
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assets = path.join(__dirname, "../assets");
const src = path.join(assets, "logo-source.png");
const BLUE = "#2563eb";

async function iconWithBg(size, padding = 0.18) {
  const logoSize = Math.round(size * (1 - padding * 2));
  const logo = await sharp(src)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

const icon1024 = await iconWithBg(1024);
await sharp(icon1024).toFile(path.join(assets, "icon.png"));

const splashLogo = await sharp(src)
  .resize(280, 280, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: "#ffffff" },
})
  .composite([{ input: splashLogo, gravity: "centre" }])
  .png()
  .toFile(path.join(assets, "splash-icon.png"));

const fg = await sharp(src)
  .resize(660, 660, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
await sharp({
  create: { width: 1024, height: 1024, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: fg, gravity: "centre" }])
  .png()
  .toFile(path.join(assets, "android-icon-foreground.png"));

await sharp({
  create: { width: 1024, height: 1024, channels: 3, background: BLUE },
})
  .png()
  .toFile(path.join(assets, "android-icon-background.png"));

const mono = await sharp(src)
  .resize(432, 432, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .greyscale()
  .png()
  .toBuffer();
await sharp({
  create: { width: 1024, height: 1024, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: mono, gravity: "centre" }])
  .png()
  .toFile(path.join(assets, "android-icon-monochrome.png"));

await sharp(icon1024).resize(48, 48).png().toFile(path.join(assets, "favicon.png"));

console.log("Brand assets updated in assets/");
