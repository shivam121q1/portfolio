"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { WavyText } from "../Effect/WavyText";

type TimelineItem = {
    range: string;
    title: string;
    org: string;
    meta?: string;
    desc?: string;
    bullets?: string[];
};

const education: TimelineItem[] = [
    {
        range: "2024",
        org: "Symbiosis Institute of Computer Studies and Research, Pune",
        title: "Bachelor of Computer Application",
        meta: "CGPA: 8.17",
    },
    {
        range: "2021",
        org: "Rajmata Krishna Kumari Girl’s Public School, Jodhpur, Rajasthan",
        title: "Intermediate (12th CBSE Board)",
        meta: "88.8%",
    },
    {
        range: "2019",
        org: "Rajmata Krishna Kumari Girl’s Public School, Jodhpur, Rajasthan",
        title: "Matriculation (10th CBSE Board)",
        meta: "78.2%",
    },
];

const experience: TimelineItem[] = [
    {
        range: "Nov 2024 – Jun 2025",
        org: "Where U Elevate",
        title: "UI/UX Designer",
        meta: "Remote",
        // bullets: [
        //   "Led UI/UX design for web and mobile applications with a strong user-centric focus.",
        //   "Conducted user research, wireframing, prototyping, and usability testing.",
        //   "Collaborated closely with developers and stakeholders for smooth design handoff.",
        // ],
    },
    {
        range: "Sept 2024 – Nov 2024",
        org: "Where U Elevate",
        title: "UI/UX Designer Intern",
        meta: "Remote",
        // bullets: [
        //   "Designed wireframes, prototypes, and visual assets for digital platforms.",
        //   "Conducted UX research and analyzed user feedback to refine designs.",
        //   "Assisted senior designers in improving usability and interface consistency.",
        // ],
    },
];

function TimelineColumn({
    label,
    items,
}: {
    label: string;
    items: TimelineItem[];
}) {
    return (
        <div className="relative">
            {/* label */}
            {/* <div className="mb-6">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    {label}
                </p>
            </div> */}

            {/* vertical line */}
            <div className="absolute left-[26px] top-[54px] bottom-0 w-[2px] bg-white/10" />

            <div className="space-y-10">
                {items.map((item, idx) => (
                    <div key={idx} className="relative pl-20">
                        {/* year pill */}


                        {/* timeline dot */}
                        <div className="absolute left-[18px] top-[20px] z-10 h-5 w-5 rounded-full bg-[#071427] ring-2 ring-white">
                            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                        </div>

                        {/* card */}
                        <motion.div
                            key={idx}
                            whileHover={{ rotateX: 4, rotateY: -4 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className={clsx(
                                "w-full rounded-2xl border border-white/15 bg-white/5 p-6",
                                "shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-md",
                                "transition-all duration-500"
                            )}
                            style={{
                                background:
                                    "radial-gradient(ellipse at top, rgba(255,255,255,0.12), transparent 70%)",
                            }}
                        >
                            <div className="max-w-[520px]">
                                <div className="absolute top-2 right-2 border-white">
                                    <span className="inline-flex items-center justify-center border rounded-full px-2 py-1  md:px-5 md:py-2 text-xs md:text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                                        {item.range}
                                    </span>
                                </div>

                                <h3 className="text-base md:text-lg font-extrabold text-white mt-4 md:mt-0">
                                    {item.title}
                                </h3>
                                <div className="mt-1 flex flex-wrap  items-center gap-2">

                                    <p className="text-base md:text-lg  font-bold text-white/60">
                                        {item.org}
                                    </p>

                                </div>
                                <p>

                                    {item.meta ? (
                                        <span className="text-sm font-semibold text-white/60">
                                            {item.meta}
                                        </span>
                                    ) : null}
                                </p>

                                {item.desc ? (
                                    <p className="mt-2 text-sm leading-6 text-white/55">
                                        {item.desc}
                                    </p>
                                ) : null}

                                {item.bullets?.length ? (
                                    <ul className="mt-3 space-y-2 text-sm text-white/60">
                                        {item.bullets.map((b, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-white/40" />
                                                <span className="leading-6">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function EducationExperienceTimeline() {
    return (
        <section className="w-full py-16">
            <div className="flex justify-center items-center mb-20 z-10 text-white">
                <WavyText text="Education & Work" className="text-3xl md:text-5xl font-bold tracking-wide" />
            </div>
            <div className="mx-auto w-full max-w-8xl px-4">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    <TimelineColumn label="EDUCATION" items={education} />
                    <TimelineColumn label="EXPERIENCE" items={experience} />

                </div>
            </div>
        </section>
    );
}
