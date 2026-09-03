"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { GithubIcon, ExternalIcon, CloseIcon } from "@/components/ui/icons";

interface ProjectSpotlightProps {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectSpotlight({ project, onClose }: ProjectSpotlightProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { story, images = [] } = project;

  useBodyScrollLock(true);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!story) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 md:p-10">
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

      {/* Panel */}
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="spotlight-title"
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl my-8 md:my-16 border border-border rounded-sm outline-none"
        style={{ background: "var(--bg-elevated)" }}
      >
        {/* Accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-sm"
          style={{ background: project.accentColor }}
        />

        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2
                id="spotlight-title"
                className="font-grotesk font-bold text-text-primary leading-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.01em" }}
              >
                {project.title}
              </h2>
              <p className="font-inter text-text-secondary text-sm leading-relaxed mb-3 max-w-xl">
                {story.subtitle}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-secondary">
                <span>{story.role}</span>
                <span>{story.timeline}</span>
              </div>
            </div>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Close"
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-sm border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors duration-200"
            >
              <CloseIcon />
            </motion.button>
          </div>

          {/* Gallery */}
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

          {/* Story blocks */}
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

          {/* Links */}
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
