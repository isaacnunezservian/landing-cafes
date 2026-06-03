const fs = require("fs");
const https = require("https");

const PROMPT = `Professional tri-fold brochure design flat lay mockup for "VITRAL", a premium digital menu platform for specialty coffee shops.

BRAND: Primary Amber #C8722A, Dark Espresso #2C1810, Background Crema #F5F0E8, Accent Terracotta #B85C38. Elegant serif headings, clean sans-serif body. Logo: faceted geometric "V" inspired by stained glass.

LAYOUT: Show all 6 panels flat, inside spread on top, outside spread below.

FRONT COVER: Dark espresso background, large faceted "V" logo in amber, "VITRAL" wordmark, tagline "Tu marca, en cada detalle." Minimal luxury.

INSIDE LEFT: Crema background, "Que es Vitral?" header, 3 icon blocks: QR codes, Instagram bio link, Google indexable.

INSIDE CENTER: "Funcionalidades Premium" header, 6 feature icons with amber accents: real-time prices, daily promos, photo gallery, WhatsApp orders, Google Reviews, responsive design.

INSIDE RIGHT: "Diseno Personalizado" header, comparison: generic boring template vs beautiful Vitral branded menu.

BACK LEFT: "Listo en 5 dias" header, 3-step timeline with amber connecting line.

BACK COVER: Dark espresso background, VITRAL logo in amber/crema, "Crea tu Vitral" CTA, QR placeholder.

STYLE: Ultra premium Apple-level clean design, stained glass geometric textures, warm coffee palette, professional print quality. On dark wood surface with coffee beans.`;

console.log("=========================================");
console.log("  VITRAL - Brochure Tri-Fold Generator");
console.log("  Pollinations.ai (FLUX - Gratuito)");
console.log("=========================================");
console.log("\nGenerando imagen 1920x1080...");
console.log("(Puede tardar 30-120 segundos)\n");

async function main() {
  // Try JSON API first, then URL fallback
  const apis = [
    {
      name: "Pollinations JSON API",
      url: "https://image.pollinations.ai/prompt/" + encodeURIComponent(PROMPT) + "?width=1920&height=1080&model=flux&nologo=true&seed=" + Math.floor(Math.random() * 999999),
      type: "direct"
    },
    {
      name: "Pollinations (turbo)",
      url: "https://image.pollinations.ai/prompt/" + encodeURIComponent(PROMPT.substring(0, 500)) + "?width=1920&height=1080&model=turbo&nologo=true&seed=" + Math.floor(Math.random() * 999999),
      type: "direct"
    }
  ];

  for (const api of apis) {
    console.log(`Intentando: ${api.name}...`);
    try {
      const res = await fetch(api.url, { 
        redirect: "follow",
        signal: AbortSignal.timeout(120000)
      });

      if (!res.ok) {
        console.log(`  HTTP ${res.status} - ${(await res.text()).substring(0, 100)}`);
        continue;
      }

      const contentType = res.headers.get("content-type") || "";
      console.log(`  Content-Type: ${contentType}`);

      if (!contentType.includes("image")) {
        const text = await res.text();
        console.log(`  Respuesta no es imagen: ${text.substring(0, 200)}`);
        continue;
      }

      const buffer = Buffer.from(await res.arrayBuffer());
      let ext = "png";
      if (contentType.includes("jpeg") || contentType.includes("jpg")) ext = "jpg";
      else if (contentType.includes("webp")) ext = "webp";
      
      const filename = `vitral-brochure.${ext}`;
      fs.writeFileSync(filename, buffer);
      console.log(`\nImagen guardada: ${filename} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
      console.log("Listo!");
      return;
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }

  console.error("\nNo se pudo generar la imagen con ningun servicio.");
  process.exit(1);
}

main();
