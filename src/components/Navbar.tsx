"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom hook to track scroll position and update active link
const useScrollspy = (ids: string[], options: IntersectionObserverInit) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, options]);

  return activeId;
};

export function Navbar() {
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Work" },
    { id: "services", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const activeId = useScrollspy(
    navLinks.map((link) => link.id),
    { rootMargin: "-50% 0px -50% 0px" }
  );

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center justify-center bg-black/50 backdrop-blur-lg rounded-full px-8 py-2 shadow-lg border border-white/10">
        <ul className="flex items-center gap-x-10">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <button
                onClick={() => handleScroll(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 relative ${
                  activeId === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
              {activeId === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-purple-600/50 rounded-full"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
