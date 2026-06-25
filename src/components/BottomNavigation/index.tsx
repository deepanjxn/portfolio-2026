"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { TabSwitch } from "@/components/TabSwitch";
import { MobileTabSwitch } from "@/components/MobileTabSwitch";
import { Icon } from "@/components/Icon";
import { TabType } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { BOTTOM_NAV_GRID } from "@/theme/tokens";

const RESUME_URL = "https://drive.google.com/file/d/1ZXlLG8gkWQ4AKvzqvgp63Z1tr6ZRtpPm/view";

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  mobile?: boolean;
}

export function BottomNavigation({ activeTab, onTabChange, mobile = false }: BottomNavigationProps) {
  const { theme, toggleTheme, mode } = useTheme();

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
      style={{
        display: "grid",
        gridTemplateColumns: BOTTOM_NAV_GRID,
      }}
    >
      {/* Left: Resume shortcut */}
      <div className="flex items-center">
        {mobile ? (
          <button
            onClick={openResume}
            className="flex items-center justify-center cursor-pointer"
            style={{
              padding: 14,
              borderRadius: 9999,
              backgroundColor: theme.gray,
              border: "none",
              lineHeight: 1,
            }}
          >
            <Icon name="work_history" size={20} weight={400} />
          </button>
        ) : (
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
        )}
      </div>

      {/* Center: Tab switch */}
      <div className="flex items-center justify-center">
        {mobile ? (
          <MobileTabSwitch activeTab={activeTab} onTabChange={onTabChange} />
        ) : (
          <TabSwitch activeTab={activeTab} onTabChange={onTabChange} />
        )}
      </div>

      {/* Right: Dark mode toggle hint */}
      <div className="flex items-center justify-end">
        {mobile ? (
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center cursor-pointer"
            style={{
              padding: 14,
              borderRadius: 9999,
              backgroundColor: theme.gray,
              border: "none",
              lineHeight: 1,
            }}
          >
            <Icon name={mode === "dark" ? "light_mode" : "dark_mode"} size={20} weight={400} />
          </button>
        ) : (
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
        )}
      </div>
    </motion.nav>
  );
}
