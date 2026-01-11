"use client";

import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/constants/data";
import Image from "next/image";
import { WavyText } from "../Effect/WavyText";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

/* ---------------- PROJECT CARD ---------------- */

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

function ProjectCard({ project, isActive, onClick, isMobile }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={!isMobile ? { rotateX: 4, rotateY: -4 } : undefined}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={onClick}
      className={clsx(
        "relative p-4 md:p-6 rounded-xl md:rounded-2xl border overflow-hidden transition-all duration-500",
        isActive
          ? "scale-[1.02] md:scale-[1.03] shadow-xl md:shadow-2xl"
          : "opacity-80 hover:opacity-100",
        isMobile && "active:opacity-90"
      )}
      style={{
        background: `radial-gradient(ellipse at top, ${project.color}25, transparent 70%)`,
        borderColor: isActive ? `#ffffff80` : "#27272a",
      }}
    >
      {/* Glow Layer */}
      <div
        className="absolute inset-0 rounded-xl md:rounded-2xl blur-xl md:blur-2xl opacity-20 md:opacity-30"
        style={{
          background: `radial-gradient(circle at top, #ffffff, transparent 70%)`,
        }}
      />

      {/* Active Accent Bar */}
      {/* {isActive && (
        <div
          className="absolute left-0 top-4 bottom-4 md:top-6 md:bottom-6 w-[2px] md:w-[3px] rounded-full"
          style={{ backgroundColor: "#ffffff" }}
        />
      )} */}

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        {/* <div className="flex justify-between items-start mb-3 md:mb-5">
          <p className="text-gray-100 text-lg md:text-xl font-semibold max-w-[85%]">
            {project.title}
          </p>
          <ArrowUpRight
            className="size-5 md:size-7 flex-shrink-0"
            style={{ color: project.color }}
          />
        </div> */}

        {/* Image */}
        <div className="group aspect-[16/9] bg-black/40 rounded-md md:rounded-lg overflow-hidden relative">
          <Image
            src={project.imgSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top rounded-md md:rounded-lg transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
            priority={isActive}
          />

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* CTA - Visible on mobile, hover on desktop */}
          {/* <div className={clsx(
            "absolute bottom-3 right-3 md:bottom-4 md:right-4 transition-all duration-300",
            isMobile ? "opacity-100" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          )}>
            <div
              className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm backdrop-blur-md"
              style={{
                backgroundColor: `${project.color}22`,
                color: project.color,
              }}
            >
              View <ArrowUpRight className="size-3 md:size-4" />
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN SECTION ---------------- */

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isMobile, setIsMobile] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for scroll-based activation
  useEffect(() => {
    if (isMobile) {
      // On mobile, use simpler threshold for better performance
      const observer = new IntersectionObserver(
        (entries) => {
          const mostVisible = entries.reduce(
            (max, entry) =>
              entry.intersectionRatio > max.intersectionRatio ? entry : max,
            entries[0]
          );

          if (mostVisible?.isIntersecting && mostVisible.intersectionRatio > 0.5) {
            const projectId = Number(mostVisible.target.getAttribute("data-id"));
            const project = projects.find((p) => p.id === projectId);

            if (project && project.id !== activeProject.id) {
              setActiveProject(project);
            }
          }
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "-20% 0px -20% 0px"
        }
      );

      projectRefs.current.forEach((ref) => ref && observer.observe(ref));
      return () => observer.disconnect();
    } else {
      // Desktop: original fine-grained observation
      const observer = new IntersectionObserver(
        (entries) => {
          const mostVisible = entries.reduce(
            (max, entry) =>
              entry.intersectionRatio > max.intersectionRatio ? entry : max,
            entries[0]
          );

          if (mostVisible?.isIntersecting) {
            const projectId = Number(mostVisible.target.getAttribute("data-id"));
            const project = projects.find((p) => p.id === projectId);

            if (project && project.id !== activeProject.id) {
              setActiveProject(project);
            }
          }
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
      );

      projectRefs.current.forEach((ref) => ref && observer.observe(ref));
      return () => observer.disconnect();
    }
  }, [activeProject.id, isMobile]);

  const handleCardClick = (project: Project) => {
    if (isMobile) {
      setActiveProject(project);
      // Smooth scroll to details on mobile
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="text-white px-4 md:px-0">
      {/* Heading */}
      <div className="flex justify-center items-center mb-12 md:mb-20">
        <WavyText
          text="Projects"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider"
        />
      </div>

      <div className="container mx-auto">
        {/* Mobile Layout: Stack vertically */}
        {isMobile ? (
          <div className="space-y-6">
            {/* Cards */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => { projectRefs.current[index] = el; }}
                  data-id={project.id}
                >
                  <ProjectCard
                    project={project}
                    isActive={activeProject.id === project.id}
                    onClick={() => handleCardClick(project)}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>

            {/* Sticky Details at Bottom */}
            <div
              ref={detailsRef}
              className="sticky bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 p-6 rounded-t-2xl shadow-2xl"
              style={{
                maxHeight: '40vh',
                overflowY: 'auto'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <h2
                    className="text-2xl font-bold mb-3"
                 
                  >
                    {activeProject.title}
                  </h2>
                  <div
                    className="text-gray-300 text-sm leading-relaxed [&_p]:mb-2 [&_ul]:mt-2 [&_ul]:pl-0 [&_ul]:ml-0 [&_li]:list-disc [&_li]:list-inside [&_li]:text-sm"
                    dangerouslySetInnerHTML={{ __html: activeProject.description }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Desktop Layout: Original two-column */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 relative">
            {/* LEFT: Cards */}
            <div className="space-y-24 pb-[50vh]">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => { projectRefs.current[index] = el; }}
                  // ref={(el) => (projectRefs.current[index] = el)}
                  data-id={project.id}
                >
                  <ProjectCard
                    project={project}
                    isActive={activeProject.id === project.id}
                    isMobile={false}
                  />
                </div>
              ))}
            </div>

            {/* RIGHT: Sticky Details */}
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
               
                    >
                      {activeProject.title}
                    </h2>
                    <div
                      className="text-gray-300 mb-8 leading-relaxed [&_p]:mb-3 [&_ul]:mt-2 [&_ul]:pl-0 [&_ul]:ml-0 [&_li]:list-disc [&_li]:list-inside"
                      dangerouslySetInnerHTML={{ __html: activeProject.description }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
