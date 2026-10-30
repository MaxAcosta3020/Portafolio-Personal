---
name: Minimalista con propósito
description: Sistema visual del portafolio de Max Alexander Acosta Valencia
colors:
  background: "#f7f5f0"
  surface: "#ffffff"
  foreground: "#1a1a18"
  muted: "#5a5a55"
  border: "#d8d6d0"
  control: "#8a8a82"
  accent: "#195c52"
  accent-hover: "#124b43"
  accent-active: "#0d3933"
  on-accent: "#ffffff"
  focus-ring: "#195c52"
typography:
  display:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
  heading:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
  control: "0.125rem"
spacing:
  unit: "0.25rem"
  gutter: "1.5rem"
  section: "4rem"
  target: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1rem"
    border: "1px solid {colors.control}"
  text-link:
    textColor: "{colors.accent}"
    underline: "1px solid {colors.accent}"
    underlineOffset: "0.2em"
---

# Sistema de diseño — Minimalista con propósito

## Overview

Dirección visual aprobada por el propietario: **minimalista con mucho espacio en blanco, pocos elementos, interfaz limpia, donde cada detalle tiene un propósito.** Cada elemento visible debe justificar su existencia. Si no ayuda al lector a entender, navegar o actuar, se elimina.

El carácter viene de la tipografía, el ritmo del espacio y la precisión de los detalles, no de la decoración. Una sola acción principal por pantalla.

## Colors

| Token | Valor | Uso |
| --- | --- | --- |
| background | `#f7f5f0` | Lienzo principal, claro cálido (no blanco puro frío) |
| surface | `#ffffff` | Superficies de apoyo; se usa solo cuando sea necesario |
| foreground | `#1a1a18` | Texto casi negro, lectura principal |
| muted | `#5a5a55` | Contexto secundario, notas, etiquetas |
| border | `#d8d6d0` | Línea fina de 1px; separación decorativa, no identifica un control |
| control | `#8a8a82` | Borde perceptible de campos y controles secundarios |
| accent | `#195c52` | Acción principal, enlaces, foco, un solo estado destacado |
| accent-hover | `#124b43` | Respuesta a hover, solo dispositivos con hover |
| accent-active | `#0d3933` | Respuesta a pulsación |
| on-accent | `#ffffff` | Texto sobre acción de acento |
| focus-ring | `#195c52` | Contorno de foco visible |

Un solo color de acento, usado con moderación (enlaces, foco, un estado). No hay modo oscuro definido en esta fase; solo si se puede mantener igual de limpio.

## Typography

IBM Plex Sans es la voz principal del diseño. IBM Plex Mono se limita a detalles técnicos (stack, rutas, comandos, etiquetas). Máximo dos familias, tres pesos (400, 600 y opcionalmente 500). Se evitan Inter, Roboto y Arial.

| Rol | Tamaño | Peso | Interlineado | Uso |
| --- | --- | --- | --- | --- |
| display | 2.25rem | 600 | 1.2 | Título principal, hero |
| heading | 1.5rem | 600 | 1.25 | Secciones |
| title | 1.125rem | 600 | 1.35 | Subtítulos, nombres de proyecto |
| body | 1rem | 400 | 1.7 | Párrafos de lectura |
| label | 0.875rem | 400 | 1.5 | Detalles técnicos, stack, medidas |

El contraste lo da el tamaño y el peso, no el color. Cuerpo dentro de 60–70 caracteres por línea. `text-wrap: balance` en encabezados, `text-wrap: pretty` en párrafos. Fuentes servidas localmente desde `src/assets/fonts/` (WOFF2), `display: swap`, sin peticiones externas.

## Layout

- Ancho máximo de lectura: columna estrecha para textos (aprox. 60–70 caracteres por línea); ancho mayor solo para diagramas.
- Espacio: ritmo vertical generoso basado en una escala única (4px base). El espacio vacío es parte del diseño, no un hueco por rellenar.
- Base de espaciado: 4px. Pasos principales: 4, 8, 12, 16, 24, 32, 48, 80px.
- Separación entre secciones: 4rem en escritorio, proporcional en móvil.
- Contenedor de página: márgenes laterales, contenido centrado, sin llenar el ancho completo innecesariamente.
- Más espacio antes de un título que entre título y explicación.

