"use client";

import { useState, useEffect } from "react";

export function useResponsiveScale(): number {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function compute() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const wRatio = Math.max(0.85, Math.min(1, (w - 1024) / (1440 - 1024)));
      const hRatio = Math.max(0.85, Math.min(1, (h - 700) / (900 - 700)));
      return Math.min(wRatio, hRatio);
    }

    /* eslint-disable react-hooks/set-state-in-effect */
    setScale(compute());
    /* eslint-enable react-hooks/set-state-in-effect */

    let id: number;
    const onResize = () => {
      cancelAnimationFrame(id);
      id = requestAnimationFrame(() => setScale(compute()));
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(id);
    };
  }, []);

  return scale;
}
