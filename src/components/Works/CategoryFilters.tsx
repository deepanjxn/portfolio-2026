"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { useDensity } from "@/context/DensityContext";
import { useInteractionMode } from "@/hooks/useInteractionMode";

interface CategoryFiltersProps {
  activeCategory: ProjectType | "all";
  onCategoryChange: (category: ProjectType | "all") => void;
  mobile?: boolean;
}

const FILTERS: { id: ProjectType | "all"; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
  { id: "labs", label: "Labs" },
];

export function CategoryFilters({ activeCategory, onCategoryChange, mobile = false }: CategoryFiltersProps) {
  const { theme } = useTheme();
  const density = useDensity();
  const interaction = useInteractionMode();
  const isHoverable = interaction === "desktop";
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const textColor = theme.text;
  const r = parseInt(textColor.slice(1, 3), 16);
  const g = parseInt(textColor.slice(3, 5), 16);
  const b = parseInt(textColor.slice(5, 7), 16);
  const textColor20 = `rgba(${r}, ${g}, ${b}, 0.2)`;
  const textColor50 = `rgba(${r}, ${g}, ${b}, 0.5)`;

  return (
    <div className="flex items-center" style={{ gap: 12 }}>
      {FILTERS.map((filter) => {
        const isActive = activeCategory === filter.id;
        const isHovered = hoveredId === filter.id;

        const borderColor = isActive
          ? textColor
          : isHovered && isHoverable
            ? textColor50
            : textColor20;

        return (
          <motion.button
            key={filter.id}
            onClick={() => onCategoryChange(filter.id)}
            onHoverStart={isHoverable ? () => setHoveredId(filter.id) : undefined}
            onHoverEnd={isHoverable ? () => setHoveredId(null) : undefined}
            initial={false}
            animate={{
              backgroundColor: isActive ? theme.gray : "transparent",
              borderColor,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="font-medium cursor-pointer rounded-full"
            style={{
              letterSpacing: "-0.04em",
              color: theme.text,
              borderWidth: 1,
              borderStyle: "solid",
              fontSize: mobile ? 16 : density.font(16),
              lineHeight: mobile ? "normal" : `${density.spacing(36)}px`,
              padding: mobile ? "12px 20px" : `${density.spacing(8)}px ${density.spacing(24)}px`,
            }}
          >
            {filter.label}
          </motion.button>
        );
      })}
    </div>
  );
}
