// app/projects/page.tsx (or your section component)
import { ProjectCard } from "../UI-component/ProjectCard";
import image from "../../assets/Neeyati.jpg"

const projects = [
  {
    title: "Course Providing Website",
    description:
      "A user-centric healthcare education platform designed to provide seamless course discovery, enrollment, and learning experiences, with personalized dashboards and rich content.",
    imageSrc: image,
    href: "/projects/course-site",
    overlayBadge: "Case Study",
    stats: [
      { label: "Pages", value: "25+" },
      { label: "Usability", value: "A/B" },
      { label: "Time", value: "6w" },
    ],
  },
  {
    title: "Course Providing Website",
    description:
      "A user-centric healthcare education platform designed to provide seamless course discovery, enrollment, and learning experiences, with personalized dashboards and rich content.",
    imageSrc: image,
    href: "/projects/course-site",
    overlayBadge: "Case Study",
    stats: [
      { label: "Pages", value: "25+" },
      { label: "Usability", value: "A/B" },
      { label: "Time", value: "6w" },
    ],
  },
  {
    title: "Course Providing Website",
    description:
      "A user-centric healthcare education platform designed to provide seamless course discovery, enrollment, and learning experiences, with personalized dashboards and rich content.",
    imageSrc: image,
    href: "/projects/course-site",
    overlayBadge: "Case Study",
    stats: [
      { label: "Pages", value: "25+" },
      { label: "Usability", value: "A/B" },
      { label: "Time", value: "6w" },
    ],
  },
  // duplicate or add more
];

export default function ProjectSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-10">
      <h2 className="text-center text-xl md:text-2xl font-semibold">Some Recent Projects</h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-y-10 justify-items-center">
        {projects.map((p,index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}
