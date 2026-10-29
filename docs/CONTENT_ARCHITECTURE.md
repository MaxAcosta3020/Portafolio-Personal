# Arquitectura de información y contenido — fases 4 a 6

Actualizado: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.
La fase 4 preparó datos y decisiones editoriales. La fase 5 implementa la
homepage con resúmenes sustentados y actualiza las reglas de publicación.
La fase 6 añade el caso completo de Hangar, con contenido separado de la vista.

## Fuentes y alcance

Se leyó el PDF local `CV_MAX-2.pdf`, encontrado en la raíz al continuar la fase.
Tiene dos páginas. Sus datos sustituyen los vacíos de la estrategia provisional
de fase 1. `references/` contiene únicamente su README: no hay imágenes, videos,
ADRs, reportes de tests ni documentación adicional de proyectos disponible.

El CV permite atribuir tecnologías y trabajo a cada proyecto, pero sigue siendo
una declaración de su autor. Tras la fase 5 se inspeccionaron READMEs, árboles y
archivos seleccionados de GitHub, documentados en [GITHUB_REVIEW.md](GITHUB_REVIEW.md).
No se ejecutaron los proyectos ni sus pruebas. Cada
afirmación estructurada conserva documento y página/sección; los enlaces de
contacto se transcribieron del CV y no se comprobó su disponibilidad en vivo.
El PDF original queda ignorado por Git, sin moverlo ni publicarlo automáticamente.
La compilación no necesita acceso al original.

## Navegación y rutas

| Propuesta inicial | Decisión | Motivo |
| --- | --- | --- |
| Home | El nombre enlaza a `/` | Evita duplicar una opción de inicio |
| Work / Projects | Proyectos → `/#proyectos` | Nombre claro para ambos públicos; engloba los dos niveles de proyectos |
| About | Sobre mí → `/#sobre-mi` | Perfil, formación y experiencia caben en la página principal |
| Resume | Acción contextual «Descargar CV» cuando exista un PDF público | No necesita página propia ni un enlace sin archivo |
| Contact | Contacto → `/#contacto` | Correo directo y perfiles profesionales; sin formulario ni backend |

Una sola página principal y el caso `/proyectos/hangar`, enlazado desde su preview
y desde el flujo del hero. `/proyectos/taskflow-pro` permanece pendiente de su fase.
No se añaden páginas para los seis sistemas
secundarios, un listado duplicado de proyectos ni un blog. `/design-system`
continúa siendo documentación de desarrollo.

El contenido está redactado en español, coherente con el brief y `lang="es"`.
No se añade traducción ni infraestructura de idiomas.

## Lectura de la homepage

1. **Identidad y foco.** Nombre, desarrollador Full Stack y estudiante de
   Ingeniería en Sistemas Computacionales. Titular: «Desarrollo Full Stack con
   foco en backend y APIs». Presentación breve y especialidad en sistemas en
   tiempo real; sin atribuir seniority, disponibilidad ni años de experiencia.
2. **Dos acciones.** «Hablemos» lleva a Contacto, válido para proyectos y empleo;
   «Ver proyectos» lleva al trabajo. El correo procede de la cabecera del CV.
3. **Casos de estudio.** Hangar primero, TaskFlow Pro después. Dos bloques de
   lectura con resumen, aportación y tema técnico. Hangar muestra orquestación,
   despliegue y aislamiento; TaskFlow muestra colaboración y automatización.
   Orden editorial por complementariedad, no por impacto comercial supuesto.
4. **Ingeniería y sistemas backend.** Lista compacta con nombre, propósito,
   enfoque técnico, tecnologías pertinentes y enlaces cuando existan. No seis
   copias del tratamiento de un caso extenso. Los nombres de las tecnologías
   generales del perfil nunca se distribuyen automáticamente entre proyectos.
5. **Sobre mí.** Formación y enfoque técnico. Outlier figura exclusivamente como
   experiencia: Entrenador de Inteligencia Artificial, remoto, mayo–julio de 2025.
   No se presenta como desarrollo de software ni como cliente.
6. **Contacto.** Correo y enlaces de GitHub y LinkedIn del CV. Sin prometer tiempos
   de respuesta. CV descargable solo cuando se prepare su versión pública.

`src/content/site.ts` contiene el orden, etiquetas, acciones y referencias por ID;
`profile.ts` contiene el texto de presentación, formación, experiencia y contacto.

## Modelo de los casos principales

| Campo | Contenido y regla |
| --- | --- |
| `summary` | Resumen breve del sistema y su función |
| `context` | Proyecto autodirigido de portafolio; no producto con clientes conocidos |
| `problem` | Necesidad original y restricciones; pendiente de relato del autor |
| `contribution` | Trabajo que Max declara haber realizado, sin inferir autoría exclusiva |
| `architecture` | Componentes y relaciones expresamente descritos |
| `technicalDecisions` | Decisión, razón, alternativas y compromisos; listas vacías si estos últimos no constan |
| `stack` | Tecnología y uso concreto, cada relación con su fuente |
| `operation` | Flujo implementado descrito en la fuente |
| `challenges` | Dificultades reales documentadas; no convertir funciones en problemas históricos inventados |
| `testing` | Qué se probó y qué evidencia se revisó; declarar la ausencia de reportes |
| `security` | Controles concretos, sin certificar seguridad ni invulnerabilidad |
| `infrastructure` | Componentes operativos documentados; no inferir proveedor ni despliegue público |
| `results` | Resultados observados en código/demo/mediciones; no reutilizar una funcionalidad declarada como resultado comprobado |
| `repository`, `demo` | Enlaces exactos con fuente; `null` cuando se desconocen |

