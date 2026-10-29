> Archivo histórico de fase 2. El propietario eligió B; el sistema vigente está en `../DESIGN.md`.

# Direcciones visuales — fase 2

**Estado: exploración. Dirección elegida: ninguna. Implementación: ninguna.**

Este documento presenta tres candidatas con igual nivel de definición para que
Max elija. No es un sistema aprobado ni una descripción de la UI existente.
Los valores son propuestas revisables al ver contenido real. No convertirlos en
tokens del código, combinar opciones ni declarar una seleccionada sin respuesta
explícita del propietario. Después de elegir, la implementación seguirá esperando
el prompt que autorice esa fase.

Contexto de producto: [PRODUCT.md](PRODUCT.md). Evidencia pendiente:
[estrategia provisional](docs/PORTFOLIO_STRATEGY.md). Las opciones expresan criterio
visual, no nuevas afirmaciones profesionales sobre Max o sus proyectos.

## Comparación para decidir

| | A · Cuaderno de ingeniería | B · Plano de sistemas | C · Secuencia abierta |
| --- | --- | --- | --- |
| Carácter | Editorial, sereno, personal | Técnico, ordenado, arquitectónico | Contemporáneo, contrastado, expresivo |
| Artefacto de partida | Una publicación de casos con notas al margen | Un documento de revisión de arquitectura | Una secuencia de láminas que conecta producto y decisiones |
| Protagonista | El razonamiento contado con claridad | La relación entre problema, estructura y decisión | El proyecto observado desde dos escalas |
| Composición | Columna de lectura, imagen y margen editorial | Índice lateral, alineaciones persistentes y anotaciones | Franjas abiertas con asimetría y cambios de densidad |
| Tipografía | Serif para títulos; sans para lectura y navegación | Sans precisa; mono exclusivamente para etiquetas técnicas | Grotesca expresiva para títulos; sans sobria para lectura |
| Color | Papel cálido, tinta oscura, acento óxido | Fondo mineral claro, tinta petróleo, acento verde profundo | Grafito mate, hueso y acento cobre claro |
| Movimiento distintivo | Continuidad tranquila de lectura | Resaltar una relación seleccionada | Transición breve entre dos vistas de un artefacto |
| Riesgo principal | Parecer un ensayo con poca demostración | Parecer documentación fría o un dashboard | Competir visualmente con el trabajo presentado |

Las tres mantienen el mismo contenido verificable. Se diferencian incluso en
escala de grises: cambian la estructura, la voz tipográfica y el modo de explorar.
No dependen de un cambio de color para justificar su existencia.

## A · Cuaderno de ingeniería

### Concepto

Una publicación personal sobre sistemas construidos y decisiones tomadas. La
precisión se percibe en la edición: buen ritmo, pies de figura útiles y relaciones
claras entre texto y evidencia. La calidez facilita hablar tanto a clientes como
a equipos técnicos. No imitar papel envejecido, libros 3D ni escritura manuscrita.

**Primer encuadre:** nombre y descripción breve a la izquierda, navegación discreta
arriba y comienzo del primer caso visible debajo. El nombre no ocupa una pantalla.
El caso entra mediante su título, una evidencia real y un pie explicativo; una
nota lateral sitúa el papel de Max cuando esté confirmado. No hay hero centrado
con ilustración genérica ni una fila de tarjetas de servicios.

