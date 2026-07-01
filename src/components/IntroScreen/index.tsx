"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SIGNATURE_2_PATH } from "../../data/signature-2-svg";

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--color-surface)",
  color: "var(--color-text)",
};

const signatureStyle: React.CSSProperties = {
  width: "clamp(230px, 30vw, 340px)",
  height: "auto",
  marginTop: "-64px",
};

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"visible" | "exiting" | "gone">("visible");
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);

  console.log("[render] pathLength =", pathLength);

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

  useLayoutEffect(() => {
    if (pathRef.current) {
      const measured = Math.round(pathRef.current.getTotalLength());
      console.log("[useLayoutEffect] measured length =", measured);
      console.log("[useLayoutEffect] before set — dasharray:", pathRef.current.style.strokeDasharray, "dashoffset:", pathRef.current.style.strokeDashoffset);
      setPathLength(measured);
    }
  }, []);

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
          >
            <svg
              viewBox="0 0 407 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", height: "auto" }}
            >
              <motion.path
                key={pathLength}
                ref={pathRef}
                d={SIGNATURE_2_PATH}
                stroke="currentColor"
                strokeWidth={5}
                strokeLinecap="round"
                initial={pathLength > 0 ? { strokeDashoffset: pathLength } : undefined}
                animate={
                  pathLength > 0
                    ? { strokeDashoffset: 0 }
                    : undefined
                }
                transition={
                  pathLength > 0
                    ? {
                        duration: 1.8,
                        delay: 0.6,
                        ease: [0.45, 0, 0.55, 1],
                      }
                    : undefined
                }
                style={{
                  strokeDasharray: pathLength > 0 ? pathLength : undefined,
                }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
