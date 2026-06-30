"use client";

import { useTheme } from "@/context/ThemeContext";
import { useDensity } from "@/context/DensityContext";

interface ProjectCounterProps {
  count: number;
  mobile?: boolean;
}

export function ProjectCounter({ count, mobile = false }: ProjectCounterProps) {
  const { theme } = useTheme();
  const density = useDensity();

  return (
    <span
      className="font-medium leading-[1.6]"
      style={{
        color: theme.text,
        letterSpacing: "-0.04em",
        fontSize: mobile ? 16 : density.font(16),
      }}
    >
      {count} projects available
    </span>
  );
}
