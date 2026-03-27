"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import { SKILL_GROUPS } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-4 mb-16">
        <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase shrink-0">
          Skills
        </p>
        <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
      </div>

      {/* 3-column grid — one column per category */}
      <div className="grid md:grid-cols-3 gap-0 border-t border-border">
        {SKILL_GROUPS.map((group, gi) => (
          <div
            key={group.category}
            className={`py-8 flex flex-col gap-5 ${gi < SKILL_GROUPS.length - 1 ? "md:border-r border-border md:pr-8" : ""} ${gi > 0 ? "md:pl-8" : ""}`}
          >
            {/* Category heading */}
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-highlight">
              {group.category}
            </span>

            {/* Skill badges */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => (
                <motion.div key={skill} variants={item}>
                  <SkillBadge label={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
