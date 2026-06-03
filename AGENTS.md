# AGENTS.md — CAFEX (Landing + PDF de ventas)

> Reglas para cualquier agente que trabaje en este repositorio.
> Proyecto bajo el **Método Cascada** de Isaac (master → sub-master → sub-agente).

---

## Qué es este proyecto

Landing page del servicio **Cafex** (menús digitales premium para cafeterías).
Stack: **Next.js 16 + React 19 + Tailwind v4 + framer-motion**. Deploy en **Netlify**.

Objetivo de esta iteración (v2):
1. Construir una **segunda versión de la landing** con cambios de copy y nuevas secciones.
2. Generar un **PDF para el equipo de ventas telefónico** a partir de un HTML.

---

## Roles (jerarquía de sesiones)

| Nivel | Quién | Qué hace |
|---|---|---|
| **Master** | Isaac + modelo top | Planifica, escribe BRIEFs, sincroniza REPORTs, hace el diff final. NO ejecuta tareas. |
| **Sub-agente** | Modelo barato | Ejecuta **un** BRIEF, escribe su REPORT.md, se detiene. |

**Regla de oro para sub-agentes:** ejecutá SOLO lo que dice tu `BRIEF.md`. No toques archivos
fuera del alcance listado. Si algo no está claro, anotalo en tu REPORT y NO improvises.

---

## Mapa de la landing (orden de render en `app/page.tsx`)

```
Hero                → components/hero.tsx
Problema            → components/problem-section.tsx
Casos de Éxito      → components/cases-section.tsx
[NUEVA] Admin+Carta → components/admin-section.tsx        (a crear)
[NUEVA] Funciones   → components/features-extra-section.tsx (a crear)
FAQ                 → components/faq-section.tsx
Precio              → components/pricing-section.tsx
Footer              → components/footer.tsx
WhatsApp flotante   → components/whatsapp-button.tsx
```

Componentes existentes pero **NO renderizados** (no tocar salvo indicación):
`features-section.tsx`, `solution-section.tsx`, `testimonials-section.tsx`,
`cta-section.tsx`, `logo-section.tsx`.

---

## Datos canónicos (usar siempre estos valores)

- **WhatsApp ventas (Jeremías):** `+54 9 11 5509-2051`
  - Formato `wa.me`: `5491155092051`
  - Link tipo: `https://wa.me/5491155092051?text=...`
- **Número viejo a reemplazar EN TODOS LADOS:** `5491170061908`
- **Caso Fillippo (existente):** video `/images/cases/fillippo-showcase.mp4` → `https://fillippo.online/`
- **Caso Magno (nuevo):** video local `magno-video.mp4` (raíz) → mover a `public/images/cases/magno-showcase.mp4`, formato **vertical/mobile**, link `https://magnosapori.online`
- **Video panel admin:** `admin.mp4` (raíz, 66 MB) → **hosting externo** (Cloudinary/Mux/YouTube unlisted). NO commitear el .mp4 crudo. Usar URL externa (Isaac la provee).
- **Foto vendedor (Jeremías):** `jeremías-ventas.png` (raíz) → mover a `public/images/jeremias-ventas.png`
- **Fundador (Rafael):** foto `/images/fundador.png` + LinkedIn `https://www.linkedin.com/in/isaac-nunez-dev/`. NO incluir WhatsApp ni teléfono de Rafael.

---

## Paleta y tipografía (de la base de conocimiento)

- Ámbar `#C8722A` (primario) · Espresso `#2C1810` (oscuro) · Crema `#F5F0E8` (fondo) · Terracota `#B85C38`
- Títulos: **DM Serif Display** (`font-heading`) · Cuerpo: **Inter** · Precios/números: **JetBrains Mono** (`font-mono`)
- Clases Tailwind ya configuradas: `bg-amber-500`, `text-espresso-800`, `bg-crema`, `text-crema`, etc.
- **Nunca** negro/blanco puro. Mantener consistencia con las secciones existentes.

---

## Estilo de código (imitar lo existente)

- Cada sección es un `"use client"` component con `framer-motion` (animaciones `whileInView`, `blur` en títulos).
- Header de sección = pill con punto ámbar + label. Copiar el patrón de `problem-section.tsx`.
- Íconos: `lucide-react`.
- Imágenes: `next/image`. Videos: `<video>` nativo.
- No agregar dependencias nuevas salvo que el BRIEF lo indique.

---

## Reglas de NO hacer

- NO borrar `pdf/brochure.html` ni `pdf/folleto-para-imprimir.pdf` (quedan intactos).
- NO borrar contenido de `contexto-cliente/`.
- NO commitear archivos de video pesados (`admin.mp4`). `magno-video.mp4` solo si está comprimido <15 MB.
- NO renombrar la marca: es **Cafex** (si encontrás "Vitral" es un bug heredado; no lo arregles salvo que tu BRIEF lo pida).
