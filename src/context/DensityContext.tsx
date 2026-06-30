"use client";

import { createContext, useContext, ReactNode } from "react";
import { useResponsiveScale } from "@/hooks/useResponsiveScale";

export interface DensityValue {
  scale: number;
  isCompact: boolean;
  spacing(px: number): number;
  font(px: number): number;
}

const DensityContext = createContext<DensityValue>({
  scale: 1,
  isCompact: false,
  spacing: (px) => px,
  font: (px) => px,
});

export function DensityProvider({ children }: { children: ReactNode }) {
  const scale = useResponsiveScale();
  const isCompact = scale < 1;

  return (
    <DensityContext.Provider
      value={{
        scale,
        isCompact,
        spacing: (px) => Math.round(px * scale),
        font: (px) => Math.round(px * scale),
      }}
    >
      {children}
    </DensityContext.Provider>
  );
}

export function useDensity() {
  return useContext(DensityContext);
}
