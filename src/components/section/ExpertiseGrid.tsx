"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import clsx from "clsx";

import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
    SiFigma,
    SiMiro,
    SiCanva,
    SiSketch,
    SiAdobeillustrator,
    SiJira,
    SiWebflow,
} from "react-icons/si";

import GlowCard from "../UI-component/GlowCard";
import { WavyText } from "../Effect/WavyText";

interface Stack {
    name: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
}

const STACKS: Stack[] = [
    { name: "Figma", Icon: SiFigma, color: "text-pink-500" },
    { name: "Miro", Icon: SiMiro, color: "text-yellow-400" },
    { name: "Canva", Icon: SiCanva, color: "text-cyan-400" },
    { name: "Sketch", Icon: SiSketch, color: "text-orange-400" },
    { name: "Adobe Illustrator", Icon: SiAdobeillustrator, color: "text-orange-500" },
    { name: "Jira", Icon: SiJira, color: "text-blue-500" },
    { name: "Webflow", Icon: SiWebflow, color: "text-indigo-400" },
    { name: "HTML", Icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS", Icon: FaCss3Alt, color: "text-blue-600" },
    { name: "JavaScript", Icon: FaJs, color: "text-yellow-300" },
];

export default function ExpertiseGrid() {
    const autoScroll = useRef(
        AutoScroll({
            speed: 1.2, // ✅ increase for faster flow
            stopOnInteraction: false,
            stopOnMouseEnter: true, // ✅ pause on hover (optional)
        })
    );

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            dragFree: true, // ✅ smooth non-snapping drag
            skipSnaps: true, // ✅ important for continuous feel
        },
        [autoScroll.current]
    );

    return (
        <section className="relative">
            <div className="text-center mb-10">
                <WavyText text="Expertise" className="text-5xl font-bold tracking-wide" />
            </div>

            <div className="max-w-8xl mx-auto px-6">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-2">
                        {/* ✅ Duplicate items for smoother loop */}
                        {[...STACKS, ...STACKS].map(({ name, Icon, color }, idx) => (
                            <div
                                key={`${name}-${idx}`}
                                className="flex-[0_0_40%] sm:flex-[0_0_45%] md:flex-[0_0_20%] lg:flex-[0_0_15%]"
                            >
                                <GlowCard>
                                    <Icon
                                        size={42}
                                        className={clsx(
                                            "mb-4 transition-transform duration-300 group-hover:scale-110",
                                            color
                                        )}
                                    />
                                    <span className="text-sm text-gray-200 font-medium">{name}</span>
                                </GlowCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
