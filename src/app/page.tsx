import { Container } from "@/components/layout/Container";
import { ContactSection } from "@/components/section/ContactSection";
import { Hero } from "@/components/section/Hero";
import ProjectSection from "@/components/section/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#333333] ">
      <Hero />
      <Container>
        <ProjectSection />
        <ContactSection />
      </Container>
    </div>
  );
}
