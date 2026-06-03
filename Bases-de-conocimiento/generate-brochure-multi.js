const fs = require("fs");

const PROMPT = `Professional tri-fold brochure design for "VITRAL" premium digital menu platform for specialty coffee shops. Flat lay mockup on dark wood table with coffee beans. Brand colors: Amber #C8722A, Dark Espresso #2C1810, Crema #F5F0E8, Terracotta #B85C38. Shows all 6 panels: Front cover with geometric "V" logo and "VITRAL" text on dark background, inside panels with features and icons on cream background, back cover dark with contact info. Ultra premium Apple-level clean design with stained glass geometric patterns. Professional print quality brochure.`;

// Free services to try
const SERVICES = [
  {
    name: "HuggingFace FLUX.1-schnell",
    url: "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
    body: JSON.stringify({ inputs: PROMPT, parameters: { width: 1024, height: 768 } }),
    headers: { "Content-Type": "application/json" },
    binary: true,
  },
  {
    name: "HuggingFace Stable Diffusion XL",
    url: "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
    body: JSON.stringify({ inputs: PROMPT }),
    headers: { "Content-Type": "application/json" },
    binary: true,
  },
  {
    name: "Gemini 2.0 Flash Exp Image",
    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${process.env.GEMINI_API_KEY || ""}`,
    body: JSON.stringify({
      contents: [{ parts: [{ text: PROMPT }] }],
      generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
    }),
    headers: { "Content-Type": "application/json" },
    binary: false,
    gemini: true,
  },
];

console.log("=========================================");
console.log("  VITRAL - Brochure Tri-Fold Generator");
console.log("  Multi-servicio gratuito");
console.log("=========================================\n");

async function main() {
  for (const svc of SERVICES) {
    console.log(`Intentando: ${svc.name}...`);
    try {
      const res = await fetch(svc.url, {
        method: "POST",
        headers: svc.headers,
        body: svc.body,
        signal: AbortSignal.timeout(120000),
      });

      console.log(`  Status: ${res.status}`);

      if (!res.ok) {
        const errText = await res.text();
        console.log(`  Error: ${errText.substring(0, 200)}\n`);
        continue;
      }

      if (svc.binary) {
        const contentType = res.headers.get("content-type") || "";
        console.log(`  Content-Type: ${contentType}`);

        if (contentType.includes("json")) {
          // Model loading or error
          const json = await res.json();
          console.log(`  JSON response: ${JSON.stringify(json).substring(0, 200)}\n`);
          continue;
        }

        const buffer = Buffer.from(await res.arrayBuffer());
        if (buffer.length < 1000) {
          console.log(`  Respuesta muy pequena (${buffer.length} bytes), saltando...\n`);
          continue;
        }

        let ext = "png";
        if (contentType.includes("jpeg") || contentType.includes("jpg")) ext = "jpg";
        else if (contentType.includes("webp")) ext = "webp";

        const filename = `vitral-brochure.${ext}`;
        fs.writeFileSync(filename, buffer);
        console.log(`\n  Imagen guardada: ${filename} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
        console.log("  Listo!\n");
        return;
      }

      if (svc.gemini) {
        const data = await res.json();
        const parts = data.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
          if (part.inlineData) {
            const mime = part.inlineData.mimeType || "image/png";
            const ext = mime.includes("png") ? "png" : mime.includes("webp") ? "webp" : "jpg";
            const buffer = Buffer.from(part.inlineData.data, "base64");
            const filename = `vitral-brochure.${ext}`;
            fs.writeFileSync(filename, buffer);
            console.log(`\n  Imagen guardada: ${filename} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
            console.log("  Listo!\n");
            return;
          }
        }
        console.log(`  Sin imagen en respuesta Gemini\n`);
      }
    } catch (e) {
      console.log(`  Error: ${e.message}\n`);
    }
  }

  console.error("No se pudo generar con ningun servicio.");
  console.log("\nOpciones:");
  console.log("1. Espera unas horas para que se renueve la cuota de Gemini");
  console.log("2. Activa facturacion en https://ai.dev/projects");
  console.log("3. Usa una API key de Gemini nueva");
  process.exit(1);
}

main();
