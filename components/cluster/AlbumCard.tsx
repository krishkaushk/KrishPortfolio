"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types";

interface AlbumCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

const SLEEVE = 156;
const RECORD = 138;
const HOVER_PEEK = 56;

// A record sleeve that leans at a fixed tilt. Behind it, a vinyl disc rests
// mostly hidden — spotlight projects rest with the disc already peeking out
// a little (the "stand out" cue, in place of a size difference) — and on
// hover the disc slides further out and spins slightly, with the title shown
// on the sleeve face throughout.
//
// Deliberately mouse-only (no onFocus/onBlur tied to the peek state): when a
// detail screen opens from here and later closes, focus gets restored to
// this exact element for accessibility, which would re-fire onFocus and
// leave the disc stuck "peeked" with no real hover/mouseleave to clear it.
// Keyboard users still get a focus-visible ring and Enter/Space still opens
// the project; they just don't see the hover peek, which is fine since
// opening no longer requires it.
export default function AlbumCard({ project, index, onOpen }: AlbumCardProps) {
  const [hovered, setHovered] = useState(false);
  const restRotate = [-4, 3, -2, 4, -3][index % 5];
  const restPeek = project.spotlight ? 20 : 5;
  const peek = hovered ? HOVER_PEEK : restPeek;
  const recordLeft = SLEEVE - RECORD + peek;
  const recordTop = (SLEEVE - RECORD) / 2;

  return (
    <div
      className="relative shrink-0"
      style={{ width: SLEEVE + HOVER_PEEK + 6, height: SLEEVE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Vinyl disc — behind the sleeve, slides out to the right */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: RECORD, height: RECORD, top: recordTop, background: "#211f1c" }}
        animate={{ left: recordLeft, rotate: hovered ? -18 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 5px)",
          }}
        />
        {/* Off-center highlight so any rotation is actually visible, not just a static disc */}
        <div
          className="absolute rounded-full"
          style={{ width: 4, height: 4, top: 10, left: "50%", marginLeft: -2, background: "rgba(255,255,255,0.5)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: RECORD * 0.36, height: RECORD * 0.36, background: project.accentColor }}
          >
            <div className="rounded-full bg-bg-primary" style={{ width: 6, height: 6 }} />
          </div>
        </div>
      </motion.div>

      {/* Sleeve — stays put, tilted; the clickable surface */}
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title}`}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
        className="absolute left-0 top-0 rounded-sm border border-border overflow-hidden cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-accent"
        style={{ width: SLEEVE, height: SLEEVE, rotate: restRotate }}
        animate={{
          scale: hovered ? 1.03 : 1,
          boxShadow: hovered ? "0 18px 32px rgba(0,0,0,0.22)" : "0 6px 14px rgba(0,0,0,0.12)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <div className="absolute inset-0" style={{ background: project.accentColor }} />
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.coverAlt ?? `${project.title} cover art`}
            fill
            sizes={`${SLEEVE}px`}
            className="object-cover"
          />
        )}
        <div
          className="absolute inset-x-0 top-0 h-14 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.42), transparent)" }}
        />
        <div className="absolute top-0 left-0 right-0 p-3">
          <span className="font-grotesk font-bold text-xs text-white leading-tight block text-left">
            {project.title}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
