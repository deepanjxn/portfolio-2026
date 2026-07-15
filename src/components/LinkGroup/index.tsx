"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/animations/variants";
import { Icon } from "@/components/Icon";
import { LinkItem } from "@/types";
import { useTheme } from "@/context/ThemeContext";

interface LinkGroupProps {
  links: LinkItem[];
}

export function LinkGroup({ links }: LinkGroupProps) {
  const { theme } = useTheme();
  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      {links.map((link) => (
        <motion.div
          key={link.label}
          variants={fadeInUp}
          className="inline-flex items-center gap-2 py-0.5 text-[16px] font-medium"
          style={{
            color: theme.text,
            letterSpacing: "-0.04em",
          }}
        >
          <span
            className="flex items-center justify-center shrink-0"
            style={{ color: theme.accent }}
          >
            <Icon name="arrow_outward" size={16} weight={400} />
          </span>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="underline underline-offset-2"
            style={{ textDecorationColor: theme.text, color: theme.text }}
          >
            {link.label}
          </a>
          {link.sublabel && (
            <span style={{ color: theme.text, opacity: 0.5, marginLeft: 4 }}>
              {link.sublabel}
            </span>
          )}
        </motion.div>
      ))}
    </motion.nav>
  );
}
