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

    <>
      <Navbar />

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
    </>

  );
}
