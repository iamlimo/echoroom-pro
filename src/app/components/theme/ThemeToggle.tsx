"use client";

import { useEffect, useMemo, useState } from "react";
import { Sun, Moon } from "lucide-react";

import { Switch } from "../ui/switch";

type ThemeMode = "light" | "dark";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.classList.toggle("dark", mode === "dark");
  window.setTimeout(() => root.classList.remove("theme-transition"), 220);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setMode(initial);
    applyTheme(initial);
  }, []);

  const isDark = mode === "dark";
  const label = useMemo(() => (isDark ? "Switch to light mode" : "Switch to dark mode"), [isDark]);

  // Radix Switch "checked" is treated as "ON" for the thumb position.
  // To avoid inverted UX, bind checked=true to LIGHT mode.
  const isLight = mode === "light";

  return (
    <div className="flex items-center gap-2">
      {/* Light icon */}
      <Moon className="h-4 w-4 opacity-100 dark:opacity-0 transition-opacity" aria-hidden="true" />
      <Switch
        checked={isLight}
        aria-label={label}
        onCheckedChange={(checked) => {
          const next: ThemeMode = checked ? "light" : "dark";
          setMode(next);
          applyTheme(next);
          window.localStorage.setItem("theme", next);
        }}
      />
      {/* Dark icon */}
      <Sun className="h-4 w-4 opacity-0 dark:opacity-100 transition-opacity" aria-hidden="true" />
    </div>
  );
}
