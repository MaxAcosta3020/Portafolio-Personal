# Revisión de /design-system

Fecha: 28 de octubre de 2026. Skill: `make-interfaces-feel-better`.
Modo: **full**. Alcance: únicamente `/design-system`, componentes compartidos,
tokens y estilos que utiliza. Next.js App Router, React, TypeScript y Tailwind 4
con tokens CSS y estilos compartidos mediante `@apply`. No se revisó un portafolio
completo ni contenido profesional aún no disponible.

## Cobertura

| Categoría | Evidencia inspeccionada | Resultado |
| --- | --- | --- |
| Typography | `tokens.css`, fuentes locales, encabezados y párrafos renderizados en 1440 y 390px; tildes, ñ, medidas calculadas | Clear: 44/32px en H1 y 17/16px en cuerpo; Sans y Mono cargadas |
| Surfaces | Vista completa, índice móvil, botones, etiquetas, preview y tamaños táctiles | 3 hallazgos corregidos, descritos abajo |
| Animations | Hover, active, cambio de estado, transiciones ralentizadas al 10% mediante Web Animations y reduced-motion | Clear: transiciones específicas de color; duración cero con preferencia reducida |
| Icons | `ui.tsx`, flecha, check, enlace externo y error en sus estados | Clear: SVG de 20px, trazo 1.5, currentColor y texto visible |
| Performance | Dependencias, fuentes servidas localmente, exportación, CSS y navegador sin errores de aplicación | Clear dentro del alcance: sin biblioteca de movimiento, entrada animada o will-change; no se midieron Core Web Vitals reales |

## Hallazgos y correcciones

Se agrupan por estabilidad y claridad de interacción. Las ubicaciones señalan la
implementación final. No quedaron hallazgos accionables abiertos en este alcance.

| Severity | Location | Before | After | Why |
| --- | --- | --- | --- | --- |
| MEDIUM | `src/app/design-system/navigation.tsx:33` | Índice completo y nota antes del título en móvil; el título empezaba aproximadamente a 420px del inicio | Índice dentro de details/summary nativo antes de lg; título aproximadamente a 226px en la captura móvil final | Jerarquía y densidad: recuperar espacio de lectura sin esconder la navegación de teclado |
| MEDIUM | `src/app/design-system/interaction-demo.tsx:26` | El toggle cambiaba de “Marcar ejemplo” a “Ejemplo marcado”, alterando identidad accesible y ancho del control | Etiqueta estable, aria-pressed, check y fondo activo | Estabilidad de controles y feedback estático: evitar desplazar botones vecinos y mantener el nombre del toggle |
| LOW | `src/app/design-system/interaction-demo.tsx:52`, `:73`; `src/styles/tokens.css:27` | Los estados de carga/error y mensajes de validación desplazaban los controles siguientes | Alturas mínimas tokenizadas para feedback y validación; sin altura fija ni recorte | Estabilidad espacial: reservar espacio en la demostración, permitiendo crecimiento con contenido o zoom |

## Considerado y descartado

| Location | Candidate | Rejected because |
| --- | --- | --- |
| `src/app/globals.css`, `.button` | Escala 0.96 al pulsar | La dirección B prioriza estabilidad; el cambio de color y la semántica de pulsación ya dan feedback suficiente |
| `src/app/design-system/interaction-demo.tsx:54` | Shimmer en el estado de carga | Es una demostración controlada por el usuario; el movimiento continuo no añade información y complicaría la preferencia reducida |
| `src/app/design-system/page.tsx`, preview | Añadir sombra, captura ficticia o marco de dispositivo | Contradice la superficie plana aprobada y la falta de referencias reales; el espacio se identifica como evidencia pendiente |

## Verificación

- `npm run lint`: sin errores ni advertencias.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; exporta `/`, `/_not-found` y `/design-system` a `out/`.
- `npm test`: 8 pruebas correctas, en Chromium 156, escritorio 1440×1000 y móvil
  emulado 390×844; incluye comprobación de desbordamiento a 320px.
- Pruebas: navegación y enlace de salto, foco de main, radio con flechas, toggle
  con Espacio, botón disabled, validación y recuperación, details con Enter,
  targets de al menos 44px, robots noindex y reduced-motion.
- Axe: cero infracciones reportadas para las reglas WCAG A/AA incluidas en la
  ejecución, en estado inicial, error y listo. Esto no demuestra conformidad total.
- Inspección de estados en navegador: fondo normal `rgb(25, 92, 82)`, hover
  `rgb(18, 75, 67)`, active `rgb(13, 57, 51)`; foco de teclado de 2px con offset 3px.
- Transiciones observadas al 10% de velocidad: sin desplazamiento geométrico;
  no se aplicaron secuencias de entrada. Preferencia reducida: `transition-duration: 0s`.
- Consola de aplicación sin errores en la inspección; IBM Plex Sans y Mono en
  estado loaded. Sin desbordamiento horizontal en las capturas comprobadas.
- `impeccable detect --json src/app/globals.css src/styles/tokens.css src/components/ui.tsx src/app/design-system`: `[]`.
- Capturas inspeccionadas en `.impeccable/review/`: desktop completo y primer
  encuadre, mobile completo y primer encuadre, interacciones, errores y preview
  móvil. Son artefactos locales ignorados por Git.
- `src/app/page.tsx` continúa devolviendo `null`; no se construyó el portafolio.

No verificado: lectura con NVDA/VoiceOver u otro lector real, Safari/Firefox,
dispositivos físicos, navegación con zoom real del navegador, preferencias de
contraste del sistema operativo y métricas de rendimiento en producción.

Avisos del entorno: Playwright usa el binario de compatibilidad Ubuntu para este
Linux; ejecutó las pruebas correctamente. El runner emite un aviso NO_COLOR /
FORCE_COLOR sin afectar el resultado. npm conserva el aviso de postinstall de
unrs-resolver; no se habilitaron scripts adicionales y las comprobaciones pasan.

## Verdict

**Approve** para el alcance inspeccionado tras corregir los tres hallazgos.
Sin hallazgos accionables pendientes. No verificado: lector de pantalla real,
otros motores de navegador, dispositivos físicos, zoom real, contraste del SO
y rendimiento en producción.