Los seis sistemas usan el modelo compacto: resumen, aportación, enfoque técnico,
stack y enlaces. Las variantes están tipadas, sin CMS, MDX, nuevas dependencias
ni validación adicional en tiempo de ejecución.

## Estado editorial y reglas para la futura interfaz

- En fase 5 se revisaron los resúmenes contra las fuentes registradas. Hangar y
  TaskFlow Pro pasaron a `summary-ready`. La fase 6 pasa Hangar a `ready` tras
  contrastar workflow, actividades, handler WebSocket, esquema de datos, ADR y tests.
  La fase 7 pasa TaskFlow Pro a `ready` tras contrastar arquitectura, servidor
  compartido, Socket.io, publisher, workers, scheduler, pruebas y paquete. Los seis
  sistemas compactos están `ready`.
- `ready` significa listo editorialmente, no auditado de forma independiente.
  Para un sistema compacto: resumen, enfoque y stack con fuente; la aportación
  personal puede quedar pendiente y se omite de la lista compacta. Esto aplica
  a FreelanceGuard, cuya versión pública difiere del CV.
  Para un caso: además contexto, problema, arquitectura, funcionamiento y al
  menos una decisión explicada. No se exige inventar una métrica ni una demo.
- La homepage muestra casos `summary-ready` o `ready` y sistemas `ready`; omite `draft`.
  Una futura ruta de caso completo requerirá `ready` y sus campos narrativos.
  No producir cards «próximamente», secciones vacías ni botones deshabilitados
  para rellenar el portfolio. La distinción es editorial, no un estado público.
- `null` y `[]` representan información no disponible, no ausencia comprobada
  de una función. Omitir esos bloques y enlaces; nunca renderizar `href="#"`.
- Si un caso está listo pero un apartado opcional sigue vacío, omitirlo.
  Conservar cualquier limitación importante en la redacción publicada.
- Los resultados cuantitativos requieren valor, unidad, método, condiciones,
  fecha y referencia a la medición. Hoy `results` está vacío en ambos casos.
- No afirmar «en producción» por la expresión del CV «nivel producción».
  No usar «instantáneo», «baja latencia», «optimizado» o «reduje la carga» como
  resultados medidos sin reportes. Los límites de cgroups descritos en el CV
  son configuración, no mejoras de rendimiento ni prueba de aislamiento.
- No asignar Traefik, PostgreSQL, TypeScript u otras habilidades generales a un
  proyecto cuyo apartado no sustente esa relación. No añadir alternativas o
  tradeoffs retrospectivos solo para que el caso parezca más profundo.

## Material pendiente, por prioridad

| Alcance | Qué falta |
| --- | --- |
| Hangar | Destinatarios, desafíos, validación del aislamiento, reportes de integración, estado de ejecución y capturas; el repo y ADR de Temporal ya se revisaron |
| TaskFlow Pro | Problema original, destinatarios, restricciones, desafíos, reportes de pruebas, estado de ejecución y capturas; arquitectura e infraestructura ya documentadas |
| Seis sistemas | Validación de pruebas y límites; repositorios ya enlazados, resumen compacto contrastado con la documentación pública |
| Resultados | Evidencia reproducible si existe; no es obligatorio tener métricas comerciales |
| Enlaces y CV | Comprobar perfiles y preparar una versión pública descargable; no usar el PDF local como URL |
| Formación | El CV declara egreso estimado 2029; no se publica «5.º semestre» porque envejece y no tiene fecha de actualización |

## Verificación

Los tests de contenido verifican referencias de navegación y agrupación,
identificadores únicos, trazabilidad, requisitos de publicación, destinos
explícitos y evidencia exigida a las métricas. No verifican por sí solos que
un texto sea verdadero ni que una URL siga disponible: eso requiere revisar la
fuente y el destino. La revisión del sistema visual existente continúa con
Playwright y axe. El build conserva la exportación estática.

Resultado de la fase 5: lint, typecheck y build correctos; 18 pruebas aprobadas
(4 de contenido, 8 del sistema de diseño y 6 de homepage). El build genera `/`,
`/_not-found` y `/design-system`; no se añaden rutas vacías para los casos.
La fase 6 agrega `/proyectos/hangar` y seis pruebas del caso; su resultado y
revisión visual se registran en [HANGAR_REVIEW.md](HANGAR_REVIEW.md).
Playwright emite un aviso de configuración de color de consola
(`NO_COLOR`/`FORCE_COLOR`), sin impacto en las comprobaciones.

No avanzar a otra fase sin el siguiente prompt explícito.
