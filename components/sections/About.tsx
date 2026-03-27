"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO, BIO } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">

        {/* Left — label + meta */}
        <div>
          <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase mb-8">
            About
          </p>
          <div className="flex flex-col gap-3">
            {[
              PERSONAL_INFO.degree,
              `Minor — ${PERSONAL_INFO.minor}`,
              PERSONAL_INFO.university,
              `Class of ${PERSONAL_INFO.gradYear}`,
            ].map((item) => (
              <span key={item} className="font-inter text-text-secondary text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <h2
            className="font-grotesk font-bold text-text-primary leading-tight mb-6"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", letterSpacing: "-0.01em" }}
          >
            Not just a student.
          </h2>
          <div className="flex flex-col gap-4">
            {BIO.split("\n\n").map((para, i) => (
              <p key={i} className="font-inter text-text-secondary leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
