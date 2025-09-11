"use client";

import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/constants/data"; // Assuming Project type is defined here
import Image from "next/image";
import { WavyText } from "../Effect/WavyText";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

// --- New ProjectCard Component ---
interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

function ProjectCard({ project, isActive }: ProjectCardProps) {
  const cardStyle = {
    background: `radial-gradient(ellipse at top, ${project.color}25, transparent 70%)`,
    borderColor: isActive ? `${project.color}80` : "#27272a",
  };

  const arrowStyle = {
    color: project.color,
  };

  return (
    <div
      className="p-6 rounded-2xl border transition-all duration-300"
      style={cardStyle}
    >
      {/* Top Section: Title and Arrow */}
      <div className="flex justify-between items-start mb-40">
        <p className="text-gray-100 text-xl font-semibold max-w-[85%]">
          {project.title}
        </p>
        <ArrowUpRight
          className="size-7 flex-shrink-0"
          style={arrowStyle}
        />
      </div>

      {/* Image Container */}
      <div className="aspect-[16/9] bg-gray-900/50 rounded-lg overflow-hidden relative shadow-inner hover:-rotate-2">
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          className="object-cover object-top rounded-lg"
        />
        {/* Inner shadow for depth */}
        <div className="absolute inset-0 rounded-lg shadow-[inset_0_-50px_40px_-20px_rgba(0,0,0,0.7)]" />
      </div>
    </div>
  );
}


// --- Main ProjectSection Component ---
export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0]
        );

        if (mostVisible && mostVisible.isIntersecting) {
          const projectId = Number(mostVisible.target.getAttribute("data-id"));
          const project = projects.find((p) => p.id === projectId);

          if (project && project.id !== activeProject.id) {
            setActiveProject(project);
          }
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeProject.id]);

  return (
    <div className="text-white py-24">
      <div className="flex justify-center items-center mb-20">
        <WavyText
          text="Projects"
          className="text-5xl md:text-6xl font-bold tracking-wider"
        />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 relative">
          {/* LEFT: SCROLLABLE PROJECT CARDS */}
          <div className="space-y-24 pb-[50vh]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[index] = el; }}
                data-id={project.id}
              >
                <ProjectCard project={project} isActive={activeProject.id === project.id} />
              </div>
            ))}
          </div>

          {/* RIGHT: STICKY PROJECT DETAILS */}
          <div className="w-full h-screen sticky top-0 flex items-center justify-center p-8">
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: activeProject.color }}
                  >
                    {activeProject.title}
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {activeProject.description}
                  </p>
                  {/* <div className="flex flex-wrap gap-3">
                    {activeProject.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 bg-slate-800/70 px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle className="size-4" style={{ color: activeProject.color }} />
                        <span className="text-gray-300 text-sm">{tag}</span>
                      </div>
                    ))}
                  </div> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
