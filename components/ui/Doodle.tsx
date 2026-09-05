"use client";

import { motion } from "framer-motion";

type DoodleVariant = "arrow" | "circle" | "underline" | "star";

interface DoodleProps {
  variant: DoodleVariant;
  className?: string;
  width?: number;
  height?: number;
}

const PATHS: Record<DoodleVariant, string> = {
  arrow: "M4 28 C 20 4, 40 4, 54 20 M 42 14 L 54 20 L 46 30",
  circle: "M 30 6 C 46 6 54 16 52 28 C 50 42 34 48 20 42 C 6 36 6 18 18 10 C 22 7 26 6 30 6",
  underline: "M4 10 C 30 2, 60 2, 92 10",
  star: "M20 2 L24 16 L38 16 L27 25 L31 39 L20 30 L9 39 L13 25 L2 16 L16 16 Z",
};

const VIEWBOX: Record<DoodleVariant, string> = {
  arrow: "0 0 60 34",
  circle: "0 0 60 50",
  underline: "0 0 96 14",
  star: "0 0 40 40",
};

// Small hand-drawn accent, sparingly placed. The stroke draws itself in when
// it scrolls into view rather than just appearing.
export default function Doodle({ variant, className = "", width = 60, height = 40 }: DoodleProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={VIEWBOX[variant]}
      fill="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d={PATHS[variant]}
        stroke="var(--sketch)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </svg>
  );
}
