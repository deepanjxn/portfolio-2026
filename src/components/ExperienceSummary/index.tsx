"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { EXPERIENCE_TEXT } from "@/constants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";

export function ExperienceSummary() {
  const { theme } = useTheme();
  return (
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-[16px] leading-[1.6] font-medium"
      style={{
        maxWidth: MAX_BODY_WIDTH,
        marginTop: 16,
        color: theme.text,
        letterSpacing: "-0.04em",
      }}
    >
      {EXPERIENCE_TEXT}
    </motion.p>
  );
}
