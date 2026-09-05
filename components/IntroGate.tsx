"use client";

import { useCallback, useEffect, useState } from "react";
import Intro from "@/components/Intro";
import { IntroCompleteProvider } from "@/components/IntroContext";

const SESSION_KEY = "hasSeenIntro";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  // Start true so nothing on the page waits during SSR/first paint; flip to
  // false immediately on mount if this session hasn't seen the intro yet.
  const [introComplete, setIntroComplete] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    setIntroComplete(false);
    setShowIntro(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIntroComplete(true);
  }, []);

  return (
    <IntroCompleteProvider value={introComplete}>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      {children}
    </IntroCompleteProvider>
  );
}
