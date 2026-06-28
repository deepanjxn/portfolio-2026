"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SIGNATURE_SVG } from "../../data/signature-svg";

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--bg)",
  color: "var(--text)",
};

const signatureStyle: React.CSSProperties = {
  width: "clamp(165px, 22vw, 245px)",
  height: "auto",
  marginTop: "-35px",
};

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"visible" | "exiting" | "gone">("visible");

  useEffect(() => {
    const exitTimeout = setTimeout(() => {
      setPhase("exiting");
    }, 2700);

    const removeTimeout = setTimeout(() => {
      setPhase("gone");
      onComplete();
    }, 3350);

    return () => {
      clearTimeout(exitTimeout);
      clearTimeout(removeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "gone" && (
        <motion.div
          style={overlayStyle}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            style={signatureStyle}
            initial={{ opacity: 0, y: 12 }}
            animate={
              phase === "visible"
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -8 }
            }
            transition={
              phase === "visible"
                ? { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }
                : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
            }
            dangerouslySetInnerHTML={{ __html: SIGNATURE_SVG }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
