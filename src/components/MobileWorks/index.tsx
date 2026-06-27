"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "@/animations/variants";
import { ProjectType } from "@/types";
import { PROJECTS } from "@/constants/works";
import { WORKS_DESCRIPTION } from "@/constants/works";
import { useTheme } from "@/context/ThemeContext";
import { CategoryFilters } from "@/components/Works/CategoryFilters";
import { ProjectCounter } from "@/components/Works/ProjectCounter";
import { ProjectCarousel } from "@/components/Works/ProjectCarousel";

const MOBILE_CARD_WIDTH = 260;
const MOBILE_GAP = 48;

export function MobileWorks() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<ProjectType | "all">("projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.type === activeCategory);
  }, [activeCategory]);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex-1 overflow-y-auto"
    >
      <div
        style={{
          backgroundColor: theme.surface,
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <div style={{ padding: "0 16px" }}>
          <motion.div variants={fadeIn} className="flex flex-col" style={{ paddingTop: 16 }}>
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-medium leading-none"
              style={{
                fontSize: 48,
                letterSpacing: "-0.04em",
                color: theme.text,
              }}
            >
              WORKS
            </motion.h1>

            <div style={{ height: 12 }} />

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-[16px] leading-[1.6] font-medium"
              style={{
                color: theme.text,
                letterSpacing: "-0.04em",
              }}
            >
              {WORKS_DESCRIPTION}
            </motion.p>

            <div style={{ height: 32 }} />

            <CategoryFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              mobile
            />

            <div style={{ height: 16 }} />

            <ProjectCounter count={filteredProjects.length} mobile />
          </motion.div>
        </div>

        <div style={{ height: 32 }} />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="h-[280px]" style={{ paddingBottom: 40 }}>
            <ProjectCarousel
              key={activeCategory}
              projects={filteredProjects}
              cardWidth={MOBILE_CARD_WIDTH}
              gap={MOBILE_GAP}
              mobile
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
