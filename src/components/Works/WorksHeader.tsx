"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { useDensity } from "@/context/DensityContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";
import { WORKS_DESCRIPTION } from "@/constants/works";

export function WorksHeader() {
  const { theme } = useTheme();
  const density = useDensity();

  return (
    <div className="flex flex-col" style={{ gap: density.spacing(16) }}>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="font-medium leading-none"
        style={{
          fontSize: density.font(112),
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
        className="font-medium leading-[1.6]"
        style={{
          maxWidth: MAX_BODY_WIDTH,
          color: theme.text,
          letterSpacing: "-0.04em",
          fontSize: density.font(16),
        }}
      >
        {WORKS_DESCRIPTION}
      </motion.p>
    </div>
  );
}
