"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";

export const Intro = memo(function Intro({ marginTop = 24 }: { marginTop?: number }) {
  const { theme } = useTheme();
  return (
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-[16px] leading-[1.6] font-medium"
      style={{
        maxWidth: MAX_BODY_WIDTH,
        marginTop,
        color: theme.text,
        letterSpacing: "-0.04em",
      }}
    >
      Hi, I&apos;m Deepanjan Sen — a product designer and design lead helping
      companies build thoughtful, user-centered products.
    </motion.p>
  );
});
