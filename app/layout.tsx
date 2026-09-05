import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Playfair_Display, Caveat } from "next/font/google";
import { MotionConfig } from "framer-motion";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import IntroGate from "@/components/IntroGate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-hand",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krish Zhao Kaushik — Developer",
  description:
    "Computing Science student at SFU. Full-stack developer who ships. Interested in web apps, automation, and practical software.",
  openGraph: {
    title: "Krish Zhao Kaushik — Developer",
    description:
      "Computing Science student at SFU. Full-stack developer who ships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <BackgroundCanvas />
          <div style={{ position: "relative", zIndex: 1 }}>
            <IntroGate>
              <Navbar />
              <main>
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </IntroGate>
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
