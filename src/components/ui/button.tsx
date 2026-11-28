import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "cud-button--primary",
  accent: "cud-button--accent",
  secondary: "cud-button--secondary",
  ghost: "cud-button--ghost",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`cud-button ${VARIANT_CLASS[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
