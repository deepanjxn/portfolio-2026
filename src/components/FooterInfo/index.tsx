"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { Icon } from "@/components/Icon";
import { FOOTER_INFO } from "@/constants";
import { useTheme } from "@/context/ThemeContext";

export const FooterInfo = memo(function FooterInfo() {
  const { theme } = useTheme();
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
      style={{
        gap: 6,
        color: theme.text,
        letterSpacing: "-0.04em",
      }}
    >
      <div className="flex items-center gap-1.5 text-[16px] font-medium leading-[1.6]">
        <span style={{ color: theme.accent }}>
          <Icon name="copyright" size={16} weight={400} />
        </span>
        <span>{FOOTER_INFO.year}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[16px] font-medium leading-[1.6]">
        <span style={{ color: theme.accent }}>
          <Icon name="location_on" size={16} weight={400} />
        </span>
        <span>{FOOTER_INFO.location}</span>
      </div>
    </motion.div>
  );
});
