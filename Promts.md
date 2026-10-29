
# PORTAFOLIO DIGITAL — MAX ALEXANDER ACOSTA VALENCIA

## REGLA GENERAL PARA CODEX

Este proyecto se va a desarrollar por fases.

No avances a la siguiente fase hasta que yo te proporcione explícitamente el siguiente prompt.

En cada fase:

1. Analiza antes de modificar.
2. No inventes información sobre mí.
3. No inventes métricas de proyectos.
4. No inventes clientes.
5. No inventes experiencia laboral.
6. No afirmes que una tecnología se utilizó en un proyecto si las referencias no lo sustentan.
7. Mantén el proyecto ejecutable después de cada fase.
8. Ejecuta lint, typecheck, tests y build cuando correspondan.
9. Reporta cualquier error que permanezca.
10. No almacenes secretos, API keys, contraseñas ni tokens dentro del repositorio.
11. No continúes automáticamente hacia otra fase.
12. Al terminar, explícame:
   - qué hiciste;
   - qué archivos importantes modificaste;
   - qué verificaste;
   - qué queda pendiente;
   - qué debo revisar visualmente.

El sitio no debe tener apariencia genérica producida por IA.

Evita específicamente:

- landing SaaS genérica;
- gradientes morado/azul usados porque sí;
- tarjetas dentro de tarjetas;
- cuadrículas infinitas de cards idénticas;
- abuso de border-radius;
- iconos dentro de cuadrados redondeados repetidos;
- blobs decorativos;
- glassmorphism indiscriminado;
- textos enormes sin intención;
- animaciones gratuitas;
- estética de dashboard para secciones que no son dashboards;
- terminal falsa como recurso visual principal;
- efectos que reduzcan legibilidad;
- sacrificar UX por demostrar animaciones.

El objetivo es transmitir ingeniería, criterio técnico, capacidad de producto y atención al detalle.

---

# PROMPT 0 — PREPARACIÓN DEL ENTORNO Y SKILLS

Estás trabajando en el portafolio profesional de Max Alexander Acosta Valencia.

TODAVÍA NO DISEÑES NI CONSTRUYAS LA INTERFAZ.

Primero prepara el entorno de trabajo.

## Objetivo

Crear una base limpia y preparar las skills de diseño y movimiento que utilizaremos durante el proyecto.

## Tareas

Comprueba:

- versión de Node.js;
- npm;
- Git;
- estado actual de la carpeta;
- si existe ya un proyecto;
- si existe un repositorio Git;
- si hay archivos que no debemos sobrescribir.

Si el proyecto todavía no existe, prepara una aplicación moderna con:

- Next.js;
- App Router;
- TypeScript;
- Tailwind CSS;
- ESLint;
- estructura `src/`.

No agregues todavía componentes visuales innecesarios.

Instala estas skills compatibles con Codex:

```bash
npx impeccable install
npx skills add Jakubantalik/transitions.dev
npx skills add jakubkrehel/make-interfaces-feel-better
npx skills add https://github.com/greensock/gsap-skills
```

Después verifica que Codex pueda detectar:

- `$impeccable`
- transitions.dev
- make-interfaces-feel-better
- las skills oficiales de GSAP

Si alguna instalación requiere reiniciar Codex, detener el proceso o una acción que tú no puedes realizar, indícamelo claramente.

No intentes saltarte autenticaciones.

## Git

Crea o actualiza `.gitignore` para excluir:

- `.env`
- `.env.local`
- `.env.*.local`
- archivos temporales;
- `.impeccable/` si corresponde;
- `references/raw/`;
- artefactos locales que no deban versionarse.

## Resultado esperado

Quiero:

- entorno funcionando;
- skills instaladas;
- proyecto ejecutándose localmente;
- Git preparado;
- ningún diseño construido todavía.

DETENTE AL FINAL.

---

# PROMPT 1 — AUDITORÍA DEL MATERIAL Y ESTRATEGIA

Antes de desarrollar la página, analiza todo el material de referencia disponible dentro de `references/`.

Busca especialmente:

- CV;
- documentos;
- imágenes;
- videos de referencia.

No copies visualmente los videos.

Úsalos para entender principios.

## Contexto principal

El propietario del portafolio es:

Max Alexander Acosta Valencia.

Es estudiante de Ingeniería en Sistemas Computacionales y desarrollador Full Stack.

El CV muestra experiencia práctica principalmente en:

