"use client";

import { useState, useRef, useEffect, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";
import { useInteractionMode } from "@/hooks/useInteractionMode";
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
  originalIndex,
  isActive,
  isWrapping,
  wasDragged,
  isDragging,
  onSelect,
  cardWidth = 640,
  mobile = false,
}: ProjectCardProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const interaction = useInteractionMode();
  const [gifLoaded, setGifLoaded] = useState(false);
  const [hoverIntent, setHoverIntent] = useState(false);
  const hoverComplete = useRef(false);

  const isHoverable = interaction === "desktop";
  const bgAngle = GRADIENT_ANGLES[originalIndex % GRADIENT_ANGLES.length];
  const isHovered = hoverIntent && isActive;
  const showMetadata = isActive && isHoverable && isHovered && !isDragging.current;

  useEffect(() => {
    if (!project.animatedPreview) return;
    const img = new Image();
    img.src = project.animatedPreview;
  }, [project.animatedPreview]);

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

  const cardStyle: React.CSSProperties = {
    height: Math.round(cardWidth * 5 / 8),
    boxShadow: isActive ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "0px 0px 0px rgba(0, 0, 0, 0)",
    transition: "box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <div className="relative flex-shrink-0" style={{ width: cardWidth }}>
      {/* Metadata — floats above the card (desktop only) */}
      {!mobile && (
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{ bottom: "100%", marginBottom: 8 }}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: showMetadata ? 1 : 0,
              y: showMetadata ? 0 : 7,
              transition: {
                duration: 0.45,
                ease: "easeOut",
                delay: showMetadata ? 0.12 : 0,
              },
            }}
            className="relative"
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
        </div>
      )}

      {/* Card */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{
          duration: isWrapping.current ? 0 : 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="overflow-hidden relative rounded-none"
        style={cardStyle}
        onClick={() => {
          if (wasDragged.current) return;
          if (isActive) {
            if (isHoverable && !hoverComplete.current) return;
            router.push(`/${project.id}`);
          } else {
            onSelect();
          }
        }}
        onMouseEnter={isHoverable && isActive ? () => setHoverIntent(true) : undefined}
        onMouseLeave={isHoverable && isActive ? () => setHoverIntent(false) : undefined}
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
                key="active-media"
                src={gifLoaded ? project.animatedPreview : (project.thumbnailImage || project.backgroundImage || undefined)}
                alt={project.title}
                className={`${mobile ? "w-full h-full" : "max-w-full max-h-full"} object-contain`}
                style={{ opacity: gifLoaded ? 1 : 0 }}
                onLoad={() => setGifLoaded(true)}
                draggable={false}
              />
            ) : project.thumbnailImage || project.backgroundImage ? (
              <img
                key="inactive-media"
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
