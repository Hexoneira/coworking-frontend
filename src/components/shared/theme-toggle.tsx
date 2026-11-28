"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    }
    return "light";
  });

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  }

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
    >
      {theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
    </Button>
  );
}
