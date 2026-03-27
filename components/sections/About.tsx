"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO, BIO } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section label + rule */}
      <div className="flex items-center gap-4 mb-16">
        <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase shrink-0">
          About
        </p>
        <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">

        {/* Left — meta card */}
        <div>
          {/* Avatar placeholder */}
          <div className="relative w-28 h-28 rounded-sm overflow-hidden mb-10 border border-border bg-bg-secondary flex items-center justify-center select-none">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
              stroke="var(--border-color)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            {[
              PERSONAL_INFO.degree,
              `Minor — ${PERSONAL_INFO.minor}`,
              PERSONAL_INFO.university,
              `Class of ${PERSONAL_INFO.gradYear}`,
            ].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-inter text-text-secondary text-sm leading-relaxed"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <h2
            className="font-grotesk font-bold text-text-primary leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)", letterSpacing: "-0.02em" }}
          >
            Not just a student.
          </h2>
          <div className="flex flex-col gap-5">
            {BIO.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-inter text-text-secondary leading-[1.8] text-base"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
