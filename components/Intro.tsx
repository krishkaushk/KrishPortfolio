"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hold for 1.6s then trigger the slide-up exit
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary pointer-events-none"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Name reveal */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="font-playfair text-text-primary"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}
            >
              Krish Zhao Kaushik
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
