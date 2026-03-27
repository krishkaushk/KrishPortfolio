"use client";

import { useState, useEffect } from "react";
import Intro from "@/components/Intro";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  // Disable browser scroll restoration and jump to top on every load
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <>
      <Intro onComplete={() => setIntroComplete(true)} />
      <Navbar />
      <main>
        {/* Hero is sticky — sits behind everything that follows */}
        <Hero introComplete={introComplete} />

        {/* This wrapper slides over the sticky hero as you scroll */}
        {/* Hidden during intro so the overlay reveals a blank hero, not pre-rendered content */}
        <div
          className="relative z-10 bg-bg-primary"
          style={{
            opacity: introComplete ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
