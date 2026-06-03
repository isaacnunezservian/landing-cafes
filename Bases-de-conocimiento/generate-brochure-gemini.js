const fs = require("fs");

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Falta GEMINI_API_KEY");
  process.exit(1);
}

const BASE = "https://generativelanguage.googleapis.com/v1beta/models";

const PROMPT = `Generate a professional tri-fold brochure design for "VITRAL", a premium digital menu platform for specialty coffee shops.

BRAND COLORS: Primary Amber #C8722A, Dark Espresso #2C1810, Background Crema #F5F0E8, Accent Terracotta #B85C38.
TYPOGRAPHY: Elegant modern serif for headings, clean sans-serif for body.
LOGO: A faceted "V" shape inspired by stained glass (vitral), geometric and elegant.

LAYOUT (tri-fold, show all 6 panels laid out flat):

FRONT COVER: Dark espresso background, large faceted "V" logo in amber, "VITRAL" wordmark in serif, tagline "Tu marca, en cada detalle." Minimal luxury feel.

INSIDE LEFT: Crema background. Header "Que es Vitral?" with 3 icon blocks: QR code for tables, Instagram bio link, Google indexable.

INSIDE CENTER: Header "Funcionalidades Premium" with 6 feature icons: real-time prices, daily promos, photo gallery, WhatsApp orders, Google Reviews, responsive design. Amber accent lines.

INSIDE RIGHT: Header "Diseno Personalizado" with side-by-side comparison: generic template (gray, boring) vs Vitral menu (beautiful, branded). Quote: "Tu marca merece un menu a la altura de tu cafe."

BACK LEFT: Header "Listo en 5 dias" with 3-step timeline connected by amber line: send branding, we design, delivery + training.

BACK RIGHT (back cover): Dark espresso background, VITRAL logo in amber/crema, contact info, CTA "Crea tu Vitral", QR placeholder.

STYLE: Ultra premium, Apple-level clean design. Stained glass geometric patterns as subtle textures. Warm amber/espresso/crema palette. Professional print-ready look. Elegant spacing.

OUTPUT: Single image showing the full brochure flat, inside spread on top, outside spread below, on dark wood surface with coffee beans.`;

// Models to try in order
const MODELS = [
  { name: "gemini-2.0-flash-exp-image-generation", method: "generateContent", modalities: ["TEXT", "IMAGE"] },
  { name: "gemini-2.5-flash-preview-image-generation", method: "generateContent", modalities: ["TEXT", "IMAGE"] },
  { name: "gemini-2.5-flash-image", method: "generateContent", modalities: ["TEXT", "IMAGE"] },
  { name: "gemini-2.0-flash", method: "generateContent", modalities: ["IMAGE"] },
  { name: "imagen-4.0-fast-generate-001", method: "predict" },
  { name: "imagen-4.0-generate-001", method: "predict" },
];

async function tryGenerateContent(model, modalities) {
  const url = `${BASE}/${model}:generateContent?key=${API_KEY}`;
  console.log(`  Intentando ${model} (generateContent, modalities: ${modalities})...`);
  
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: PROMPT }] }],
      generationConfig: { responseModalities: modalities },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.log(`  ${model}: HTTP ${res.status} - ${err.substring(0, 150)}`);
    return null;
  }

  const data = await res.json();
  if (!data.candidates?.[0]?.content?.parts) {
    console.log(`  ${model}: Sin contenido valido`);
    return null;
  }
  return data.candidates[0].content.parts;
}

async function tryPredict(model) {
  const url = `${BASE}/${model}:predict?key=${API_KEY}`;
  console.log(`  Intentando ${model} (predict/Imagen)...`);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt: PROMPT }],
      parameters: { sampleCount: 1, aspectRatio: "16:9", personGeneration: "dont_allow" },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.log(`  ${model}: HTTP ${res.status} - ${err.substring(0, 150)}`);
    return null;
  }

  const data = await res.json();
  if (!data.predictions?.length) {
    console.log(`  ${model}: Sin predicciones`);
    return null;
  }
  // Convert to parts format
  return data.predictions
    .filter(p => p.bytesBase64Encoded)
    .map(p => ({ inlineData: { data: p.bytesBase64Encoded, mimeType: "image/png" } }));
}

async function main() {
  console.log("=========================================");
  console.log("  VITRAL - Brochure Tri-Fold Generator");
  console.log("  Google AI Studio (Gemini API)");
  console.log("=========================================\n");

  let parts = null;

  for (const { name, method, modalities } of MODELS) {
    try {
      parts = method === "generateContent"
        ? await tryGenerateContent(name, modalities || ["TEXT", "IMAGE"])
        : await tryPredict(name);
      if (parts && parts.some(p => p.inlineData)) {
        console.log(`\n  Modelo exitoso: ${name}\n`);
        break;
      }
      // If parts exist but no images, still show text and continue
      if (parts) {
        const text = parts.filter(p => p.text).map(p => p.text).join("");
        if (text) console.log(`  ${name} respondio solo texto, probando siguiente modelo...`);
        parts = null;
      }
    } catch (e) {
      console.log(`  ${name}: Error - ${e.message}`);
    }
  }

  if (!parts) {
    console.error("\nNingun modelo genero imagen. Verifica tu API key y cuota.");
    process.exit(1);
  }

  let imageCount = 0;
  let textResponse = "";

  for (const part of parts) {
    if (part.inlineData) {
      imageCount++;
      const mime = part.inlineData.mimeType || "image/png";
      const ext = mime.includes("png") ? "png" : mime.includes("webp") ? "webp" : "jpg";
      const filename = `vitral-brochure-${imageCount}.${ext}`;
      const buffer = Buffer.from(part.inlineData.data, "base64");
      fs.writeFileSync(filename, buffer);
      console.log(`Imagen guardada: ${filename} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
    }
    if (part.text) textResponse += part.text;
  }

  console.log(`\nListo! ${imageCount} imagen(es) generada(s).`);
  if (textResponse) {
    console.log("\nNotas del modelo:");
    console.log(textResponse.substring(0, 800));
  }
}

main();
