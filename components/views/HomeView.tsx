"use client";

import Link from "next/link";
import IntroCard from "@/components/ui/IntroCard";
import MixedWeightHeading from "@/components/ui/MixedWeightHeading";
import Doodle from "@/components/ui/Doodle";
import ProjectCluster from "@/components/cluster/ProjectCluster";

export default function HomeView() {
  return (
    <>
      <IntroCard />

      <section className="px-6 max-w-5xl mx-auto w-full pt-6">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <MixedWeightHeading
              as="h2"
              parts={[{ text: "my " }, { text: "projects", emphasis: true }]}
              className="text-2xl md:text-3xl text-text-primary"
            />
            <Doodle variant="underline" width={70} height={16} className="hidden md:block mt-2" />
          </div>

          <Link
            href="/about#experience"
            className="group inline-flex items-center gap-1.5 font-grotesk text-xs text-text-secondary hover:text-highlight transition-colors duration-200 tracking-wide"
          >
            find my professional experience
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
        <p className="font-grotesk text-text-secondary text-xs mt-2 tracking-wide">
          hover an album to bring it into focus
        </p>
      </section>

      <ProjectCluster />
    </>
  );
}
