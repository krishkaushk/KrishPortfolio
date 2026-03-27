"use client";

import { useState, useEffect, useCallback } from "react";
import BackgroundCanvas from "@/components/BackgroundCanvas";
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

  // Stable reference — never changes between renders, so Intro's empty-dep effect stays clean
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  // Disable browser scroll restoration and jump to top on every load
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <>
      {/* Fixed atmospheric background — always behind everything, never scrolls */}
      <BackgroundCanvas />

      {/* All page content sits above the fixed canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Intro onComplete={handleIntroComplete} />
        <Navbar />
        <main>
          <Hero introComplete={introComplete} />

          {/* Below-fold sections — hidden during intro, fades in after */}
          <div
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
      </div>
    </>
  );
}
