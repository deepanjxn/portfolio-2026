"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getProjectDetail } from "@/data/projects/registry";
import { useTheme } from "@/context/ThemeContext";
import { useDensity, DensityProvider } from "@/context/DensityContext";
import { useNavigationState } from "@/context/NavigationStateContext";
import { PageContainer } from "@/components/PageContainer";
import { BottomNavigation } from "@/components/BottomNavigation";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { OUTER_PADDING } from "@/theme/tokens";
import { WORKS_DESCRIPTION } from "@/constants/works";
import { ProjectDetailDesktop } from "./Desktop";
import { MobileProjectDetail } from "./Mobile";
import Lenis from "lenis";

const RESUME_URL = "https://drive.google.com/file/d/1ZXlLG8gkWQ4AKvzqvgp63Z1tr6ZRtpPm/view";

function contactAboutProject(title: string) {
  const subject = `Question about ${title} — From your portfolio`;
  const body = `Hey Deepanjan,

I just finished exploring your portfolio and reading through the "${title}" project.

I'd love to learn more about your thinking, design decisions, and overall process behind it.

Looking forward to hearing from you.

Best,`;
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=deepanjxn@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

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

function HelperRow({ theme, density, onKnowMore }: { theme: ReturnType<typeof useTheme>["theme"]; density: ReturnType<typeof useDensity>; onKnowMore: () => void }) {
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
      <button
        onClick={onKnowMore}
        className="text-[16px] font-medium leading-[1.6] shrink-0 cursor-pointer"
        style={{
          color: theme.text,
          letterSpacing: "-0.04em",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        {"Press "}
        <span style={{ color: theme.accent }}>{"\u0022K\u0022"}</span>
        {" Know More"}
      </button>
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

  const handleKnowMore = useCallback(() => {
    if (project) {
      contactAboutProject(project.title);
    }
  }, [project]);

  const handleReturnToWorks = useCallback(() => {
    setActiveTab("works");
    setShowIntro(false);
    router.replace("/");
  }, [router, setActiveTab, setShowIntro]);

  useKeyboardShortcut("r", openResume);
  useKeyboardShortcut("d", toggleTheme);
  useKeyboardShortcut("k", handleKnowMore);

  if (!project) {
    return null;
  }

  const gutter = density.spacing(OUTER_PADDING);

  return (
    <div
      className="h-full w-full"
      style={{
        backgroundColor: theme.surface,
        position: "relative",
      }}
    >
      <div className="h-full" ref={wrapperRef} style={{ overflow: "hidden" }}>
        {/* Sticky helper bar — desktop only */}
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
              <HelperRow theme={theme} density={density} onKnowMore={handleKnowMore} />
            </PageContainer>
          </div>
        )}

        <div ref={contentRef}>
          {isLarge ? (
            <ProjectDetailDesktop project={project} />
          ) : (
            <MobileProjectDetail project={project} />
          )}
        </div>
      </div>

      {isLarge ? (
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
            <BottomNavigation
              back
              appearance="transparent"
              onBack={handleReturnToWorks}
            />
          </PageContainer>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
            zIndex: 10,
          }}
        >
          <BottomNavigation
            back
            mobile
            appearance="transparent"
            onBack={handleReturnToWorks}
          />
        </div>
      )}
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
