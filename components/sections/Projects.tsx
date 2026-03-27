"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/data/portfolio";

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Projects() {
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
              className="relative overflow-hidden border border-border rounded-sm p-8 md:p-10 transition-colors duration-300"
              style={{ background: "var(--bg-elevated)" }}
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
    </SectionWrapper>
  );
}
