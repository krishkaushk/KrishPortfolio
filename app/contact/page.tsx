import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Contact — Krish Zhao Kaushik",
  description: "Get in touch with Krish Zhao Kaushik.",
};

export default function Page() {
  return <ContactView />;
}
