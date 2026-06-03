import puppeteer from "puppeteer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "pdf", "guion-ventas.html");
const pdfPath = path.join(root, "pdf", "guion-ventas.pdf");

const browser = await puppeteer.launch({ headless: "new" });
try {
  const page = await browser.newPage();
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "16mm", right: "16mm", bottom: "16mm", left: "16mm" },
  });
  console.log("PDF generado en", pdfPath);
} finally {
  await browser.close();
}
