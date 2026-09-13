"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function Reveal({ children, className = "", delay = 0, as: Component = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });
  const reducedMotion = useReducedMotion();

  return (
    <Component
      ref={ref}
      className={className}
      data-reveal
      style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
        animate={isInView || reducedMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: reducedMotion ? 0 : 0.85, ease: [0.32, 0.72, 0, 1] }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
