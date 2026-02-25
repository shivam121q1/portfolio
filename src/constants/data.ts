// app/data.ts

import projectImage from "@/assets/projectImages/ProjectImage.jpeg"
import { StaticImageData } from "next/image";
import { GraduationCap, Stethoscope } from "lucide-react";
import hcatImage from "@/assets/projectImages/Hcat.jpeg"
import SachImage from "@/assets/projectImages/Sach.jpeg"
import ratein from "@/assets/projectImages/ratein.jpeg"
import asses from "@/assets/projectImages/asses.jpeg"

import ceredibiltyAlliance from "@/assets/projectImages/Ceredibility alliance.jpeg"
import havmi from "@/assets/projectImages/havmi.jpeg"
import Icon from "@/assets/serviceIcon/UIIcon.svg"
import { Palette, PenTool, LayoutDashboard } from "lucide-react";

import havmiwireframe from "@/assets/havmi/Desktop - 61.png"
import havmiprototype from "@/assets/havmi/Desktop - 2 (2).png"



import wireframe1 from "@/assets/projectImages/Desktop - 2 (1) (1).png";
import prototype1 from "@/assets/projectImages/Desktop - 4.png";
export interface Project {
  id: number;
  title: string;

  description: string;

  imgSrc: StaticImageData;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Healthcare Course Providing Website",
    description: `
      <p>
        A <strong>user-centric healthcare education platform</strong> designed to provide
        seamless course discovery, enrollment, and learning experiences.
      </p>
      <ul>
        <li>Personalized dashboards</li>
        <li>Blogs, podcasts, and trainer profiles</li>
        <li>Human-centered UI/UX approach</li>
      </ul>
    `,
    imgSrc: hcatImage,
    color: "#9D3A6C",
  },
  {
    id: 2,
    title: "Havmi Wellness",
    description: `
      <p>
        <strong>Havmi Wellness</strong> is an e-commerce website designed with a
        user-centric approach, reflecting the brand’s Ayurvedic roots.
      </p>
      <ul>
        <li>Clean layouts with earthy color palettes</li>
        <li>High-quality product imagery</li>
        <li>Mobile-first responsive design</li>
        <li>Seamless product discovery</li>
      </ul>
    `,
    imgSrc: havmi,
    color: "#9D3A6C",
  },
  {
    id: 3,
    title: "Assessment Platform",
    description: `
      <p>
        A <strong>dynamic assessment platform</strong> enabling administrators and
        educators to build tests from scratch with flexible logic.
      </p>
      <ul>
        <li>Multiple question types (MCQ, coding, subjective)</li>
        <li>Real-time candidate preview</li>
        <li>Proctoring and result analytics</li>
        <li>Clear workflows across devices</li>
      </ul>
    `,
    imgSrc: asses,
    color: "#9D3A6C",
  },
  {
    id: 4,
    title: "Rate In – Job Posting Platform",
    description: `
      <p>
        <strong>Rate In</strong> is a comprehensive hiring platform focused on
        speed, clarity, and usability.
      </p>
      <ul>
        <li>Create and manage job listings</li>
        <li>Advanced candidate search and filters</li>
        <li>Resume uploads (PDF, Excel, ZIP)</li>
        <li>Optimized for desktop and mobile</li>
      </ul>
    `,
    imgSrc: ratein,
    color: "#9D3A6C",
  },
  {
    id: 5,
    title: "Credibility Alliance",
    description: `
      <p>
        <strong>Credibility Alliance</strong> is a non-profit consortium promoting
        governance and transparency in India’s voluntary sector.
      </p>
      <ul>
        <li>Trust-building layout and typography</li>
        <li>Clear content hierarchy</li>
        <li>Accessible and responsive design</li>
        <li>Mission-driven visual identity</li>
      </ul>
    `,
    imgSrc: ceredibiltyAlliance,
    color: "#9D3A6C",
  },
  {
    id: 6,
    title: "SACH India (Society for Action in Community Health)",
    description: `
      <p>
        <strong>SACH</strong> empowers underserved communities through healthcare,
        education, sanitation, and disaster relief initiatives.
      </p>
      <ul>
        <li>Compassionate imagery and tone</li>
        <li>Clear navigation for donors and volunteers</li>
        <li>Accessible and responsive UI</li>
        <li>Aligned with community-first mission</li>
      </ul>
    `,
    imgSrc: SachImage,
    color: "#9D3A6C",
  },
];




