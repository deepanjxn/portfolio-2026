"use client";

import { useTheme } from "@/context/ThemeContext";

interface ProjectCounterProps {
  count: number;
  mobile?: boolean;
}

export function ProjectCounter({ count, mobile = false }: ProjectCounterProps) {
  const { theme } = useTheme();

  return (
    <span
      className="font-medium leading-[1.6]"
      style={{
        color: theme.text,
        letterSpacing: "-0.04em",
        fontSize: 16,
      }}
    >
      {count} projects available
    </span>
  );
}
