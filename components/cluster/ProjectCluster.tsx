"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AlbumCard from "./AlbumCard";
import ProjectDetailScreen from "@/components/ui/ProjectDetailScreen";
import { PROJECTS } from "@/data/portfolio";

export default function ProjectCluster() {
  const [openId, setOpenId] = useState<string | null>(null);
  const visibleProjects = PROJECTS.filter((p) => !p.hidden);
  const activeProject = visibleProjects.find((p) => p.id === openId);

  return (
    <div className="relative pt-16 pb-24">
      {/*
        Single row, never wraps — scrolls horizontally if it doesn't fit.
        overflow-x-auto forces overflow-y to auto too (CSS spec quirk), so
        generous vertical padding here keeps the hover lift/shadow from
        getting clipped at the scroll container's edges.
      */}
      <div className="overflow-x-auto py-8">
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-x-6 px-6 max-w-5xl mx-auto w-max md:w-full">
          {visibleProjects.map((project, i) => (
            <AlbumCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setOpenId(project.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetailScreen project={activeProject} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
