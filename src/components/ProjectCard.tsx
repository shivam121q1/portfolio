"use client";

import { Project } from "@/constants/data";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-[#111] to-black border border-gray-800 shadow-xl transition-all duration-300 hover:border-blue-500/50">
      {/* Title and Arrow */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-blue-300 text-xl font-medium">{project.title}</p>
        <ArrowUpRight className="text-gray-400 size-7 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300" />
      </div>

      {/* Image Container */}
      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative shadow-inner">
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          className="object-cover object-top rounded-lg transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
        />
        {/* Subtle inner shadow/vignette for depth */}
        <div className="absolute inset-0 rounded-lg shadow-[inset_0_-40px_40px_-20px_rgba(0,0,0,0.7)]"></div>
      </div>
    </div>
  );
}
