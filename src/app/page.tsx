"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BottomNavigation } from "@/components/BottomNavigation";
import { TabType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { OUTER_PADDING, HERO_BOTTOM_GAP } from "@/theme/tokens";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const { theme } = useTheme();

  return (
    <div
      className="h-full w-full flex flex-col"
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
  );
}
