"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectType } from "@/types";
import { PROJECTS } from "@/constants/works";
import { useDensity } from "@/context/DensityContext";
import { FullBleed } from "@/components/FullBleed";
import { WorksHeader } from "./WorksHeader";
import { CategoryFilters } from "./CategoryFilters";
import { ProjectCounter } from "./ProjectCounter";
import { ProjectCarousel } from "./ProjectCarousel";

export function Works() {
  const density = useDensity();
  const [activeCategory, setActiveCategory] = useState<ProjectType | "all">(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("works_category");
      if (saved === "all" || saved === "projects" || saved === "case-studies" || saved === "labs") {
        sessionStorage.removeItem("works_category");
        return saved;
      }
    }
    return "projects";
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("works_category", activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full h-full flex flex-col" {...(density.isCompact ? { "data-laptop": "" } : {})}>
      <WorksHeader />

      <div style={{ height: density.spacing(48) }} />

      <div className="flex items-center justify-between">
        <CategoryFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectCounter count={filteredProjects.length} />
      </div>

      <div style={{ height: density.spacing(8) }} />

      <FullBleed className="flex-1 min-h-0">
        <motion.div
          initial={false}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
        >
          <ProjectCarousel
            key={activeCategory}
            projects={filteredProjects}
            cardWidth={density.spacing(640)}
            gap={density.spacing(240)}
          />
        </motion.div>
      </FullBleed>
    </div>
  );
}
