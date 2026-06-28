"use client";

import { useState, useRef, useEffect, type RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { ActiveMetadata } from "./ActiveMetadata";

const GRADIENT_ANGLES = [0, 72, 144, 216, 288];

interface ProjectCardProps {
  project: Project;
  index: number;
  originalIndex: number;
  isActive: boolean;
  isWrapping: RefObject<boolean>;
  wasDragged: RefObject<boolean>;
  isDragging: RefObject<boolean>;
  onSelect: () => void;
  cardWidth?: number;
  mobile?: boolean;
}

export function ProjectCard({
  project,
  index,
  originalIndex,
  isActive,
  isWrapping,
  wasDragged,
  isDragging,
  onSelect,
  cardWidth = 580,
  mobile = false,
}: ProjectCardProps) {
  const { theme } = useTheme();
  const [gifLoaded, setGifLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverComplete = useRef(false);

  const bgAngle = GRADIENT_ANGLES[originalIndex % GRADIENT_ANGLES.length];
  const showMetadata = isActive && !mobile && isHovered && !isDragging.current;

  useEffect(() => {
    if (!isActive) {
      setIsHovered(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (showMetadata) {
      hoverComplete.current = false;
      const timer = setTimeout(() => {
        hoverComplete.current = true;
      }, 400);
      return () => {
        clearTimeout(timer);
        hoverComplete.current = false;
      };
    } else {
      hoverComplete.current = false;
    }
  }, [showMetadata]);

  return (
    <div className="relative flex-shrink-0" style={{ width: cardWidth }}>
      {/* Metadata — floats above the card */}
      <AnimatePresence>
        {showMetadata && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            key="metadata"
            className="absolute left-0 right-0 pointer-events-none"
            style={{ bottom: "100%", marginBottom: 8 }}
          >
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />
          <div className="relative py-2">
            <ActiveMetadata project={project} mobile={mobile} />
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Card */}
      <motion.div
        layout
        initial={false}
        animate={{
          opacity: 1,
          boxShadow: isActive
            ? "0px 4px 12px rgba(0, 0, 0, 0.1)"
            : "0px 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{
          duration: isWrapping.current ? 0 : 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="overflow-hidden relative rounded-none"
        style={{ height: Math.round(cardWidth * 360 / 580) }}
        onClick={() => {
          if (wasDragged.current) return;
          if (isActive) {
            if (!mobile && !hoverComplete.current) return;
            if (project.projectUrl) {
              window.open(project.projectUrl, "_blank", "noopener,noreferrer");
            }
          } else {
            onSelect();
          }
        }}
        onMouseEnter={!mobile && isActive ? () => setIsHovered(true) : undefined}
        onMouseLeave={!mobile && isActive ? () => setIsHovered(false) : undefined}
      >
        <div className="relative w-full h-full">
          {!project.backgroundImage && (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${bgAngle}deg, ${theme.accent}26 0%, ${theme.surface} 100%)`,
                opacity: 0.6,
              }}
            />
          )}
          {project.backgroundImage && (
            <img
              src={project.backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          )}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${theme.text} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ padding: mobile ? "24px" : "48px" }}>
            {isActive && project.animatedPreview ? (
              <img
                src={gifLoaded ? project.animatedPreview : (project.thumbnailImage || project.backgroundImage || undefined)}
                alt={project.title}
                className={`${mobile ? "w-full h-full" : "max-w-full max-h-full"} object-contain`}
                style={{ opacity: gifLoaded ? 1 : 0 }}
                onLoad={() => setGifLoaded(true)}
                draggable={false}
              />
            ) : project.thumbnailImage || project.backgroundImage ? (
              <img
                src={project.thumbnailImage || project.backgroundImage}
                alt={project.title}
                className={`${mobile ? "w-full h-full" : "max-w-full max-h-full"} object-contain`}
                draggable={false}
              />
            ) : (
              <div
                className="w-[200px] h-[220px] flex items-center justify-center"
                style={{
                  border: `1px solid ${theme.text}`,
                  opacity: 0.15,
                  borderRadius: 0,
                }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
