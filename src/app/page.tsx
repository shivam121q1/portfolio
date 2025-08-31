import { Container } from "@/components/layout/Container";
import { ContactSection } from "@/components/section/ContactSection";
import { Hero } from "@/components/section/Hero";
import ProjectSection from "@/components/section/Project";
import ServicesSection from "@/components/section/ServiceSection";
import { ShootingStars } from "@/components/UI-component/shooting-stars";
import { StarsBackground } from "@/components/UI-component/stars-background";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black/90 text-white">
      {/* Background layer */}
      <StarsBackground className="z-0 pointer-events-none" />
      <ShootingStars className="z-0 pointer-events-none" />

      {/* Foreground content */}
      <div className="relative z-10">
        <Hero />
        <Container>
          <ProjectSection />
          <ServicesSection />
          <ContactSection />
        </Container>
      </div>
    </main>
  );
}
