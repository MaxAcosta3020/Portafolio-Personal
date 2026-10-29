# Movimiento — revisión de fase 8 (Prompt 8)

Fecha: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.

## Alcance

Auditoría de movimiento de la interfaz existente y aplicación de animación
narrativa con GSAP únicamente donde tiene sentido técnico, sin romper la
dirección B aprobada. No se añade movimiento a todo.

## Auditoría de la interfaz existente

Antes de aplicar movimiento, la interfaz solo usaba transiciones CSS de color
y fondo (140ms, `cubic-bezier(0.2, 0, 0, 1)`) en botones, enlaces, nav y
summary. No había animaciones de entrada, ni stagger, ni `will-change`
especulativo, ni transform geométrico. `prefers-reduced-motion: reduce`
ya fijaba duración a 0ms.

## Aplicación de Prompt 8

### Microinteracciones (transitions.dev)

Ya cubiertas por el CSS existente: hover/focus/active de botones, enlaces de
texto, enlaces de navegación, summary y botones secundarios. Targets táctiles
≥44px verificados con Playwright a 320/390/768/1024/1920px. No se añadió
movimiento nuevo a los controles; se conservan solo respuestas de color y
fondo, sin escala ni elevación en pulsación, acorde a la dirección B.

### Animaciones narrativas (GSAP)

Aplicada únicamente al pipeline de Hangar (`clone → build → run → route`),
que es el recorrido más narrativo del portafolio:

- Componente `src/components/pipeline-reveal.tsx` (`"use client"`).
- Reveal secuencial (stagger 0.12s) de los pasos del flujo al entrar en
  viewport, usando solo `opacity` y `transform: translateY` (sin layout
  shifts).
- Duración 0.4s, ease `power2.out`, interruptible (`kill` en unmount y al
  desconectar el `IntersectionObserver`).
- Respeta `prefers-reduced-motion: reduce`: duración cero, pasos visibles
  sin animación.
- Si el contenedor ya está visible al montar, no se ocultan los pasos
  (evita flash); se anima solo lo que entra por scroll.

Archivos modificados:

- `src/components/pipeline-reveal.tsx`: nuevo, animación del pipeline.
- `src/app/proyectos/hangar/page.tsx`: envuelve el `FlowDiagram` del
  pipeline con `PipelineReveal`.
- `package.json`: añade `gsap` como dependencia.
- `README.md`: documenta el uso de GSAP limitada al pipeline de Hangar.

### Reglas del Prompt 8 verificadas

| Regla | Estado |
| --- | --- |
| No retrasar navegación | Animación solo del pipeline, no bloquea rutas |
| No ocultar información | Pasos visibles sin JS y con reduced motion |
| No layout shifts | Solo opacity y transform |
| No degradar mobile | Verificado a 320/390px, targets ≥44px |
| No depender completamente del scroll | Contenido accesible sin animación |
| No tedioso en segunda visita | Animación sutil, una sola vez por entrada |
| prefers-reduced-motion | Duración cero, sin movimiento geométrico |
| Interrumpible | `gsap.killTweensOf` y `clearProps` en unmount |
| Priorizar transform y opacity | Solo esas propiedades se animan |

## Verificación

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; la página `/proyectos/hangar` se prerenderiza
  estática y el componente cliente se hidrata sin errores.
- `npm test`: 30 pruebas aprobadas (incluido el caso de Hangar con capturas
  responsive y teclado).
- Axe sin infracciones en la página de Hangar.
- Lectura sin JavaScript: los pasos del pipeline están en el HTML estático.

## No verificado

- Medición real de FPS/INP con herramientas de rendimiento (no hay entorno de
  benchmark configurado; las animaciones usan propiedades baratas y son breves).
- Dispositivos físicos, Safari, Firefox.
- Lector de pantalla real con GSAP activa.

## Seguimiento

Demo pública y ejecución de los tests de backend de Hangar y TaskFlow Pro
siguen pendientes, al igual que el despliegue en Cloudflare Pages.
