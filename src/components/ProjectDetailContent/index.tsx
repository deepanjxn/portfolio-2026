"use client";

import { motion } from "framer-motion";
import { getProjectDetail } from "@/data/projects/registry";
import { useTheme } from "@/context/ThemeContext";
import { useDensity, DensityProvider } from "@/context/DensityContext";
import { PageContainer } from "@/components/PageContainer";
import { Contained } from "@/components/Contained";
import { ProjectRenderer } from "@/components/ProjectRenderer";
import { BottomNavigation } from "@/components/BottomNavigation";
import { OUTER_PADDING, COLUMN_GAP, HERO_BOTTOM_GAP } from "@/theme/tokens";

function ProjectDetailShell({ slug }: { slug: string }) {
  const project = getProjectDetail(slug);
  const { theme } = useTheme();
  const density = useDensity();

  if (!project) {
    return null;
  }

  const gutter = density.spacing(OUTER_PADDING);

  return (
    <div
      className="h-full w-full flex flex-col"
      style={{
        backgroundColor: theme.surface,
        gap: density.spacing(HERO_BOTTOM_GAP),
      }}
    >
      {/* Scrollable content */}
      <div
        className="flex-1 min-h-0 overflow-y-auto"
        style={{ padding: `0 ${gutter}px` }}
      >
        <PageContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
            style={{ paddingTop: gutter }}
          >
            {/* Header */}
            <Contained>
              <h1
                className="font-medium leading-none"
                style={{
                  fontSize: density.font(112),
                  letterSpacing: "-0.04em",
                  color: theme.text,
                }}
              >
                {project.title}
              </h1>

              <div style={{ height: density.spacing(24) }} />

              <p
                className="text-[16px] leading-[1.6] font-medium"
                style={{
                  color: theme.text,
                  letterSpacing: "-0.04em",
                }}
              >
                {project.description}
              </p>
            </Contained>

            <div style={{ height: density.spacing(64) }} />

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={project.hero}
                alt={`${project.title} hero`}
                className="w-full h-auto block"
                draggable={false}
              />
            </motion.div>

            <div style={{ height: density.spacing(64) }} />

            {/* Editorial Section */}
            <Contained>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: density.spacing(COLUMN_GAP),
                }}
              >
                {/* Left Column */}
                <div className="flex flex-col" style={{ gap: density.spacing(32) }}>
                  <div>
                    <h2
                      className="text-[24px] font-medium leading-none"
                      style={{
                        letterSpacing: "-0.04em",
                        color: theme.text,
                      }}
                    >
                      Responsibilities
                    </h2>
                    <div style={{ height: density.spacing(16) }} />
                    <div className="flex flex-col" style={{ gap: density.spacing(8) }}>
                      {project.responsibilities.map((item, i) => (
                        <p
                          key={i}
                          className="text-[16px] leading-[1.6] font-medium"
                          style={{
                            color: theme.text,
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {`\u2022 ${item}`}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2
                      className="text-[24px] font-medium leading-none"
                      style={{
                        letterSpacing: "-0.04em",
                        color: theme.text,
                      }}
                    >
                      Contribution
                    </h2>
                    <div style={{ height: density.spacing(16) }} />
                    <p
                      className="text-[16px] leading-[1.6] font-medium"
                      style={{
                        color: theme.text,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {project.contribution}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h2
                    className="text-[24px] font-medium leading-none"
                    style={{
                      letterSpacing: "-0.04em",
                      color: theme.text,
                    }}
                  >
                    About the Project
                  </h2>
                  <div style={{ height: density.spacing(16) }} />
                  <p
                    className="text-[16px] leading-[1.6] font-medium"
                    style={{
                      color: theme.text,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {project.aboutProject}
                  </p>
                </div>
              </div>
            </Contained>

            <div style={{ height: density.spacing(64) }} />

            {/* Gallery */}
            <ProjectRenderer sections={project.sections} />
          </motion.div>
        </PageContainer>
      </div>

      {/* Bottom navigation */}
      <div
        style={{
          padding: `0 ${gutter}px ${gutter}px`,
        }}
      >
        <PageContainer>
          <BottomNavigation back />
        </PageContainer>
      </div>
    </div>
  );
}

export function ProjectDetailContent({ slug }: { slug: string }) {
  return (
    <DensityProvider>
      <ProjectDetailShell slug={slug} />
    </DensityProvider>
  );
}
