"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

const VELOCITY_THRESHOLD = 400;

interface ProjectCarouselProps {
  projects: Project[];
  cardWidth?: number;
  gap?: number;
  mobile?: boolean;
}

export function ProjectCarousel({
  projects,
  cardWidth: CARD_WIDTH = 580,
  gap: GAP = 240,
  mobile = false,
}: ProjectCarouselProps) {
  const ITEM_WIDTH = CARD_WIDTH + GAP;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  const initialized = useRef(false);
  const wasDragged = useRef(false);
  const isDragging = useRef(false);
  const snapCount = useRef(0);

  const n = projects.length;
  const initialVirtualIndex = n + (n > 1 ? 1 : 0);

  const displayProjects = useMemo(
    () => [...projects, ...projects, ...projects],
    [projects]
  );

  const [virtualIndex, setVirtualIndex] = useState(initialVirtualIndex);

  useEffect(() => {
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

  useEffect(() => {
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
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }).then(() => {
        if (snapCount.current !== currentSnap) return;
        let wrapped = index;
        if (index < n) {
          wrapped = index + n;
          x.jump(centerOffset - wrapped * ITEM_WIDTH);
        } else if (index >= 2 * n) {
          wrapped = index - n;
          x.jump(centerOffset - wrapped * ITEM_WIDTH);
        }
        setVirtualIndex(wrapped);
        isDragging.current = false;
      });
    },
    [centerOffset, x, n]
  );

  const handleCardSelect = useCallback(
    (index: number) => {
      snapToIndex(index);
    },
    [snapToIndex]
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

  return (
    <div ref={containerRef} className="overflow-hidden w-full h-full relative">
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
            isActive={index === virtualIndex}
            wasDragged={wasDragged}
            isDragging={isDragging}
            onSelect={() => handleCardSelect(index)}
            cardWidth={CARD_WIDTH}
            mobile={mobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
