import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";

export const metadata: Metadata = {
  title: "Krish Zhao Kaushik — Home",
  description:
    "Computing Science student at SFU. Full-stack developer who ships. Interested in web apps, automation, and practical software.",
};

export default function Page() {
  return <HomeView />;
}
