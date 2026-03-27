"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO, BIO } from "@/data/portfolio";

function getYearOfStudy(gradYear: number): string {
  const now = new Date();
  const startYear = gradYear - 4;
  const year = now.getMonth() >= 8 // September = month 8 (0-indexed)
    ? now.getFullYear() - startYear + 1
    : now.getFullYear() - startYear;
  return `Year ${year}`;
}

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

      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-20">

        {/* Left — meta card */}
        <div>
          {/* Profile image */}
          <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6">
            <Image
              src="/assets/profile.png"
              alt="Krish Kaushik"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            {[
              PERSONAL_INFO.degree,
              `${PERSONAL_INFO.minor} Minor`,
              `${PERSONAL_INFO.gradYear} Expected Graduation`,
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
            Let me introduce myself.
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