| Aspecto | Propuesta |
| --- | --- |
| Tipografía | Source Serif 4, peso 500–600, para títulos y una frase editorial ocasional. Source Sans 3, 400 y 600, para cuerpo, navegación y notas. Sin tercera fuente ni párrafos largos en cursiva. |
| Escala tipográfica | Escritorio: H1 48 px, H2 34, H3 24, cuerpo 18, notas 14. Móvil: 36 / 28 / 22 / 17 / 14. Interlineado de títulos 1.15–1.25 y cuerpo 1.6; lectura de 58–68 caracteres por línea. Valores fluidos entre extremos, sin impedir zoom. |
| Composición | Ancho máximo 1160 px. Retícula editorial de 12 columnas: 8 para evidencia, 3 para notas y 1 de separación. El cuerpo narrativo se limita a una columna de lectura; las imágenes pueden abrirse a todo el ancho. Alineación izquierda y descansos entre capítulos. |
| Spacing | Unidad 4 px; escala 4 / 8 / 12 / 20 / 32 / 48 / 72 / 104. Entre capítulos 104 px en escritorio y 64 en móvil; dentro de un bloque 12–20. Márgenes exteriores de 48 px en escritorio y 20 en móvil. Más espacio antes de un título que entre título y explicación. |
| Superficies | Fondo papel `#F4F1EA`, una superficie clara `#FFFDFA` cuando una figura necesita contraste. Texto `#252A28`, secundario `#5F625B`, acento óxido `#7C342C`. Sin textura simulada, sombras de tarjeta ni cambios arbitrarios de fondo. |
| Borde | Filetes horizontales de 1 px `#CDC8BD` para separar capítulos y pies; no encerrar cada bloque. Rectángulos sin radio para figuras; hasta 4 px en controles. Foco y límites necesarios de controles usan el acento o el texto secundario. |
| Proyectos | Casos como capítulos: problema, aportación, evidencia, decisión y límites. Hangar y TaskFlow Pro siguen siendo candidatos; el orden depende de las referencias. Los secundarios se presentan como índice de trabajos con descripciones breves, sin cards idénticas. |
| Navegación | Cabecera en flujo con nombre, Proyectos, Perfil y Contacto. En casos extensos, índice corto antes del texto y enlaces de regreso. Subrayados visibles; no esconder navegación detrás de un icono en escritorio. |
| Iconografía | Flecha de enlace externo y símbolos funcionales puntuales, de 18–20 px y trazo uniforme de 1.5–1.75 px. Texto junto al icono; sin iconos para adornar cada competencia ni logotipos técnicos como confeti. |
| Movimiento | Lectura principalmente estática. Estados de enlaces y controles de 120–160 ms. Si una figura necesita ampliarse, transición de 180–220 ms; sin parallax, letras escalonadas ni revelación obligatoria de párrafos. |
| Mobile | Una columna. Las notas pasan junto al párrafo al que pertenecen; nunca se comprimen en un margen ilegible. Cabecera en dos líneas si hace falta. Imágenes completas con opción de ampliar si el contenido lo exige; sin encoger diagramas complejos hasta hacerlos ilegibles. |
| Diferencia frente a un portafolio genérico | La estructura la determinan las decisiones y evidencias de cada caso. Jerarquía por edición, imágenes y notas, no por grandes eslóganes, cajas y listas de tecnologías. |

**Riesgos y respuesta.** Puede parecer una revista o un ensayo y dejar la
capacidad de ejecución en segundo plano. Cada caso debe mostrar un artefacto real
pronto y ofrecer un acceso claro al código o demo cuando exista. La serif puede
parecer excesivamente literaria: restringirla a títulos; no añadir adornos
editoriales sin función. La calidad depende de una redacción breve y cuidada.

**Condición de contenido:** si faltan imágenes, una decisión bien documentada
puede sostener el caso. Nunca reemplazar evidencia faltante con una captura ficticia.

## B · Plano de sistemas

### Concepto

Un documento de arquitectura abierto al visitante. Las alineaciones, los índices
y las relaciones explicadas transmiten precisión. Se toma la disciplina de un
plano, no su decoración: sin cuadrícula de fondo, coordenadas falsas, medidas
inventadas, terminales ni nodos animados sin significado.

**Primer encuadre:** identidad y acceso directo a contacto en la franja superior;
un índice estrecho a la izquierda acompaña un bloque principal de presentación y
el comienzo del primer sistema. Una evidencia real comparte espacio con una
explicación concreta. La lectura inicial explica qué se intentó resolver antes
de introducir términos de arquitectura.

