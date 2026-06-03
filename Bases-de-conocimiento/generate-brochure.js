/**
 * VITRAL — Generador de Tri-Fold Brochure
 * =========================================
 * Usa la API de each::sense para generar el diseño del brochure.
 * 
 * REQUISITOS:
 * - Node.js instalado
 * - API key de EachLabs con saldo disponible
 * 
 * USO:
 *   set EACHLABS_API_KEY=tu_api_key_aqui
 *   node generate-brochure.js
 * 
 * El script genera el brochure y guarda las URLs de las imágenes resultantes.
 */

const https = require('https');
const fs = require('fs');

const API_KEY = process.env.EACHLABS_API_KEY;

if (!API_KEY) {
  console.error('❌ Error: Configura la variable EACHLABS_API_KEY');
  console.error('   set EACHLABS_API_KEY=tu_api_key');
  process.exit(1);
}

// ═══════════════════════════════════════════════════════════
// PROMPT OPTIMIZADO — Basado en la identidad de marca Vitral
// ═══════════════════════════════════════════════════════════

const BROCHURE_PROMPT = `Create a professional tri-fold brochure design (11" x 8.5", 3 panels, both sides) for a premium digital menu platform called VITRAL.

BRAND IDENTITY:
- Primary color: Amber #C8722A (warm, rich, coffee-inspired)
- Dark color: Espresso #2C1810 (deep brown-black, never pure black)
- Background: Crema #F5F0E8 (warm off-white, never pure white)
- Accent: Terracotta #B85C38
- Typography: DM Serif Display for headings (elegant modern serif), Inter for body text (clean humanist sans-serif), JetBrains Mono for prices/numbers
- Logo concept: A faceted "V" symbol resembling stained glass panels, paired with "VITRAL" wordmark in DM Serif Display with generous letter-spacing (0.15em)
- Visual style: Warm, artisanal yet modern. Inspired by specialty coffee culture, stained glass artistry, and premium editorial design

FRONT PANEL (Cover - rightmost panel when face up):
- Large faceted "V" logo symbol in amber #C8722A centered in upper third
- "VITRAL" wordmark below in DM Serif Display, espresso #2C1810
- Tagline: "Tu marca, en cada detalle." in Inter 400, espresso #5C483D
- Subtitle smaller: "Menús digitales premium para cafeterías de especialidad"
- Background: Crema #F5F0E8 with subtle geometric stained glass pattern at 5% opacity
- Small accent photo at bottom: overhead shot of specialty coffee latte art, warm tones
- Clean, premium, minimal. Generous white space throughout.
- Small diamond ◆ decorative element as separator

INSIDE LEFT PANEL:
- Header: "El problema" in DM Serif Display, amber #C8722A, 24pt equivalent
- Subheader in Inter 500: "Tu café es extraordinario. ¿Tu menú digital está a la altura?"
- Visual: Split image showing a crumpled printed menu vs a sleek phone screen with premium digital menu
- 4 pain points with small amber diamond ◆ bullets:
  • "Menús impresos que quedan desactualizados en semanas"
  • "Costos de reimpresión cada vez que suben los precios"
  • "Sin presencia web profesional — invisible en Google"
  • "30+ mensajes semanales en Instagram preguntando precios"
- Warm photography of coffee shop interior, soft ambient lighting
- Background: white with subtle crema tint #FAF7F5
- Stat callout: "El 75% de los consumidores juzga tu negocio por su presencia web" in Inter, small, espresso #8C7B70

INSIDE CENTER PANEL (main feature area):
- Header: "Tu Vitral" in DM Serif Display, espresso #2C1810
- Hero element: iPhone mockup showing a beautiful custom digital menu page with amber/espresso color scheme, gallery photos, and organized menu categories
- 4 feature cards arranged in 2x2 grid, each with terracotta #B85C38 icon:
  1. Paintbrush icon — "Diseño 100% personalizado con tus colores, logo y fotos"
  2. Clock/lightning icon — "Cambiá precios en 5 segundos desde tu celular"
  3. QR + link icon — "QR para mesas + link para tu bio de Instagram"
  4. Chat + map icon — "WhatsApp, Google Maps y Reviews integrados"
- Small tech badge at bottom: "Next.js · React · Firebase · Netlify" in JetBrains Mono, caption size, espresso #B5A79D
- Background: Crema #F5F0E8

INSIDE RIGHT PANEL:
- Header: "Cómo funciona" in DM Serif Display, amber #C8722A
- 3-step vertical process with large circled numbers in amber:
  Step 1: "Nos enviás tu branding" — "Logo, colores, fotos y menú completo"
  Step 2: "Creamos tu Vitral" — "Diseño personalizado listo en 3 a 5 días"
  Step 3: "¡Listo para brillar!" — "Recibís QR, URL, panel de admin y capacitación"
- Connecting dotted amber line between steps
- Quote box at bottom with espresso #2C1810 background, rounded corners:
  "Tu café merece un menú a la altura." in DM Serif Display italic, crema #F5F0E8
- Background: white #FFFFFF

BACK LEFT PANEL:
- Header: "Todo incluido" in DM Serif Display, espresso #2C1810
- Checklist with amber ✓ checkmarks, Inter 400 body text:
  ✓ Página web de menú digital personalizada
  ✓ Panel de administración autónomo
  ✓ Código QR listo para imprimir
  ✓ URL para Instagram y redes sociales
  ✓ Carga inicial de todos los productos
  ✓ Galería fotográfica del local
  ✓ Botón de WhatsApp flotante
  ✓ Google Maps integrado
  ✓ Sección de Google Reviews
  ✓ Capacitación incluida
- Small comparison table at bottom:
  "Sin Vitral: $150.000/año en reimpresiones"
  "Con Vitral: $0 para siempre"
- Background: Crema #F5F0E8

BACK CENTER PANEL (mailing/info panel):
- Testimonial section header: "Lo que dicen nuestros clientes" in DM Serif Display, small
- 2 testimonial quotes in italics with star ratings
- Small text: "Más de 50 cafeterías ya tienen su Vitral" in Inter 500
- Background: white

BACK RIGHT PANEL (Back Cover — visible when folded):
- Dark premium design: Background espresso #2C1810
- VITRAL logo (horizontal: symbol + wordmark) centered top, in amber #D99645 symbol + crema #F5F0E8 wordmark
- Decorative diamond line: ─── ◆ ───
- CTA: "Creá tu Vitral" in DM Serif Display, 20pt, amber #C8722A
- Contact info in Inter 400, crema #F0EAE6:
  🌐 vitral.menu
  📱 WhatsApp: +54 9 XXX XXX-XXXX
  📸 @vitral.menu
  ✉️ hola@vitral.menu
- QR code placeholder box at bottom (white square with rounded corners)
- Footer text tiny: "Menús digitales que honran tu identidad." in Inter 400 italic, espresso #8C7B70

DESIGN DIRECTIVES:
- Premium editorial feel inspired by specialty coffee culture — NOT corporate or generic
- Warm color palette throughout: amber, espresso, crema, terracotta exclusively
- NEVER use pure black (#000000) or pure white (#FFFFFF) — always warm brand variants
- Photography: warm lighting (3500-4500K), latte art, cafe interiors, overhead food shots, golden hour ambiance
- Subtle stained glass geometric patterns as background textures at 3-5% opacity only
- Typography: DM Serif Display for ALL headings, Inter for ALL body text
- Generous whitespace — let content breathe, premium spacing
- Print-ready: 300 DPI, CMYK-safe colors, 3mm bleed, fold guides visible
- Each panel should feel like it belongs to the same family but have its own character`;

