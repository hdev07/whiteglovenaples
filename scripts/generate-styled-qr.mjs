import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas, loadImage } from "canvas";
import { JSDOM } from "jsdom";
import sharp from "sharp";
import QRCodeStyling from "qr-code-styling";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "qr");
const logoSrc = path.join(root, "public", "images", "logos", "logo.png");
const logoPrepared = path.join(outDir, "logo-qr-center.png");
const qrUrl = "https://whiteglovenaples.com/video";

async function prepareCenterLogo() {
  const size = 520;

  await sharp(logoSrc)
    .extract({ left: 80, top: 40, width: 1376, height: 520 })
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(logoPrepared);
}

function createQr(imagePath) {
  return new QRCodeStyling({
    jsdom: JSDOM,
    nodeCanvas: { createCanvas, loadImage },
    width: 1200,
    height: 1200,
    type: "canvas",
    data: qrUrl,
    margin: 0,
    qrOptions: {
      errorCorrectionLevel: "H",
    },
    image: imagePath,
    dotsOptions: {
      type: "rounded",
      color: "#000000",
    },
    cornersSquareOptions: {
      type: "dot",
      color: "#000000",
    },
    cornersDotOptions: {
      type: "dot",
      color: "#000000",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 10,
      imageSize: 0.28,
      hideBackgroundDots: true,
    },
  });
}

async function writeOutputs(qr) {
  const png = await qr.getRawData("png");

  qr.update({ type: "svg" });
  const svgData = await qr.getRawData("svg");

  await fs.writeFile(path.join(outDir, "whiteglovenaples-video-styled.png"), png);
  await fs.writeFile(path.join(outDir, "whiteglovenaples-video-styled.svg"), svgData);

  // Keep the default filenames updated for print handoff.
  await fs.writeFile(path.join(outDir, "whiteglovenaples-video.png"), png);
  await fs.writeFile(path.join(outDir, "whiteglovenaples-video.svg"), svgData);
}

await fs.mkdir(outDir, { recursive: true });
await prepareCenterLogo();
const qr = createQr(path.resolve(logoPrepared));
await writeOutputs(qr);
console.log("Styled QR generated in public/qr/");
