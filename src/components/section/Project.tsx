"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { projects, Project } from "@/constants/data";
import Image from "next/image";
import { WavyText } from "../Effect/WavyText";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.6
        );

        if (visible && visible.target instanceof HTMLDivElement) {
          const projectId = Number(visible.target.getAttribute("data-id"));
          const project = projects.find((p) => p.id === projectId);

          if (project && project.id !== activeProject.id) {
            setActiveProject(project);
            console.log("Active project changed:", project.title);
          }
        }
      },
      { threshold: 0.6 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeProject.id]);

  return (
    <div className="text-white">
      {/* Section heading */}
      <div className="flex justify-center items-center mb-12">
        <WavyText
          text="Projects"
          className="text-5xl font-bold tracking-wide"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex relative">
          {/* LEFT SCROLLABLE COLUMN */}
          <div className="w-1/2 pr-8 pb-[50vh] min-h-screen space-y-12 overflow-y-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                data-id={project.id}
                className="p-4"
              >
                <Card className="bg-[#111] border-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <CardContent className="p-1">
                    <p className="text-gray-400 text-lg mb-4">
                      {project.title}
                    </p>
                    <div className="aspect-video bg-gray-900 rounded-md relative">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover rounded-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* RIGHT STICKY COLUMN */}
          <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h2 className="text-4xl font-bold mb-2 text-blue-400">
                    {activeProject.title}
                  </h2>
                  <p className="text-gray-300 mb-8">
                    {activeProject.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
