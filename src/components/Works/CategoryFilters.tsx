"use client";

import { motion } from "framer-motion";
import { ProjectType } from "@/types";
import { useTheme } from "@/context/ThemeContext";

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

  return (
    <div className="flex items-center" style={{ gap: 12 }}>
      {FILTERS.map((filter) => {
        const isActive = activeCategory === filter.id;
        return (
          <motion.button
            key={filter.id}
            onClick={() => onCategoryChange(filter.id)}
            layout
            initial={false}
            animate={{
              backgroundColor: isActive ? theme.gray : "transparent",
              borderColor: isActive ? "transparent" : theme.text,
            }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="font-medium cursor-pointer rounded-full"
            style={{
              letterSpacing: "-0.04em",
              color: theme.text,
              borderWidth: 1,
              borderStyle: "solid",
              fontSize: 16,
              lineHeight: mobile ? "normal" : "36px",
              padding: mobile ? "12px 20px" : "8px 24px",
            }}
          >
            {filter.label}
          </motion.button>
        );
      })}
    </div>
  );
}
