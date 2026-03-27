"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import { PERSONAL_INFO, TAGLINE } from "@/data/portfolio";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let charTimeout: ReturnType<typeof setTimeout>;
    const startTimeout = setTimeout(() => {
      let i = 0;
      const tick = () => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i < text.length) charTimeout = setTimeout(tick, 45);
      };
      tick();
    }, delay);
    return () => { clearTimeout(startTimeout); clearTimeout(charTimeout); };
  }, [text, delay]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink" aria-hidden>|</span>
      )}
    </>
  );
}

interface HeroProps {
  introComplete: boolean;
}

export default function Hero({ introComplete }: HeroProps) {
  // Stagger delays for entrance animations (fire after intro completes)
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
    >
      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 pt-24 pb-8 max-w-5xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.p {...fadeUp(0.05)} className="font-mono text-highlight text-xs tracking-[0.22em] uppercase mb-6">
          {PERSONAL_INFO.university}&nbsp;·&nbsp;Computing Science&nbsp;·&nbsp;{PERSONAL_INFO.gradYear}
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.0)}
          className="font-playfair text-text-primary leading-none mb-6"
          style={{ fontSize: "clamp(2.8rem, 8.5vw, 7.5rem)", letterSpacing: "-0.02em" }}
        >
          Krish Zhao Kaushik
        </motion.h1>

        {/* Tagline */}
        <motion.div {...fadeUp(0.15)} className="flex items-center gap-4 mb-10">
          <div
            className="h-px flex-shrink-0"
            style={{ width: "2.5rem", background: "var(--highlight, #C5975C)", opacity: 0.7 }}
          />
          <p className="font-inter text-text-secondary text-base">
            <Typewriter text={TAGLINE} delay={2500} />
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.25)} className="flex flex-wrap gap-3">
          <CTAButton href={PERSONAL_INFO.github}   label="GitHub"   variant="outline" external icon={<GithubIcon />} />
          <CTAButton href={PERSONAL_INFO.linkedin}  label="LinkedIn" variant="outline" external icon={<LinkedinIcon />} />
          <CTAButton href="/resume.pdf"             label="Resume"   variant="primary" download  icon={<DownloadIcon />} />
          <CTAButton href={`mailto:${PERSONAL_INFO.email}`} label="Email" variant="outline" external icon={<MailIcon />} />
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-10 mt-auto"
      >
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "var(--text-secondary)", opacity: 0.45 }}
        >
          scroll
        </span>
        <a
          href="#about"
          className="text-text-secondary hover:text-highlight transition-colors duration-300"
          aria-label="Scroll to about"
          style={{ animation: "bounce-arrow 2s ease-in-out infinite" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
