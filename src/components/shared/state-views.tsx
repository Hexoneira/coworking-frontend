import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/status-badge";

export function LoadingState({
  title = "Cargando información...",
  description = "Estamos consultando los datos más recientes.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="cud-card flex flex-col items-start gap-3 p-6"
    >
      <StatusBadge tone="info" label="En progreso" />
      <div className="space-y-1">
        <p className="text-base font-semibold text-cud-text">{title}</p>
        <p className="text-sm text-cud-text-muted">{description}</p>
      </div>
      <div className="w-full space-y-2 pt-1" aria-hidden="true">
        <div className="h-3 w-2/3 rounded bg-cud-surface-muted" />
        <div className="h-3 w-1/2 rounded bg-cud-surface-muted" />
      </div>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="cud-card flex flex-col items-start gap-3 p-6">
      <StatusBadge tone="info" label="Sin registros" />
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-cud-text">{title}</h3>
        <p className="text-sm text-cud-text-muted">{description}</p>
      </div>
      {action ? <div className="pt-1">{action}</div> : null}
    </div>
  );
}

export function ErrorState({
  title = "No fue posible completar la operación",
  description,
  code,
  onRetry,
}: {
  title?: string;
  description: string;
  code?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="cud-card flex flex-col items-start gap-3 border-cud-danger/40 p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge tone="danger" label="Error" />
        {code ? (
          <span className="font-mono text-xs text-cud-text-muted">{code}</span>
        ) : null}
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-cud-text">{title}</h3>
        <p className="text-sm text-cud-text-muted">{description}</p>
      </div>
      {onRetry ? (
        <Button variant="secondary" onClick={onRetry}>
          Reintentar
        </Button>
      ) : null}
    </div>
  );
}

export function SuccessState({
  title,
  description,
  folio,
  action,
}: {
  title: string;
  description: string;
  folio?: string;
  action?: ReactNode;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="cud-card flex flex-col items-start gap-3 p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge tone="success" label="Completado" />
        {folio ? (
          <span className="font-mono text-xs text-cud-text-muted">
            Folio {folio}
          </span>
        ) : null}
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-cud-text">{title}</h3>
        <p className="text-sm text-cud-text-muted">{description}</p>
      </div>
      {action ? <div className="pt-1">{action}</div> : null}
    </div>
  );
}
