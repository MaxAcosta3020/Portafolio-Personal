# Performance y accesibilidad — auditoría de fase 11 (Prompt 11)

Fecha: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.

## Alcance

Auditoría técnica profunda del portafolio estático exportado para Cloudflare Pages.
No se maquilla puntuaciones; se indica explícitamente qué no puede medirse en este
entorno.

## Herramientas disponibles y limitaciones

| Herramienta | Estado | Motivo |
| --- | --- | --- |
| Lighthouse | No disponible | No instalado en este entorno; no se pudo ejecutar |
| Core Web Vitals reales | No medibles | No hay tráfico real ni entorno de medición de campo |
| LCP / CLS / INP reales | No medibles | Requiere Lighthouse o mediciones de campo reales |
| JavaScript enviado | Medible | Tamaño de chunks estáticos en `out/` |
| Imágenes | Medible | Revisión de `public/` y `out/` |
| Fonts | Medible | Revisión de `src/assets/fonts/` y referencias |
| Animaciones | Medible | Revisión de código GSAP y CSS |
| Accesibilidad (axe) | Medible | Playwright + axe-core en 30 pruebas |
| Navegación con teclado | Medible | Playwright en homepage, Hangar, TaskFlow, design-system |
| Focus visible | Medible | CSS y pruebas axe |
| Screen reader real | No verificable | No hay lector de pantalla real ni dispositivos físicos |
| Reduced motion | Medible | CSS y pruebas Playwright |
| Safari / Firefox | No probado | Solo Chromium disponible |
| Dispositivos físicos | No probado | Solo viewport emulado en Playwright |

## Tamaños de recursos (build estático, `out/`)

| Recurso | Tamaño | Notas |
| --- | --- | --- |
| HTML homepage (`index.html`) | 67 KB | Incluye todo el contenido estático |
| HTML Hangar | ~58 KB | Contenido del caso de estudio |
| HTML TaskFlow Pro | ~65 KB | Contenido del caso de estudio |
| HTML design-system | 47 KB | Referencia de componentes |
| CSS global (`_next/static/css/*.css`) | 32 KB | Tailwind + tokens, único archivo CSS |
| Chunks JS (`_next/static/chunks/`) | ~1 MB | Incluye framework Next.js, React, polyfills |
| JS página Hangar (`page-*.js`) | 1 KB | Solo hidratación del componente cliente GSAP |
| JS página TaskFlow Pro (`page-*.js`) | 187 bytes | Sin componente cliente, solo estático |
| JS página homepage (`page-*.js`) | 187 bytes | Sin componente cliente, solo estático |
| JS layout (`layout-*.js`) | 557 bytes | Sin componente cliente |
| Fuente Plex Sans (WOFF2) | ~45 KB | Local, `display: swap`, weight 100-700 |
| Fuente Plex Mono (WOFF2) | ~15 KB | Local, `display: swap`, weight 400, preload: false |
| Imágenes de contenido | 0 | No hay imágenes de contenido en el sitio |
| favicon.svg | 273 bytes | Vectorial, sin solicitud de raster |
| og-image.png | No existe | Pendiente (señalado en SEO_SETUP.md) |

### Observación sobre el tamaño JS

La mayor parte del ~1 MB de chunks corresponde al framework Next.js y React (framework, polyfills, main). Las páginas individuales son extremadamente ligeras porque el sitio es 100% prerenderizado estático: el HTML viaja completo y solo se hidrata lo mínimo. El único componente cliente es `PipelineReveal` (GSAP) en la página de Hangar (~1 KB de JS de página).

## Fonts

- IBM Plex Sans y IBM Plex Mono servidas localmente desde `src/assets/fonts/` (WOFF2 con licencias).
- `next/font/local` con `display: swap`, fallback automático, sin peticiones a fuentes externas durante compilación ni navegación.
- Plex Mono tiene `preload: false` (no bloquea render inicial).
- Tanto Sans como Mono son variables que cubren pesos 400, 500 y 600 (Sans) y 400 (Mono).

## Imágenes

- No hay imágenes de contenido en el sitio (ni en homepage, ni en casos de estudio, ni en design-system).
- `favicon.svg` (273 bytes) y `site.webmanifest` en `public/`.
- `og-image.png` referenciada en Open Graph pero no existe aún: se declara como pendiente en `docs/SEO_SETUP.md`. No afecta LCP porque no se carga en el HTML inicial.

## Animaciones

