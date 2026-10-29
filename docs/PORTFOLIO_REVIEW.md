# Revisión de la homepage — fase 5

Fecha: 28 de octubre de 2026. Dirección vigente: **B · Plano de sistemas**.
Skills: Impeccable y `make-interfaces-feel-better`, modo **quick**.

## Alcance y criterio

Revisión de `/`: navegación, hero, dos proyectos destacados, seis sistemas
backend, perfil y formación, Outlier como experiencia, tecnologías agrupadas,
CTA, contacto y footer. El recorrido principal permite entender el enfoque,
examinar el trabajo, abrir los detalles técnicos y contactar.

Next.js App Router, React, TypeScript y Tailwind 4. La implementación usa los
tokens de `src/styles/tokens.css`, utilidades y estilos compartidos de
`src/app/globals.css`; la composición está en `src/app/page.tsx` y
`src/components/portfolio.tsx`. Se contrastó con `DESIGN.md`, el sidecar local
`.impeccable/design.json` y el contrato `.impeccable/surfaces/home.md`.
La revisión quick informa hallazgos HIGH y MEDIUM del recorrido principal;
no constituye una auditoría exhaustiva de cada navegador o estado.

La revisión independiente de acabado inspeccionó fuente y capturas, y emitió
**ship**. Las comprobaciones ejecutables que figuran abajo fueron realizadas
por el agente implementador; el revisor y este pase documental no las repitieron.

## Cobertura

| Categoría | Evidencia inspeccionada | Resultado |
| --- | --- | --- |
| Typography | Escala de tokens, clases del hero y proyectos, capturas del primer viewport y página completa en 320, 390, 768, 1440 y 1920px | Clear: jerarquía y escala IBM Plex existentes; títulos balanceados, lectura contenida y Mono reservada a código y numeración |
| Surfaces | Navegación visible, retícula adaptable, artículos destacados, filas compactas, detalles abiertos y contacto | Clear: superficies planas, separadores estructurales, contraste y espaciado coherentes; sin tarjetas ornamentales ni desbordamiento observado |
| Animations | Reglas de transición, hover/active/focus en fuente y comprobación automatizada de movimiento reducido | Clear: transiciones específicas de color y fondo de 140ms; duración cero con movimiento reducido, sin entradas, escalado ni secuencias complejas |
| Icons | Uso de `Icon` en acciones y perfiles, fuente compartida y capturas | Clear: SVG con `currentColor`, tamaño y trazo compartidos, texto visible acompañante y sin cajas decorativas |
| Performance | Imports de homepage, disclosure nativo, estilos compartidos y resultado del build estático | Clear dentro del alcance: cero dependencias y cero componentes cliente añadidos para la homepage; sin `transition: all` ni `will-change` especulativo. Sin medición de rendimiento de producción |

## Hallazgos

**No actionable interface-polish findings.** No quedaron hallazgos accionables
HIGH o MEDIUM ni se requirieron cambios visuales tras la revisión independiente.
Se corrigió únicamente el encuadre de una captura de detalles: el test ahora
enfoca y desplaza el bloque antes de capturar el viewport. El artefacto anterior
de captura no representaba un defecto de la interfaz.

## Candidatos considerados y descartados

| Ubicación | Candidato | Motivo para descartarlo |
| --- | --- | --- |
| `src/app/globals.css`, acciones `.button` | Añadir escala al pulsar | La dirección aprobada exige estabilidad geométrica. Color y foco ya comunican el estado sin movimiento adicional |
| `src/app/page.tsx`, titular del hero | Aumentar el tamaño del titular | La escala display vigente conserva legibilidad y equilibrio con el flujo de Hangar; ampliarla alteraría el sistema fijado |
| `src/app/page.tsx` y `src/components/portfolio.tsx`, hero y proyectos | Añadir imágenes o pantallas de proyectos | No hay activos reales disponibles. Inventarlos debilitaría la evidencia; el flujo de Hangar y los resúmenes usan contenido documentado |

## Evidencia visual