| Aspecto | Propuesta |
| --- | --- |
| Tipografía | IBM Plex Sans, pesos 400, 500 y 600, como voz principal. IBM Plex Mono, 400–500, solo para identificadores, fragmentos técnicos auténticos y etiquetas breves. Los párrafos y la navegación siguen en sans. |
| Escala tipográfica | Escritorio: H1 44 px, H2 30, H3 22, cuerpo 17, etiquetas 14. Móvil: 32 / 26 / 20 / 16 / 14. Títulos 1.2, cuerpo 1.55–1.6; ancho narrativo máximo de 64 caracteres. Sin mayúsculas sostenidas en párrafos. |
| Composición | Ancho máximo 1240 px. Retícula de 12 columnas: 2 para un índice, 1 de separación y 9 para contenido. Dentro del caso, figura y explicación comparten una retícula de 6 + 3. Las guías se expresan con alineaciones y unos pocos separadores, no con cajas superpuestas. |
| Spacing | Unidad 4 px; escala 4 / 8 / 12 / 16 / 24 / 32 / 48 / 80. Intervalos consistentes de 24 px entre evidencia y anotación. Separación entre sistemas 80 px en escritorio y 56 en móvil; márgenes de 40 y 20 px. Densidad moderada, nunca microtexto. |
| Superficies | Fondo mineral `#F2F5F3`, figuras sobre `#FFFFFF`; texto petróleo `#182D2D`, secundario `#50615F`, acento verde profundo `#195C52`. La superficie clara sirve a la evidencia, no se repite detrás de cada párrafo. |
| Borde | Separación de 1 px `#BAC8C2`; una línea de 2 px en acento identifica el elemento activo. Radio 0 en figuras y hasta 2 px en controles. Sin sombras. Las líneas suaves no son el único indicador de foco o de interactividad. |
| Proyectos | Un sistema por sección, con resumen comprensible, aportación y evidencia. Un diagrama de arquitectura solo se introduce si está sustentado; sus etiquetas explican relaciones reales. Secciones Decisión, Alternativas y Límites tienen más peso que una colección de badges. Secundarios como catálogo breve de filas, no dashboard. |
| Navegación | Índice lateral de anclas en escritorio, sin acciones de aplicación ni árbol de archivos. Puede permanecer visible solo si cabe completo en la altura disponible. El enlace activo usa texto y una marca, no solo color. Cabecera y enlaces normales funcionan sin JavaScript. |
| Iconografía | Flechas, enlace externo, expansión y descarga, 18–20 px, trazo uniforme de 1.5 px. Símbolos de diagramas acompañados por nombres y leyenda cuando haga falta. No inventar pictogramas de microservicios para decorar. |
| Movimiento | Una relación de una figura puede resaltarse al seleccionar su explicación, mediante color u opacidad de 140–180 ms; no mover todo el diagrama. Estado seleccionado legible también con teclado y toque. Índice activo sin rebotes ni deslizamientos continuos. |
| Mobile | El índice lateral pasa al flujo superior y el caso se lee resumen → evidencia → explicación. Figuras complejas se dividen en pasos si la fidelidad lo permite; mantener una vista ampliable. El desplazamiento horizontal, si resulta necesario para una figura, queda limitado a ella y anunciado. Nunca afecta a toda la página. |
| Diferencia frente a un portafolio genérico | La profundidad viene de relaciones y decisiones documentadas. La composición tiene una lógica de revisión técnica reconocible sin disfrazarse de herramienta de administración. |

**Riesgos y respuesta.** Puede parecer un portal de documentación o intimidar a
clientes no técnicos. Cada caso empieza por problema, alcance y aportación con
lenguaje llano. El índice no debe crecer hasta convertirse en una barra lateral
de aplicación. Sin material de arquitectura real, la dirección perdería su
fundamento; en ese caso se usaría evidencia de implementación o habría que
reconsiderar la elección, no inventar diagramas.

**Condición de contenido:** requiere buenas explicaciones técnicas y al menos
alguna evidencia estructural por caso principal. No requiere telemetría, métricas
ni una integración con repositorios en tiempo real.

## C · Secuencia abierta

### Concepto

Una secuencia vertical que muestra el proyecto desde la escala del producto y
desde la decisión técnica. La experimentación está en el ritmo y la composición:
superficies amplias, asimetría y alternancia de detalle y contexto. Se conserva
el desplazamiento natural y una lectura completa sin efectos.

**Primer encuadre:** franja superior compacta de identidad y contacto; debajo,
nombre del caso y resumen a un lado de una evidencia amplia, con el inicio del
siguiente capítulo visible cuando el contenido lo permita. La presentación de
Max acompaña el trabajo, no lo desplaza una pantalla hacia abajo. El contenido
dicta la altura; no se obliga cada sección a medir 100vh.