// ═══════════════════════════════════════════════════════════
// EJECUCIÓN
// ═══════════════════════════════════════════════════════════

function generateBrochure(prompt, mode = 'max') {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ message: prompt, mode });
    
    const options = {
      hostname: 'sense.eachlabs.run',
      port: 443,
      path: '/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
        'Accept': 'text/event-stream',
        'Content-Length': Buffer.byteLength(data)
      },
      timeout: 600000 // 10 minutos
    };

    console.log('🎨 Generando brochure tri-fold para Vitral...');
    console.log(`📐 Modo: ${mode}`);
    console.log('⏳ Esto puede tomar unos minutos...\n');

    const events = [];
    const generatedUrls = [];

    const req = https.request(options, (res) => {
      console.log(`📡 Status: ${res.statusCode}\n`);
      
      if (res.statusCode !== 200) {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${body}`)));
        return;
      }

      let buffer = '';

      res.on('data', (chunk) => {
        buffer += chunk.toString();
        const lines = buffer.split('\n');
        buffer = lines.pop(); // Guardar línea incompleta

        for (const line of lines) {
          if (!line.startsWith('data: ') || line === 'data: [DONE]') {
            if (line === 'data: [DONE]') console.log('\n✅ Stream completado');
            continue;
          }

          try {
            const event = JSON.parse(line.slice(6));
            events.push(event);

            switch (event.type) {
              case 'thinking_delta':
                process.stdout.write(`💭 ${event.content}\n`);
                break;
              case 'status':
                console.log(`⚙️  ${event.message}`);
                break;
              case 'text_response':
                console.log(`📝 ${event.content.substring(0, 200)}`);
                break;
              case 'generation_response':
                console.log(`\n🖼️  ¡IMAGEN GENERADA!`);
                console.log(`   URL: ${event.url}`);
                if (event.generations) {
                  event.generations.forEach((url, i) => {
                    generatedUrls.push(url);
                    console.log(`   Generación ${i + 1}: ${url}`);
                  });
                }
                break;
              case 'error':
                console.error(`❌ Error: ${event.message}`);
                break;
              case 'complete':
                console.log(`\n📊 Resumen:`);
                console.log(`   Status: ${event.status}`);
                if (event.generations) {
                  console.log(`   Imágenes: ${event.generations.length}`);
                  event.generations.forEach(url => generatedUrls.push(url));
                }
                break;
              default:
                console.log(`📌 [${event.type}]`);
            }
          } catch (e) {
            // Ignoring non-JSON lines
          }
        }
      });

      res.on('end', () => {
        resolve({ events, generatedUrls: [...new Set(generatedUrls)] });
      });
    });

    req.on('error', (e) => reject(e));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout: la generación tardó más de 10 minutos'));
    });

    req.write(data);
    req.end();
  });
}

// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════

async function main() {
  console.log('╔═══════════════════════════════════════════╗');
  console.log('║  VITRAL — Brochure Tri-Fold Generator     ║');
  console.log('╚═══════════════════════════════════════════╝');
  console.log('');

  try {
    const result = await generateBrochure(BROCHURE_PROMPT, 'max');
    
    console.log('\n═══════════════════════════════════════════');
    console.log('RESULTADO FINAL:');
    console.log('═══════════════════════════════════════════');
    
    if (result.generatedUrls.length > 0) {
      console.log('\n🎉 ¡Brochure generado exitosamente!\n');
      result.generatedUrls.forEach((url, i) => {
        console.log(`   Imagen ${i + 1}: ${url}`);
      });

      // Guardar URLs en archivo
      const output = {
        generatedAt: new Date().toISOString(),
        brand: 'Vitral',
        type: 'tri-fold-brochure',
        urls: result.generatedUrls
      };
      
      fs.writeFileSync('brochure-output.json', JSON.stringify(output, null, 2));
      console.log('\n📁 URLs guardadas en brochure-output.json');
    } else {
      console.log('\n⚠️  No se generaron imágenes.');
      console.log('   Revisa el log de eventos arriba para más detalles.');
    }
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    
    if (error.message.includes('Insufficient balance')) {
      console.error('\n💡 Tu cuenta de EachLabs no tiene saldo.');
      console.error('   Recargá en https://eachlabs.ai para continuar.');
    }
  }
}

main();
