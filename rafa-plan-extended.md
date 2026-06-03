# rafa-plan-extended.md — Detalle técnico (Cafex v2)

> Contexto técnico para sub-masters/sub-agentes. Complementa los BRIEFs.

## Stack y comandos
- Next.js 16, React 19, Tailwind v4, framer-motion 12, lucide-react.
- `puppeteer` ya está en devDependencies (sirve para el PDF).
- Dev: `npm run dev` · Build: `npm run build`.
- ⚠️ `npm run dev` falló (exit 1) en la sesión de planificación: el sub-agente que toque
  ejecución debe correr `npm install` primero y reportar errores de build en su REPORT.

## Inventario de assets (raíz del repo, mover a public/)
| Archivo (raíz) | Destino | Notas |
|---|---|---|
| `magno-video.mp4` | `public/images/cases/magno-showcase.mp4` | Formato vertical/mobile. Comprimir si >15 MB. |
| `jeremías-ventas.png` | `public/images/jeremias-ventas.png` | Sin tildes/ñ en el destino. |
| `admin.mp4` (66 MB) | **NO mover a public** | Hosting externo. Usar URL en el componente. |

## Convenciones de UI (copiar de las secciones existentes)
- Pill de header: `flex items-center gap-3 px-4 py-2 border border-espresso-200 rounded-full w-fit`
  con `<div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />` + label.
- Títulos: `font-heading text-espresso-800` con animación palabra-por-palabra (blur). Ver `problem-section.tsx`.
- Fondos alternados: `bg-crema` y `bg-white` y `bg-espresso-800` (oscuro). Mantener alternancia visual.
- Botones primarios: `bg-amber-500 text-white hover:bg-amber-600 rounded-lg`.

## Mapa de reemplazos de teléfono (tarea L1)
Número viejo `5491170061908` aparece en:
- `components/whatsapp-button.tsx` (línea ~7, botón flotante).
- `components/pricing-section.tsx` (CTA "Quiero mi Cafex").
- `components/faq-section.tsx` (2 links: "Consultar por WhatsApp" y la intro).
- `components/footer.tsx` (botón WhatsApp de Rafael → **se elimina**, no se reemplaza).
Reemplazar por `5491155092051` salvo en footer (ahí se borra el botón).

## Detalle: sección Panel Admin + Carta Editable (L4)
- Nuevo archivo `components/admin-section.tsx`.
- **Video protagonista** (admin) embebido por URL externa. Patrón recomendado:
  - Constante `const ADMIN_VIDEO_URL = "<URL_EXTERNA>"` (placeholder hasta que Isaac la dé).
  - Si es YouTube/Vimeo: `<iframe loading="lazy">` con poster.
  - Si es mp4 externo (Cloudinary/Mux): `<video preload="none" poster="..." controls>` + click-to-play.
  - **Nunca autoplay** para este video (dura 1 min).
- Debajo del video: bloque **"Carta editable"** como característica destacada (texto + ícono),
  según el copy de `requerimientos.md` §F.3.

## Detalle: sección Funcionalidades agrupada (L5)
- Nuevo archivo `components/features-extra-section.tsx`.
- Grid de cards (estilo `features-section.tsx`) con estos ítems en este orden:
  1. Idioma + Moneda (al escanear elige ES/EN y ARS/USD/BRL).
  2. WiFi por QR (acceso directo al WiFi).
  3. Bonus: sesión de grabación → 8 piezas para Instagram.
  4. Bonus: QR impresos e instalados en las mesas.
  5. Menú del día (incluido, a medida).
  6. A medida (fuera del precio): menús en TV/pantallas · cartel QR de calle.
- Marcar visualmente los **Bonus** y los **A medida / extra** con un badge distinto
  (ej. "Bonus" en ámbar, "Desarrollo aparte" en terracota).

## Detalle: Precio (L7)
- En `pricing-section.tsx`: quitar `$500.000` tachado, `$300.000`, badge de oferta y línea de
  mantenimiento monetaria. Reemplazar el bloque de precio por un CTA grande
  **"Consultá con el equipo de ventas"** + botón WhatsApp a Jeremías.
- Mantener la grilla "Qué incluye" (actualizar ítems si corresponde con las nuevas funciones).
- Opción: insertar la **foto de Jeremías** + nombre/rol como "Tu contacto de ventas".

## Orden de ejecución (waves)
- **Wave 1 (paralelo, independientes):** L1, L2, L3, L6, L9, P1.
- **Wave 2 (secciones nuevas):** L4, L5, L7.
- **Wave 3 (integración):** L8 (wiring en page.tsx; depende de L4/L5/L7), P2 (depende de L9).

## Riesgos / notas
- "Vitral" aparece como nombre en `solution-section.tsx` y `features-section.tsx` (componentes no
  renderizados). Es un bug heredado. **No corregir** salvo BRIEF explícito.
- El video admin embebido externo es la única forma de no romper el peso del deploy de Netlify.
- Validar build (`npm run build`) recién en la wave de integración (L8), no por cada tarea.
