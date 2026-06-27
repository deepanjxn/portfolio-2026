"use client";

import { useState, useMemo } from "react";
import { ProjectType } from "@/types";
import { PROJECTS } from "@/constants/works";
import { OUTER_PADDING } from "@/theme/tokens";
import { WorksHeader } from "./WorksHeader";
import { CategoryFilters } from "./CategoryFilters";
import { ProjectCounter } from "./ProjectCounter";
import { ProjectCarousel } from "./ProjectCarousel";

export function Works() {
  const [activeCategory, setActiveCategory] = useState<ProjectType | "all">("projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full h-full flex flex-col">
      <WorksHeader />

      <div style={{ height: 48 }} />

      <div className="flex items-center justify-between">
        <CategoryFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectCounter count={filteredProjects.length} />
      </div>

      <div style={{ height: 8 }} />

      <div
        className="flex-1 min-h-0"
        style={{
          marginLeft: -OUTER_PADDING,
          marginRight: -OUTER_PADDING,
          width: `calc(100% + ${2 * OUTER_PADDING}px)`,
        }}
      >
        <ProjectCarousel
          key={activeCategory}
          projects={filteredProjects}
        />
      </div>
    </div>
  );
}