- .NET / ASP.NET Core;
- Go;
- Node.js / TypeScript;
- Next.js;
- APIs;
- sistemas real-time;
- Redis;
- Docker;
- Temporal.io;
- seguridad;
- OAuth / OpenID Connect;
- gRPC;
- observabilidad;
- testing;
- bases de datos;
- Clean Architecture.

No presentes a Max como una agencia.

No lo presentes como experto absoluto en todas estas áreas.

No exageres seniority.

Debe percibirse como un desarrollador técnicamente ambicioso que ya ha construido sistemas complejos.

## Audiencia

El portfolio debe funcionar simultáneamente para:

### Clientes potenciales

Personas o empresas que podrían contratar desarrollo de:

- plataformas web;
- backend;
- APIs;
- sistemas administrativos;
- automatización;
- integraciones;
- aplicaciones real-time;
- infraestructura de aplicaciones.

### Reclutadores / equipos técnicos

Personas que quieran evaluar:

- conocimiento;
- arquitectura;
- calidad de proyectos;
- stack;
- capacidad de aprendizaje;
- profundidad técnica.

## Proyectos prioritarios

Analiza Hangar y TaskFlow Pro como candidatos para casos de estudio principales.

Analiza los demás sistemas del CV para una sección secundaria:

- Secure Vault API;
- SafeLedger API;
- FortressID;
- Secure Inventory API;
- Sentinel IoT;
- FreelanceGuard-ERP.

Analiza también la experiencia en Outlier, pero NO la presentes como proyecto de software.

## Entregables

Crea:

`docs/PORTFOLIO_STRATEGY.md`

Debe contener:

- público objetivo;
- propuesta de valor;
- mensaje principal;
- jerarquía de contenido;
- proyectos prioritarios;
- información que falta;
- riesgos de hacer afirmaciones no sustentadas;
- CTA principal;
- CTA secundario;
- estructura inicial del sitio.

TODAVÍA NO CONSTRUYAS LA UI.

DETENTE.

---

# PROMPT 2 — DIRECCIÓN VISUAL CON IMPECCABLE

Utiliza `$impeccable`.

No programes todavía la página completa.

Quiero explorar direcciones visuales.

## Objetivo

Crear una identidad visual que comunique:

- ingeniería;
- precisión;
- sistemas;
- profundidad técnica;
- madurez;
- movimiento controlado;
- atención al detalle.

Sin caer en:

- estética hacker cliché;
- Matrix;
- terminal falsa como diseño completo;
- SaaS genérico;
- portfolio de diseñador exageradamente artístico;
- cyberpunk;
- neón excesivo.

## Trabajo

Utiliza Impeccable para establecer el contexto del producto.

Genera o actualiza:

- `PRODUCT.md`;
- `DESIGN.md`.

Después propón TRES direcciones visuales claramente diferentes.

Cada dirección debe definir:

- concepto;
- tipografía;
- escala tipográfica;
- composición;
- sistema de spacing;
- superficies;
- borde;
- tratamiento de proyectos;
- navegación;
- iconografía;
- movimiento;
- comportamiento mobile;
- cómo se diferencia de un portfolio genérico generado por IA.

No quiero tres variantes casi idénticas.

Una puede ser más editorial.

Otra más técnica/arquitectónica.

Otra más experimental pero utilizable.

Para cada opción, explica también sus riesgos.

NO IMPLEMENTES TODAVÍA.

DETENTE Y ESPERA A QUE YO ELIJA UNA DIRECCIÓN.

---

# PROMPT 3 — SISTEMA DE DISEÑO

Utiliza la dirección visual que aprobé previamente.

Ahora conviértela en un sistema de diseño coherente.

Usa `$impeccable` cuando corresponda.

## Define

Tokens de:

- fondo;
- superficies;
- foreground;
- texto secundario;
- bordes;
- accent;
- success/error si son necesarios.

Define:

- typography scale;
- spacing scale;
- max-width;
- grids;
- breakpoints;
- border-radius;
- sombras;
- iconografía;
- focus states;
- hover;
- active;
- selected;
- disabled.

Evita números arbitrarios repetidos por todo el código.

Centraliza los tokens de diseño.

## Accesibilidad

El diseño debe contemplar desde el principio:

- contraste;
- teclado;
- focus visible;
- semántica;
- lectores de pantalla;
- `prefers-reduced-motion`;
- targets táctiles adecuados.

## Entregable

Construye únicamente una página `/design-system` o equivalente de desarrollo que muestre:

- tipografía;
- botones;
- links;
- tags;
- layouts;
- proyecto preview;
- navegación;
- ejemplos de estados.

No construyas todavía el portfolio entero.

Ejecuta una primera revisión con:

