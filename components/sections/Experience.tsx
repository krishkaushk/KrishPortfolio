"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section label + rule */}
      <div className="flex items-center gap-4 mb-16">
        <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase shrink-0">
          Experience
        </p>
        <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
      </div>

      <div className="flex flex-col">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 4 }}
            className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border last:border-b transition-colors duration-200 group"
          >
            {/* Left col — meta */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-text-secondary tracking-wide">
                {exp.period}
              </span>
              <span className="font-inter text-sm text-text-primary font-medium mt-2">
                {exp.company}
              </span>
              <span className="font-inter text-xs text-text-secondary opacity-60">
                {exp.location}
              </span>
            </div>

            {/* Right col — content */}
            <div>
              <h3
                className="font-grotesk font-semibold text-text-primary mb-5 transition-colors duration-200"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
              >
                {exp.role}
              </h3>
              <ul className="flex flex-col gap-4">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-4 font-inter text-sm text-text-secondary leading-relaxed">
                    <span className="text-highlight opacity-60 mt-0.5 flex-shrink-0 font-mono text-xs">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