export const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting smooth, user-friendly experiences that feel simple and intuitive.",
    price: 100,
    color: "#22c55e",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Designing unique and memorable logos that bring your brand to life.",
    price: 120,
    color: "#ec4899",
  },
  {
    icon: LayoutDashboard,
    title: "Websites and Applications Design",
    description: "Creating modern, responsive websites and applications that work seamlessly.",
    color: "#3b82f6",
  },
];



export const targetUsers = [
  {
    // icon: GraduationCap,
    title: "Students",

    description:
      "The platform serves students and aspiring healthcare professionals seeking UK-recognized certifications and better career opportunities in the healthcare sector. It supports them with structured training programs and guidance on NHS recruitment, professional registration, and interview preparation. Through a personalized dashboard, students can access courses, join live sessions, view schedules, and download learning resources, ensuring a smooth and supportive learning experience.",

    color: "#22c55e",
  },
  {
    // icon: Stethoscope,
    title: "Trainers",

    description:
      "The platform also supports healthcare trainers who deliver both live and online sessions. Trainers can manage their sessions, upload materials, share resources, and maintain their profiles within a structured system. The interface is designed to simplify content management and enhance interaction with learners, ensuring an efficient and engaging training experience.",

    color: "#3b82f6",
  },
];


export const Indiviualprojects = [
  {
    id: 1,
    title: "Healthcare Career and Training UK",
    overview: `
Healthcare Career and Training UK previously had no online presence.
This project involved designing and launching a completely new website
from the ground up, aimed at delivering healthcare education and training
in a structured and accessible manner.

Once registered, users gain access to a personalized dashboard.
Students can view enrolled courses, access session schedules, join live
lectures, and download learning resources. Trainers can manage their
sessions, upload materials, and maintain their profiles.

The system also supports automated and customized email communication
for key user actions such as enrollment confirmations and session
reminders.
    `,
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam", "Jira", "Canva"],
    duration: "1 Month",
    targetUsers: [
      {
        // icon: GraduationCap,
        title: "Students",

        description:
          "The platform serves students and aspiring healthcare professionals seeking UK-recognized certifications and better career opportunities in the healthcare sector. It supports them with structured training programs and guidance on NHS recruitment, professional registration, and interview preparation. Through a personalized dashboard, students can access courses, join live sessions, view schedules, and download learning resources, ensuring a smooth and supportive learning experience.",

        color: "#22c55e",
      },
      {
        // icon: Stethoscope,
        title: "Trainers",

        description:
          "The platform also supports healthcare trainers who deliver both live and online sessions. Trainers can manage their sessions, upload materials, share resources, and maintain their profiles within a structured system. The interface is designed to simplify content management and enhance interaction with learners, ensuring an efficient and engaging training experience.",

        color: "#3b82f6",
      },
    ],
    wireframeImage: wireframe1,
    prototypeImage: prototype1,
  },
  {
    id: 2,
    title: "Havmi Welness",
    overview: `
The Havmi Wellness website was designed and developed for a Kerala-based Ayurvedic products manufacturing company to create a modern digital platform for showcasing and selling different products. The project focused on building a clean, user-friendly e-commerce experience that reflects the brand’s authentic Ayurvedic identity while ensuring smooth product discovery and purchasing. Users can explore a wide range of products across categories such as wellness healthcare, hair care, and grains & spices through structured navigation and visually engaging product presentation.
The design emphasizes simplicity, clarity, and accessibility to enhance engagement and reduce friction in the buying journey. Key UX features include intuitive category navigation, prominent best-seller sections, and clearly displayed product information such as pricing and variants to support quick decision-making. The layout follows a clear visual hierarchy, highlighting essential elements like product listings and call-to-action buttons (Add to Cart / Buy Now). 
A major focus of the project was creating a seamless and transparent purchasing experience. The e-commerce flow enables users to browse products, view details, select variants, manage their cart, and complete checkout with minimal effort. Features like structured product cards, quick category access, and an optimized interface support smooth interaction across the customer journey.
    `,
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam", "Jira", "Canva"],
    duration: "1 Month",
    targetUsers: [
      {
        // icon: GraduationCap,
        title: "Customers",

        description:
          "The website targets health-conscious users looking for authentic Ayurvedic products for wellness, hair care, and daily use. It is designed to help users easily discover products and complete purchases through a simple and intuitive shopping experience.",

        color: "#22c55e",
      },
      {
        // icon: Stethoscope,
        title: "Retail & Business Buyers",

        description:
          "The platform also serves retailers and distributors who want to explore and purchase Ayurvedic products efficiently through structured product information and smooth navigation.",

        color: "#3b82f6",
      },
    ],
    wireframeImage: havmiwireframe,
    prototypeImage: havmiprototype,
  }

  // You can add more projects here
];