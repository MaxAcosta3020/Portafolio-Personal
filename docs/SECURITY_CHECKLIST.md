# Checklist de seguridad — Prompt 12B

Fecha: 29 de octubre de 2026. Sitio: portafolio estático (Next.js, export estática para Cloudflare Pages). No hay backend, login, sesiones ni base de datos.

Cada punto se califica como: PASSED / FAILED / NO APLICA / NO VERIFICADO.

## Secretos

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1 | Buscar claves API, tokens o contraseñas en el código | PASSED | No hay secretos reales en el código fuente. Únicamente referencias descriptivas a JWT/tokens en la narrativa de casos de estudio (documentación pública del CV y repositorios). |
| 2 | Buscar secretos en el historial de Git (`git log -p`) | PASSED | El historial no contiene claves, tokens ni contraseñas reales. El único commit relacionado con variables de entorno (f890df9) agregó `.env.example` sin valores reales. |
| 3 | Confirmar que `.env`, `.env.local` y variantes están ignorados | PASSED | `.gitignore` ignora `.env`, `.env.local`, `.env.*.local`, `.env.*` (salvo `!.env.example`). |
| 4 | Confirmar que `.env.example` no tiene valores reales | PASSED | `.env.example` contiene únicamente claves sin valor (`NEXT_PUBLIC_SITE_URL=`, `NEXT_PUBLIC_GA_MEASUREMENT_ID=`, `NEXT_PUBLIC_GSC_VERIFICATION=`). |
| 5 | Verificar que ninguna variable secreta use el prefijo `NEXT_PUBLIC_` | PASSED | Las variables con `NEXT_PUBLIC_` son públicas por naturaleza (URL del sitio, Measurement ID de GA, token de GSC). No hay secretos con ese prefijo. |

## Formulario y servidor

El sitio no tiene formulario con envío a backend. El contacto es un enlace `mailto:` directo. Por tanto, los puntos de validación server-side, límite de payload, escapado, honeypot, rate limiting y protección anti-bot NO APLICAN.

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1 | Validación de todas las entradas en el servidor (Zod o similar) | NO APLICA | No existe endpoint de contacto ni envío de formulario. El contacto es `mailto:` directo. |
| 2 | Límites de longitud en todos los campos y tamaño del payload | NO APLICA | No hay formulario con envío. |
| 3 | Escapado de contenido del usuario que se renderice o incluya en correo | NO APLICA | No hay entrada de usuario renderizada. |
| 4 | Honeypot y rate limiting por IP en endpoint de contacto | NO APLICA | No hay endpoint de contacto. Si el propietario añade un formulario server-side (Prompt 12), deberá implementar honeypot y rate limiting en ese momento; en hosting serverless (Cloudflare Pages Functions) el rate limiting por IP tiene limitaciones (no hay estado persistente entre invocaciones sin servicios externos). |
| 5 | Respuestas de error que no filtren detalles internos | NO APLICA | No hay endpoint que devuelva errores. |
| 6 | Documentar claves públicas/secretas de protección anti-bot externa (Turnstile, reCAPTCHA) | NO APLICA | No se usa protección anti-bot. Si se añade, documentar aquí. |

## Cabeceras HTTP (en `public/_headers`, aplicadas por Cloudflare Pages en producción)

| # | Cabecera | Estado | Comentario |
|---|----------|--------|------------|
| 1 | Content-Security-Policy | PASSED | `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`. Se genera en `out/_headers` desde `public/_headers`. Cuando se añada Google Analytics con consentimiento (Prompt 14B), se debe ajustar la CSP para permitir los dominios de Analytics únicamente. |
| 2 | Strict-Transport-Security | PASSED | `max-age=31536000; includeSubDomains`. |
| 3 | X-Content-Type-Options | PASSED | `nosniff`. |
| 4 | Referrer-Policy | PASSED | `strict-origin-when-cross-origin`. |
| 5 | Permissions-Policy | PASSED | `camera=(), microphone=(), geolocation=(), payment=(), usb=()`. |
| 6 | X-Frame-Options / frame-ancestors | PASSED | `X-Frame-Options: DENY` y CSP `frame-ancestors 'none'`. |

Comprobado que la CSP no rompe fuentes (self), imágenes (self/data:) ni scripts propios (self). El build export estático genera `out/_headers` correctamente.

## Dependencias

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1 | Ejecutar `npm audit` y reportar resultados | PASSED | `found 0 vulnerabilities`. |
| 2 | No usar `npm audit fix --force` sin avisar | PASSED | No se ejecutó; no fue necesario. |
| 3 | Listar dependencias innecesarias que se puedan quitar | PASSED | Todas las dependencias son necesarias: `next`, `react`, `react-dom`, `@next/third-parties` (Analytics), `gsap` (pipeline Hangar). DevDependencies: herramientas de build, tests, lint, tipos. No hay dependencias innecesarias. |

## XSS e inyección

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1 | Buscar `dangerouslySetInnerHTML`, `innerHTML` y similares | PASSED | Dos usos en `src/app/layout.tsx:81` y `:105`, ambos para bloques JSON-LD (`application/ld+json`) generados con `JSON.stringify()` de datos controlados del sistema (nombre, URL, email, job title, organización, palabras clave, enlaces sociales). No es entrada de usuario. Justificado. |
| 2 | Si hay MDX o contenido dinámico, confirmar sanitizado | NO APLICA | No hay MDX ni contenido generado por usuarios. |

## Lo que NO aplica (sin login, sesiones ni base de datos)

| Punto | Estado | Comentario |
|-------|--------|------------|
| RLS (Row Level Security) | NO APLICA | No hay base de datos. |
| Hash de contraseñas | NO APLICA | No hay login ni almacenamiento de credenciales. |
| Cookies de sesión | NO APLICA | No hay autenticación ni sesiones. |

## Verificación ejecutada

| Comando | Resultado |
|---------|-----------|
| `npm run lint` | 0 errores, 0 advertencias |
| `npm run typecheck` | Sin errores de TypeScript |
| `npm run build` | Export estática correcta; `out/_headers` generado |
| `npm test` | 30 pruebas aprobadas |
| `npm audit` | 0 vulnerabilidades |

## Notas

- Las cabeceras de seguridad se sirven mediante `public/_headers` (copiado a `out/_headers` en el export estático). Next.js advierte que `headers()` en `next.config` no funciona con `output: export`; por eso se usa `_headers` en su lugar. Cloudflare Pages aplica estas cabeceras en producción.
- El propietario debe reemplazar `https://tu-dominio.com` por su dominio real en `public/robots.txt`, `public/sitemap.xml` y la variable `NEXT_PUBLIC_SITE_URL` antes de publicar.
- HSTS solo tiene efecto en HTTPS; en desarrollo local (HTTP) no aplica.
