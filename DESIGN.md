---
name: Plano de sistemas
description: Sistema visual del portafolio de Max Alexander Acosta Valencia
colors:
  background: "#f2f5f3"
  surface: "#ffffff"
  surface-muted: "#e7eeea"
  foreground: "#182d2d"
  muted: "#50615f"
  border: "#bac8c2"
  control: "#687e75"
  accent: "#195c52"
  accent-hover: "#124b43"
  accent-active: "#0d3933"
  on-accent: "#ffffff"
  selected: "#dcebe4"
  disabled: "#dfe6e2"
  success: "#24633e"
  success-surface: "#e5f0e7"
  error: "#9b322c"
  error-surface: "#f9ebe8"
typography:
  display:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  control: "0.125rem"
  none: "0"
spacing:
  unit: "0.25rem"
  gutter: "1.5rem"
  target: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1rem"
---

# Sistema de diseño — Plano de sistemas

## Overview

**Creative North Star: "Plano de sistemas"**

Dirección B elegida expresamente por Max. La fase 3 materializa sus reglas en
`/design-system`; no construye el portafolio. Las propuestas anteriores se conservan
solo como archivo histórico en `docs/VISUAL_DIRECTIONS.md`.

Precisión mediante alineaciones, tipografía legible y relaciones claras. La
profundidad técnica debe venir de contenido verificable, nunca de terminales
falsas, diagramas inventados o elementos de dashboard sin función.

**Key Characteristics:**

- Fondo mineral claro, tinta petróleo y un acento verde profundo.
- Superficies planas; división por espacio y filetes.
- Una voz principal sans y mono limitada a código y medidas.
- Controles nativos y movimiento discreto entre estados.

La fuente única de valores de implementación es `src/styles/tokens.css`. El
frontmatter documenta esos tokens; no constituye otra configuración ejecutable.
`globals.css` define estilos compartidos con `@apply`; los componentes utilizan
las mismas utilidades de Tailwind. No hay segundo motor de estilos.

## Colors

Los valores exactos están en el frontmatter y en los tokens CSS homónimos.

| Token | Uso |
| --- | --- |
| background | Lienzo principal |
| surface / surface-muted | Muestras, campos y apoyo visual |
| foreground / muted | Lectura principal y contexto secundario |
| border | Separadores decorativos; no identifica por sí solo un control |
| control | Borde perceptible de campos y controles secundarios |
| accent / on-accent | Acción principal, enlaces y foco / texto sobre acción |
| accent-hover / accent-active | Respuesta a hover y pulsación |
| selected | Fondo de selección, siempre acompañado de texto o control nativo |
| disabled | Fondo deshabilitado; texto muted y atributo disabled real |
| success / success-surface | Validación correcta con texto e icono |
| error / error-surface | Error explicativo con posibilidad de recuperación |

No se reservan warning/info sin un caso de uso. Success/error sí se utilizan en
la demostración de validación; no representan estados reales de un proyecto.

El texto normal busca al menos 4.5:1 y los límites funcionales 3:1. Los bordes
suaves no cumplen el segundo umbral y son exclusivamente decorativos. El foco
usa accent y espacio exterior. Ningún estado se comunica solo con color.

## Typography

IBM Plex Sans local variable para pesos 400, 500 y 600; IBM Plex Mono local 400
para tokens, código y medidas. Los archivos WOFF2 y licencias están en
`src/assets/fonts/`. `next/font/local` aplica fallback y `display: swap`. No hay
peticiones a fuentes externas durante la compilación o la navegación.

| Rol | Menos de 64rem | Desde 64rem | Interlineado |
| --- | --- | --- | --- |
| display | 2rem / 32px | 2.75rem / 44px | 1.2 |
| heading | 1.625rem / 26px | 1.875rem / 30px | 1.2 |
| title | 1.25rem / 20px | 1.375rem / 22px | 1.3 |
| body | 1rem / 16px | 1.0625rem / 17px | 1.6 |
| label | 0.875rem / 14px | Igual | 1.5 |

Pesos: normal 400, medium 500, semibold 600. Lectura hasta 64ch. Títulos con
`text-wrap: balance`, párrafos con `pretty`, antialiasing y medidas con números
tabulares. El tamaño visual no altera el nivel semántico del encabezado.

## Layout

- Ancho máximo `site`: 77.5rem, equivalente a 1240px con raíz de 16px.
- Base de espaciado: 0.25rem. Pasos principales: 4, 8, 12, 16, 24, 32, 48 y 80px.
- `page`: 20px; desde lg, 40px. `gutter`: 24px.
- `section`: 56px; desde lg, 80px. `target`: 44px mínimo.
- Breakpoints centralizados: md 48rem / 768px; lg 64rem / 1024px.
- Base: una columna. md permite relaciones figura/contexto de 2:1. lg incorpora
  la retícula de 12 columnas: índice en 2, separación en 1 y contenido en 9.
