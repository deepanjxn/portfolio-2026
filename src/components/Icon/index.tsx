"use client";

import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  fill?: boolean;
  weight?: number;
}

export function Icon({
  name,
  className,
  size = 20,
  fill = false,
  weight = 400,
}: IconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{
        fontSize: size,
        fontVariationSettings: `"FILL" ${fill ? 1 : 0}, "wght" ${weight}, "GRAD" 0, "opsz" 24`,
      }}
    >
      {name}
    </span>
  );
}
