<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7aa2f7,100:bb9af7&height=190&section=header&text=Coworking-UD&fontSize=54&fontColor=ffffff&animation=fadeIn" alt="Coworking-UD" />
</p>

<p align="center">
  <img src="docs/assets/logo-principal.svg" width="150" alt="Logotipo de Coworking-UD" />
</p>

<p align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=7AA2F7&center=true&vCenter=true&width=660&lines=Frontend+de+Coworking-UD;Next.js+%C2%B7+React+%C2%B7+TypeScript;Espacios+y+recursos+compartidos" alt="Presentación de Coworking-UD" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4.6-24283b?style=for-the-badge&logo=nextdotjs&logoColor=7aa2f7" alt="Next.js 16.4.6" />
  <img src="https://img.shields.io/badge/React-19.3.0-24283b?style=for-the-badge&logo=react&logoColor=7dcfff" alt="React 19.3.0" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-24283b?style=for-the-badge&logo=typescript&logoColor=7aa2f7" alt="TypeScript strict" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.3.3-24283b?style=for-the-badge&logo=tailwindcss&logoColor=7dcfff" alt="Tailwind CSS 4.3.3" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/pnpm-11.22.0-24283b?style=for-the-badge&logo=pnpm&logoColor=e0af68" alt="pnpm 11.22.0" />
  <img src="https://img.shields.io/badge/Node.js-24.16.0-24283b?style=for-the-badge&logo=nodedotjs&logoColor=9ece6a" alt="Node.js 24.16.0" />
  <img src="https://img.shields.io/badge/Licencia-MIT-24283b?style=for-the-badge&logo=opensourceinitiative&logoColor=bb9af7" alt="Licencia MIT" />
  <img src="https://img.shields.io/badge/Autor-GLUD-24283b?style=for-the-badge&logo=linux&logoColor=73daca" alt="Autor GLUD" />
</p>

> Frontend del sistema integral de espacios y recursos compartidos de la Universidad Distrital

Aplicación creada con Next.js App Router, React, TypeScript y Tailwind CSS. El repositorio se encuentra en preparación: todavía no contiene funcionalidad del dominio.

## Stack

- **Framework:** Next.js 16.4.6 con App Router y Turbopack.
- **UI:** React 19.3.0 y Tailwind CSS 4.3.3.
- **Tipado:** TypeScript en modo estricto.
- **Calidad inicial:** ESLint, TypeScript y build de producción.
- **Gestor:** pnpm 11.22.0 mediante Corepack.
- **Runtime:** Node.js 24.16.0.

## Inicio rápido

Instala las dependencias:

```bash
corepack pnpm install
```

Inicia el servidor de desarrollo:

```bash
corepack pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos

```bash
corepack pnpm dev
corepack pnpm lint
corepack pnpm exec tsc --noEmit
corepack pnpm build
corepack pnpm start
```

## Estructura

- `src/app/`: rutas, layout y tokens globales de la aplicación.
- `src/components/ui/`: primitivas de botones, campos y tarjetas.
- `src/components/shared/`: estados compartidos, badges y selector de tema.
- `public/brand/`: logotipos y favicon oficiales del manual de marca.
- `docs/adr/`: decisiones de arquitectura.
- `docs/assets/`: recursos usados por la documentación.
- `.github/workflows/`: validación continua del repositorio.

## Flujo de trabajo

1. Crea una rama corta `feat/...`, `fix/...` o `chore/...` desde `main`.
2. Mantén cada PR limitada a un issue o flujo.
3. Exige una aprobación de la otra persona del equipo y CI en verde.
4. Integra mediante merge commit, sin squash, rebase ni force-push sobre trabajo publicado.

## Documentación

- [ADR 001 — BFF, mocks y caché](docs/adr/001-bff-mocks-cache.md).
- [Flujo de trabajo y decisiones pendientes del contrato](docs/CONTRATO-DECISIONES.md).

El contrato funcional de backend se mantiene fuera de este repositorio, en `../coworking-docs/CONTRATO-BACKEND.md`, con su OpenAPI en `../coworking-docs/openapi/openapi.yaml`.

## Estado actual

- Base visual con tokens La Planta Común, fuentes autoalojadas y modo claro/oscuro.
- Primitivas accesibles y estados compartidos de carga, vacío, error y éxito.
- CI inicial para instalación, lint, typegen, typecheck y build.
- Sin módulos de negocio, integración HTTP, Docker ni despliegue configurado.

## Autor

**GLUD — Grupo GNU/Linux de la Universidad Distrital**

Universidad Distrital Francisco José de Caldas

Proyecto desarrollado para Bases de Datos, 2026-3.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta [LICENSE](LICENSE).

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:bb9af7,100:7aa2f7&height=110&section=footer" alt="Footer" />
</p>
