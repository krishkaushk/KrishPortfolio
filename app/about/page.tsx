import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "About — Krish Zhao Kaushik",
  description: "Who I am, where I've worked, and what I build with.",
};

export default function Page() {
  return <AboutView />;
}
