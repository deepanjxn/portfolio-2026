"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { useTheme } from "@/context/ThemeContext";
import { MAX_BODY_WIDTH } from "@/theme/tokens";

const linkClass = "underline underline-offset-2";

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
      <span>Hi, I&apos;m Deepanjan Sen. Currently leading Product Design at </span>
      <a
        href="https://www.withlayer.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={{ color: theme.text, textDecorationColor: theme.text }}
      >
        Layer
      </a>
      <span style={{ opacity: 0.5 }}>
        , where I help turn ambitious ideas into products that are built,
        launched and scaled.
      </span>
    </motion.p>
  );
});
