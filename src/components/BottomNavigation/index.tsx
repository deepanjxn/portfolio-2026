"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { TabSwitch } from "@/components/TabSwitch";
import { TabType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { BOTTOM_NAV_GRID } from "@/theme/tokens";

const RESUME_URL = "https://drive.google.com/file/d/1ZXlLG8gkWQ4AKvzqvgp63Z1tr6ZRtpPm/view";

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const { theme, toggleTheme } = useTheme();

  const openResume = useCallback(() => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  }, []);

  useKeyboardShortcut("r", openResume);
  useKeyboardShortcut("d", toggleTheme);

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="w-full"
      style={{ display: "grid", gridTemplateColumns: BOTTOM_NAV_GRID }}
    >
      {/* Left: Resume shortcut */}
      <div className="flex items-center">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-medium leading-[1.6] cursor-pointer"
          style={{
            color: theme.text,
            letterSpacing: "-0.04em",
          }}
        >
          {"Press "}
          <span style={{ color: theme.accent }}>{"\u0022R\u0022"}</span>
          {" View Resume"}
        </a>
      </div>

      {/* Center: Tab switch */}
      <div className="flex items-center justify-center">
        <TabSwitch activeTab={activeTab} onTabChange={onTabChange} />
      </div>

      {/* Right: Dark mode toggle hint */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-end text-[16px] font-medium leading-[1.6] cursor-pointer"
        style={{
          color: theme.text,
          letterSpacing: "-0.04em",
          background: "none",
          border: "none",
          padding: 0,
        }}
        >
          {"Press "}
          <span style={{ color: theme.accent }}>{"\u0022D\u0022"}</span>
          {" Toggle Dark"}
        </button>
    </motion.nav>
  );
}
