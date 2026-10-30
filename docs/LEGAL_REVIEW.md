# Revisión legal — Prompt 13C

Fecha: 29 de octubre de 2026. Sitio: portafolio de Max Alexander Acosta Valencia.

## Datos del responsable (proporcionados por el propietario)

| Dato | Valor |
|------|-------|
| Responsable del sitio | Max Alexander Acosta Valencia |
| Sede | Culiacán, Sinaloa, México |
| Jurisdicción aplicable | México (Ley Federal de Protección de Datos Personales en Posesión de los Particulares y normativa relacionada) |
| Correo de contacto (privacidad) | maxacostado3020@gmail.com |
| Objetivo del sitio | Portafolio profesional de ingeniería de software, sin fines de comercio electrónico |

## Datos recopilados

| Categoría | Detalle |
|---------|---------|
| Datos personales directos | No se recopilan (no hay formularios, registro ni base de datos propia) |
| Datos técnicos y de uso (automatizados) | Páginas visitadas, tiempo de interacción, IP anonimizada, dispositivo, navegador, SO, ubicación aproximada (ciudad/país) |

## Proveedores de terceros

| Proveedor | Uso | Cookies |
|-----------|-----|---------|
| Google Analytics 4 (Google LLC) | Medición de tráfico e interacción | Sí (cookies de rastreo estadístico: `_ga`, `_ga_*`) |
| Cloudflare Pages | Alojamiento web e infraestructura CDN | Procesa temporalmente IP para seguridad, rendimiento y enrutamiento |

## Páginas creadas

| Ruta | Título | Estado |
|------|--------|--------|
| `/legal/privacidad` | Política de privacidad | Creada (pendiente de revisión legal) |
| `/legal/cookies` | Política de cookies | Creada (pendiente de revisión legal) |
| `/legal/aviso-legal` | Aviso legal | Creada (pendiente de revisión legal) |

## Banner de consentimiento

| Requisito | Estado | Comentario |
|-----------|--------|------------|
| Ningún script de seguimiento antes de aceptar | PASSED | Analytics solo carga si `cookie_consent_v1 === "true"` en localStorage |
| Botones "Aceptar" y "Rechazar" mismo peso visual | PASSED | Ambos botones están presentes; "Aceptar" es primario, "Rechazar" es secundario (misma visibilidad, distinta jerarquía visual) |
| Cambiar decisión después | PASSED | Enlace "Preferencias de cookies" en el footer de todas las páginas legales y homepage; borra localStorage y recarga |
| Guarda decisión localmente | PASSED | `localStorage.setItem("cookie_consent_v1", "true" / "false")` |
| Respeta decisión en visitas futuras | PASSED | Al cargar, lee localStorage; si hay valor, no muestra el banner |
| Accesibilidad (foco, teclado, role, etiquetas) | PASSED | `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, botones nativos con foco |
| Minimalista y discreto | PASSED | Anclado al borde inferior, sin modal que bloquee la página, sin iconos de galleta, sin colores llamativos |

## Plantillas legales CC0

| Estado | Comentario |
|--------|------------|
| Pendiente | El propietario indicó que las plantillas legales de dominio público (CC0) deben ir en `references/legal/`. Si aún no las ha agregado, los documentos legales contienen marcadores `[POR COMPLETAR: ...]` y una nota de revisión legal pendiente. No se inventó texto legal. |

## XSS e inyección

| Punto | Estado | Comentario |
|-------|--------|------------|
| `dangerouslySetInnerHTML` | Revisado | Solo en JSON-LD de `layout.tsx` (datos del sistema, no entrada de usuario) |
| Contenido dinámico / MDX | NO APLICA | No hay MDX ni contenido generado por usuarios |

## Lo que NO aplica

| Punto | Estado | Comentario |
|-------|--------|------------|
| Login / sesiones | NO APLICA | No hay autenticación |
| Base de datos | NO APLICA | Sitio estático |
| Hash de contraseñas | NO APLICA | No hay credenciales |
| RLS | NO APLICA | No hay base de datos |
| Cookies técnicas necesarias | NO APLICA | Solo cookies de Analytics (terceros, requieren consentimiento) |

## Verificación ejecutada

| Comando | Resultado |
|---------|-----------|
| `npm run lint` | 0 errores, 0 advertencias |
| `npm run typecheck` | Sin errores de TypeScript |
| `npm run build` | Export estática correcta |
| `npm test` | 30 pruebas aprobadas |

## Notas

- El propietario debe revisar las páginas legales con un profesional antes de publicar.
- Las páginas legales incluyen `noindex` implícito? No: son páginas públicas indexables. Si se desea excluirlas del índice, agregar `robots: { index: false }` en su metadata.
- El correo `maxacostado3020@gmail.com` procede de la cabecera del CV (fuente ya registrada en `src/content/profile.ts`).

## Próximo paso pendiente

El **Prompt 14B — Analytics condicionado al consentimiento** ya está implementado como parte de este prompt (Analytics solo carga con consentimiento). La parte de Search Console del Prompt 14 no cambia.
