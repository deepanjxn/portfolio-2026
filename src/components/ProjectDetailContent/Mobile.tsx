"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectDetail } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { ProjectRenderer } from "@/components/ProjectRenderer";
import { HeroMedia } from "@/components/HeroMedia";

const SECTION_REVEAL = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

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

interface MobileProjectDetailProps {
  project: ProjectDetail;
  categories: string[];
}

export function MobileProjectDetail({ project, categories }: MobileProjectDetailProps) {
  const { theme } = useTheme();

  return (
    <div
      className="flex flex-col"
      style={{ paddingTop: 16, paddingBottom: 140 }}
    >
      {/* Project Title + Description */}
      <div style={{ padding: "0 16px" }}>
        <SectionReveal>
          <h1
            className="font-medium leading-none"
            style={{
              fontSize: 48,
              letterSpacing: "-0.04em",
              color: theme.text,
            }}
          >
            {project.title}
          </h1>
          <div style={{ height: 12 }} />
          <p
            className="text-[16px] leading-[1.6] font-medium"
            style={{
              color: theme.text,
              letterSpacing: "-0.04em",
              opacity: 0.5,
            }}
          >
            {project.description}
          </p>
        </SectionReveal>
      </div>

      <div style={{ height: 24 }} />

      {/* Project Metadata */}
      <div style={{ padding: "0 16px" }}>
        <SectionReveal>
          <div className="flex flex-col" style={{ gap: 24 }}>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h2
                className="text-[16px] font-medium leading-none"
                style={{
                  letterSpacing: "-0.04em",
                  color: theme.text,
                }}
              >
                Project Started
              </h2>
              <p
                className="text-[16px] leading-[1.6] font-medium"
                style={{
                  color: theme.text,
                  letterSpacing: "-0.04em",
                  opacity: 0.5,
                }}
              >
                {project.dateCreated}
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h2
                className="text-[16px] font-medium leading-none"
                style={{
                  letterSpacing: "-0.04em",
                  color: theme.text,
                }}
              >
                Project Duration
              </h2>
              <p
                className="text-[16px] leading-[1.6] font-medium"
                style={{
                  color: theme.text,
                  letterSpacing: "-0.04em",
                  opacity: 0.5,
                }}
              >
                {project.projectDuration}
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h2
                className="text-[16px] font-medium leading-none"
                style={{
                  letterSpacing: "-0.04em",
                  color: theme.text,
                }}
              >
                Category
              </h2>
              <p
                className="text-[16px] leading-[1.6] font-medium"
                style={{
                  color: theme.accent,
                  letterSpacing: "-0.04em",
                }}
              >
                {categories.join(", ")}
              </p>
            </div>
            <div className="flex flex-col" style={{ gap: 8 }}>
              <h2
                className="text-[16px] font-medium leading-none"
                style={{
                  letterSpacing: "-0.04em",
                  color: theme.text,
                }}
              >
                Live Link
              </h2>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] leading-[1.6] font-medium underline underline-offset-2"
                style={{
                  color: theme.accent,
                  letterSpacing: "-0.04em",
                }}
              >
                {project.liveLink}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>

      <div style={{ height: 32 }} />

      {/* Hero — full width */}
      <SectionReveal>
        <HeroMedia project={project} showControls={project.type === "ux-breakdown"} />
      </SectionReveal>

      <div style={{ height: 32 }} />

      {/* About the Project / About this Breakdown */}
      <div style={{ padding: "0 16px" }}>
        <SectionReveal>
          <h2
            className="text-[16px] font-medium leading-none"
            style={{
              letterSpacing: "-0.04em",
              color: theme.text,
            }}
          >
            {project.type === "ux-breakdown" ? "About this Breakdown" : "About the Project"}
          </h2>
          <div style={{ height: 16 }} />
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
        </SectionReveal>
      </div>

      {/* Editorial Sections for UX Breakdown */}
      {project.type === "ux-breakdown" && project.sections.filter(s => s.type === "editorial").map((section, i) => (
        <React.Fragment key={i}>
          <div style={{ height: 28 }} />
          <div style={{ padding: "0 16px" }}>
            <SectionReveal>
              <h2
                className="text-[16px] font-medium leading-none"
                style={{
                  letterSpacing: "-0.04em",
                  color: theme.text,
                }}
              >
                {section.title}
              </h2>
              <div style={{ height: 16 }} />
              <p
                className="text-[16px] leading-[1.6] font-medium"
                style={{
                  color: theme.text,
                  letterSpacing: "-0.04em",
                  opacity: 0.5,
                }}
              >
                {section.body}
              </p>
            </SectionReveal>
          </div>
        </React.Fragment>
      ))}

      <div style={{ height: 28 }} />

      {/* Responsibilities */}
      <div style={{ padding: "0 16px" }}>
        <SectionReveal>
          <h2
            className="text-[16px] font-medium leading-none"
            style={{
              letterSpacing: "-0.04em",
              color: theme.text,
            }}
          >
            Responsibilities
          </h2>
          <div style={{ height: 16 }} />
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              listStyleType: "disc",
              paddingLeft: 24,
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
        </SectionReveal>
      </div>

      {project.type !== "ux-breakdown" && <div style={{ height: 28 }} />}

      {/* Contribution */}
      {project.type !== "ux-breakdown" && (
        <div style={{ padding: "0 16px" }}>
          <SectionReveal>
            <h2
              className="text-[16px] font-medium leading-none"
              style={{
                letterSpacing: "-0.04em",
                color: theme.text,
              }}
            >
              Contribution
            </h2>
            <div style={{ height: 16 }} />
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
          </SectionReveal>
        </div>
      )}

      {project.type !== "ux-breakdown" && <div style={{ height: 28 }} />}

      {/* Outcome */}
      {project.type !== "ux-breakdown" && project.outcome && (
        <div style={{ padding: "0 16px" }}>
          <SectionReveal>
            <h2
              className="text-[16px] font-medium leading-none"
              style={{
                letterSpacing: "-0.04em",
                color: theme.text,
              }}
            >
              Outcome
            </h2>
            <div style={{ height: 16 }} />
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
                  gap: 8,
                  listStyleType: "disc",
                  paddingLeft: 24,
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
          </SectionReveal>
        </div>
      )}

      {project.type !== "ux-breakdown" && project.outcome && <div style={{ height: 28 }} />}

      {/* Gallery — full width */}
      {project.type !== "ux-breakdown" && (
        <ProjectRenderer sections={project.sections} />
      )}

      {project.type !== "ux-breakdown" && <div style={{ height: 28 }} />}

      {/* Note from the Creator */}
      {project.type !== "ux-breakdown" && (
        <div style={{ padding: "0 16px" }}>
          <SectionReveal>
            <h2
              className="text-[16px] font-medium leading-none"
              style={{
                letterSpacing: "-0.04em",
                color: theme.text,
              }}
            >
              Note from the Creator
            </h2>
            <div style={{ height: 16 }} />
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
            <div style={{ height: 24 }} />
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
            <div style={{ height: 24 }} />
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
            <div style={{ height: 24 }} />
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
          </SectionReveal>
        </div>
      )}

      <div style={{ height: 24 }} />
    </div>
  );
}
