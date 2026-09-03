"use client";

import { useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectSpotlight from "@/components/ui/ProjectSpotlight";
import { GithubIcon, ExternalIcon, ArrowIcon } from "@/components/ui/icons";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeProject = PROJECTS.find((p) => p.id === openId);

  return (
    <SectionWrapper id="projects">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16">
        <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase">
          Projects
        </p>
        <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
      </div>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hover"
            className="group relative"
          >
            {/* Card */}
            <motion.div
              variants={{
                hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" } },
              }}
              className={`relative overflow-hidden border border-border rounded-sm p-8 md:p-10 transition-colors duration-300 ${
                project.spotlight ? "cursor-pointer" : ""
              }`}
              style={{ background: "var(--bg-elevated)" }}
              {...(project.spotlight
                ? {
                    role: "button" as const,
                    tabIndex: 0,
                    onClick: () => setOpenId(project.id),
                    onKeyDown: (e: KeyboardEvent) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenId(project.id);
                      }
                    },
                  }
                : {})}
            >
              {/* Accent glow on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ borderRadius: "inherit" }}
                variants={{
                  hover: {
                    boxShadow: `0 0 0 1px ${project.accentColor}30, 0 8px 40px ${project.accentColor}12`,
                    transition: { duration: 0.3 },
                  },
                }}
              />

              {/* Left accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: project.accentColor, opacity: 0.3 }}
                variants={{
                  hover: { opacity: 1, transition: { duration: 0.25 } },
                }}
              />

              {/* Top row: number + title + arrow */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-mono text-xs shrink-0 mt-1"
                    style={{ color: project.accentColor, opacity: 0.7 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-grotesk font-bold text-text-primary leading-tight transition-colors duration-200 group-hover:text-text-primary"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="shrink-0 mt-1"
                  style={{ color: project.accentColor, opacity: 0.4 }}
                  variants={{
                    hover: {
                      opacity: 1,
                      x: 3,
                      y: -3,
                      transition: { duration: 0.2 },
                    },
                  }}
                >
                  <ArrowIcon />
                </motion.div>
              </div>

              {/* Description */}
              <p className="font-inter text-text-secondary text-sm leading-relaxed mb-7 max-w-2xl">
                {project.description}
              </p>

              {/* Bottom row: stack + links */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Stack chips */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 border border-border text-text-secondary rounded-sm transition-colors duration-200 group-hover:border-border"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 shrink-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 border border-border hover:border-text-secondary px-3 py-1.5 rounded-sm"
                    style={{ background: "var(--bg-secondary)" }}
                    onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalIcon /> Devpost
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectSpotlight project={activeProject} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
