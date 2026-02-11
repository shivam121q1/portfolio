"use client"
import { ServiceCardNew } from "@/components/section/ServiceSection";
import { targetUsers } from "@/constants/data";
import React from "react";

import image from "@/assets/Desktop - 2.png"
import Image from "next/image";

const page = () => {
    return (
        <div className="relative z-10">
            <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 lg:py-24">

                {/* Heading */}
                <h2 className="text-2xl md:text-5xl font-semibold text-center mb-16">
                    Healthcare Career and Training UK
                </h2>

                {/* Project Overview */}
                <div className=" text-center md:text-left mb-20">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Project Overview
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-white/80">
                        Healthcare Career and Training UK previously had no online presence.
                        This project involved designing and launching a completely new website
                        from the ground up, aimed at delivering healthcare education and training
                        in a structured and accessible manner. The platform allows users to
                        browse and enroll in healthcare training courses based on their interests
                        and requirements.
                        <br /><br />
                        Once registered, users gain access to a personalized dashboard.
                        Students can view enrolled courses, access session schedules, join live
                        lectures, and download learning resources. Trainers can manage their
                        sessions, upload materials, and maintain their profiles.
                        <br /><br />
                        The system also supports automated and customized email communication
                        for key user actions such as enrollment confirmations and session
                        reminders, enhancing both user experience and operational efficiency.
                    </p>
                </div>

                {/* Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

                    {/* Role */}
                    <div className="text-center md:text-left">
                        <p className="text-xl md:text-2xl font-bold mb-2">
                            Role
                        </p>
                        <p className="text-sm md:text-base text-white/80 ">
                            UI/UX Designer
                        </p>
                    </div>

                    {/* Tools */}
                    <div className="text-center md:text-left col-span-2">
                        <p className="text-xl md:text-2xl font-bold mb-3 ">
                            Tools
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 ">
                            {["Figma", "FigJam", "Jira", "Canva"].map((tool, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center justify-center
                             border border-white/20 rounded-full
                             px-3 py-1 md:px-5 md:py-2
                             text-xs md:text-sm font-semibold 
                             backdrop-blur-md
                             shadow-[0_10px_25px_rgba(0,0,0,0.25)] text-white/80 "
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="text-center md:text-left">
                        <p className="text-xl md:text-2xl font-bold mb-2 ">
                            Duration
                        </p>
                        <p className="text-sm md:text-base text-white/80">
                            1 Month
                        </p>
                    </div>

                </div>

                <div className="my-10 ">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Project Overview
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 justify-items-center">

                        {targetUsers.map((service, index) => (
                            <ServiceCardNew key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
                <div>
                    <Image src={image} alt="Project Image" className="w-full h-auto rounded-lg shadow-lg" />
                </div>

            </section>
        </div>
    );
};

export default page;
