"use client";

import { useRef, useState, useEffect, useCallback, useMemo, useLayoutEffect } from "react";
import { flushSync } from "react-dom";
import { motion, useMotionValue, animate, AnimatePresence, PanInfo } from "framer-motion";
import { Project } from "@/types";
import { useDensity } from "@/context/DensityContext";
import { ProjectCard } from "./ProjectCard";
import { ActiveMetadata } from "./ActiveMetadata";

const VELOCITY_THRESHOLD = 400;

interface ProjectCarouselProps {
  projects: Project[];
  cardWidth?: number;
  gap?: number;
  mobile?: boolean;
}

export function ProjectCarousel({
  projects,
  cardWidth: CARD_WIDTH = 640,
  gap: GAP = 240,
  mobile = false,
}: ProjectCarouselProps) {
  const density = useDensity();
  const ITEM_WIDTH = CARD_WIDTH + GAP;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  const initialized = useRef(false);
  const wasDragged = useRef(false);
  const isDragging = useRef(false);
  const isWrapping = useRef(false);
  const snapCount = useRef(0);

  const n = projects.length;
  const initialVirtualIndex = n + (n > 1 ? 1 : 0);

  const displayProjects = useMemo(
    () => [...projects, ...projects, ...projects],
    [projects]
  );

  const [virtualIndex, setVirtualIndex] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("works_carousel_index");
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= n && parsed < 2 * n) {
          sessionStorage.removeItem("works_carousel_index");
          return parsed;
        }
      }
    }
    return initialVirtualIndex;
  });

  useEffect(() => {
    if (virtualIndex >= n && virtualIndex < 2 * n) {
      sessionStorage.setItem("works_carousel_index", String(virtualIndex));
    }
  }, [virtualIndex, n]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.offsetWidth;
      if (width > 0) {
        setContainerWidth(width);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const centerOffset = containerWidth > 0 ? (containerWidth - CARD_WIDTH) / 2 : 0;

  useLayoutEffect(() => {
    if (containerWidth > 0 && !initialized.current) {
      initialized.current = true;
      const target = centerOffset - initialVirtualIndex * ITEM_WIDTH;
      x.jump(target);
    }
  }, [containerWidth, centerOffset, x, initialVirtualIndex]);

  const handleDragStart = useCallback(() => {
    wasDragged.current = true;
    isDragging.current = true;
  }, []);

  const snapToIndex = useCallback(
    (index: number) => {
      if (!initialized.current) return;
      const target = centerOffset - index * ITEM_WIDTH;
      const currentSnap = ++snapCount.current;
      animate(x, target, {
        type: "tween",
        duration: 0.5,
        ease: [0.0, 0.0, 0.2, 1],
      }).then(() => {
        if (snapCount.current !== currentSnap) return;
        let wrapped = index;
        if (index < n) {
          isWrapping.current = true;
          wrapped = index + n;
          x.jump(centerOffset - wrapped * ITEM_WIDTH);
          flushSync(() => setVirtualIndex(wrapped));
        } else if (index >= 2 * n) {
          isWrapping.current = true;
          wrapped = index - n;
          x.jump(centerOffset - wrapped * ITEM_WIDTH);
          flushSync(() => setVirtualIndex(wrapped));
        } else {
          setVirtualIndex(wrapped);
        }
        isDragging.current = false;
        requestAnimationFrame(() => {
          isWrapping.current = false;
        });
      });
    },
    [centerOffset, x, n]
  );

  const handleDragEnd = useCallback(
    (_event: PointerEvent, info: PanInfo) => {
      setTimeout(() => {
        wasDragged.current = false;
      }, 0);

      const currentX = x.get();
      const distanceFromCenter = centerOffset - currentX;
      let targetIndex = Math.round(distanceFromCenter / ITEM_WIDTH);

      if (Math.abs(info.velocity.x) > VELOCITY_THRESHOLD) {
        targetIndex += info.velocity.x < 0 ? 1 : -1;
      }

      snapToIndex(targetIndex);
    },
    [centerOffset, snapToIndex, x]
  );

  const activeProject = n > 0 ? projects[virtualIndex % n] : null;

  return (
    <div className="w-full h-full relative" style={{ paddingTop: mobile ? 28 : 0 }}>
      {mobile && (
        <div className="absolute pointer-events-none" style={{ left: centerOffset, width: CARD_WIDTH, top: 0 }}>
          <AnimatePresence initial={false}>
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 7 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut", delay: 0.12 },
                }}
                exit={{
                  opacity: 0,
                  y: 7,
                  transition: { duration: 0.45, ease: "easeOut", delay: 0 },
                }}
              >
                <ActiveMetadata project={activeProject} mobile />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" style={{ overflow: density.isCompact ? "hidden visible" : "hidden" }}>
        <motion.div
          drag="x"
          style={{ x, display: "flex", gap: GAP }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="h-full items-center"
        >
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${index}`}
              project={project}
              index={index}
              originalIndex={n > 0 ? index % n : index}
              isActive={index === virtualIndex}
              distanceFromActive={Math.abs(index - virtualIndex)}
              isWrapping={isWrapping}
              wasDragged={wasDragged}
              isDragging={isDragging}
              onSelect={snapToIndex}
              cardWidth={CARD_WIDTH}
              mobile={mobile}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
