"use client";

import { motion } from "framer-motion";
import { ProjectDetail } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { useDensity } from "@/context/DensityContext";
import { ProjectRenderer } from "@/components/ProjectRenderer";
import { HeroMedia } from "@/components/HeroMedia";
import { Contained } from "@/components/Contained";
import { PageContainer } from "@/components/PageContainer";
import { OUTER_PADDING, PROJECT_DETAIL_TOP_SPACING, PROJECT_DETAIL_GUTTER } from "@/theme/tokens";

const PAGE_FADE = {
  duration: 0.65,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

const SECTION_REVEAL = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

function EditorialContainer({ children, density }: { children: React.ReactNode; density: ReturnType<typeof useDensity> }) {
  const gutter = density.spacing(PROJECT_DETAIL_GUTTER);

  return (
    <div style={{ paddingLeft: gutter, paddingRight: gutter }}>
      {children}
    </div>
  );
}

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={SECTION_REVEAL}
    >
      {children}
    </motion.div>
  );
}

export function ProjectDetailDesktop({ project }: { project: ProjectDetail }) {
  const { theme } = useTheme();
  const density = useDensity();

  const gutter = density.spacing(OUTER_PADDING);
  const topSpacing = density.spacing(PROJECT_DETAIL_TOP_SPACING);

  return (
    <>
      <div style={{ height: density.spacing(96) }} />

      <div style={{ padding: `0 ${gutter}px` }}>
        <PageContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={PAGE_FADE}
            className="flex flex-col"
            style={{ paddingTop: topSpacing, paddingBottom: 140 }}
          >
            {/* Project Title */}
            <SectionReveal>
              <EditorialContainer density={density}>
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
                </Contained>
              </EditorialContainer>
            </SectionReveal>

            <div style={{ height: density.spacing(64) }} />

            {/* Hero Image */}
            <SectionReveal>
              <EditorialContainer density={density}>
                <HeroMedia project={project} />
              </EditorialContainer>
            </SectionReveal>

            <div style={{ height: density.spacing(64) }} />

            {/* About the Project */}
            <SectionReveal>
              <EditorialContainer density={density}>
                <Contained>
                  <h2
                    className="text-[18px] font-medium leading-none"
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
                      opacity: 0.5,
                    }}
                  >
                    {project.aboutProject}
                  </p>
                </Contained>
              </EditorialContainer>
            </SectionReveal>

            <div style={{ height: density.spacing(36) }} />

            {/* Responsibilities */}
            <SectionReveal>
              <EditorialContainer density={density}>
                <Contained>
                  <h2
                    className="text-[18px] font-medium leading-none"
                    style={{
                      letterSpacing: "-0.04em",
                      color: theme.text,
                    }}
                  >
                    Responsibilities
                  </h2>
                  <div style={{ height: density.spacing(16) }} />
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: density.spacing(8),
                      listStyleType: "disc",
                      paddingLeft: density.spacing(24),
                    }}
                  >
                    {project.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="text-[16px] leading-[1.6] font-medium"
                        style={{
                        color: theme.text,
                        letterSpacing: "-0.04em",
                        opacity: 0.5,
                      }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Contained>
              </EditorialContainer>
            </SectionReveal>

            <div style={{ height: density.spacing(36) }} />

            {/* Contribution */}
            <SectionReveal>
              <EditorialContainer density={density}>
                <Contained>
                  <h2
                    className="text-[18px] font-medium leading-none"
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
                      opacity: 0.5,
                    }}
                  >
                    {project.contribution}
                  </p>
                </Contained>
              </EditorialContainer>
            </SectionReveal>

            <div style={{ height: density.spacing(36) }} />

            {/* Outcome */}
            {project.outcome && (
              <SectionReveal>
                <EditorialContainer density={density}>
                  <Contained>
                    <h2
                      className="text-[18px] font-medium leading-none"
                      style={{
                        letterSpacing: "-0.04em",
                        color: theme.text,
                      }}
                    >
                      Outcome
                    </h2>
                    <div style={{ height: density.spacing(16) }} />
                    {typeof project.outcome === "string" ? (
                      <p
                        className="text-[16px] leading-[1.6] font-medium"
                        style={{
                        color: theme.text,
                        letterSpacing: "-0.04em",
                        opacity: 0.5,
                      }}
                      >
                        {project.outcome}
                      </p>
                    ) : (
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: density.spacing(8),
                          listStyleType: "disc",
                          paddingLeft: density.spacing(24),
                        }}
                      >
                        {project.outcome.map((item, i) => (
                          <li
                            key={i}
                            className="text-[16px] leading-[1.6] font-medium"
                            style={{
                              color: theme.text,
                              letterSpacing: "-0.04em",
                              opacity: 0.5,
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Contained>
                </EditorialContainer>
              </SectionReveal>
            )}

            {project.outcome && <div style={{ height: density.spacing(36) }} />}

            {/* Gallery */}
            <EditorialContainer density={density}>
              <ProjectRenderer sections={project.sections} />
            </EditorialContainer>

            <div style={{ height: density.spacing(36) }} />

            {/* Note from the Creator */}
            <SectionReveal>
              <EditorialContainer density={density}>
                <Contained>
                  <h2
                    className="text-[18px] font-medium leading-none"
                    style={{
                      letterSpacing: "-0.04em",
                      color: theme.text,
                    }}
                  >
                    Note from the Creator
                  </h2>
                  <div style={{ height: density.spacing(16) }} />
                  <p
                    className="text-[16px] leading-[1.6] font-medium"
                    style={{
                      color: theme.text,
                      letterSpacing: "-0.04em",
                      opacity: 0.5,
                    }}
                  >
                    Hey,
                  </p>
                  <div style={{ height: density.spacing(24) }} />
                  <p
                    className="text-[16px] leading-[1.6] font-medium"
                    style={{
                      color: theme.text,
                      letterSpacing: "-0.04em",
                      opacity: 0.5,
                    }}
                  >
                    If you&rsquo;re reading this, then I just want you to know you&rsquo;re amazing :)
                  </p>
                  <div style={{ height: density.spacing(24) }} />
                  <p
                    className="text-[16px] leading-[1.6] font-medium"
                    style={{
                      color: theme.text,
                      letterSpacing: "-0.04em",
                      opacity: 0.5,
                    }}
                  >
                    At a time where no one has a slight bit of patience left, you took the time to scroll all the way to the end.
                  </p>
                  <div style={{ height: density.spacing(24) }} />
                  <p
                    className="text-[16px] leading-[1.6] font-medium"
                    style={{
                      color: theme.text,
                      letterSpacing: "-0.04em",
                      opacity: 0.5,
                    }}
                  >
                    Cheers,<br />
                    Deepanjan
                  </p>
                </Contained>
              </EditorialContainer>
            </SectionReveal>

            <div style={{ height: density.spacing(36) }} />
          </motion.div>
        </PageContainer>
      </div>
    </>
  );
}