| Aspecto | Propuesta |
| --- | --- |
| Tipografía | Bricolage Grotesque, peso 600, para títulos; Source Sans 3, 400 y 600, para texto y navegación. La expresividad se concentra en nombres de proyectos, sin deformar letras, animar ejes variables ni añadir una tercera voz tipográfica. |
| Escala tipográfica | Escritorio: H1 56 px, título de caso 44, H3 26, cuerpo 18, notas 14. Móvil: 36 / 32 / 22 / 17 / 14. Títulos 1.08–1.15; texto 1.6 y máximo 62 caracteres. Nunca recortar títulos ni usar texto del tamaño de toda la pantalla. |
| Composición | Franjas abiertas de ancho completo con interior máximo de 1280 px. Primera relación 5 columnas de texto + 7 de evidencia; otro capítulo puede abrir una figura a 12 columnas con explicación debajo. Se alterna densidad, no el orden lógico de lectura. Sin carrusel horizontal, masonry, capas flotantes ni scroll secuestrado. |
| Spacing | Unidad 4 px; escala 4 / 8 / 16 / 24 / 40 / 64 / 96 / 128. Entre capítulos 96–128 px según densidad, 64 en móvil; entre texto y evidencia 32–40. Márgenes exteriores de 48 px y 20 en móvil. No usar grandes vacíos para alargar artificialmente una página con poco contenido. |
| Superficies | Base grafito mate `#202322`, apoyo `#2A2E2B`, texto hueso `#F0EEE8`, secundario `#B7BCB3`, acento cobre claro `#E6AD79`. Una franja clara `#F0EEE8` puede alojar un pasaje denso, con texto `#202322`; en esa franja el acento textual cambia a `#7C342C`. Sin brillo, neón, transparencias ni gradientes. |
| Borde | Las franjas se separan por espacio o cambio de superficie, no por marcos. Filete de 1 px `#50594F` solo donde ayuda a leer. Figuras rectangulares; controles de hasta 4 px de radio. Foco con el acento correspondiente a cada fondo. |
| Proyectos | Cada caso ocupa un capítulo de composición propia dentro de la misma gramática. Puede relacionar una vista del producto con una explicación de implementación, si ambas existen. Los secundarios se agrupan en un índice compacto y sobrio para que el ritmo visual no se repita indefinidamente. |
| Navegación | Cabecera breve Proyectos / Perfil / Contacto; al final de cada caso, enlace explícito al siguiente. Se puede indicar posición editorial 01, 02, sin apariencia de contador de resultados. No usar cursores personalizados, navegación radial ni controles que solo aparecen en hover. |
| Iconografía | Flechas direccionales y expandir, 20 px y trazo de 1.75 px. Casi toda la orientación viene de texto. Los iconos acompañan acciones reales y no ocupan cajas decorativas. |
| Movimiento | Interacción distintiva opcional: selector explícito “Vista del producto / Detalle técnico” sobre una evidencia con dos vistas reales; cambio de opacidad de 180–240 ms, área estable y estado textual claro. Resumen y decisiones esenciales permanecen fuera del selector. Sin reproducción automática, giros 3D, zoom ligado al scroll ni animaciones permanentes. |
| Mobile | Una columna, nombre y resumen antes de la evidencia. Las dos vistas se apilan con sus títulos para facilitar comparación; no se conserva un montaje de escritorio reducido. Las franjas siguen el alto de su contenido. Contacto permanece como enlace accesible, sin overlay que tape información. |
| Diferencia frente a un portafolio genérico | Un recorrido por artefactos de tamaños y densidades distintos. El cambio de escala conecta producto y sistema; no depende de una animación espectacular ni de una cuadrícula uniforme. |

**Riesgos y respuesta.** La tipografía y el contraste podrían acercarlo a un
portafolio de diseñador; se limitan a ordenar evidencia de ingeniería. El fondo
oscuro puede saturar la lectura larga: las explicaciones extensas usan una franja
clara. El selector puede ocultar material o complicar la accesibilidad: solo se
añade si mejora una comparación real y puede operarse con teclado; en móvil se
apilan las vistas. Sin esa necesidad, se elimina el selector y permanece la
composición. No se instala una librería de animación para justificar la opción.

**Condición de contenido:** es la más dependiente de capturas o artefactos visuales
reales y legibles. Si ese material no aparece, perdería fuerza; no rellenar con
mockups de pantallas inventadas, renders abstractos ni gráficos de actividad falsa.

## Reglas compartidas propuestas

Estas reglas desarrollan los límites del brief. Son criterios para la futura
implementación, no una declaración de accesibilidad o rendimiento ya alcanzados.

- Un solo tema inicial, el de la dirección elegida. No multiplicar el trabajo con
  un conmutador claro/oscuro antes de tener una necesidad concreta.
