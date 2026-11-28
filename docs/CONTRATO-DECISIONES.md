# Flujo de Trabajo y Decisiones de Contrato (Fase 0)

## 1. Protección de `main` en GitHub
Configurar en **Settings → Branches → Branch protection rules** para `main`:
- Require a pull request before merging (1 aprobación de la otra persona del equipo).
- Require status checks to pass before merging: **`Lint, Typecheck y Build`** (workflow `.github/workflows/ci.yml`).
- Require branches to be up to date before merging.
- Do not allow bypassing the above settings / bloquear pushes directos a `main`.
- Usar ramas cortas por flujo (`feat/fase-2a-openapi-client`, `feat/fase-2b-auth-bff`, etc.).

## 2. Decisiones del Contrato Backend a Ratificar antes de Fase 2
Referencia: `coworking-docs/CONTRATO-BACKEND.md` §28 y `openapi/openapi.yaml`:

1. **Login**: `POST /auth/login` usa `documentNumber` + `password` (no correo electrónico).
2. **Cookies BFF**: nombre de cookie de sesión (`HttpOnly`, `SameSite=Lax`, `Path=/`) y mecanismo de entrega de `X-CSRF-Token` entre FastAPI y Next.js.
3. **Rol de recepción**: `R06` (`RECEPTIONIST`) incorporado en catálogo `Rol` antes de crear cuentas de portería.
4. **Cambio obligatorio de contraseña**: `requiresPasswordChange: true` bloquea toda ruta distinta de `GET /auth/session`, `POST /auth/change-password` y `POST /auth/logout` con `403 PASSWORD_CHANGE_REQUIRED`.
5. **Política de reservas y sanciones**: toda reserva inicia `PENDING` (`ER03`) y requiere aprobación `GLOBAL_ADMIN`; `NOAUT` bloquea ingreso propio pero **nunca** la salida.
6. **Versionado OpenAPI**: indicar en la descripción de cada PR que regenere `src/lib/api/schema.d.ts` el commit o versión de `coworking-docs/openapi/openapi.yaml` utilizado.
7. **Membresías**: confirmar si toda cuenta tendrá una sola membresía activa o si el personal no estudiantil podrá pertenecer a varios grupos.
8. **Acompañamiento**: confirmar si el anfitrión debe estar físicamente dentro para que su invitado pueda ingresar.
9. **Duración de sanciones**: confirmar si se permiten amonestaciones indefinidas con `sanctionEndsAt: null`.
10. **Persistencia técnica**: decidir Redis o tablas nuevas para sesiones, QR e idempotencia; cualquier tabla nueva requiere migración justificada.
11. **Motivos operativos**: decidir si `reason` de reservas y `purpose` de invitaciones se conservan solo en auditoría o requieren columnas persistentes.
12. **Aprobación de reservas**: ratificar que toda solicitud comienza `PENDING` y requiere revisión de `GLOBAL_ADMIN`, sin confirmación automática.
