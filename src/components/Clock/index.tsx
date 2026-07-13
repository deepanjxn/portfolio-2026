"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useClock } from "@/hooks/useClock";
import { useTheme } from "@/context/ThemeContext";
import { Icon } from "@/components/Icon";

export const Clock = memo(function Clock({ marginTop = 24 }: { marginTop?: number }) {
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
        marginTop,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span style={{ color: theme.accent, display: "flex", alignItems: "center" }}>
        <Icon name="hourglass" size={16} weight={400} />
      </span>
      <span style={{ fontVariantNumeric: "tabular-nums" }}>{time}</span>
      <span>IST</span>
    </motion.div>
  );
});
