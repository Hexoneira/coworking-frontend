import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/shared/status-badge";
import {
  EmptyState,
  ErrorState,
  LoadingState,
  SuccessState,
} from "@/components/shared/state-views";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cud-bg text-cud-text">
      <header className="border-b border-cud-border bg-cud-surface">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-horizontal.svg"
              alt="Coworking-UD — Espacios y recursos compartidos"
              width={180}
              height={40}
              priority
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-xs uppercase tracking-wider text-cud-text-muted sm:inline">
              Diseño base
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10">
        <section className="rounded-[10px] bg-[#18363B] p-8 text-[#F5F2E9] shadow-[0_3px_12px_rgba(24,54,59,0.08)] sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#C0CBC5]">
                LA PLANTA COMÚN · TERCER PISO ADMINISTRATIVO
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Un espacio común. Trabajo que deja huella.
              </h1>
              <p className="font-serif text-base text-[#E4E9E3] sm:text-lg">
                Sistema integral de espacios y recursos compartidos de la
                Universidad Distrital: seis oficinas, una sala de juntas y un
                coworking central.
              </p>
            </div>
            <Image
              src="/brand/logo-inverso.svg"
              alt="Símbolo Coworking-UD"
              width={132}
              height={132}
              className="shrink-0"
            />
          </div>
        </section>

        <section aria-labelledby="primitives-heading" className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle id="primitives-heading">
                Controles y formularios base
              </CardTitle>
              <CardDescription>
                Primitivos con foco visible en terracota y área mínima táctil de 44px.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Acción principal</Button>
                <Button variant="accent">Acción destacada</Button>
                <Button variant="secondary">Secundaria</Button>
                <Button variant="ghost">Sutil</Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Documento universitario"
                  placeholder="20232020172"
                  helperText="Sin registro público; acceso asignado."
                />
                <Input
                  label="Ejemplo con validación"
                  defaultValue="000"
                  error="Ingresa un código válido."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estados semánticos con texto obligatorio</CardTitle>
              <CardDescription>
                Ningún estado depende únicamente del color (WCAG 2.2 AA).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <StatusBadge tone="success" label="Acceso autorizado" />
                <StatusBadge tone="warning" label="Pendiente de revisión" />
                <StatusBadge tone="danger" label="Amonestación activa" />
                <StatusBadge tone="info" label="Uso libre" />
              </div>
              <div className="rounded-[6px] border border-cud-border bg-cud-surface-muted/40 p-4 text-sm text-cud-text-muted">
                <p className="font-mono text-xs text-cud-text">
                  FOLIO RES-2026-001 · ROTACIÓN 00:42 · COP 3.500.000,00
                </p>
                <p className="mt-1">
                  Tipografías activas: <span className="font-semibold text-cud-text">IBM Plex Sans</span>,{" "}
                  <span className="font-mono text-cud-text">IBM Plex Mono</span> y{" "}
                  <span className="font-serif italic text-cud-text">Source Serif 4</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="states-heading" className="space-y-4">
          <div>
            <h2 id="states-heading" className="text-xl font-semibold text-cud-text">
              Estados compartidos de interfaz
            </h2>
            <p className="text-sm text-cud-text-muted">
              Patrones comunes de carga, vacío, error y confirmación para los próximos módulos.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <LoadingState />
            <EmptyState
              title="Sin reservas para el intervalo"
              description="No se encontraron reservas registradas en la fecha seleccionada."
            />
            <ErrorState
              code="LOAN_LIMIT_EXCEEDED"
              description="El usuario ya tiene tres préstamos sin devolver."
            />
            <SuccessState
              folio="RES001"
              title="Reserva confirmada"
              description="Sala de Juntas Principal, 28 nov 2026, 14:00–16:00."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
