"use client";

import { useState, useEffect } from "react";

export type InteractionMode = "desktop" | "mobile";

function getInitialMode(): InteractionMode {
  if (typeof window === "undefined") return "desktop";
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ? "desktop"
    : "mobile";
}

export function useInteractionMode(): InteractionMode {
  const [mode, setMode] = useState<InteractionMode>(getInitialMode);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const handler = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "desktop" : "mobile");
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return mode;
}
