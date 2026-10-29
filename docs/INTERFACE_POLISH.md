# Pulido de interfaz — revisión de fase 9 (Prompt 9)

Fecha: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.

## Metodología

Revisión completa del sitio aplicando los criterios de
`make-interfaces-feel-better` y `impeccable`, sin cambiar la dirección visual
aprobada ni convertir el polish en un rediseño. Las skills externas
(`$make-interfaces-feel-better`, `$impeccable`) no se pudieron ejecutar en este
entorno; la auditoría se hizo manualmente siguiendo sus criterios y se
documentó el resultado.

Áreas revisadas:

- tipografía, alineación óptica, radio de borde, bordes, sombras,
  hover, foco, estados activos, tamaño de iconos, áreas táctiles,
  transiciones, espaciado, entrada/salida de movimiento, consistencia de
  layout.

## BEFORE — estado antes del pulso de fase 9

| Área | Observación | Severidad |
| --- | --- | --- |
| Tipografía | Escala centralizada en `tokens.css`, IBM Plex Sans/Mono local, pesos 400/500/600, lectura hasta 64ch, `text-wrap: balance` en títulos y `pretty` en párrafos. Sin problemas. | — |
| Radio de borde | `rounded-control` (2px) en botones, campos, tags, nav-link. Diagramas rectangulares sin radio. Sin radios excesivos ni tarjetas anidadas. | — |
| Bordes | `border-border` y `border-control` consistentes. Botón primario con `border-accent`; secundario con `border-control`. | — |
| Sombras | Ninguna. `shadow-none` en tokens. Separación por espacio, tono y bordes estructurales, conforme a `DESIGN.md`. | — |
| Hover | Protegidos con `@media (hover: hover)` en botón, enlaces de texto, nav, summary e inverse-link. Solo cambios de color y fondo. | — |
| Foco | `:focus-visible` global con contorno accent de 2px, offset 3px. Verificado con Playwright en navegación y índice. | — |
| Activo | Estados `:active` definidos en botón, botón secundario, enlace de texto, nav, summary e inverse-link. | — |
| Iconos | SVG propios de 20px (`--icon-size`), trazo 1.5, `currentColor`, `aria-hidden`, `focusable=false`, siempre acompañados de texto. | — |
| Áreas táctiles | `min-h-target` / `min-w-target` (44px) en botones, nav-links, skip-link, summary, índice. Verificados ≥44px a 320/390/768/1024/1920px con Playwright. | — |
| Transiciones | Solo color y fondo, 140ms, `cubic-bezier(0.2, 0, 0, 1)`. Sin `transition: all`, sin `will-change` especulativo. `prefers-reduced-motion` fija duración a 0ms. | — |
| Espaciado | Tokens centralizados: page 20px (40px lg), section 56px (80px lg), gutter 24px, target 44px. Consistencia entre homepage, Hangar y TaskFlow. | — |
| Movimiento entrada/salida | Transiciones CSS interrumpibles. GSAP reveal del pipeline (fase 8) solo opacity/transform, interrumpible, respeta reduced motion. | — |
| Consistencia de layout | `page-container` centralizado, grid 12 columnas desde lg, índice lateral solo desde lg, relación 2:1 figura/contexto en md. Hangar y TaskFlow son espejos estructurales. | — |
| Skip link | Aparecía de forma abrupta (`-translate-y-32` → `translate-y-0` sin transición) al recibir el foco. | MENOR |

## AFTER — correcciones aplicadas

| Área | Cambio | Archivo |
| --- | --- | --- |
| Movimiento entrada/salida | Skip link con transición suave de `transform` (140ms, `cubic-bezier(0.2, 0, 0, 1)`) al aparecer con el foco. Respeta `prefers-reduced-motion` (duración 0). | `src/app/globals.css` |

No se modificó la paleta, la tipografía, el radio, los bordes ni el layout. No se añadieron animaciones nuevas más allá de la transición del skip link.

## Qué se dejó como está (intencional)

- Sin sombras, sin glassmorphism, sin blobs, sin terminales falsas, sin gradientes arbitrarios — conforme a la dirección B y a las restricciones de Promts.md.
- Sin `transition: all`, sin stagger en controles, sin zoom en pulsación.
- Sin biblioteca de animación adicional más allá de GSAP limitada al pipeline de Hangar (fase 8).
- Los enlaces de "Leer el caso" están condicionados por `project.id` en `FeaturedProject`; se mantiene por simplicidad y porque solo existen dos casos de estudio.

## Verificación

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; exportación estática con `/`, `/_not-found`, `/design-system`, `/proyectos/hangar`, `/proyectos/taskflow-pro`.
- `npm test`: 30 pruebas aprobadas (contenido, diseño, homepage, Hangar, TaskFlow; desktop y mobile).
- Axe sin infracciones (WCAG 2A/2AA/2.1AA/2.2AA) en homepage, Hangar, TaskFlow y design-system.
- Teclado: enlace de salto, foco visible, índice de anclas, apertura de fuentes, regreso a contacto.
- Sin desbordamientos y targets ≥44px en 320/390/768/1024/1920px.
- Lectura sin JavaScript y `prefers-reduced-motion` verificados.

## No verificado

- Lector de pantalla real, dispositivos físicos, Safari, Firefox.
- Hover/active mediante interacción manual (revisados en CSS).
- Medición de FPS/INP con herramientas de rendimiento.

## Siguiente fase pendiente

El polish de interfaz está cerrado. Sigue pendiente el **Prompt 10 — SEO técnico** (metadata, Open Graph, sitemap, robots, structured data, `docs/SEO_SETUP.md`), que requiere un nuevo prompt explícito antes de avanzar.
