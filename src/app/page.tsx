"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { MobileLayout } from "@/components/MobileLayout";
import { MobileWorks } from "@/components/MobileWorks";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TabType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { DensityProvider } from "@/context/DensityContext";
import { useResponsiveScale } from "@/hooks/useResponsiveScale";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { OUTER_PADDING, HERO_BOTTOM_GAP } from "@/theme/tokens";

const RESUME_URL = "https://drive.google.com/file/d/1ZXlLG8gkWQ4AKvzqvgp63Z1tr6ZRtpPm/view";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
};

const slideTransition = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [direction, setDirection] = useState(1);
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro && typeof window !== "undefined" && sessionStorage.getItem("intro_complete") === "true") {
    setShowIntro(false);
  }
  const { theme, toggleTheme } = useTheme();
  const scale = useResponsiveScale();
  const scaledPadding = Math.round(OUTER_PADDING * scale);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("intro_complete", "true");
    setShowIntro(false);
  }, []);

  const handleTabChange = useCallback((tab: TabType) => {
    setDirection(tab === "works" ? 1 : -1);
    setActiveTab(tab);
  }, []);

  const openResume = useCallback(() => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  }, []);

  useKeyboardShortcut("r", openResume);
  useKeyboardShortcut("d", toggleTheme);

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      {/* Desktop Layout (≥1024px) */}
      <motion.div
        className="hidden lg:flex flex-col h-full w-full"
        style={{
          padding: scaledPadding,
          backgroundColor: theme.surface,
          gap: HERO_BOTTOM_GAP,
        }}
        initial={showIntro ? { opacity: 0 } : undefined}
        animate={showIntro ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <DensityProvider>
        <div className="flex-1 min-h-0 relative">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            {activeTab === "about" ? (
              <motion.div
                key="about"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <Hero />
              </motion.div>
            ) : (
              <motion.div
                key="works"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <Works />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </DensityProvider>
      </motion.div>

      {/* Mobile Layout (<1024px) */}
      <motion.div
        className="flex lg:hidden flex-col h-full w-full overflow-hidden"
        style={{ position: "relative" }}
        initial={showIntro ? { opacity: 0 } : undefined}
        animate={showIntro ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {activeTab === "about" ? <MobileLayout /> : <MobileWorks />}
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
            zIndex: 10,
          }}
        >
          <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} mobile />
        </div>
      </motion.div>
    </>
  );
}
