"use client";

import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";

interface ActiveMetadataProps {
  project: Project;
}

export function ActiveMetadata({ project }: ActiveMetadataProps) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between">
      <span
        className="text-[12px] font-medium leading-[1.3] truncate uppercase"
        style={{
          color: theme.text,
          letterSpacing: "-0.04em",
        }}
      >
        {project.title}
      </span>
      <span
        className="text-[12px] font-medium leading-[1.3] truncate ml-4 uppercase"
        style={{
          color: theme.accent,
          letterSpacing: "-0.04em",
        }}
      >
        {project.categories.join(", ")}
      </span>
    </div>
  );
}
