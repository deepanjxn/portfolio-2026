"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { ThemeTokens } from "@/types";
import { lightTheme } from "@/theme/light";
import { darkTheme } from "@/theme/dark";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  mode: ThemeMode;
  theme: ThemeTokens;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  theme: lightTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    if (saved === "dark" || saved === "light") {
      setMode(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
