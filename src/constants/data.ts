// app/data.ts

import projectImage from "@/assets/projectImages/ProjectImage.jpeg"
import { StaticImageData } from "next/image";
import Icon from "@/assets/serviceIcon/UIIcon.svg"
export interface Project {
    id: number;
    title: string;

    description: string;

    imgSrc: StaticImageData;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Healthcare Course Providing Website",

        description: "A user-centric healthcare education platform designed to provide seamless course discovery, enrollment, and learning experiences, with personalized dashboards and rich content like blogs, podcasts, and trainer profiles — all crafted through a human-centered UI/UX approach.",

        imgSrc: projectImage,
    },
    {
        id: 2,
        title: "Havmi Wellness",

        description: " Havmi Wellness is an e-commerce website designed with a user-centric approach, featuring clean layouts, earthy color palettes, and high-quality product imagery to reflect the brand’s Ayurvedic roots. The site offers intuitive navigation, mobile-first responsiveness, and seamless product discovery to enhance the shopping experience. From wireframing to high-fidelity mockups, the design aligns with the brand’s ethos of natural, chemical-free wellness while ensuring accessibility and visual consistency across devices.",

        imgSrc: projectImage,
    },
    {
        id: 3,
        title: "Assessment Platform",

        description: "Designed a dynamic assessment platform where administrators and educators can build tests from scratch—selecting question types like multiple-choice, coding challenges, and subjective, and tailoring them with custom logic and scoring. The design emphasizes clear workflows for creating assessments, robust real-time previews of candidate experience, and seamless configuration of proctoring and result analytics. From wireframes through high-fidelity mockups, the UI balances flexibility with clarity, ensuring users can craft, launch, and manage assessments confidently across devices.",

        imgSrc: projectImage,
    },
    {
        id: 4,
        title: "Rate In - Job Posting Platform",

        description: "Rate In is a comprehensive hiring platform where users can post jobs, search and invite candidates, and upload resumes from multiple sources (PDF, Excel, ZIP files, etc.). The design emphasizes intuitive workflows for creating job listings, advanced candidate search with filters, seamless invitation flows, and efficient resume management. From wireframes to high-fidelity mockups, the UI balances powerful functionality with clean design, ensuring recruitment admins can act swiftly and with clarity—on both desktop and mobile.",

        imgSrc: projectImage,
    },
    {
        id: 5,
        title: "Credibility Alliance",

        description: "Credibility Alliance is a non-profit consortium dedicated to elevating governance and transparency standards within India’s voluntary sector. I designed the website with a clear, trust-building layout, using a professional color palette and precise typography to reinforce credibility. The site features intuitive navigation, clean content hierarchy, and responsive behavior across devices—ensuring accessibility and clarity. From initial wireframes to high-fidelity designs, the UI brings the organization’s mission-driven ethos to life while maintaining consistency and usability.",

        imgSrc: projectImage,
    },
    {
        id: 6,
        title: "Sach  India (Society for Action in Community Health)",

        description: "Sach is a non-profit organization that empowers underserved communities across India through holistic interventions in healthcare, rural development, sanitation, education, and disaster relief. I designed the website to reflect SACH’s mission such as delivering mobile health units, school sanitation projects, and community resilience programs with clarity and warmth. The UI features a streamlined information hierarchy, compassionate imagery, and intuitive navigation to guide donors, beneficiaries, and volunteers effortlessly. Built with accessibility and responsiveness in mind, the design reinforces trust, aligning with SACH’s vision of creating self-reliant communities while ensuring usability across devices.",

        imgSrc: projectImage,
    }
];

export  const services = [
    {
      img: Icon,
      title: "UI/UX Design",
      description:
        "Crafting smooth, user-friendly experiences that feel simple and intuitive.",
      price: 100,
    },
    {
      img: Icon,
      title: "Logo Design",
      description:
        "Designing unique and memorable logos that bring your brand to life.",
      price: 120,
    },
    {
      img:Icon,
      title: "Websites and Applications Design",
      description:
        "Creating modern, responsive websites and applications that work seamlessly.",
    
    },
  ];