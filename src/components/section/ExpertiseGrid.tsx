"use client";

import React from "react";
import clsx from "clsx";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
} from "react-icons/fa";

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

const STACKS = [
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
    return (
        <section className="relative ">
            <div className="text-center mb-10">
                <WavyText
                    text="Expertise"
                    className="text-5xl font-bold tracking-wide"
                ></WavyText>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
                {STACKS.map(({ name, Icon, color }) => (
                    <GlowCard key={name}>
                        <Icon
                            size={42}
                            className={clsx(
                                "mb-4 transition-transform duration-300 group-hover:scale-110",
                                color
                            )}
                        />
                        <span className="text-sm text-gray-200 font-medium">
                            {name}
                        </span>
                    </GlowCard>
                ))}
            </div>
        </section>
    );
}
