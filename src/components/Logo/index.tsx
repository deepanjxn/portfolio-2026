"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { LOGO_TEXT } from "@/constants";
import { useTheme } from "@/context/ThemeContext";

export function Logo({ size = 112 }: { size?: number }) {
  const { theme } = useTheme();
  return (
    <motion.h1
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="font-medium leading-none"
      style={{
        fontSize: size,
        letterSpacing: "-0.04em",
        color: theme.text,
      }}
    >
      {LOGO_TEXT}
    </motion.h1>
  );
}
