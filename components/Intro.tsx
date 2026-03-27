"use client";

import { useEffect, useState } from "react";
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

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("entering");
  const [showChars, setShowChars] = useState(true);

  useEffect(() => {
    // 18 chars × 55ms stagger + 420ms last char = ~1410ms, add hold time → 1700ms
    const t1 = setTimeout(() => setShowChars(false), 1700); // swap chars → layoutId h1
    const t2 = setTimeout(() => setPhase("exiting"), 1700); // begin bg fade
    const t3 = setTimeout(() => setPhase("done"), 2300);    // unmount → layoutId flies to hero
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Fix scroll bug: watch phase instead of relying on unmount cleanup
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
  }, [phase]);

  if (phase === "done") return null;

  const out = phase === "exiting";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Dark overlay — fades during exiting phase */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "#141414" }}
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
                color: "#f0eeea",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* layoutId h1 — replaces chars and flies to hero position on unmount */}
      {!showChars && (
        <motion.h1
          layoutId="hero-name"
          className="relative z-10 font-playfair select-none"
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            letterSpacing: "-0.01em",
            color: "#f0eeea",
            lineHeight: 1.1,
          }}
        >
          {NAME}
        </motion.h1>
      )}
    </div>
  );
}