- **CSS:** solo transiciones de color y fondo (140ms, `cubic-bezier(0.2, 0, 0, 1)`) en botón, enlace de texto, nav, summary e inverse-link. Sin `transition: all`, sin `will-change` especulativo, sin stagger en controles.
- **prefers-reduced-motion:** duración 0ms global y `scroll-behavior: auto`; en GSAP se omite la animación y los pasos se muestran estáticos.
- **GSAP (fase 8):** solo en el pipeline de Hangar (`clone → build → run → route`). Usa únicamente `opacity` y `transform: translateY` (sin layout shifts). Stagger 0.12s, duración 0.4s, ease `power2.out`. Interruptible: `gsap.killTweensOf` y `clearProps` al desmontar. Si el contenedor ya está visible al montar, no se ocultan los pasos (evita flash).
- **Impacto en móvil:** las animaciones son breves, usan propiedades baratas (compositor) y se desactivan con reduced motion. No hay benchmark de FPS real (no hay entorno de medición).

## Core Web Vitals (estimados, no medidos)

| Métrica | Evaluación | Fundamento |
| --- | --- | --- |
| LCP | Posiblemente bueno | HTML prerenderizado estático, fonts locales con `swap`, sin imágenes de contenido que bloqueen |
| CLS | Bueno | Sin layout shifts: animaciones solo opacity/transform, contenido estático, sin inyección de contenido dinámico |
| INP | No medible | No hay interacción real ni herramientas de campo; las animaciones son breves y no bloquean el hilo principal |

## Accesibilidad (verificada con axe-core + Playwright)

| Verificación | Resultado |
| --- | --- |
| WCAG 2A, 2AA, 2.1AA, 2.2AA | 0 infracciones en homepage, Hangar, TaskFlow Pro y design-system |
| Estados inicial y fuentes abiertas | 0 infracciones |
| Navegación con teclado | Enlace de salto al contenido, foco visible, índice de anclas, apertura de detalles, regreso a contacto |
| Focus visible | Contorno accent de 2px, offset 3px, `:focus-visible` global |
| Áreas táctiles | ≥44px en 320/390/768/1024/1920px (verificado en Playwright) |
| Sin JavaScript | Lectura completa de homepage, Hangar y TaskFlow Pro; apertura de fuentes funcionando |
| Reduced motion | Transición duración 0s, sin movimiento geométrico |
| Forced colors | Outline Highlight en foco, estados `aria-pressed` y `aria-current` con outline |
| Semántica HTML | `main`, `nav`, `footer`, `article`, `section`, `details`/`summary`, `aria-label`, `aria-labelledby`, `aria-current`, `aria-invalid`, `aria-describedby`, `aria-hidden` en iconos |
| Lang | `lang="es"` en `<html>` |
| Heading jerarquía | h1 → h2 → h3 → h4 sin saltos de nivel |

## Optimizaciones aplicadas (sin destruir el diseño)

1. Exportación estática (`output: "export"`): HTML completo servido sin renderizado en cliente.
2. Fonts locales WOFF2 con `display: swap`: sin bloqueo de render, sin peticiones externas de fuentes.
3. Sin imágenes de contenido: elimina solicitudes de imagen y afectación a LCP.
4. CSS único de 32 KB: una sola hoja de estilos, sin CSS-in-JS en tiempo de ejecución.
5. Páginas individuales de JS muy pequeñas (187 bytes a 1 KB): solo lo necesario se hidrata.
6. Animaciones GSAP limitadas al pipeline de Hangar, propiedades baratas, interruptibles, reducidas a cero con `prefers-reduced-motion`.

## Qué no se pudo medir (requiere entorno de producción real)

- Puntuación Lighthouse (rendimiento, accesibilidad, mejores prácticas, SEO).
- Core Web Vitals de campo (LCP, CLS, INP reales con usuarios).
- Medición de FPS de animaciones GSAP en móvil físico.
- Comportamiento en Safari y Firefox.
- Lector de pantalla real (NVDA, JAWS, VoiceOver).
- Dispositivos físicos (solo viewport emulado en Playwright Chromium).

## Siguiente paso pendiente

La auditoría de performance y accesibilidad está cerrada con los alcances documentados. Sigue pendiente el **Prompt 12 — Contacto y secretos** (arquitectura de contacto, opciones de envío, validación, honeypot, estados loading/success/error, accesibilidad, variables de entorno sin valores reales), que requiere un nuevo prompt explícito antes de avanzar.
