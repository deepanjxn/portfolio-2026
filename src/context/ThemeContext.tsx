"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react";
import { ThemeTokens } from "@/types";
import { lightTheme } from "@/theme/light";
import { darkTheme } from "@/theme/dark";

type ThemeMode = "system" | "light" | "dark";

interface ThemeContextValue {
  mode: "light" | "dark";
  theme: ThemeTokens;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  theme: lightTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [pref, setPref] = useState<ThemeMode>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme-preference") as ThemeMode | null;
    let effectivePref: ThemeMode;
    if (saved === "system" || saved === "dark" || saved === "light") {
      effectivePref = saved;
    } else {
      const old = localStorage.getItem("theme");
      if (old === "dark") effectivePref = "dark";
      else if (old === "light") effectivePref = "light";
      else effectivePref = "system";
    }

    let effectiveResolved: "light" | "dark";
    if (effectivePref === "dark") {
      effectiveResolved = "dark";
    } else if (effectivePref === "light") {
      effectiveResolved = "light";
    } else {
      effectiveResolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    /* eslint-disable react-hooks/set-state-in-effect */
    setPref(effectivePref);
    setResolved(effectiveResolved);
    setInitialized(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!initialized) return;
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [resolved, initialized]);

  useEffect(() => {
    if (!initialized) return;
    localStorage.setItem("theme-preference", pref);
  }, [pref, initialized]);

  useEffect(() => {
    if (pref !== "system") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setResolved(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [pref]);

  const toggleTheme = useCallback(() => {
    const newMode = resolved === "light" ? "dark" : "light";
    setPref(newMode);
    setResolved(newMode);
  }, [resolved]);

  const theme = resolved === "light" ? lightTheme : darkTheme;

  const value = useMemo(() => ({ mode: resolved, theme, toggleTheme }), [resolved, theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
