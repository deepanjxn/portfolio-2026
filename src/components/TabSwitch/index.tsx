"use client";

import { motion } from "framer-motion";
import { TabType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { tabTransition } from "@/animations/variants";

interface TabSwitchProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string }[] = [
  { id: "about", label: "ABOUT" },
  { id: "works", label: "WORKS" },
];

export function TabSwitch({ activeTab, onTabChange }: TabSwitchProps) {
  const { theme } = useTheme();
  return (
    <div
      className="relative inline-flex items-center rounded-full p-[4px] gap-0"
      style={{
        backgroundColor: theme.gray,
      }}
    >
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="relative z-10 px-6 py-3 text-[16px] font-medium cursor-pointer"
          style={{
            letterSpacing: "-0.04em",
            color: activeTab === tab.id ? theme.surface : theme.text,
          }}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabPill"
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: theme.text }}
              transition={tabTransition}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
