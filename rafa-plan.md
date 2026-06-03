# rafa-plan.md — Cafex v2 (vista para Isaac)

> Plan de alto nivel. Marcá el estado a medida que los sub-agentes entregan.
> Detalle técnico en `rafa-plan-extended.md`. BRIEFs en `.agents/cascade/`.

## Iteración 01

### Feature: landing-v2
| # | Tarea | Estado | BRIEF |
|---|---|---|---|
| L1 | Teléfono → Jeremías (global) + footer sin WhatsApp Rafael | ☐ pendiente | `landing-v2/tasks/01-01-telefono-contacto` |
| L2 | Hero + Problema (CTA "Cambiá los precios de tu carta en 10 segundos") | ☐ pendiente | `landing-v2/tasks/01-02-hero-problema` |
| L3 | Casos: agregar video Magno (mobile) → magnosapori.online | ☐ pendiente | `landing-v2/tasks/01-03-caso-magno` |
| L4 | Sección Panel Admin + Carta Editable (video externo) | ☐ pendiente | `landing-v2/tasks/01-04-admin-carta` |
| L5 | Sección Funcionalidades + Bonus + A medida + Idioma/Moneda | ☐ pendiente | `landing-v2/tasks/01-05-funcionalidades` |
| L6 | FAQ: agregar Google Maps | ☐ pendiente | `landing-v2/tasks/01-06-faq-maps` |
| L7 | Precio: quitar monto → "Consultá con el equipo de ventas" + foto Jeremías | ☐ pendiente | `landing-v2/tasks/01-07-precio` |
| L8 | Wiring en page.tsx + mover assets a public/ | ☐ pendiente | `landing-v2/tasks/01-08-wiring-assets` |
| L9 | Sincronizar BASE-CONOCIMIENTO con nuevas funcionalidades | ☐ pendiente | `landing-v2/tasks/01-09-sync-base` |

### Feature: pdf-ventas
| # | Tarea | Estado | BRIEF |
|---|---|---|---|
| P1 | Script Puppeteer HTML→PDF + npm script | ☐ pendiente | `pdf-ventas/tasks/01-01-build-script` |
| P2 | Copia brochure → guion-ventas.html (contenido telefónico) | ☐ pendiente | `pdf-ventas/tasks/01-02-guion-html` |

## Cosas que Isaac debe proveer
- [ ] URL del **video admin** hosteado (Cloudinary/Mux/YouTube unlisted).
- [ ] Confirmar ubicación de la **foto de Jeremías**.
- [ ] Confirmar si "Cambiá los precios de tu carta en 10 segundos" es **botón** o **subtítulo**.
- [ ] (Opcional) Comprimir `magno-video.mp4` a <15 MB antes de commitear.
