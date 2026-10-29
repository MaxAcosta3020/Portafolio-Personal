# Deployment — portafolio en Cloudflare Pages (Prompt 13)

Fecha: 29 de octubre de 2026. Dirección vigente: B, Plano de sistemas.

## Resumen

El portafolio es una aplicación Next.js con **exportación estática** (`output: "export"`) diseñada para desplegarse en **Cloudflare Pages**. No hay backend, ni Server Actions, ni base de datos, ni adaptador de runtime. El build genera la carpeta `out/` que se sube como sitio estático.

## Estado actual

- Repositorio en rama `main`, sin secrets versionados.
- `.gitignore` excluye `.env`, `.env.*`, `.dev.vars`, `.dev.vars.*`, `node_modules/`, `.next/`, `out/`, `test-results/`, `playwright-report/`, `.impeccable/`, `references/raw/`, `CV_MAX-2.pdf`.
- Build válido: `npm run build` genera `out/` con las rutas `/`, `/proyectos/hangar`, `/proyectos/taskflow-pro`, `/design-system`, `/_not-found`.
- `npm test`: 30 pruebas aprobadas.
- `npm run lint` y `npm run typecheck`: correctos.

## Qué hace el propietario (tú)

Estos pasos requieren tu cuenta y no deben ser realizados por mí:

1. **Iniciar sesión** en Cloudflare (dash.cloudflare.com).
2. **Crear o conectar** una cuenta de Cloudflare Pages.
3. **Elegir el repositorio** `MaxAcosta-30/Portafolio Digital` (o el nombre que uses) en GitHub.
4. **Autorizar GitHub** para que Cloudflare Pages lea el repositorio.
5. **Comprar o agregar un dominio** (opcional; si no tienes dominio, se usa el subdominio gratuito de Pages `*.pages.dev`).
6. **Modificar DNS** si usas un dominio propio (agregar CNAME o A record según indique Cloudflare).
7. **Agregar secrets** si en el futuro se requiere algún variable de entorno (hoy no hay ninguno necesario para el sitio estático).
8. **Confirmar el deployment** tras revisar la configuración de build.

## Qué yo ya hice (documentado aquí)

- Validé que el build funciona con `npm run build`.
- Preparé la configuración de Cloudflare Pages en `next.config.ts` (`output: "export"`).
- Verifiqué que `.gitignore` excluye secretos y artefactos locales.
- Generé este documento con los pasos exactos.
- Revisé la limpieza del repositorio (todo en `main`, sin commits pendientes).

## Configuración de Cloudflare Pages

| Campo | Valor |
| --- | --- |
| Proveedor de Git | GitHub |
| Repositorio | `MaxAcosta-30/Portafolio Digital` |
| Rama de producción | `main` |
| Comando de build | `npm run build` |
| Directorio de salida | `out` |
| Versión de Node | 24 (ver `.nvmrc`) |
| Framework preset | Next.js (detectado automáticamente) |
| Variables de entorno | Ninguna requerida actualmente |

## Pasos exactos de deployment

1. Ve a **Cloudflare Dashboard → Workers & Pages → Pages → Create a project**.
2. Conecta con **GitHub** y autoriza la aplicación.
3. Selecciona el repositorio `MaxAcosta-30/Portafolio Digital`.
4. En la configuración de build, confirma:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: 24
5. (Opcional) Agrega un dominio personalizado en **Pages → Tu proyecto → Custom domains**.
   - Si usas dominio propio, Cloudflare te dará los registros DNS (CNAME/A) que debes agregar en tu proveedor de DNS.
   - Sin dominio, el sitio estará disponible en `https://tu-proyecto.pages.dev`.
6. Haz clic en **Save and Deploy**.
7. Cloudflare ejecutará el build y publicará el sitio. Revisa que el deployment termine sin errores.

## Variables de entorno

Actualmente el sitio no requiere ninguna variable de entorno para funcionar (no hay formulario con API key, ni analytics, ni servicios externos). Si en el futuro agregas alguna (por ejemplo, en el Prompt 14 para Analytics), deberás agregarla en **Cloudflare Pages → Tu proyecto → Settings → Environment variables** y volver a desplegar. Nunca agregues valores reales en el repositorio; `.env.local` está ignorado por Git.

## Notas importantes

- No se ha desplegado aún. Este documento prepara el proyecto para que tú lo hagas.
- No supongo que ya poseas un dominio. Si no tienes uno, el sitio funciona con el subdominio gratuito de Cloudflare Pages.
- `/design-system` se exporta con `noindex, nofollow`; es documentación de desarrollo, no control de acceso. Antes de publicar, decidir si se conserva como ruta pública o se retira.
- La exportación estática no admite lógica dinámica de servidor ni Server Actions. No se agregó Wrangler ni un adaptador de runtime.

## Verificación post-deployment (tú)

Tras confirmar el deployment, revisa:
- El sitio carga en la URL asignada (subdominio `*.pages.dev` o tu dominio).
- Las rutas `/proyectos/hangar` y `/proyectos/taskflow-pro` responden correctamente.
- Los enlaces de repositorios (GitHub) abren bien.
- El enlace de correo ("Escríbeme") abre tu cliente de correo.
- No hay errores en la consola del navegador.

## Siguiente paso pendiente

El despliegue está preparado. Sigue pendiente el **Prompt 14 — Google Analytics + Search Console** (integrar Analytics con Measurement ID que tú proporcionarás, verificar Search Console, generar `docs/ANALYTICS_SEARCH_CONSOLE.md`), que requiere un nuevo prompt explícito antes de avanzar.
