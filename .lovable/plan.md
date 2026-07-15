# Rediseño: Quitar "AI Fingerprint" de Karibe Nails

Objetivo: reemplazar la estética genérica actual (gradientes tropicales predecibles, layouts en 4 columnas, cards uniformes) con una identidad visual comprometida y distintiva.

## Nueva identidad visual

**Paleta Coral Eléctrico** (reemplaza los tokens actuales en `src/index.css` y `tailwind.config.ts`)
- `--primary`: `#ee5a70` (coral vibrante) → CTAs, acentos
- `--accent`: `#c44569` (magenta profundo) → hovers, detalles
- `--secondary`: `#574b90` (violeta profundo) → contraste, títulos secundarios
- `--highlight`: `#ff6b6b` (coral claro) → destellos
- `--background`: crema neutro cálido `#fbf7f5`
- `--foreground`: casi negro con tinte violeta `#1a1420`
- Se eliminan los tokens `tropical-orange`, `gradient-tropical`, `gradient-soft` genéricos y se reemplazan por gradientes direccionales usando la nueva paleta (coral→magenta→violeta).

**Tipografía**
- Display: **Abril Fatface** (importar desde Google Fonts) — títulos, hero, nombres de sección
- Body: **Cabin** — párrafos, navegación, botones
- Reemplazar Playfair Display y Montserrat en `tailwind.config.ts` (`font-display`, `font-body`) y en `index.html`.

**Principios de composición (anti-AI)**
- Nada de grids simétricos de 4 columnas iguales.
- Uso de layout **masonry / asimétrico** con tarjetas de tamaños variados.
- Espacio negativo generoso alternado con densidad editorial.
- Números grandes de sección (01, 02, 03) tipo revista.
- Texto display extra grande que rompe el grid.
- Un solo acento coral saturado, no arcoíris tropical.

## Cambios por página

### `src/index.css` + `tailwind.config.ts`
- Reemplazar todos los tokens HSL de color por la paleta Coral Eléctrico.
- Redefinir `--gradient-tropical` → `--gradient-coral` (coral→magenta diagonal).
- Nuevo `--shadow-editorial` (sombra baja y difusa) y `--shadow-coral` (glow coral suave).
- Actualizar `font-display` a Abril Fatface, `font-body` a Cabin.

### `index.html`
- Cambiar imports de Google Fonts a Abril Fatface + Cabin.
- Actualizar `<meta name="theme-color">` al coral.

### `src/pages/Index.tsx` (Home) — rediseño completo
- **Hero**: split asimétrico 60/40. Izquierda: título masivo "Karibe Nails" en Abril Fatface (font-size clamp hasta ~12rem) con la palabra "Nails" en coral. Debajo, tagline corto en Cabin. Derecha: imagen recortada en formato vertical con marco coral desplazado (offset border).
- **Servicios**: en lugar de 4 cards idénticas, lista editorial numerada (01–04) con línea divisoria, título grande a la izquierda y descripción a la derecha. Hover: la fila entera se desliza y muestra un acento coral.
- **Portfolio preview**: grid **masonry** real (columnas CSS `columns-2 md:columns-3`) con 6–8 imágenes de alturas variadas, sin rounded uniforme — algunas con esquinas asimétricas y overlay coral en hover.
- **Testimonios**: una sola cita grande centrada tipo pull-quote editorial con navegación por puntos, en vez de 3 cards paralelas.
- **CTA final**: bloque coral sólido a sangre con tipografía display gigante superpuesta a una foto en blanco y negro.

### `src/pages/Portfolio.tsx`
- Convertir el grid actual en **masonry vertical** (`columns-2 lg:columns-4`) con `break-inside-avoid`.
- Filtros de categoría como chips outline con borde coral, activo = relleno coral.
- Lightbox: fondo casi negro `#1a1420`, controles minimalistas.

### `src/pages/Services.tsx`
- Lista editorial vertical numerada (01–08) en vez de cards.
- Cada servicio: número enorme en violeta, título display, precio a la derecha en Cabin tabular, línea divisoria fina.
- FAQ: accordion con tipografía display para preguntas.

### `src/pages/About.tsx`
- Layout zigzag / asimétrico: bio de Karina con imagen recortada en forma orgánica (mask), texto envolvente.
- Estadísticas como números display gigantes en coral.

### `src/pages/Appointments.tsx`
- Split 50/50: formulario a la izquierda con inputs underline (sin borde de caja), lado derecho con imagen y datos de contacto sobre fondo violeta profundo.

### `src/components/Navigation.tsx`
- Nav minimalista: logo a la izquierda, links en Cabin uppercase tracking amplio, "Book Now" como botón coral con esquinas cuadradas (no pill).
- Scroll: fondo crema con línea inferior coral fina.

### `src/components/Footer.tsx`
- Fondo violeta profundo `#1a1420`, tipografía display grande para "Karibe Nails", links en Cabin.
- Instagram/Facebook iconos con hover coral.

### `src/components/ChatBot.tsx`
- Botón flotante: cuadrado con esquinas suaves (no círculo), coral con sombra editorial.
- Panel: bordes rectos, header violeta, mensajes con burbujas asimétricas.

## Detalles técnicos

- Todos los colores nuevos van como HSL en `:root` de `index.css` (formato Tailwind).
- `tailwind.config.ts`: extender `fontFamily.display = ['"Abril Fatface"', 'serif']`, `fontFamily.body = ['Cabin', 'sans-serif']`. Añadir colores semánticos `coral`, `magenta`, `violet-deep`, `cream`.
- `index.html`: `<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet">`.
- Masonry: usar `columns-*` de Tailwind + `break-inside-avoid` en hijos (sin librería).
- Animaciones framer-motion existentes se mantienen pero con `ease` más lento y desplazamientos más pequeños (menos "bounce", más editorial).
- No se toca lógica de negocio: rutas, formularios, ChatBot behavior, favicon y links de Instagram/Facebook permanecen igual.

## Fuera de alcance
- No se conecta Lovable Cloud ni Instagram Graph API (pendiente aparte).
- No se cambian imágenes existentes (se reutilizan `hero-nails.jpg`, `nails-art-*.jpg`, portfolio images).
- No se cambia el favicon ni el logo submark.
