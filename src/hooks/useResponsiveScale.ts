"use client";

import { useState, useEffect } from "react";

function computeScale(): number {
  if (typeof window === "undefined") return 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const wRatio = Math.max(0.85, Math.min(1, (w - 1024) / (1440 - 1024)));
  const hRatio = Math.max(0.85, Math.min(1, (h - 700) / (900 - 700)));
  return Math.min(wRatio, hRatio);
}

export function useResponsiveScale(): number {
  const [scale, setScale] = useState(computeScale);

  useEffect(() => {
    let id: number;
    const onResize = () => {
      cancelAnimationFrame(id);
      id = requestAnimationFrame(() => setScale(computeScale()));
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(id);
    };
  }, []);

  return scale;
}
