# Google Analytics + Search Console — fase 14 (Prompt 14)

Fecha: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.

## Qué se implementó

### Google Analytics (GA4)

- Paquete instalado: `@next/third-parties` (contiene `@next/third-parties/google`).
- Componente `src/components/analytics.tsx` (`"use client"`): renderiza `<GoogleAnalytics gaId={...} />` solo cuando `NEXT_PUBLIC_GA_MEASUREMENT_ID` está definido.
- Integrado en `src/app/layout.tsx`: `<Analytics />` se monta en `<body>`, antes que `{children}`, para que el script de GA se cargue sin bloquear el renderizado del contenido.
- Variable de entorno: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (prefijo `NEXT_PUBLIC_` para estar disponible en el navegador).

### Google Search Console (verificación por meta tag)

- `src/app/layout.tsx`: en el objeto `metadata`, se añade `other: { "google-site-verification": ... }` con el valor de `NEXT_PUBLIC_GSC_VERIFICATION`.
- Esto inyecta el meta tag `<meta name="google-site-verification" content="...">` en el `<head>` de todas las rutas.
- Variable de entorno: `NEXT_PUBLIC_GSC_VERIFICATION`.

### Variables de entorno

| Archivo | Contenido | Estado |
| --- | --- | --- |
| `.env.example` | Plantilla con claves vacías (`NEXT_PUBLIC_GA_MEASUREMENT_ID=`, `NEXT_PUBLIC_GSC_VERIFICATION=`) | Commiteado |
| `.env.local` | Valores reales (Measurement ID y token de verificación) | **No commiteado** (excluido por `.gitignore`) |

`.env.local` está excluido de Git mediante `.gitignore` (líneas `.env` y `.env.*`). Nunca subir valores reales al repositorio.

## Pasos realizados (por el agente)

1. `npm install @next/third-parties`.
2. Creado `src/components/analytics.tsx` con `GoogleAnalytics` de `@next/third-parties/google`.
3. Actualizado `src/app/layout.tsx`:
   - Importa e incluye `<Analytics />` en `<body>`.
   - Añade `"google-site-verification"` a `metadata.other`.
4. Creado `.env.example` con plantilla de variables vacías.
5. Creado `.env.local` con los valores proporcionados (no versionado).
6. Verificación: `npm run lint`, `npm run typecheck`, `npm run build`, `npm test` (30 pruebas aprobadas).

## Pasos manuales (pendientes, los hace el propietario)

### Google Analytics

1. **Crear la propiedad en Google Analytics** (si aún no existe): https://analytics.google.com/
2. Obtener el **Measurement ID** (formato `G-XXXXXXXXXX`) y copiarlo en `.env.local`:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. El valor ya está en `.env.local` (G-1JX09CH0N9), pero debe confirmarse que coincide con la propiedad creada en tu cuenta.
4. Desplegar en Cloudflare Pages (Prompt 13) con la variable de entorno agregada en **Pages → Settings → Environment variables**:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-1JX09CH0N9`

### Google Search Console

1. **Agregar la propiedad en Search Console**: https://search.google.com/search-console/
   - Elegir "Prefijo de URL" y escribir `https://tu-dominio.com/` (o el subdominio `*.pages.dev` si no hay dominio propio).
2. **Método de verificación: meta tag** (elegido por el propietario).
3. Copiar el token de verificación en `.env.local`:
   ```env
   NEXT_PUBLIC_GSC_VERIFICATION=uR75GlsAlZyStmxiZ2pxViQnU4MvDrckNetAxJgALOY
   ```
4. Desplegar en Cloudflare Pages con la variable de entorno:
   - `NEXT_PUBLIC_GSC_VERIFICATION` = `uR75GlsAlZyStmxiZ2pxViQnU4MvDrckNetAxJgALOY`
5. En Search Console, hacer clic en **Verificar**. Google leerá el meta tag del HTML y confirmará la propiedad.

> Nota: el token ya está en `.env.local`, pero debe añadirse como variable de entorno en el hosting (Cloudflare Pages) para que esté presente en el deployment de producción.

## Cómo verificar el funcionamiento

### Google Analytics

1. Abrir el sitio en el navegador.
2. Abrir las herramientas de desarrollador → pestaña **Network**.
3. Filtrar por `google-analytics` o `collect`.
4. Confirmar que se envía una petición a `https://www.google-analytics.com/collect` o al endpoint de GA4 con el Measurement ID `G-1JX09CH0N9`.
5. Alternativamente, usar la extensión **Google Tag Assistant** para Chrome.
6. En la propiedad de Google Analytics, revisar **Informes en tiempo real** tras visitar el sitio.

### Google Search Console

1. Tras desplegar con la variable de entorno, abrir el código fuente del sitio (`Ctrl+U` o ver código fuente).
2. Buscar `<meta name="google-site-verification" content="uR75GlsAlZyStmxiZ2pxViQnU4MvDrckNetAxJgALOY">`.
3. En Search Console, hacer clic en **Verificar**.
4. Si falla, confirmar que el meta tag está presente en el HTML servido por Cloudflare Pages y que el token coincide exactamente.

## Envío del sitemap

1. En Search Console, seleccionar la propiedad verificada.
2. Ir a **Sitemaps** (menú lateral, sección Indexación).
3. En **Agregar un nuevo sitemap**, escribir:
   ```
   https://tu-dominio.com/sitemap.xml
   ```
   (o `https://tu-proyecto.pages.dev/sitemap.xml` si no hay dominio propio).
4. Hacer clic en **Enviar**.
5. El sitemap incluye las rutas: `/`, `/proyectos/hangar`, `/proyectos/taskflow-pro`, `/design-system`.

## Revisión de indexación

1. En Search Console, ir a **Páginas** (sección Indexación) para ver qué URLs están indexadas.
2. Usar la herramienta **Inspección de URL** para comprobar una URL específica (p. ej. `https://tu-dominio.com/proyectos/hangar`).
3. Revisar **Mejoras** para detectar problemas de usabilidad móvil, breadcrumbs, etc.
4. El sitemap se envía una sola vez; Google lo re-crawl periódicamente.

## Archivos modificados

| Archivo | Cambio |
| --- | --- |
| `package.json` / `package-lock.json` | Añadido `@next/third-parties` |
| `src/components/analytics.tsx` | Nuevo: componente client con `GoogleAnalytics` |
| `src/app/layout.tsx` | Incluye `<Analytics />` y meta tag `google-site-verification` |
| `.env.example` | Nuevo: plantilla de variables de entorno |
| `.env.local` | Nuevo: valores reales (no versionado, en `.gitignore`) |
| `docs/ANALYTICS_SEARCH_CONSOLE.md` | Nuevo: esta documentación |

## Verificación del portafolio (previa al deployment)

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; exportación estática con todas las rutas.
- `npm test`: 30 pruebas aprobadas.

## Pendiente

- Confirmar que el Measurement ID `G-1JX09CH0N9` coincide con la propiedad creada en tu cuenta de Google Analytics.
- Desplegar en Cloudflare Pages (Prompt 13) con las variables de entorno configuradas.
- Verificar la propiedad en Search Console tras el despliegue.
- Enviar el sitemap y revisar la indexación.
