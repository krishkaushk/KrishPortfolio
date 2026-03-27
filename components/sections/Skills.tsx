"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import { SKILL_GROUPS } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
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

      <div className="flex flex-col gap-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 pt-6 border-t border-border">
            <span className="font-mono text-xs text-text-secondary tracking-wide">
              {group.category}
            </span>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => (
                <motion.div key={skill} variants={badgeItem}>
                  <SkillBadge label={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
        <div className="border-t border-border" />
      </div>
    </SectionWrapper>
  );
}
