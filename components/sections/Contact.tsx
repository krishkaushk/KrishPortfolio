"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="pt-4">
        <div className="flex items-center gap-4 mb-16">
          <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase shrink-0">
            Contact
          </p>
          <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
        </div>
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-end">

          {/* Left */}
          <div>
            <h2
              className="font-grotesk font-bold text-text-primary leading-tight mb-0"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Open to opportunities.
              <br />
              <span className="text-text-secondary font-medium">Let&apos;s talk.</span>
            </h2>
          </div>

          {/* Right — links */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center justify-between py-4 border-t border-border hover:border-text-secondary transition-colors duration-200"
            >
              <span className="font-inter text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-200">
                Email
              </span>
              <span className="font-inter text-text-primary text-sm">
                {PERSONAL_INFO.email}
              </span>
            </a>

            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              className="group flex items-center justify-between py-4 border-t border-border hover:border-text-secondary transition-colors duration-200"
            >
              <span className="font-inter text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-200">
                GitHub
              </span>
              <span className="font-mono text-text-secondary text-xs">
                krishzkaushik ↗
              </span>
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.15 }}
              className="group flex items-center justify-between py-4 border-t border-b border-border hover:border-text-secondary transition-colors duration-200"
            >
              <span className="font-inter text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-200">
                LinkedIn
              </span>
              <span className="font-mono text-text-secondary text-xs">
                krishzkaushik ↗
              </span>
            </motion.a>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