- La muestra de columnas es un espécimen del sistema, no una cuadrícula de fondo.
- Índice lateral solo desde lg. Antes, disclosure nativo para conservar espacio
  de lectura; sigue accesible con teclado y sin JavaScript.
- Tokens `feedback` y `validation` reservan altura mínima en la demostración para
  reducir saltos al cambiar estados. Son mínimos, no alturas fijas: el texto puede
  crecer con zoom, traducciones o contenido largo sin recortarse.

## Elevation & Depth

Sin sombras: token `shadow-none`. La separación usa espacio, tono y bordes
estructurales. No añadir elevación a los botones ni hover lift a los proyectos.
No hay overlays que requieran una escala de elevación en esta fase.

## Shapes

Figuras rectangulares, radio 0; controles con radio `control` de 2px. Filetes de
1px y marcador de selección de 2px. No hay tarjetas anidadas ni iconos en cajas
ornamentales. Los bloques de la referencia agrupan muestras funcionales.

## Components

### Botones

`Button` en `src/components/ui.tsx`: API nativa de botón, `type="button"` por
defecto, variantes primary y secondary. No es un componente polimórfico ni
intercambia enlaces y botones. Acciones navegan con `<a>`; cambios de estado con
`<button>`. Altura y ancho mínimos target, padding de escala y radio control.

| Estado | Tratamiento |
| --- | --- |
| Default | Primary accent/on-accent; secondary surface/accent con borde control |
| Hover | accent-hover en primary; surface-muted en secondary; solo dispositivos con hover |
| Active | accent-active en primary; selected en secondary |
| Focus visible | Contorno accent de 2px, separado 3px; no depende de hover |
| Selected | aria-pressed, etiqueta estable, icono de confirmación y fondo activo |
| Disabled | disabled nativo, fondo disabled, texto muted y cursor no disponible |

No se reduce opacidad a todo el control ni se elimina contraste del texto. No hay
escala en pulsación: esta dirección prioriza estabilidad y respuestas frecuentes
sin movimiento geométrico.

### Enlaces, etiquetas e iconografía

`.text-link`: texto subrayado, underline-offset centralizado, foco y target. El
enlace externo incluye icono y conserva la navegación normal en la misma pestaña.
`Tag` describe contenido y no entra en el orden de tabulación.

`Icon`: SVG propios de 20px, trazo único 1.5, `currentColor`, `aria-hidden` y
`focusable=false`. Flecha, enlace externo, check y error. Siempre acompañados de
texto; no añaden etiquetas duplicadas a lectores de pantalla. El peso de los
controles se mantiene en 500 para acompañar ese trazo.

### Campos y estados

Input nativo con label, required, ayuda enlazada, aria-invalid y aria-describedby.
Error textual y foco en el campo que necesita corrección. Confirmación en región
`status` de anuncio cortés. La demostración no envía ni almacena información.

Los estados vacío, cargando, listo y error se seleccionan mediante radios nativos
con legend; permiten flechas de teclado. La carga es explícitamente simulada,
controlada por el usuario y estática. No hay espera artificial ni spinner perpetuo.
El error ofrece una acción de recuperación. Los detalles usan `<details>` y
`<summary>` nativos.

### Navegación y preview

Índice por anclas, aria-current sincronizado con el hash; no simula seguimiento
continuo del scroll. El enlace de salto lleva el foco a main. Secciones y artículo
con títulos identificados. La muestra de Hangar está rotulada como composición:
no contiene stack, resultados ni pantallas inventados, ni enlace a una demo falsa.

### Movimiento y accesibilidad

Solo transiciones CSS interrumpibles de color y fondo: 140ms, curva
`cubic-bezier(0.2, 0, 0, 1)`. Sin `transition: all`, stagger, zoom ni `will-change`
especulativo. Con `prefers-reduced-motion: reduce`, duración cero.

Semántica nativa, regiones identificadas, orden DOM de lectura, foco visible,
44px mínimos en targets, selección de texto contrastada, caret del acento y
adaptación de foco/selección a forced-colors. Los resultados de revisión y sus
límites están en `docs/DESIGN_SYSTEM_REVIEW.md`; no son una certificación de
accesibilidad ni sustituyen una prueba con lector de pantalla real.

## Do's and Don'ts

### Do

- Usar los tokens y utilidades compartidos; ampliar la escala solo con necesidad.
- Mostrar evidencia real y explicar decisiones, límites y autoría.
- Mantener controles nativos, foco visible y estados con texto.
- Conservar licencias y servir las fuentes desde el proyecto.

### Don't

- Introducir colores, radios y duraciones independientes en cada componente.
- Añadir terminales, telemetría, nodos o métricas ficticias como decoración.
- Convertir el índice de referencia en un dashboard del portafolio.
- Construir otras páginas o avanzar de fase sin el siguiente prompt.
