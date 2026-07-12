"use client";

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

export function MobileProjectDetail({ project }: { project: ProjectDetail }) {
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

      <div style={{ height: 32 }} />

      {/* Hero — full width */}
      <SectionReveal>
        <HeroMedia project={project} />
      </SectionReveal>

      <div style={{ height: 32 }} />

      {/* About the Project */}
      <div style={{ padding: "0 16px" }}>
        <SectionReveal>
          <h2
            className="text-[16px] font-medium leading-none"
            style={{
              letterSpacing: "-0.04em",
              color: theme.text,
            }}
          >
            About the Project
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

      <div style={{ height: 24 }} />

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

      <div style={{ height: 24 }} />

      {/* Contribution */}
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

      <div style={{ height: 24 }} />

      {/* Outcome */}
      {project.outcome && (
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

      {project.outcome && <div style={{ height: 24 }} />}

      {/* Gallery — full width */}
      <ProjectRenderer sections={project.sections} />

      <div style={{ height: 24 }} />

      {/* Note from the Creator */}
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

      <div style={{ height: 24 }} />
    </div>
  );
}
