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

function isBackgroundPixel(r, g, b) {
  return b > 150 && b > r + 30 && r < 80;
}

async function extractLogo({ color = "blue", maxSize }) {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const out = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue = [];

  for (const [x, y] of [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
  ]) {
    const idx = y * width + x;
    const i = idx * 4;
    if (isBackgroundPixel(out[i], out[i + 1], out[i + 2])) {
      visited[idx] = 1;
      queue.push(idx);
    }
  }

  while (queue.length > 0) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx / width) | 0;
    for (const [nx, ny] of [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ]) {
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const nidx = ny * width + nx;
      if (visited[nidx]) continue;
      const i = nidx * 4;
      if (!isBackgroundPixel(out[i], out[i + 1], out[i + 2])) continue;
      visited[nidx] = 1;
      queue.push(nidx);
    }
  }

  for (let idx = 0; idx < width * height; idx++) {
    const i = idx * 4;
    if (visited[idx]) {
      out[i + 3] = 0;
      continue;
    }
    if (out[i + 3] < 128) continue;
    if (color === "white") {
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
    }
  }

  let pipeline = sharp(out, {
    raw: { width, height, channels: 4 },
  }).trim({ threshold: 1 });

  if (maxSize) {
    pipeline = pipeline.resize(maxSize, maxSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }

  return pipeline.png().toBuffer();
}

async function iconWithBg(size, padding = 0.18) {
  const logoSize = Math.round(size * (1 - padding * 2));
  const logo = await extractLogo({ color: "blue", maxSize: logoSize });
  return sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

const icon1024 = await iconWithBg(1024);
await sharp(icon1024).toFile(path.join(assets, "icon.png"));

const splashLogo = await extractLogo({ color: "blue", maxSize: 220 });
await sharp(splashLogo).toFile(path.join(assets, "splash-icon.png"));

const fg = await extractLogo({ color: "blue", maxSize: 660 });
await sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([{ input: fg, gravity: "centre" }])
  .png()
  .toFile(path.join(assets, "android-icon-foreground.png"));

await sharp({
  create: { width: 1024, height: 1024, channels: 3, background: "#ffffff" },
})
  .png()
  .toFile(path.join(assets, "android-icon-background.png"));

const mono = await extractLogo({ color: "blue", maxSize: 432 });
await sharp(mono)
  .greyscale()
  .toBuffer()
  .then((buffer) =>
    sharp({
      create: {
        width: 1024,
        height: 1024,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: buffer, gravity: "centre" }])
      .png()
      .toFile(path.join(assets, "android-icon-monochrome.png")),
  );

await sharp(icon1024).resize(48, 48).png().toFile(path.join(assets, "favicon.png"));

console.log("Brand assets updated in assets/");