`$make-interfaces-feel-better`

Corrige los problemas encontrados.

DETENTE.

---

# PROMPT 4 — ARQUITECTURA DE INFORMACIÓN Y CONTENIDO

Ahora define el contenido real antes de llenar la interfaz.

## Navegación propuesta

Evalúa y ajusta:

- Home;
- Work / Projects;
- About;
- Resume;
- Contact.

No agregues páginas porque sí.

## Homepage

Debe conseguir que en pocos segundos una persona entienda:

- quién es Max;
- qué construye;
- cuál es su especialidad;
- qué proyectos importantes puede revisar;
- cómo contactarlo.

## Proyectos

No conviertas los ocho proyectos en ocho tarjetas iguales.

Diferencia:

### Featured Case Studies

- Hangar;
- TaskFlow Pro.

### Engineering / Backend Systems

Agrupa de forma más compacta:

- Secure Vault;
- SafeLedger;
- FortressID;
- Secure Inventory;
- Sentinel IoT;
- FreelanceGuard ERP.

## Cada caso de estudio importante

Diseña el modelo de contenido para:

- contexto;
- problema;
- arquitectura;
- decisiones técnicas;
- stack;
- funcionamiento;
- desafíos;
- testing;
- seguridad;
- infraestructura;
- resultados realmente comprobables;
- repositorio;
- demo, si existe.

Nunca inventes resultados comerciales.

Si una métrica no está sustentada, no la uses.

## Entregables

Crea contenido estructurado en archivos TypeScript, JSON o MDX.

El contenido no debe quedar hardcodeado directamente por todas las páginas.

DETENTE.

---

# PROMPT 5 — IMPLEMENTACIÓN BASE DEL PORTAFOLIO

Ahora sí implementa la estructura principal del sitio.

Utiliza la dirección visual aprobada y el sistema de diseño creado anteriormente.

## Construye

- navbar;
- homepage;
- hero;
- featured work;
- engineering systems;
- about;
- experience;
- skills/technologies;
- CTA;
- footer;
- contacto.

## Hero

Debe evitar frases vacías como:

"Building digital experiences."

Quiero una propuesta clara relacionada con lo que realmente hace Max.

El hero debe tener personalidad visual sin depender de un gigantesco texto de marketing.

## Experiencia

Incluye correctamente la experiencia de Outlier como experiencia profesional independiente de los proyectos.

## Skills

No hagas barras tipo:

C# 90%.

No hagas rankings inventados.

Agrupa tecnologías por función.

## Responsive

Debe funcionar realmente en:

- mobile;
- tablet;
- desktop;
- pantallas grandes.

Prueba especialmente mobile.

No agregues todavía animaciones complejas.

Solamente interacciones mínimas.

Ejecuta:

- lint;
- typecheck;
- build.

DETENTE.

---

# PROMPT 6 — CASO DE ESTUDIO: HANGAR

Construye el caso de estudio detallado de Hangar.

No inventes información fuera de las referencias disponibles.

El proyecto involucra, según el material:

- Go;
- Fiber;
- Next.js;
- Temporal.io;
- Docker;
- Redis Pub/Sub;
- WebSockets;
- multi-tenancy;
- aislamiento;
- pipeline de deployment;
- tests de integración.

## Objetivo visual

No quiero una página llena de texto.

Utiliza recursos visuales para explicar técnicamente el sistema.

Por ejemplo:

Pipeline:

clone
→
build
→
run
→
route

Arquitectura:

usuario
→
frontend
→
API
→
workflow
→
Docker
→
routing/logs

Crea diagramas con HTML/CSS/SVG cuando tenga sentido.

No uses imágenes falsas de arquitectura.

## Debe explicar

- qué problema intenta resolver;
- cómo funciona;
- arquitectura;
- workflow;
- aislamiento;
- logs real-time;
- testing;
- decisiones técnicas.

Incluye enlaces únicamente si están disponibles realmente.

Si falta demo o GitHub público, muestra un estado apropiado en vez de inventar URLs.

DETENTE.

---

# PROMPT 7 — CASO DE ESTUDIO: TASKFLOW PRO

Construye el caso de estudio de TaskFlow Pro.

Según las referencias, el proyecto utiliza elementos como:

- Node.js;
- Next.js;
- Socket.io;
- Redis;
- BullMQ;
- Prometheus;
- Grafana;
- Sentry;
- Pino;
- JWT;
- OAuth;
- RBAC;
- Vitest;
- Playwright.

## Enfoque

Explica visualmente:

### Real-time

Cómo los cambios se sincronizan entre usuarios.