El revisor independiente validó las 14 capturas finales locales de
`.impeccable/review/`, ignoradas por Git:

- Página completa y primer viewport: `portfolio-desktop{,-first}.png` (1440px),
  `portfolio-mobile{,-first}.png` (390px), `portfolio-320{,-first}.png`,
  `portfolio-768{,-first}.png` y `portfolio-1920{,-first}.png`.
- Detalles abiertos y contacto: `portfolio-desktop-details.png`,
  `portfolio-mobile-details.png`, `portfolio-desktop-contact.png` y
  `portfolio-mobile-contact.png`.

El contraste con fuente y tokens confirmó la paleta mineral, tinta petróleo,
acento verde, tipografía Plex y superficies planas. La navegación se mantiene
visible en móvil, la composición se apila en anchos estrechos y el ancho máximo
contiene la lectura en pantallas grandes.

## Verificación ejecutada

Resultados comunicados por el agente implementador y contrastados con el alcance
de `tests/homepage.spec.ts` y `playwright.config.ts`:

| Comprobación | Resultado observado |
| --- | --- |
| `npm run lint` | Correcto |
| `npm run typecheck` | Correcto |
| `npm run build` | Correcto; exportación estática de `/`, `/_not-found` y `/design-system` |
| `npm test` | 18 aprobadas: 4 de contenido, 8 del sistema de diseño y 6 de homepage |
| Reejecución de las dos pruebas de navegación/detalles/contacto tras ajustar la captura | Ambas aprobadas, escritorio y móvil; sin cambio de UI |
| Detector Impeccable sobre `src/app/page.tsx`, `src/components/portfolio.tsx` y `src/app/globals.css` | `[]`, sin hallazgos |

La suite comprueba axe en los estados inicial y con detalles abiertos; salto al
contenido, foco visible y navegación por anclas mediante teclado; apertura nativa
de detalles; destino `mailto`; omisión del CV no disponible; targets de al menos
44 × 44px; duración cero con movimiento reducido; ausencia de desbordamiento en
320, 390, 768, 1024 y 1920px. El aviso `NO_COLOR`/`FORCE_COLOR` es de configuración
de color de consola y no afectó los resultados.

## Compatibilidad del sistema y límites editoriales

Esta fase extiende el sistema existente sin añadir tokens, dependencias ni
componentes cliente a la homepage. `DESIGN.md`, `src/styles/tokens.css` y
`.impeccable/design.json` se preservan. El índice lateral y las demos descritos
en el documento de fase 3 corresponden a `/design-system`; la homepage utiliza
su propia composición y navegación horizontal según el contrato de superficie.

No se canoniza ni repara el desajuste descriptivo preexistente del frontmatter:
`typography.label` nombra IBM Plex Mono, mientras `text-label` define tamaño e
interlineado y hereda Sans salvo uso explícito de `font-mono`. Los tokens de
implementación siguen siendo la fuente única de valores. No se necesita cambiar
la identidad visual para documentar esta extensión.

El contenido procede de `src/content/` y de sus fuentes registradas. Hangar y
TaskFlow Pro son resúmenes `summary-ready`; los seis sistemas compactos están
`ready`. No se presentan como auditorías independientes. Siguen pendientes los
relatos completos, repositorios, demos, evidencia de resultados y una versión
pública descargable del CV. Outlier permanece exclusivamente en experiencia.
La interfaz omite enlaces y bloques sin contenido, sin inventar material.

## Veredicto

**Approve** para la implementación base de fase 5, consistente con el **ship**
de la revisión independiente. Sin hallazgos accionables pendientes.

**No verificado:** dispositivos físicos, lector de pantalla real, otros motores
de navegador, disponibilidad de enlaces externos, entrega de correo y rendimiento
en producción. No se realizó reproducción de transiciones al 10% en el panel de
animaciones; se revisaron sus reglas y la prueba de movimiento reducido. La
comprobación de axe no equivale a una certificación integral de accesibilidad.
Cloudflare continúa como alojamiento previsto: no se ha desplegado ni se avanza
a otra fase sin el siguiente prompt explícito.
