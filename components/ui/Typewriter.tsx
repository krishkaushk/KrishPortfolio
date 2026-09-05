"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let charTimeout: ReturnType<typeof setTimeout>;
    const startTimeout = setTimeout(() => {
      let i = 0;
      const tick = () => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i < text.length) charTimeout = setTimeout(tick, 45);
      };
      tick();
    }, delay);
    return () => { clearTimeout(startTimeout); clearTimeout(charTimeout); };
  }, [text, delay]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink" aria-hidden>|</span>
      )}
    </>
  );
}
