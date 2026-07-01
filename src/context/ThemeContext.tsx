"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
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

function getInitialPref(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const saved = localStorage.getItem("theme-preference") as ThemeMode | null;
  if (saved === "system" || saved === "dark" || saved === "light") return saved;
  const old = localStorage.getItem("theme");
  if (old === "dark") return "dark";
  if (old === "light") return "light";
  return "system";
}

function getResolvedForPref(pref: ThemeMode): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  if (pref === "dark") return "dark";
  if (pref === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [pref, setPref] = useState<ThemeMode>(getInitialPref);
  const [resolved, setResolved] = useState<"light" | "dark">(() => getResolvedForPref(getInitialPref()));
  const [initialized] = useState(() => typeof window !== "undefined");

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

  return (
    <ThemeContext.Provider value={{ mode: resolved, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
