"use client";

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

export default function Hero() {
  return (
    <section id="hero" className="relative">

      {/* ── Photo area ─────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "76vh", minHeight: 520 }}>

        {/*
          REPLACE THIS DIV WITH YOUR PHOTO:

          import Image from "next/image"

          <Image
            src="/photo.jpg"
            alt="Krish Zhao Kaushik"
            fill
            priority
            className="object-cover object-center"
          />
        */}
        <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center select-none">
          <div className="flex flex-col items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
              stroke="var(--border-color)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--border-color)" }}>
              /public/photo.jpg
            </span>
          </div>
        </div>

        {/* Bottom fade — photo bleeds into page bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
          }}
        />
      </div>

      {/* ── Name + info block ───────────────────────────────────── */}
      <div className="relative z-10 -mt-24 px-6 pb-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {/* Eyebrow */}
          <p className="font-mono text-highlight text-xs tracking-[0.22em] uppercase mb-5">
            {PERSONAL_INFO.university} &nbsp;·&nbsp; Computing Science &nbsp;·&nbsp; {PERSONAL_INFO.gradYear}
          </p>

          {/* Name */}
          <h1
            className="font-playfair text-text-primary leading-none mb-5"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            Krish Zhao Kaushik
          </h1>

          {/* Tagline + divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-border" />
            <p className="font-inter text-text-secondary text-sm">
              {TAGLINE}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <CTAButton href={PERSONAL_INFO.github}   label="GitHub"   variant="outline" external icon={<GithubIcon />} />
            <CTAButton href={PERSONAL_INFO.linkedin}  label="LinkedIn" variant="outline" external icon={<LinkedinIcon />} />
            <CTAButton href="/resume.pdf"             label="Resume"   variant="primary" download  icon={<DownloadIcon />} />
            <CTAButton href={`mailto:${PERSONAL_INFO.email}`} label="Contact" variant="outline" />
          </div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <div className="flex justify-center pb-8">
        <a
          href="#about"
          className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          aria-label="Scroll down"
          style={{ animation: "bounce-arrow 2s ease-in-out infinite" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>

    </section>
  );
}
