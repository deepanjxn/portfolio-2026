"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { getProjectDetail } from "@/data/projects/registry";
import { useTheme } from "@/context/ThemeContext";
import { useDensity, DensityProvider } from "@/context/DensityContext";
import { useNavigationState } from "@/context/NavigationStateContext";
import { PageContainer } from "@/components/PageContainer";
import { Contained } from "@/components/Contained";
import { ProjectRenderer } from "@/components/ProjectRenderer";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { OUTER_PADDING, PROJECT_DETAIL_TOP_SPACING, PROJECT_DETAIL_GUTTER } from "@/theme/tokens";
import { WORKS_DESCRIPTION } from "@/constants/works";
import Lenis from "lenis";

const PAGE_FADE = {
  duration: 0.65,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

const SECTION_REVEAL = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const RESUME_URL = "https://drive.google.com/file/d/1ZXlLG8gkWQ4AKvzqvgp63Z1tr6ZRtpPm/view";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1024);
    check();
    let id: number;
    const onResize = () => {
      cancelAnimationFrame(id);
      id = requestAnimationFrame(check);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(id);
    };
  }, []);

  return isLarge;
}

function HelperRow({ theme, density }: { theme: ReturnType<typeof useTheme>["theme"]; density: ReturnType<typeof useDensity> }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <p
        className="text-[16px] leading-[1.6] font-medium"
        style={{
          color: theme.text,
          letterSpacing: "-0.04em",
          maxWidth: 720,
        }}
      >
        {WORKS_DESCRIPTION}
      </p>
      <p
        className="text-[16px] font-medium leading-[1.6] shrink-0"
        style={{
          color: theme.text,
          letterSpacing: "-0.04em",
        }}
      >
        {"Press "}
        <span style={{ color: theme.accent }}>{"\u0022K\u0022"}</span>
        {" Know More"}
      </p>
    </div>
  );
}

function EditorialContainer({ children, density, isLarge }: { children: React.ReactNode; density: ReturnType<typeof useDensity>; isLarge: boolean }) {
  const gutter = isLarge ? density.spacing(PROJECT_DETAIL_GUTTER) : 0;

  return (
    <div style={{ paddingLeft: gutter, paddingRight: gutter }}>
      {children}
    </div>
  );
}

function ProjectDetailShell({ slug }: { slug: string }) {
  const project = getProjectDetail(slug);
  const { theme, toggleTheme } = useTheme();
  const density = useDensity();
  const router = useRouter();
  const isLarge = useIsLargeScreen();
  const { setActiveTab, setShowIntro } = useNavigationState();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const openResume = useCallback(() => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  }, []);

  const openProjectUrl = useCallback(() => {
    if (project?.externalUrl) {
      window.open(project.externalUrl, "_blank", "noopener,noreferrer");
    }
  }, [project?.externalUrl]);

  const handleReturnToWorks = useCallback(() => {
    setActiveTab("works");
    setShowIntro(false);
    router.replace("/");
  }, [router, setActiveTab, setShowIntro]);

  useKeyboardShortcut("r", openResume);
  useKeyboardShortcut("d", toggleTheme);
  useKeyboardShortcut("k", openProjectUrl);

  if (!project) {
    return null;
  }

  const gutter = density.spacing(OUTER_PADDING);
  const topSpacing = density.spacing(PROJECT_DETAIL_TOP_SPACING);

  return (
    <div
      className="h-full w-full"
      style={{
        backgroundColor: theme.surface,
        position: "relative",
      }}
    >
      <div className="h-full" ref={wrapperRef} style={{ overflow: "hidden" }}>
        {/* Sticky helper bar — top counterpart of BottomNavigation */}
        {isLarge && (
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 20,
              padding: `${gutter}px`,
            }}
          >
            <PageContainer>
              <HelperRow theme={theme} density={density} />
            </PageContainer>
          </div>
        )}

        <div ref={contentRef}>
          {isLarge && <div style={{ height: density.spacing(96) }} />}

          <div style={{ padding: `0 ${gutter}px` }}>
          <PageContainer>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={PAGE_FADE}
              className="flex flex-col"
              style={{ paddingTop: topSpacing, paddingBottom: 140 }}
            >
              {/* Project Title only */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={SECTION_REVEAL}
              >
                <EditorialContainer density={density} isLarge={isLarge}>
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
              </motion.div>

              <div style={{ height: density.spacing(64) }} />

              {/* Hero Image — aligned to editorial grid */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={SECTION_REVEAL}
              >
                <EditorialContainer density={density} isLarge={isLarge}>
                  <img
                    src={project.hero}
                    alt={`${project.title} hero`}
                    className="w-full h-auto block"
                    draggable={false}
                  />
                </EditorialContainer>
              </motion.div>

              <div style={{ height: density.spacing(64) }} />

              {/* About the Project */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={SECTION_REVEAL}
              >
                <EditorialContainer density={density} isLarge={isLarge}>
                  <Contained>
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
                  </Contained>
                </EditorialContainer>
              </motion.div>

              <div style={{ height: density.spacing(36) }} />

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={SECTION_REVEAL}
              >
                <EditorialContainer density={density} isLarge={isLarge}>
                  <Contained>
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
                  </Contained>
                </EditorialContainer>
              </motion.div>

              <div style={{ height: density.spacing(36) }} />

              {/* Contribution */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={SECTION_REVEAL}
              >
                <EditorialContainer density={density} isLarge={isLarge}>
                  <Contained>
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
                  </Contained>
                </EditorialContainer>
              </motion.div>

              <div style={{ height: density.spacing(36) }} />

              {/* Outcome */}
              {project.outcome && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={SECTION_REVEAL}
                >
                  <EditorialContainer density={density} isLarge={isLarge}>
                    <Contained>
                      <h2
                        className="text-[24px] font-medium leading-none"
                        style={{
                          letterSpacing: "-0.04em",
                          color: theme.text,
                        }}
                      >
                        Outcome
                      </h2>
                      <div style={{ height: density.spacing(16) }} />
                      <p
                        className="text-[16px] leading-[1.6] font-medium"
                        style={{
                          color: theme.text,
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {project.outcome}
                      </p>
                    </Contained>
                  </EditorialContainer>
                </motion.div>
              )}

              {project.outcome && <div style={{ height: density.spacing(36) }} />}

              {/* Gallery — aligned to editorial grid */}
              <EditorialContainer density={density} isLarge={isLarge}>
                <ProjectRenderer sections={project.sections} />
              </EditorialContainer>

              <div style={{ height: density.spacing(36) }} />

              {/* Note from the Creator */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={SECTION_REVEAL}
              >
                <EditorialContainer density={density} isLarge={isLarge}>
                  <Contained>
                    <h2
                      className="text-[24px] font-medium leading-none"
                      style={{
                        letterSpacing: "-0.04em",
                        color: theme.text,
                      }}
                    >
                      Note from the Creator
                    </h2>
                    <div style={{ height: density.spacing(32) }} />
                    <p
                      className="text-[16px] leading-[1.6] font-medium"
                      style={{
                        color: theme.text,
                        letterSpacing: "-0.04em",
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
                      }}
                    >
                      Cheers,<br />
                      Deepanjan
                    </p>
                  </Contained>
                </EditorialContainer>
              </motion.div>

              <div style={{ height: density.spacing(64) }} />
            </motion.div>
          </PageContainer>
        </div>
      </div>
    </div>

    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: `0 ${gutter}px ${gutter}px`,
        zIndex: 10,
      }}
    >
        <PageContainer>
          <BottomNavigation back appearance="transparent" onBack={handleReturnToWorks} />
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
