"use client"
import { ServiceCardNew } from "@/components/section/ServiceSection";
import { targetUsers } from "@/constants/data";
import React from "react";

import image from "@/assets/projectImages/Desktop - 2 (1) (1).png"
import image2 from "@/assets/projectImages/Desktop - 4.png"
import Image from "next/image";
import { ViewButton } from "@/components/UI-component/ViewButton";
import { useParams, useRouter } from "next/navigation";
import { Indiviualprojects as project } from "@/constants/data"

const page = () => {
    const route = useRouter();

    const params = useParams();
    const projectId = params.projectId;

    const activeProject = project.find((proj) => proj.id.toString() === projectId);

    if(!activeProject) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-semibold">Coming Soon</h2>
            </div>
        );
    }

    return (
        <div className="relative z-10">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24">
                <div className="flex justify-start items-center mb-10">
                    <ViewButton onClick={() => { route.back() }} content="Back" showArrow={false} />
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-5xl font-semibold text-center mb-16">
                    {activeProject?.title}
                </h2>

                {/* Project Overview */}
                <div className=" text-center md:text-left mb-20">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Project Overview
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-white/80">
                        {activeProject?.overview}
                    </p>
                </div>

                {/* Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
                    <div className="text-center md:text-left">
                        <p className="text-xl md:text-2xl font-bold mb-2">Role</p>
                        <p className="text-sm md:text-base text-white/80">
                            {activeProject?.role}
                        </p>
                    </div>

                    <div className="text-center md:text-left col-span-2">
                        <p className="text-xl md:text-2xl font-bold mb-3">Tools</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {activeProject?.tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="border border-white/20 rounded-full px-4 py-2 text-sm text-white/80"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <p className="text-xl md:text-2xl font-bold mb-2">Duration</p>
                        <p className="text-sm md:text-base text-white/80">
                            {activeProject?.duration}
                        </p>
                    </div>
                </div>

                <div className="my-10 ">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Project Overview
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 justify-items-center">

                        {activeProject?.targetUsers.map((service, index) => (
                            <ServiceCardNew key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
                <div className=" text-center md:text-left mb-20">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Wireframe
                    </h3>



                    <Image src={activeProject?.wireframeImage || ""} alt="Project Image" className="w-full h-auto" />
                </div>
                <div className=" text-center md:text-left mb-20">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Prototype
                    </h3>



                    <Image src={activeProject?.prototypeImage || ""} alt="Project Image" className="w-full h-auto" />
                </div>

            </section>
        </div>
    );
};

export default page;
