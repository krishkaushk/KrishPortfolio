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
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        {/* Hero is sticky — sits behind everything that follows */}
        <Hero />

        {/* This wrapper slides over the sticky hero as you scroll */}
        <div className="relative z-10 bg-bg-primary">
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