### Automation

Cómo funciona el sistema de automatizaciones y procesamiento asíncrono.

### Observability

Cómo se monitorea el sistema.

### Security

Cómo se controla autenticación/autorización.

### Testing

Cómo se validan flujos críticos.

No presentes herramientas como una lista sin contexto.

Haz que una persona técnica pueda entender las decisiones del sistema.

DETENTE.

---

# PROMPT 8 — MOVIMIENTO CON GSAP + TRANSITIONS.DEV

Ahora comienza el trabajo de movimiento.

Usa las skills oficiales de GSAP y Transitions.dev.

Primero AUDITA la interfaz.

No agregues movimiento a todo.

## Clasifica animaciones

### Microinteracciones

Usa transitions.dev para:

- hover;
- menú;
- links;
- botones;
- cambios pequeños de estado;
- reveal sencillos.

### Animaciones narrativas

Usa GSAP únicamente donde tenga sentido:

- hero;
- diagramas;
- arquitectura;
- transición entre secciones relevantes;
- explicación del pipeline Hangar;
- visualización de flujos;
- scroll storytelling si aporta comprensión.

## Reglas

No hagas animaciones que:

- retrasen navegación;
- oculten información demasiado tiempo;
- provoquen layout shifts;
- degraden mobile;
- dependan completamente del scroll;
- vuelvan tediosa una segunda visita.

Soporta:

`prefers-reduced-motion`.

Las animaciones deben poder interrumpirse correctamente.

Prioriza transform y opacity cuando sea apropiado.

Mide impacto de rendimiento.

Usa:

`transitions review`

antes de aplicar cambios generales.

Después revisa nuevamente.

DETENTE.

---

# PROMPT 9 — PULIDO DE INTERFAZ

Utiliza:

`$make-interfaces-feel-better`

Haz una revisión completa del sitio.

Revisa especialmente:

- typography;
- optical alignment;
- border radius;
- borders;
- shadows;
- hover;
- focus;
- active states;
- icon sizing;
- hit areas;
- transitions;
- spacing;
- enter/exit motion;
- layout consistency.

Después utiliza `$impeccable` para:

- critique;
- audit;
- polish;

según corresponda.

No cambies la dirección visual aprobada.

No conviertas el polish en un rediseño.

Quiero un reporte BEFORE/AFTER de los problemas relevantes encontrados.

DETENTE.

---

# PROMPT 10 — SEO TÉCNICO

Basándonos en la referencia de SEO proporcionada, prepara el portfolio para que pueda ser descubierto por buscadores.

Configura:

- metadata;
- títulos únicos;
- descriptions;
- canonical URLs;
- Open Graph;
- Twitter/X cards;
- `robots.txt`;
- `sitemap.xml`;
- favicon;
- web manifest si aporta valor;
- semantic HTML;
- alt text;
- headings correctos.

Implementa structured data apropiado cuando esté justificado, por ejemplo:

- Person;
- WebSite;
- CreativeWork / SoftwareSourceCode cuando corresponda.

No hagas keyword stuffing.

No inventes ubicación, empresas ni servicios.

## IMPORTANTE

Todavía NO conectes Google Analytics ni Search Console porque esos servicios requieren información de mi cuenta.

Deja documentado exactamente qué datos voy a tener que proporcionarte posteriormente.

Crea:

`docs/SEO_SETUP.md`

DETENTE.

---

# PROMPT 11 — PERFORMANCE + ACCESIBILIDAD

Realiza una auditoría técnica profunda.

Comprueba:

- Lighthouse;
- Core Web Vitals;
- carga inicial;
- JavaScript enviado;
- imágenes;
- fonts;
- animations;
- CLS;
- LCP;
- INP;
- accesibilidad;
- navegación con teclado;
- focus;
- screen readers cuando pueda comprobarse;
- reduced motion.

No maquilles puntuaciones.

Si algo no puede medirse, indícalo.

Optimiza sin destruir el diseño.

Especial atención a las animaciones GSAP en móvil.

Ejecuta nuevamente:

- lint;
- typecheck;
- tests;
- build.

DETENTE.

---

# PROMPT 12 — CONTACTO Y SECRETS

Prepara la arquitectura de contacto.

NO INVENTES NI SOLICITES MIS CONTRASEÑAS.

Primero explícame qué opciones tenemos.

Por ejemplo:

- enlace de correo;
- formulario server-side;
- servicio externo de email.

Si utilizamos un proveedor que necesita API key:

