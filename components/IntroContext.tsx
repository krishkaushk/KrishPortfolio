"use client";

import { createContext, useContext } from "react";

// Defaults to true so any consumer rendered outside IntroGate (or after intro
// has already resolved) never gets stuck waiting on a signal that won't arrive.
const IntroContext = createContext<boolean>(true);

export const IntroCompleteProvider = IntroContext.Provider;

export function useIntroComplete(): boolean {
  return useContext(IntroContext);
}