## Elevation & Depth

Sin sombras. Sin glassmorphism. Sin tarjetas. La separación se hace con espacio y, como mucho, líneas finas de 1px. No hay elevación en botones ni hover lift.

## Shapes

Radio cero o mínimo, aplicado de forma consistente. Figuras rectangulares. Controles con radio mínimo (2px). No hay tarjetas anidadas ni iconos en cajas ornamentales.

## Components

### Botones

API nativa de botón, `type="button"` por defecto. Variantes primary y secondary. No es polimórfico; acciones navegan con `<a>`, cambios de estado con `<button>`. Altura y ancho mínimos target (44px), padding de escala, radio control.

| Estado | Tratamiento |
| --- | --- |
| Default | Primary: fondo acento / texto on-accent. Secondary: fondo transparente / borde control / texto acento |
| Hover | Primary: acento-hover. Secondary: fondo surface-muted, borde acento |
| Active | Primary: acento-active. Secondary: fondo seleccionado, texto acento-active |
| Focus visible | Contorno acento de 2px, separado 3px |
| Disabled | Deshabilitado nativo, fondo deshabilitado, texto muted |

No se reduce opacidad ni se elimina contraste. No hay escala en pulsación.

### Enlaces

`.text-link`: texto subrayado con `text-underline-offset` centralizado, foco visible y target táctil. Enlace externo incluye icono y conserva navegación en la misma pestaña.

### Iconografía

Casi ninguna. Solo si comunica algo que el texto no puede. SVG de 20px, trazo único 1.5, `currentColor`, `aria-hidden`, `focusable=false`. Siempre acompañados de texto.

### Campos y estados

Input nativo con label estático arriba (no flotante), helper visible siempre, `aria-describedby`, `aria-invalid`. Error con mensaje específico debajo del campo, no solo color rojo. Sin sombras ni fondos de color en el campo. Trazo fino (1px) como borde, radio mínimo. El único color es el acento en estado activo y el color de error.

### Navegación

Enlaces de texto simples, pocos ítems, sin iconos decorativos. Estado activo claro. Enlace de salto al contenido. Funciona sin JavaScript.

### Proyectos

Presentados como listas editoriales (título, una línea de descripción, stack en mono, año) en lugar de cuadrículas de tarjetas. El caso de estudio ocupa su propia página.

## Movimiento

Discreto. Solo opacidad y transformaciones, 150–250ms, sin rebotes. GSAP únicamente para explicar el pipeline o la arquitectura de los casos de estudio. Todo con `prefers-reduced-motion`. Sin animación en el hero más allá de una aparición discreta. Si una animación no ayuda a entender, se elimina.

## Mobile

Misma jerarquía, una columna, mismo espacio relativo. No es una versión recortada.

## Prueba del propósito

Para cada elemento de la propuesta (navegación, hero, cada sección, cada detalle visual), responder:

> "¿Qué hace este elemento por quien lo lee?"

Si la respuesta es "se ve bien" o "es lo que se suele poner", se elimina.

## Cómo evitar el minimalismo de plantilla

Minimalista no debe significar "clon de portfolio de Vercel/Notion". Qué hace distinto a este diseño:

- Una decisión tipográfica con carácter: IBM Plex Sans como voz principal, IBM Plex Mono solo para detalles técnicos.
- Un detalle propio y funcional: tratamiento de diagramas en SVG de trazo fino y monocromo, con acento solo en el flujo clave.
- Un ritmo de espacio reconocible: escala única basada en 4px, espacio vacío intencional.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Parecer vacío | Cada sección tiene un propósito definido; el espacio vacío es intencional, no falta de contenido |
| Poca jerarquía | El contraste lo da tamaño y peso tipográfico; roles claramente diferenciados |
| Pérdida de personalidad | La tipografía IBM Plex y el tono cálido del fondo dan carácter sin decoración |
| Minimalismo genérico | Ningún elemento es "lo que se suele poner"; todo pasa la prueba del propósito |

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
