"use client";

import { useEffect } from "react";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function AboutView() {
  // Link-based hash navigation (e.g. /about#experience from the Home page)
  // can fire before the fade-in layout settles, so scroll explicitly on mount.
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <About />
      <Experience />
      <Skills />
    </>
  );
}
