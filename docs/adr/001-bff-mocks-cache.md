# ADR 001 — BFF endurecido, estrategia de mocks, caché y manejo temporal

- **Estado**: Aceptado (Fase 0)
- **Fecha**: 2026-11-27
- **Contexto**: `coworking-frontend` (Next.js 16.4.6 App Router con `cacheComponents: true` y `partialPrefetching: true`) actúa como BFF (*Backend For Frontend*) frente a una única API FastAPI (`coworking-api`) basada en `CONTRATO-BACKEND.md` v1.0.0 y `openapi/openapi.yaml`.

## Decisiones

### 1. Modo de API (`API_MODE`) validado en runtime
- Variable explícita `API_MODE=mock|proxy`.
- **En `next build` (CI)**: `COWORKING_API_URL` **no** es obligatoria; el build compila de forma independiente a la infraestructura backend.
- **En runtime de producción**: `API_MODE=proxy` y `COWORKING_API_URL` son obligatorias (fallo rápido al iniciar o en readiness si faltan). En Docker se inyecta como variable de entorno de ejecución.
- **Sin fallback silencioso**: nunca se degrada automáticamente a mocks si falla o falta `COWORKING_API_URL`.
- **Aislamiento de mocks**: los mocks de desarrollo/E2E se cargan mediante importación dinámica únicamente cuando `API_MODE=mock` en desarrollo/test, evitando que entren en el bundle de producción. No se construirá un backend mock completo en TypeScript.

### 2. BFF endurecido y `src/proxy.ts`
- **Allowlist por fase**: los Route Handlers bajo `/api/v1/*` solo habilitan rutas y métodos explícitamente permitidos para el corte en curso (iniciando en Fase 2 solo con `/auth/*`).
- **Transporte seguro**:
  - Upstream fijo (`COWORKING_API_URL`), jamás determinado por parámetros del cliente.
  - Sanitización de path/query y filtrado de headers *hop-by-hop*.
  - `Authorization` se reenvía **exclusivamente** en rutas `/guest-pass*`.
  - Propagación explícita de `Set-Cookie`, `X-CSRF-Token`, `Idempotency-Key` y `X-Request-Id`.
  - `cache: "no-store"` obligatorio en sesión, QR, ocupación y datos privados.
  - Respuestas `application/problem+json` reenviadas intactas con su código HTTP, `code` y `errors`.
- **Sesión en dos capas**: `src/proxy.ts` es solo una barrera inicial de navegación. El layout privado resuelve `GET /auth/session` para aplicar redirección a `/login` (`401` con `returnUrl` validado como ruta interna), aviso de permisos (`403`), bloqueo por `PASSWORD_CHANGE_REQUIRED` y limpieza total al cerrar sesión incluso si `POST /auth/logout` falla.

### 3. OpenAPI como única fuente de tipos
- Los tipos HTTP se generan localmente con `openapi-typescript` desde `../coworking-docs/openapi/openapi.yaml` hacia `src/lib/api/schema.d.ts`.
- `src/lib/api/schema.d.ts` queda **versionado** en el repositorio porque CI no hace checkout de `../coworking-docs`.
- CI valida consistencia mediante `pnpm exec tsc --noEmit` y `pnpm build`. Cada PR que regenere tipos indica la versión/commit del contrato.

### 4. Caché, secretos e idempotencia
- **Sin `localStorage` para credenciales ni tokens**.
- **QR y pases fuera de TanStack Query**: `qrToken` y `guestPassToken` (`#token=` leído en memoria y eliminado inmediatamente con `history.replaceState`) se gestionan en estado controlado en memoria, nunca en caché persistente ni logs.
- **Ocupación actual**: `staleTime: 0`, actualización manual y refresco periódico moderado solo con pestaña visible (`visibilitychange`).
- **Aislamiento por actor**: claves de TanStack Query parametrizadas por `userId` y `groupId`, con `queryClient.clear()` al cerrar sesión o cambiar de cuenta. Devtools excluidas de producción.
- **Idempotencia**: la `Idempotency-Key` se conserva en memoria hasta resolver la operación (reintentos reutilizan la misma clave y se bloquea doble clic; una acción nueva genera nueva clave). Ante `409` se inspeccionan `code` e `Idempotent-Replay`.

### 5. Regla temporal única (Reservas y Reportes)
- Transporte: **RFC 3339** con zona explícita (`Z` o offset).
- Normalización interna: **UTC**.
- Presentación en UI: **`America/Bogota`**.
- Intervalos semiabiertos: **`[startsAt, endsAt)`** (una reserva puede iniciar exactamente cuando termina otra).

### 6. Niveles de verificación
- **Nivel 1 (Frontend + Mocks/MSW)**: formularios, navegación, `problem+json`, idempotencia en cliente y accesibilidad (`axe` + pruebas manuales de teclado, foco, contraste claro/oscuro y zoom/reflow).
- **Nivel 2 (Smoke e Integración Real)**: se ejecuta incrementalmente en cada fase apenas `coworking-api` tenga el corte disponible (Auth en Fase 2, Membresías en Fase 3, QR en Fase 4, Préstamos en Fase 5, Reservas en Fase 6, Reportes en Fase 7).
