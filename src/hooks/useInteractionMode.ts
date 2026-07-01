"use client";

import { useState, useEffect } from "react";

export type InteractionMode = "desktop" | "mobile";

export function useInteractionMode(): InteractionMode {
  const [mode, setMode] = useState<InteractionMode>("desktop");

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    /* eslint-disable react-hooks/set-state-in-effect */
    setMode(mq.matches ? "desktop" : "mobile");
    /* eslint-enable react-hooks/set-state-in-effect */

    const handler = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "desktop" : "mobile");
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return mode;
}
