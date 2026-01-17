"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: "about", label: "About" },
    { id: "educationandwork", label: "Education & Work" },
    { id: "projects", label: "Projects" },
    { id: "expertise", label: "Expertise" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const activeId = useScrollspy(
    navLinks.map((link) => link.id),
    { rootMargin: "-50% 0px -50% 0px" }
  );

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* DESKTOP NAV (Dark Pill) & MOBILE TOGGLE */}
      <header className="fixed top-4 right-0 left-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto">
          {/* Desktop Dark Pill */}
          <nav className="hidden md:flex items-center bg-zinc-900/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-2xl border border-white/10">
            <ul className="flex items-center gap-x-2">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  <button
                    onClick={() => handleScroll(link.id)}
                    className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 relative z-10 backdrop-blur-sm ${activeId === link.id
                      ? "text-white bg-white/20 border border-white/30 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                  </button>
                  {activeId === link.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-xl shadow-xl border border-white/30 -z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle Button (Top Right) */}
          <div className="md:hidden fixed top-4 right-4 z-50">
            <button
              onClick={() => setIsOpen(true)}
              className="p-3 bg-zinc-900/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 text-gray-200 hover:bg-white/10 transition-all duration-300"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE RIGHT DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Dark Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-zinc-900/95 backdrop-blur-2xl shadow-2xl z-50 md:hidden border-l border-white/10"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pt-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-300" />
                  </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-4 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                    >
                      <button
                        onClick={() => handleScroll(link.id)}
                        className={`
                          w-full text-left text-xl md:text-2xl font-medium py-4 px-4 rounded-2xl transition-all duration-300 backdrop-blur-md border
                          hover:border-white/30 hover:shadow-xl hover:scale-[1.02]
                          ${activeId === link.id
                            ? "bg-gradient-to-r from-white/20 to-transparent text-white border-white/40 shadow-2xl shadow-white/10"
                            : "text-gray-300 border-white/10 bg-white/5 hover:bg-white/10"
                          }
                        `}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>© 2026 Your Name</p>
                    <p className="text-gray-500">Made with ❤️ in India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
