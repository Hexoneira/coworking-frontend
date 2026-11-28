export type StatusTone = "success" | "warning" | "danger" | "info";

export interface StatusBadgeProps {
  tone: StatusTone;
  label: string;
  className?: string;
}

const TONE_CLASS: Record<StatusTone, string> = {
  success: "cud-status--success",
  warning: "cud-status--warning",
  danger: "cud-status--danger",
  info: "cud-status--info",
};

function StatusIcon({ tone }: { tone: StatusTone }) {
  switch (tone) {
    case "success":
      return (
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.3 4.3L6.5 11.1L3 7.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "warning":
      return (
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 5v3.5M8 11.5h.01M7.1 2.6L1.7 12a1 1 0 00.9 1.5h10.8a1 1 0 00.9-1.5L8.9 2.6a1 1 0 00-1.8 0z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "danger":
      return (
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M11.5 4.5l-7 7m0-7l7 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "info":
      return (
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 7v4M8 5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function StatusBadge({ tone, label, className = "" }: StatusBadgeProps) {
  return (
    <span className={`cud-status ${TONE_CLASS[tone]} ${className}`.trim()}>
      <StatusIcon tone={tone} />
      <span>{label}</span>
    </span>
  );
}
