"use client";

import { useState, useCallback } from "react";
import { Hero } from "@/components/Hero";
import { MobileLayout } from "@/components/MobileLayout";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TabType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { OUTER_PADDING, HERO_BOTTOM_GAP } from "@/theme/tokens";

const RESUME_URL = "https://drive.google.com/file/d/1ZXlLG8gkWQ4AKvzqvgp63Z1tr6ZRtpPm/view";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const { theme, toggleTheme } = useTheme();

  const openResume = useCallback(() => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  }, []);

  useKeyboardShortcut("r", openResume);
  useKeyboardShortcut("d", toggleTheme);

  return (
    <>
      {/* Desktop Layout (≥1024px) */}
      <div
        className="hidden lg:flex flex-col h-full w-full"
        style={{
          padding: OUTER_PADDING,
          backgroundColor: theme.surface,
          gap: HERO_BOTTOM_GAP,
        }}
      >
        <div className="flex-1 min-h-0">
          <Hero />
        </div>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Mobile Layout (<1024px) */}
      <div
        className="flex lg:hidden flex-col h-full w-full overflow-hidden"
        style={{ position: "relative" }}
      >
        <MobileLayout />
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, zIndex: 10 }}>
          <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} mobile />
        </div>
      </div>
    </>
  );
}
