"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";
import { WORKS_DESCRIPTION } from "@/constants/works";

export function WorksHeader() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col" style={{ gap: 16 }}>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-medium leading-none"
        style={{
          fontSize: 112,
          letterSpacing: "-0.04em",
          color: theme.text,
        }}
      >
        WORKS
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-[16px] leading-[1.6] font-medium"
        style={{
          maxWidth: MAX_BODY_WIDTH,
          color: theme.text,
          letterSpacing: "-0.04em",
        }}
      >
        {WORKS_DESCRIPTION}
      </motion.p>
    </div>
  );
}
