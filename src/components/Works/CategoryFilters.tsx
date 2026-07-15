"use client";

import { useState, useRef, useEffect } from "react";
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
  { id: "ux-breakdown", label: "Assignment Breakdowns" },
  { id: "labs", label: "Labs" },
];

export function CategoryFilters({ activeCategory, onCategoryChange, mobile = false }: CategoryFiltersProps) {
  const { theme } = useTheme();
  const density = useDensity();
  const interaction = useInteractionMode();
  const isHoverable = interaction === "desktop";
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (!mobile) return;
    const vp = viewportRef.current;
    const tr = trackRef.current;
    if (!vp || !tr) return;

    const measure = () => {
      const overflow = tr.scrollWidth - vp.clientWidth;
      const newLeft = overflow > 0 ? -overflow : 0;
      setConstraints((prev) =>
        prev.left !== newLeft || prev.right !== 0
          ? { left: newLeft, right: 0 }
          : prev
      );
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(vp);
    ro.observe(tr);

    return () => ro.disconnect();
  }, [mobile, activeCategory]);

  const textColor = theme.text;
  const r = parseInt(textColor.slice(1, 3), 16);
  const g = parseInt(textColor.slice(3, 5), 16);
  const b = parseInt(textColor.slice(5, 7), 16);
  const textColor20 = `rgba(${r}, ${g}, ${b}, 0.2)`;
  const textColor50 = `rgba(${r}, ${g}, ${b}, 0.5)`;

  if (mobile) {
    return (
      <div ref={viewportRef} style={{ overflow: "hidden" }}>
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0}
          className="flex items-center"
          style={{ gap: 12 }}
        >
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
                initial={false}
                animate={{
                  backgroundColor: isActive ? theme.gray : "transparent",
                  borderColor,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-medium cursor-pointer rounded-full"
                style={{
                  flex: "0 0 auto",
                  whiteSpace: "nowrap",
                  touchAction: "pan-y",
                  letterSpacing: "-0.04em",
                  color: theme.text,
                  borderWidth: 1,
                  borderStyle: "solid",
                  fontSize: 16,
                  lineHeight: "normal",
                  padding: "12px 20px",
                }}
              >
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    );
  }

  const pills = FILTERS.map((filter) => {
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
          fontSize: density.font(16),
          lineHeight: `${density.spacing(36)}px`,
          padding: `${density.spacing(8)}px ${density.spacing(24)}px`,
        }}
      >
        {filter.label}
      </motion.button>
    );
  });

  return (
    <div className="flex items-center" style={{ gap: 12 }}>
      {pills}
    </div>
  );
}
