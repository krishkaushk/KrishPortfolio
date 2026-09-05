"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackgroundCanvas() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const blob1X = useTransform(springX, [0, 1], [-40, 40]);
  const blob1Y = useTransform(springY, [0, 1], [-25, 25]);
  const blob2X = useTransform(springX, [0, 1], [30, -30]);
  const blob2Y = useTransform(springY, [0, 1], [20, -20]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {/* Primary warm gold orb — top left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "clamp(400px, 55vw, 800px)",
          height: "clamp(400px, 55vw, 800px)",
          background: "radial-gradient(circle, rgba(160,80,50,0.13) 0%, transparent 40%)",
          top: "-15%",
          left: "-10%",
          filter: "blur(1px)",
          x: blob1X,
          y: blob1Y,
        }}
      />

      {/* Secondary amber orb — bottom right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "clamp(300px, 40vw, 600px)",
          height: "clamp(300px, 40vw, 600px)",
          background: "radial-gradient(circle, rgba(140,65,40,0.09) 0%, transparent 40%)",
          bottom: "5%",
          right: "-5%",
          filter: "blur(1px)",
          x: blob2X,
          y: blob2Y,
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
      />
    </div>
  );
}
