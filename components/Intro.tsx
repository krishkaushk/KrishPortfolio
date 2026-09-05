"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

type Phase = "entering" | "exiting" | "done";

const NAME = "Krish Zhao Kaushik";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055 },
  },
};

const charVariants: Variants = {
  hidden: { y: 44, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

interface IntroProps {
  onComplete?: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<Phase>("entering");

  // Keep a ref to the latest callback so the timer effect never needs it as a dep
  const cbRef = useRef(onComplete);
  useEffect(() => { cbRef.current = onComplete; });

  // Empty dep array — timers run exactly once on mount, never reset on re-renders
  useEffect(() => {
    // 18 chars × 55ms stagger + 420ms last char = ~1410ms, hold → start exit at 1700ms
    const t1 = setTimeout(() => setPhase("exiting"), 1700);
    const t2 = setTimeout(() => {
      setPhase("done");
      cbRef.current?.();
    }, 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
  }, [phase]);

  if (phase === "done") return null;

  const overlayBg = "#f5f0e8";
  const nameColor = "#111111";
  const trackColor = "rgba(17,17,17,0.1)";

  const out = phase === "exiting";

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5">
      {/* Theme-matched overlay — fades out when exiting */}
      <motion.div
        className="absolute inset-0"
        style={{ background: overlayBg }}
        animate={{ opacity: out ? 0 : 1 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />

      {/*
        All content is hidden the moment exiting begins.
        The overlay then fades over an empty background, so the name/bar
        and the hero page are never visible at the same time.
      */}
      {!out && (
        <>
          {/* Character stagger reveal */}
          <motion.div
            className="relative z-10 select-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-hidden
          >
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                style={{
                  display: "inline-block",
                  fontSize: "clamp(2rem, 10vw, 7rem)",
                  fontFamily: "var(--font-grotesk, 'Space Grotesk', sans-serif)",
                  fontWeight: 700,
                  color: nameColor,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Loading bar */}
          <div
            className="relative z-10"
            style={{ width: 220, height: 2, background: trackColor, borderRadius: 1 }}
          >
            <motion.div
              style={{ height: "100%", background: "#C5975C", borderRadius: 1 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "linear", delay: 0.1 }}
            />
          </div>
        </>
      )}
    </div>
  );
}
