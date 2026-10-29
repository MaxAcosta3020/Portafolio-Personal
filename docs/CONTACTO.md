# Contacto — arquitectura y decisiones (Prompt 12)

Fecha: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.

## Opción elegida: A — Enlace de correo directo (mailto:)

El contacto del portafolio es un enlace directo al correo del propietario:

```
mailto:maxacostado3020@gmail.com
```

Implementado en `src/content/profile.ts` (campo `contact.email`) y renderizado en la sección Contacto de la homepage como botón "Escríbeme" (`portfolioLabels.emailAction`).

## Por qué no se eligieron las otras opciones

| Opción | Motivo de descarte |
| --- | --- |
| B — Servicio externo de formulario (Formspree / Getform) | Añade dependencia de tercero; los datos pasan por servidores ajenos; requiere crear cuenta y configurar destino de correo. No es necesario para un portafolio de contacto directo. |
| C — Servicio con API key (Resend / SendGrid / Mailgun) + servidor | **Incompatible con la exportación estática** (`output: "export"` en `next.config.ts`). Requeriría adaptador de servidor, cambio de despliegue y manejo de API key secreta, lo cual el portafolio no necesita. |

## Qué no se implementó (por decisión intencional)

- **Formulario en el sitio:** No hay `<form>` de contacto. El visitante abre su propio cliente de correo. Esto elimina la necesidad de validación, honeypot, estados loading/success/error y envío de datos a terceros.
- **Variables de entorno secretas:** No se usa ninguna API key, token ni contraseña para el contacto. No existe `.env.local` con valores reales ni se debe crear.
- **Backend de envío de correo:** No hay Server Action, ruta de API ni función serverless. Coherente con la exportación estática y Cloudflare Pages.

## Accesibilidad del contacto

- El enlace "Escríbeme" es un `<a>` con `href="mailto:..."`, navegable por teclado, con foco visible y target táctil ≥44px (verificado en Playwright a 320/390/768/1024/1920px).
- El correo proviene del CV local (`contactSource`), con referencia de evidencia registrada.
- No hay promesa de tiempo de respuesta (coherente con `CONTENT_ARCHITECTURE.md`).

## Archivos relacionados

- `src/content/profile.ts` — definición de `contact.email` y `contact.professionalLinks` (GitHub, LinkedIn).
- `src/app/page.tsx` — sección Contacto con botón "Escríbeme".
- `src/components/portfolio.tsx` — no se usa para contacto (contacto está en la homepage).
- `.gitignore` — excluye `.env`, `.env.*`, `.dev.vars`, `.dev.vars.*`, `test-results/`, `playwright-report/`. Nunca colocar secretos en archivos versionados.
- `docs/SEO_SETUP.md` — señala que el CV público descargable sigue pendiente.

## Pendiente (señalado, no parte de esta fase)

- Versión pública descargable del CV (`resume.file` es `null`; no se usa el PDF local `CV_MAX-2.pdf` como URL).
- Dominio real y despliegue en Cloudflare Pages (Prompt 13).
