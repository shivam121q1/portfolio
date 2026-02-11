import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import CursorBubbles from "@/components/Effect/CursorBubbles";
import { StarsBackground } from "@/components/UI-component/stars-background";
import { Navbar } from "@/components/Navbar";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neeyti",
  description: "I am UI/UX designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <main className="relative flex flex-col min-h-screen bg-black/90 text-white">
          {/* Background layer */}
          <StarsBackground className="z-0 pointer-events-none" />
          {/* <ShootingStars className="z-0 pointer-events-none" /> */}

          {/* Navbar fixed at the top */}
         
          {children}

        </main>
        {/* <CursorBubbles
          color="#ffffff" // tweak color
          maxParticles={150} // trail density cap
          spawnEvery={1} // spawn frequency
          blur={10} // glow
        /> */}

      </body>
    </html>
  );
}