1. crea el código para consumir una variable de entorno;
2. agrega la variable a `.env.example` SIN valor real;
3. comprueba que `.env.local` esté ignorado por Git;
4. dime qué nombre de variable debo rellenar yo manualmente.

Ejemplo:

```env
RESEND_API_KEY=
```

Yo proporcionaré la key directamente en mi computadora o panel del hosting.

No debes recibir ni almacenar mi contraseña.

Incluye:

- validación;
- honeypot o medida anti-spam apropiada;
- estados loading/success/error;
- accesibilidad.

DETENTE.

---

# PROMPT 13 — DEPLOYMENT

Prepara el proyecto para producción.

No inicies sesión en servicios utilizando mis credenciales.

## Tú puedes hacer

- validar build;
- preparar configuración;
- comprobar variables;
- revisar `.gitignore`;
- generar documentación;
- revisar repository cleanliness;
- generar instrucciones de deployment.

## Yo tendré que hacer

- iniciar sesión;
- crear/conectar la cuenta;
- elegir repositorio;
- autorizar GitHub;
- comprar/agregar dominio;
- modificar DNS;
- agregar secrets;
- confirmar deployment.

Genera:

`docs/DEPLOYMENT.md`

con pasos exactos.

No supongas que ya poseo un dominio.

DETENTE.

---

# PROMPT 14 — GOOGLE ANALYTICS + SEARCH CONSOLE

En esta fase YO ya habré creado las cuentas necesarias.

No intentes usar mis contraseñas.

Pregúntame únicamente por identificadores NO SECRETOS que sean necesarios.

## Google Analytics

Yo crearé la propiedad y te proporcionaré el Measurement ID correspondiente.

Integra Analytics de forma limpia.

Evita bloquear renderizado.

Documenta qué información se recopila.

Si corresponde legalmente, deja preparada una estrategia de consentimiento.

## Google Search Console

Yo agregaré el dominio o URL prefix en mi cuenta.

Si la verificación requiere:

### DNS

Yo agregaré el TXT manualmente.

### Meta tag

Yo te proporcionaré únicamente el token/meta de verificación necesario y tú podrás agregarlo al código.

### Archivo HTML

Yo decidiré si usamos ese método.

Después genera:

`docs/ANALYTICS_SEARCH_CONSOLE.md`

con:

- pasos realizados;
- pasos manuales;
- cómo verificar funcionamiento;
- cómo enviar sitemap;
- cómo revisar indexación.

DETENTE.

---

# PROMPT 15 — QA FINAL DE PRODUCCIÓN

Haz una auditoría final del proyecto completo.

Actúa como:

- frontend engineer;
- design engineer;
- accessibility reviewer;
- performance reviewer;
- SEO reviewer;
- senior code reviewer.

Utiliza también:

- Impeccable;
- Make Interfaces Feel Better;
- Transitions.dev;
- GSAP skill cuando corresponda.

Comprueba:

- links rotos;
- rutas;
- 404;
- metadata;
- sitemap;
- robots;
- mobile;
- tablet;
- desktop;
- keyboard;
- contrast;
- animations;
- reduced motion;
- forms;
- analytics integration;
- errores de consola;
- hydration;
- build;
- typecheck;
- lint;
- tests.

Busca especialmente señales de diseño genérico de IA.

Pregunta:

"¿Hay algo aquí que parezca una plantilla que podría pertenecer a cualquier programador?"

Si sí:

identifica exactamente qué y corrígelo sin destruir la identidad aprobada.

Genera:

`docs/FINAL_AUDIT.md`

Incluye:

- PASSED;
- FAILED;
- NOT VERIFIED;
- acciones pendientes.

No digas que algo está verificado si no pudiste probarlo.

DETENTE.

---

# PROMPT 16 — PUBLICACIÓN Y POST-LAUNCH

El sitio ya está en producción.

Haz una revisión utilizando la URL de producción que yo te proporcionaré.

Comprueba:

- canonical;
- sitemap;
- robots;
- metadata;
- OG images;
- redirects;
- enlaces;
- responsive;
- performance;
- errores de consola;
- analytics cargando;
- contacto;
- proyectos.

No cambies el diseño sin razón.

Crea:

`docs/POST_LAUNCH.md`

con una checklist para:

### Primera semana

- indexación;
- errores;
- analytics;
- formularios.

### Primer mes

- páginas con más visitas;
- búsquedas;
- CTR;
- proyectos más visitados;
- CTA;
- fuentes de tráfico.

### Iteración

No rediseñar basándonos en opiniones arbitrarias.

Usar datos reales para decidir qué mejorar.

DETENTE.
