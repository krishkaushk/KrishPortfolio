"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { GithubIcon, ExternalIcon, CloseIcon } from "@/components/ui/icons";

interface ProjectDetailScreenProps {
  project: Project;
  onClose: () => void;
}

// Scrollable detail panel for every project (spotlight or not) — a centered
// card over a backdrop, not a full-page takeover. A vinyl disc spins
// continuously in its sticky header for the life of the panel; it's wrapped
// in its own MotionConfig so a user's OS-level reduced-motion preference
// (which the rest of the site respects via the root MotionConfig) doesn't
// also freeze this decorative, non-essential spin.
export default function ProjectDetailScreen({ project, onClose }: ProjectDetailScreenProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { story, images = [] } = project;

  useBodyScrollLock(true);
  useFocusTrap(panelRef, onClose);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10" style={{ overflow: "hidden" }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0"
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
      />

      {/* Panel — the only scroll container here; sized explicitly inline so
          there's no ambiguity about whether it actually caps/scrolls. */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl border border-border rounded-sm outline-none"
        style={{
          background: "var(--bg-primary)",
          maxHeight: "min(85vh, 800px)",
          overflowY: "auto",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Sticky header: close button + spinning vinyl */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-bg-primary/90 backdrop-blur-sm border-b border-border">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Close"
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors duration-200"
          >
            <CloseIcon />
          </motion.button>

          <MotionConfig reducedMotion="never">
            <motion.div
              className="relative rounded-full shrink-0"
              style={{ width: 40, height: 40, background: "#211f1c" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: 2.4 }}
              aria-hidden
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "repeating-radial-gradient(circle, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)",
                }}
              />
              {/* Off-center highlight so the continuous spin is actually visible */}
              <div
                className="absolute rounded-full"
                style={{ width: 4, height: 4, top: 4, left: "50%", marginLeft: -2, background: "rgba(255,255,255,0.55)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full" style={{ width: 14, height: 14, background: project.accentColor }} />
              </div>
            </motion.div>
          </MotionConfig>
        </div>

        <div className="max-w-2xl mx-auto px-6 pb-10 pt-8">
        {/* Cover banner */}
        <div
          className="relative w-full h-48 md:h-64 rounded-md overflow-hidden border border-border mb-8"
          style={{ background: project.coverImage ? undefined : project.accentColor }}
        >
          {project.coverImage && (
            <Image
              src={project.coverImage}
              alt={project.coverAlt ?? `${project.title} cover art`}
              fill
              className="object-cover"
            />
          )}
        </div>

        <h2
          id="detail-title"
          className="font-grotesk font-bold text-text-primary leading-tight mb-3"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h2>

        {story ? (
          <>
            <p className="font-inter text-text-secondary text-sm leading-relaxed mb-3 max-w-xl">
              {story.subtitle}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-secondary mb-6">
              <span>{story.role}</span>
              <span>{story.timeline}</span>
            </div>
          </>
        ) : (
          <p className="font-inter text-text-secondary text-sm leading-relaxed mb-6 max-w-xl">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 border border-border text-text-secondary rounded-sm"
              style={{ background: "var(--bg-secondary)" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {images.length > 0 && (
          <div className="flex gap-3 overflow-x-auto mb-8 -mx-1 px-1">
            {images.map((image) => (
              <div
                key={image.src}
                className="relative shrink-0 w-56 h-36 rounded-sm overflow-hidden border border-border"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        {story && (
          <div className="flex flex-col gap-6 mb-8">
            {story.blocks.map((block, i) => {
              if (block.type === "text") {
                return (
                  <div key={i}>
                    {block.heading && (
                      <h3 className="font-grotesk font-semibold text-text-primary text-base mb-2">
                        {block.heading}
                      </h3>
                    )}
                    <p className="font-inter text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {block.body}
                    </p>
                  </div>
                );
              }
              if (block.type === "callout") {
                return (
                  <div
                    key={i}
                    className="pl-5 py-1 border-l-2"
                    style={{ borderColor: `${project.accentColor}80` }}
                  >
                    <p
                      className="font-mono text-xs uppercase tracking-[0.15em] mb-2"
                      style={{ color: project.accentColor }}
                    >
                      {block.label}
                    </p>
                    <p className="font-inter text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {block.body}
                    </p>
                  </div>
                );
              }
              return (
                <div key={i}>
                  <div className="relative w-full h-64 rounded-sm overflow-hidden border border-border">
                    <Image src={block.src} alt={block.alt} fill className="object-cover" />
                  </div>
                  {block.caption && (
                    <p className="font-mono text-xs text-text-secondary mt-2">{block.caption}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="flex gap-3 pt-6 border-t border-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 border border-border hover:border-text-secondary px-3 py-1.5 rounded-sm"
            style={{ background: "var(--bg-secondary)" }}
          >
            <GithubIcon /> GitHub
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 border border-border hover:border-text-secondary px-3 py-1.5 rounded-sm"
              style={{ background: "var(--bg-secondary)" }}
            >
              <ExternalIcon /> Devpost
            </a>
          )}
        </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
