"use client";

import { createContext, useContext, useMemo, useCallback, type ReactNode } from "react";
import { useResponsiveScale } from "@/hooks/useResponsiveScale";

export interface DensityValue {
  scale: number;
  isCompact: boolean;
  spacing(px: number): number;
  font(px: number): number;
}

const defaultSpacing = (px: number) => px;
const defaultFont = (px: number) => px;

const DensityContext = createContext<DensityValue>({
  scale: 1,
  isCompact: false,
  spacing: defaultSpacing,
  font: defaultFont,
});

export function DensityProvider({ children }: { children: ReactNode }) {
  const scale = useResponsiveScale();
  const isCompact = scale < 1;

  const spacing = useCallback((px: number) => Math.round(px * scale), [scale]);
  const font = useCallback((px: number) => Math.round(px * scale), [scale]);

  const value = useMemo(() => ({ scale, isCompact, spacing, font }), [scale, isCompact, spacing, font]);

  return (
    <DensityContext.Provider value={value}>
      {children}
    </DensityContext.Provider>
  );
}

export function useDensity() {
  return useContext(DensityContext);
}
