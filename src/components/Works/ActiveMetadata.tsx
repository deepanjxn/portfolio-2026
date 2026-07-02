"use client";

import { memo } from "react";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";

interface ActiveMetadataProps {
  project: Project;
  mobile?: boolean;
}

export const ActiveMetadata = memo(function ActiveMetadata({ project, mobile }: ActiveMetadataProps) {
  const { theme } = useTheme();

  return (
    <div className="flex" style={{ justifyContent: "space-between", alignItems: mobile ? "flex-start" : "center" }}>
      <span
        className={`text-[12px] font-medium leading-[1.3] uppercase ${mobile ? "" : "truncate"}`}
        style={{
          color: theme.text,
          letterSpacing: "-0.04em",
        }}
      >
        {project.title}
      </span>
      <span
        className={`text-[12px] font-medium leading-[1.3] uppercase ${mobile ? "" : "truncate ml-4"}`}
        style={{
          color: theme.accent,
          letterSpacing: "-0.04em",
          ...(mobile ? { marginLeft: "auto", textAlign: "right" } : {}),
        }}
      >
        {project.categories.join(", ")}
      </span>
    </div>
  );
});
