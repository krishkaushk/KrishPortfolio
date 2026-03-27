"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO, BIO } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">

        {/* Left — circular headshot + label + meta */}
        <div>
          {/*
            REPLACE THIS DIV WITH YOUR HEADSHOT:

            import Image from "next/image"

            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-8">
              <Image src="/headshot.jpg" alt="Krish Zhao Kaushik" fill className="object-cover" />
            </div>
          */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-8 border border-border bg-bg-secondary flex items-center justify-center select-none">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="var(--border-color)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>

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
