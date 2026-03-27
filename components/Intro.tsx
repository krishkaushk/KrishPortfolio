"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useTheme } from "next-themes";

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

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("entering");
  const [showChars, setShowChars] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    // 18 chars × 55ms stagger + 420ms last char = ~1410ms, add hold → 1700ms
    const t1 = setTimeout(() => setShowChars(false), 1700);
    const t2 = setTimeout(() => setPhase("exiting"), 1700);
    const t3 = setTimeout(() => setPhase("done"), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
  }, [phase]);

  if (phase === "done") return null;

  // Default dark until hydrated (avoids flash)
  const isDark = !mounted || resolvedTheme !== "light";
  const overlayBg  = isDark ? "#141414" : "#f5f0e8";
  const nameColor  = isDark ? "#f0eeea" : "#111111";
  const trackColor = isDark ? "rgba(240,238,234,0.1)" : "rgba(17,17,17,0.1)";

  const out = phase === "exiting";

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5">
      {/* Theme-matched overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ background: overlayBg }}
        animate={{ opacity: out ? 0 : 1 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      />

      {/* Character stagger reveal */}
      {showChars && (
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
                fontSize: "clamp(3rem, 10vw, 7rem)",
                fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
                color: nameColor,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* layoutId h1 — replaces chars, flies to hero on unmount */}
      {!showChars && (
        <motion.h1
          layoutId="hero-name"
          className="relative z-10 font-playfair select-none"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "-0.01em",
            color: nameColor,
            lineHeight: 1.1,
          }}
        >
          {NAME}
        </motion.h1>
      )}

      {/* Loading bar — fills as chars stagger in */}
      <div
        className="relative z-10"
        style={{ width: 220, height: 2, background: trackColor, borderRadius: 1 }}
      >
        <motion.div
          style={{ height: "100%", background: "#C5975C", borderRadius: 1 }}
          initial={{ width: "0%" }}
          animate={{ width: out ? "100%" : "100%" }}
          transition={{ duration: 1.4, ease: "linear", delay: 0.1 }}
        />
      </div>
    </div>
  );
}
