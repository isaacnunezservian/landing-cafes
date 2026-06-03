# Requerimientos — Cafex v2 (dictado oral de Isaac, 2026-06-02)

> Transcripción estructurada de lo que Isaac pidió en una sola iteración.
> Fuente de verdad para todos los BRIEFs.

## Contexto
- Hacemos una **segunda versión** de la landing de Cafex.
- Además creamos un **PDF para el equipo de ventas telefónico**, a partir de una síntesis de
  `BASE-CONOCIMIENTO-CAFEX.md` y del HTML `pdf/brochure.html` (el brochure original queda intacto;
  se trabaja sobre una **copia**). Se usa una librería **HTML→PDF** (Puppeteer, ya instalado).

## Cambios en la landing

### A. Contacto
- **Cambiar el WhatsApp de contacto** a Jeremías (equipo de ventas): **+54 9 11 5509-2051**.
- En el **footer**: NO incluir el teléfono/WhatsApp de Rafael. Dejar **solo el LinkedIn** y la
  **foto del fundador** tal cual está.
- Agregar la **foto de Jeremías** (`jeremías-ventas.png`) a la página.

### B. Casos de éxito
- Hoy está el video de **Fillippo**. Agregar también el de **Magno** (última página hecha), con el
  **mismo concepto** que el de Fillippo pero en **formato mobile (vertical)**.
- Video: `magno-video.mp4`. Debe **redirigir a `magnosapori.online`**.

### C. Argumento Google Maps
- Donde se habla de integración con Instagram, agregar que **también se integra a Google Maps**,
  captando más visitantes que buscan cafeterías en la plataforma.
- (Decisión Isaac: este argumento va en la **FAQ**, en la pregunta
  *"¿Sirve como página web y para Instagram?"*).

### D. Componente Panel de Administrador
- Agregar un componente que hable de las **facilidades del panel de administrador**, con un
  **video explicativo** (`admin.mp4`, ~66 MB, 1 min).
- Importante: incluirlo **sin romper la carga** de la página → hosting externo + lazy/click-to-play.

### E. Precio
- **Quitar el precio** (no quitar el componente). Reemplazar el monto por
  **"Consultá con el equipo de ventas"**.

### F. Nuevas funcionalidades / argumentos (agregar a landing + base de conocimiento + PDF)
1. **Idioma + moneda:** al escanear, el comensal **elige primero su idioma (ES/EN) y su moneda
   (ARS/USD/BRL)**; luego ve toda la carta traducida y con precios en su moneda.
2. **Acceso directo al WiFi:** al escanear el QR, el comensal tiene un **link directo al WiFi**.
3. **Carta editable (la más importante):** el dueño nos da una **imagen** de su carta y nosotros la
   convertimos en una **imagen editable** desde el panel. Cambia precios él mismo y **descarga la
   imagen** lista para imprimir, con el **mismo formato/apariencia** que la original.
4. **Bonus — sesión de grabación de contenido:** vamos presencialmente, grabamos y entregamos
   **8 piezas listas para publicar en Instagram**.
5. **Bonus — QR impresos e instalados:** llevamos los **QR impresos y los instalamos en las mesas**.
   El dueño no se preocupa por imprimir ni diseñar.
6. **Menú del día (INCLUIDO):** posibilidad de agregar el menú del día al menú digital. Se hace a
   medida, se conversa con el dueño. **Incluido en el paquete.**

### G. Desarrollos extra (fuera del precio, "estamos abiertos")
- **Pantallas/TV:** configurar menús del día, videos o imágenes para mostrar en TVs/pantallas.
- **Cartel QR de calle:** configurar un cartel QR para la vereda/calle de la cafetería.
- Ambos son **desarrollos aparte**, no incluidos en el precio base.

## Correcciones explícitas (segunda ronda)
- **Hero:** revisar.
- **Problema:** corregir el problema y el **CTA principal** → *"Cambiá los precios de tu carta en 10 segundos"*.
- **Arquitectura final confirmada por Isaac:**
  ```
  Hero
  Problema (CTA: "Cambiá los precios de tu carta en 10 segundos")
  Casos de Éxito  ← + video Magno (mobile) → magnosapori.online
  ──────────────
  ② Panel Admin + Carta Editable
      · Video admin (protagonista, hosting externo)
      · Carta editable (debajo del video, como característica agregada)
  ③ Funcionalidades + Bonus + A medida + Idioma + Moneda  (sección agrupada)
      · Idioma + Moneda
      · WiFi por QR
      · Bonus: sesión de grabación → 8 piezas IG
      · Bonus: QR impresos e instalados en mesas
      · Menú del día (incluido)
      · Extras a medida: menús en TV/pantallas · cartel QR de calle
  ──────────────
  FAQ    ← + Google Maps en "¿Sirve como página web y para Instagram?"
  Precio ← sin precio → "Consultá con el equipo de ventas"
  Footer ← LinkedIn + foto fundador (sin WhatsApp de Rafael)
  WhatsApp flotante ← número de Jeremías
  ```
  > Nota: la sección de Idioma+Moneda **NO** es independiente; se fusiona dentro de ③.

## PDF de ventas (telefónico)
- Copia de `pdf/brochure.html` → nuevo HTML editable (brochure original intacto).
- Contenido orientado a **venta telefónica**: síntesis de la base de conocimiento (qué es, para quién,
  funcionalidades incluyendo las nuevas, argumentos, objeciones, guion de llamada, precio → "consultar").
- Teléfono del PDF → Jeremías.
- Convertir a PDF con **Puppeteer** (ya en devDependencies).
