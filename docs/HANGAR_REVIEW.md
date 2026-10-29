# Hangar — implementación y revisión de fase 6

Fecha: 29 de octubre de 2026. Ruta: `/proyectos/hangar`.

## Alcance

Caso de estudio de lectura técnica dentro de la dirección B, Plano de sistemas.
Incluye problema, aportación declarada en el CV, pipeline, arquitectura,
workflow, aislamiento, logs, decisiones y testing. La portada enlaza el caso
desde «Explorar Hangar» y «Leer el caso de Hangar».

Next.js App Router con exportación estática. Contenido en
`src/content/hangar-case-study.ts`, vista en `src/app/proyectos/hangar/page.tsx`
y diagramas en `src/components/hangar-diagrams.tsx`. Tailwind y clases compartidas
usan los tokens existentes. Sin nuevas dependencias, servicios, componentes
cliente propios ni animaciones. Cloudflare sigue pendiente de despliegue.

## Evidencia editorial

Se leyeron mediante el conector GitHub, sin ejecutar Hangar, los archivos de la
revisión `62f02735668eb66e65a06041eb4277525399f174` de `MaxAcosta-30/Setup-hangar`:

- `api/internal/activities/deploy_activities.go`.
- `api/internal/workflows/deploy_workflow.go`.
- `api/internal/handler/apps.go` y `ws.go`.
- `api/internal/db/migrations/001_initial.sql`.
- `dashboard/app/components/LogStream.tsx`.
- `docs/adr/001-por-que-go-y-temporal.md`.
- `api/tests/deploy_integration_test.go`.

Precisiones publicadas:

- `route` es una etapa conceptual dentro de `RunContainer`, no otra actividad.
- La conexión fallida a la red de Traefik solo genera una advertencia; `success`
  no prueba disponibilidad HTTP. El workflow ignora errores al guardar su estado final.
- La unidad visible de separación es la app. No se acreditan cuentas y permisos
  completos por organización ni aislamiento lateral por compartir red con Traefik.
- 128 MiB, 0.25 CPU y la política de reintentos son configuración, no métricas.
- Los logs corresponden a actividades y build, no al stdout general de la app.
- El historial precede a la suscripción; no se promete continuidad sin pérdidas.
- Los tests consultan estado y logs. La comprobación de red puede omitirse;
  no demuestra aislamiento ni incluye una petición HTTP a la app desplegada.
- La demo no tiene enlace y se indica su falta de disponibilidad pública.

No se copiaron credenciales, configuraciones privadas ni URLs locales como demos.
Los dos contenedores del esquema son instancias ilustrativas de la topología,
identificadas como tales, sin atribuir clientes ni ejecuciones reales.

## make-interfaces-feel-better — full

Scope: nueva ruta, diagramas, índice, enlaces de regreso y entrada desde la portada.
Framework: Next.js/React. Estilos: Tailwind, `@apply` y tokens CSS existentes.

| Categoría | Evidencia inspeccionada | Resultado |
| --- | --- | --- |
| Tipografía | Plex local, escala y medidas existentes; capturas desktop/mobile y primeros viewports a 320/768/1024/1920px | Clear; títulos y flujo apilado legibles |
| Superficies | Diagramas planos, filetes, navegación, targets comprobados con Playwright | Un hallazgo corregido |
| Animaciones | CSS heredado de botones/enlaces, sin animaciones de entrada; preferencia reducida comprobada | Clear; solo color/fondo; cámara lenta no aplica a movimiento geométrico inexistente |
| Iconos | `Icon`, SVG oculto a lectores, `currentColor`, trazo y tamaño existentes; flecha orientada según disposición | Clear |
| Rendimiento | Exportación estática, HTML semántico, contenido disponible sin JavaScript, sin paquetes nuevos | Clear; sin benchmark de rendimiento |

### Hallazgo corregido: área táctil

| Severidad | Ubicación | Antes | Después | Motivo |
| --- | --- | --- | --- | --- |
| MEDIUM | `src/app/globals.css:142`, índice de Hangar | «Logs» medía menos de 44px de ancho | `min-w-target` en enlaces del índice; 44px mínimo en ambos ejes | Minimum Hit Area: selección más fiable en móvil sin cambiar la escala tipográfica |

Se corrigió también el procedimiento de captura: Chromium puede desplazar
visualmente elementos fijos al capturar un elemento más alto que el viewport.
Las capturas de secciones usan el viewport real; esto no requirió alterar la UI.

### Candidatos descartados

| Ubicación | Candidato | Motivo |
| --- | --- | --- |
| Diagramas | Biblioteca de grafos o zoom interactivo | Los recorridos caben en HTML ordenado y se apilan en móvil; una dependencia no mejora la comprensión |
| Pipeline | Animar paquetes y simular logs | Parecería una ejecución real y distraería de las relaciones técnicas |
| Controles | Escala al pulsar y sombras | La dirección aprobada prioriza estabilidad, superficies planas y respuestas de color |

## Verificación

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; incluye la nueva ruta estática. La primera ejecución
  restringida no pudo leer la salida de TypeScript; funcionó con la ejecución autorizada.
- `npm test`: 24 pruebas aprobadas, incluidas seis del caso de Hangar.
- Axe sin infracciones en los estados inicial y fuentes abiertas de Hangar.
- Teclado: enlace de salto, foco visible, índice, apertura de fuentes y regreso a contacto.
- Orden del pipeline, destinos de fuentes, ausencia de enlace demo y texto de límites.
- Sin desbordamientos y con targets de 44px a 320/390/768/1024/1920px.
- Lectura y apertura de fuentes sin JavaScript; movimiento reducido sin transición.
- Detector Impeccable sobre los cinco archivos visuales modificados: `[]`.

La primera ejecución de tests comenzó antes de terminar la exportación y leyó
la versión anterior; se descartó y se repitió después del build. La siguiente
identificó el target de «Logs», corregido antes de la ejecución completa aprobada.

No verificado: lector de pantalla real, dispositivos físicos, Safari/Firefox,
hover/active mediante interacción manual, ejecución del backend Hangar,
recuperación ante reinicios, aislamiento de red ni disponibilidad de una demo.
Los estados hover/active heredados se revisaron en CSS. La comprobación automatizada
no equivale a una certificación de accesibilidad.

Revisión independiente de Impeccable y contraste documental: pendientes de cerrar.
