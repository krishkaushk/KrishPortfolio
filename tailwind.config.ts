import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk:  ["var(--font-grotesk)"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter:    ["var(--font-inter)"],
        mono:     ["var(--font-mono)", "monospace"],
        hand:     ["var(--font-hand)", "cursive"],
      },
      colors: {
        bg: {
          primary:   "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          elevated:  "var(--bg-elevated)",
        },
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        accent:       "var(--accent)",
        "accent-inv": "var(--accent-inv)",
        highlight:    "var(--highlight)",
        border:       "var(--border-color)",
        paper:        "var(--paper)",
        sketch:       "var(--sketch)",
      },
    },
  },
  plugins: [],
};

export default config;
