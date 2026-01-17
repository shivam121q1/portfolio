import { Container } from "@/components/layout/Container";
import { ContactSection } from "@/components/section/ContactSection";
import { Hero } from "@/components/section/Hero";
import ProjectSection from "@/components/section/Project";
import ServicesSection from "@/components/section/ServiceSection";
import { Navbar } from "@/components/Navbar"; // Import the new Navbar
import { ShootingStars } from "@/components/UI-component/shooting-stars";
import { StarsBackground } from "@/components/UI-component/stars-background";
import ExpertiseGrid from "@/components/section/ExpertiseGrid";
import EducationExperienceTimeline from "@/components/section/EducationExperienceTimeline";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black/90 text-white">
      {/* Background layer */}
      <StarsBackground className="z-0 pointer-events-none" />
      {/* <ShootingStars className="z-0 pointer-events-none" /> */}

      {/* Navbar fixed at the top */}
      <Navbar />

      {/* Foreground content */}
      <div className="relative z-10">
        <section id="about">
          <Hero />
        </section>

        <Container className="flex flex-col gap-10">
          <section id="educationandwork">
            <EducationExperienceTimeline />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>


          <section id="expertise">
            <ExpertiseGrid />


          </section>
          <section id="services">
            <ServicesSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>

        </Container>
      </div>
    </main>
  );
}
