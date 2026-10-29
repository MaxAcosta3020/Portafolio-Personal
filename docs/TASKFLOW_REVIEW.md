# TaskFlow Pro — implementación y revisión de fase 7

Fecha: 29 de octubre de 2026. Ruta: `/proyectos/taskflow-pro`.

## Alcance

Caso de estudio de lectura técnica dentro de la dirección B, Plano de sistemas.
Incluye problema, aportación declarada en el CV, arquitectura, sincronización
real-time, automatizaciones, observabilidad, seguridad, decisiones y testing.
La portada enlaza el caso desde «Explorar TaskFlow Pro» y «Leer el caso de TaskFlow Pro».

Next.js App Router con exportación estática. Contenido en
`src/content/taskflow-case-study.ts`, vista en
`src/app/proyectos/taskflow-pro/page.tsx` y diagramas en
`src/components/taskflow-diagrams.tsx`. Tailwind y clases compartidas usan los
tokens existentes. Sin nuevas dependencias, servicios, componentes cliente
propios ni animaciones. Cloudflare sigue pendiente de despliegue.

## Evidencia editorial

Se leyeron mediante el conector GitHub, sin ejecutar TaskFlow Pro, los archivos de la
revisión `9b8a54b9c89a8f7d1b7e8ddc29e6d47a347c1c79` de `MaxAcosta-30/Taskflow-pro`:

- `ARCHITECTURE.md`.
- `server.ts`.
- `lib/socket/index.ts`.
- `lib/socket/publisher.ts`.
- `workers/index.ts`.
- `workers/processors/scheduler.ts`.
- `tests/e2e/flows.test.ts`.
- `package.json`.

Precisiones publicadas:

- El servidor `server.ts` comparte el proceso HTTP entre Next.js y Socket.io porque las API routes son stateless y no mantienen WebSockets persistentes.
- Las API routes publican en Redis Pub/Sub y Socket.io retransmite a los clientes; no hay acceso directo entre API routes y el objeto `io`.
- Los workers BullMQ corren en proceso separado y consumen colas de automatizaciones, notificaciones y limpieza.
- La autenticación WebSocket verifica el JWT del handshake y la blacklist en Redis antes de permitir la conexión.
- JWT con rotación de refresh tokens e invalidación en base de datos; blacklist de access tokens con TTL; cookies httpOnly/Secure/SameSite=Lax; rate limiting (login y general en Nginx); webhooks HMAC-SHA256 con comparación en tiempo constante.
- OAuth de GitHub verificado como existente; Google no se presenta como proveedor implementado.
- Los eventos perdidos durante una desconexión del cliente no se recuperan (catch-up pendiente).
- El scheduler requiere instancia única o coordinación con locks para evitar duplicados (pendiente para escalado horizontal).
- Los dashboards de Grafana y alertas no se revisaron durante esta auditoría.
- RBAC descrito en la arquitectura, pero el middleware de autorización por roles no se revisó en detalle.
- Los tests E2E de Playwright existen; el código se revisó sin ejecutarlos.
- La demo no tiene enlace y se indica su falta de disponibilidad pública.

No se copiaron credenciales, configuraciones privadas ni URLs locales como demos.

## make-interfaces-feel-better — full

Scope: nueva ruta, diagramas, índice, enlaces de regreso y entrada desde la portada.
Framework: Next.js/React. Estilos: Tailwind, `@apply` y tokens CSS existentes.

| Categoría | Evidencia inspeccionada | Resultado |
| --- | --- | --- |
| Tipografía | Plex local, escala y medidas existentes; capturas desktop/mobile y primeros viewports a 320/768/1024/1920px | Clear; títulos y flujo apilado legibles |
| Superficies | Diagramas planos, filetes, navegación, targets comprobados con Playwright | Sin hallazgos |
| Animaciones | CSS heredado de botones/enlaces, sin animaciones de entrada; preferencia reducida comprobada | Clear; solo color/fondo |
| Iconos | `Icon`, SVG oculto a lectores, `currentColor`, trazo y tamaño existentes; flecha orientada según disposición | Clear |
| Rendimiento | Exportación estática, HTML semántico, contenido disponible sin JavaScript, sin paquetes nuevos | Clear; sin benchmark de rendimiento |

### Candidatos descartados

| Ubicación | Candidato | Motivo |
| --- | --- | --- |
| Diagramas | Biblioteca de grafos o zoom interactivo | Los recorridos caben en HTML ordenado y se apilan en móvil; una dependencia no mejora la comprensión |
| Real-time | Simular mensajes en vivo | Parecería una ejecución real y distraería de las relaciones técnicas |
| Controles | Escala al pulsar y sombras | La dirección aprobada prioriza estabilidad, superficies planas y respuestas de color |

## Verificación

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; incluye la nueva ruta estática `/proyectos/taskflow-pro`.
- `npm test`: 30 pruebas aprobadas, incluidas seis del caso de TaskFlow Pro (desktop y mobile).
- Axe sin infracciones en los estados inicial y fuentes abiertas de TaskFlow Pro.
- Teclado: enlace de salto, foco visible, índice, apertura de fuentes y regreso a contacto.
- Orden del diagrama de overview, destinos de fuentes, ausencia de enlace demo y texto de límites (real-time, automatizaciones, observabilidad, seguridad).
- Sin desbordamientos y con targets de 44px a 320/390/768/1024/1920px.
- Lectura y apertura de fuentes sin JavaScript; movimiento reducido sin transición.

No verificado: lector de pantalla real, dispositivos físicos, Safari/Firefox,
hover/active mediante interacción manual, ejecución del backend TaskFlow,
recuperación ante reinicios, ejecución de pruebas E2E, aislamiento de red ni
disponibilidad de una demo. Los estados hover/active heredados se revisaron en
CSS. La comprobación automatizada no equivale a una certificación de
accesibilidad.

## Seguimiento de fases

Demo pública y ejecución de los tests de TaskFlow Pro siguen señaladas como
pendientes, al igual que el despliegue en Cloudflare Pages.
