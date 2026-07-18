"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface EditorialProps {
  title: string;
  body: string;
}

export function Editorial({ title, body }: EditorialProps) {
  const { theme } = useTheme();

  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .editorial-section {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-section"
        style={{ marginTop: 32, marginBottom: 32 }}
      >
        <h2
          className="text-[16px] lg:text-[18px] font-medium leading-none"
          style={{
            letterSpacing: "-0.04em",
            color: theme.text,
          }}
        >
          {title}
        </h2>
        <div style={{ height: 16 }} />
        <p
          className="text-[16px] leading-[1.6] font-medium"
          style={{
            color: theme.text,
            letterSpacing: "-0.04em",
            opacity: 0.5,
          }}
        >
          {body}
        </p>
      </motion.div>
    </>
  );
}
