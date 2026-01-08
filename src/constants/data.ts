// app/data.ts

import projectImage from "@/assets/projectImages/ProjectImage.jpeg"
import { StaticImageData } from "next/image";
import Icon from "@/assets/serviceIcon/UIIcon.svg"
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
    imgSrc: projectImage,
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
    imgSrc: projectImage,
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
    imgSrc: projectImage,
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
    imgSrc: projectImage,
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
    imgSrc: projectImage,
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
    imgSrc: projectImage,
    color: "#9D3A6C",
  },
];


export const services = [
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
    img: Icon,
    title: "Websites and Applications Design",
    description:
      "Creating modern, responsive websites and applications that work seamlessly.",

  },
];