- Dos familias tipográficas como máximo por opción. Al implementar, servir WOFF2
  locales con los pesos necesarios y fallback legible. Conservar licencias y
  comprobar tildes, ñ, signos de apertura y texto inglés si se confirma bilingüe.
- Cuerpo de al menos 16 px en móvil, notas de al menos 14 px; tamaños relativos
  que respeten zoom. No convertir texto esencial en imágenes.
- Enlaces distinguibles sin depender solo del color; foco visible. Áreas táctiles
  objetivo de 44 × 44 px y controles operables con teclado. Orden del DOM igual
  al orden de lectura, aunque cambie la composición visual.
- Propuesta de contraste: al menos 4.5:1 para texto normal y 3:1 para indicadores
  funcionales respecto del fondo adyacente. Los filetes suaves son decorativos,
  nunca la única pista que identifica un control.
- Animaciones funcionales de opacidad o transformaciones pequeñas, sin bloquear
  navegación. Curva propuesta `cubic-bezier(0.2, 0, 0, 1)` para cambios discretos.
  Respuesta al foco inmediata; no retrasar el acceso a contenido.
- Con `prefers-reduced-motion`, eliminar desplazamientos y transiciones de
  composición; los estados cambian directamente. Todo el contenido debe ser
  legible sin una animación de entrada ni JavaScript de efectos.
- CSS nativo como primera opción para el movimiento descrito. Las skills de
  GSAP y transitions.dev servirán para decisiones futuras justificadas; no hay
  un compromiso de instalar o utilizar todas sus herramientas.
- Proyectos, CV y contacto deben tener destinos reales. Ocultar acciones sin
  destino confirmado; no publicar botones de prueba, métricas o demos ficticias.
- Esquemas técnicos con fuente y explicación textual equivalente. No asumir una
  topología, tecnología, patrón o funcionalidad a partir del nombre del proyecto.
- Capturas sin datos privados, claves, tokens ni información de terceros.

## Comprobación preliminar de color

Se calcularon contrastes sRGB entre colores sólidos de las candidatas. No es una
auditoría de una interfaz renderizada. No se han validado aún estados, capturas,
superposiciones, tipografía efectiva ni comportamiento en navegador.

| Opción y fondo base | Texto principal | Texto secundario | Acento |
| --- | --- | --- | --- |
| A · `#F4F1EA` | 12.92:1 | 5.50:1 | 7.81:1 |
| B · `#F2F5F3` | 13.17:1 | 5.95:1 | 7.10:1 |
| C · `#202322` | 13.66:1 | 8.19:1 | 8.01:1 |

Esos tres roles también superan 4.5:1 sobre la superficie de apoyo de su opción.
Los separadores suaves no llegan a 3:1; por eso se reservan para decoración.
No usar cobre claro como texto sobre la franja clara de C: allí se usa óxido.

## Fuentes tipográficas consultadas

Las familias se proponen por su función dentro de cada dirección, no por una
afirmación de exclusividad. Los repositorios primarios consultados son:

- [Source Serif](https://github.com/adobe-fonts/source-serif), de Adobe.
- [Source Sans](https://github.com/adobe-fonts/source-sans), de Adobe.
- [IBM Plex](https://github.com/IBM/plex), de IBM.
- [Bricolage Grotesque](https://github.com/ateliertriay/bricolage), de Atelier Triay.

No se descargaron ni incorporaron fuentes a la aplicación en esta fase.

## Recomendación y decisión pendiente

**Recomendación: B · Plano de sistemas**, por su correspondencia con ingeniería,
precisión y explicación de decisiones. Es una recomendación condicionada a que
las referencias permitan mostrar esa profundidad; no es la dirección elegida.

Elegir A si pesa más una presentación personal, cercana y fácil de leer. Elegir
C si se busca una presencia más expresiva y existe material visual suficiente.
No combinar automáticamente tipografía de A, navegación de B y movimiento de C:
cada opción debe conservar su coherencia antes de considerar refinamientos.

Para decidir, revisar: cuál comunica mejor a Max; si permite entender rápido el
primer caso; qué papel tienen sus artefactos; y qué riesgo se está dispuesto a
aceptar. Escala, paleta, composición y movimiento se revisan aquí como propuesta,
sin una interfaz que inspeccionar todavía.

**Siguiente acción: esperar la elección del propietario. No implementar.**
