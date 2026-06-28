"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useClock } from "@/hooks/useClock";
import { useTheme } from "@/context/ThemeContext";

export function Clock() {
  const time = useClock();
  const { theme } = useTheme();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-[16px] font-medium leading-[1.6]"
      style={{
        color: theme.text,
        letterSpacing: "-0.04em",
        marginTop: 24,
      }}
    >
      <span style={{ fontVariantNumeric: "tabular-nums" }}>{time}</span>
      <span style={{ color: theme.accent, marginLeft: 8 }}>IST</span>
    </motion.div>
  );
}
