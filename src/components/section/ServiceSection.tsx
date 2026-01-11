"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { WavyText } from "../Effect/WavyText";
import { services } from "@/constants/data";

/* ---------------- SERVICE CARD ---------------- */

type Service = {
  title: string;
  description: string;
  icon?: React.ElementType;
  color?: string;
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCardNew({ service, index }: ServiceCardProps) {
  const Icon = service?.icon;
  return (
    <motion.div
      whileHover={{ rotateX: 4, rotateY: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={clsx(
        "relative w-full max-w-md p-5 md:p-6 rounded-xl md:rounded-2xl border overflow-hidden transition-all duration-500",

      )}
      style={{
        background: `radial-gradient(ellipse at top, #ffffff25, transparent 70%)`,
        borderColor: `#ffffff80`
      }}
    >
      {/* Soft Glow */}
   

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary-foreground/10 text-gray-900 ">
              {Icon ? <Icon className="size-6 text-white" /> : <span className="font-bold">{index + 1}</span>}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-primary-foreground">
              {service.title}
            </h3>
          </div>

          {/* <ArrowUpRight className="size-5 md:size-6 text-gray-900" /> */}
        </div>

        {/* Desc */}
        <p className="text-primary-foreground text-sm md:text-base">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------------- SECTION ---------------- */

export default function ServicesSection() {
  return (
    <section className="py-12 px-4">
      <div className="flex justify-center items-center mb-20 z-10 text-white">
        <WavyText text="Services" className="text-5xl font-bold tracking-wide" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCardNew key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
