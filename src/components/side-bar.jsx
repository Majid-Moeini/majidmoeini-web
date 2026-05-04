"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback, useMemo } from "react";

const SideBar = ({ sections = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // اسکرول نرم
  const handleScroll = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!sections.length) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let currentActive = null;

        entries.forEach((entry) => {
          if (
            entry.intersectionRatio > 0.6 &&
            entry.intersectionRatio > maxRatio
          ) {
            maxRatio = entry.intersectionRatio;
            currentActive = entry.target.id;
          }
        });

        if (currentActive) {
          setActiveSection(currentActive);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    elements.forEach((el) => observer.observe(el));

    // بررسی اولیه برای رندر اول و رفرش
    const handleInitialCheck = () => {
      let maxVisible = 0;
      let current = null;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        const ratio = visibleHeight / viewportHeight;

        if (ratio > 0.6 && ratio > maxVisible) {
          maxVisible = ratio;
          current = el.id;
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    handleInitialCheck();

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections]);

  const containerClass = useMemo(
    () =>
      `
      fixed z-20 left-6 md:left-10
      flex flex-col items-center
      bg-gray-700/90 md:bg-gray-700/40
      border border-gray-300
      md:rounded-3xl rounded-2xl shadow-xl
      transition-transform duration-300
      ${isOpen ? "-translate-y-6" : "-translate-y-50 md:translate-y-[35vh]"}
      `,
    [isOpen],
  );

  return (
    <nav className={containerClass} aria-label="Section Navigation">
      <ul className="w-full p-2 mt-8 md:mt-0">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              <button
                onClick={() => handleScroll(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`
                  w-full py-2 px-3 text-sm text-center
                  md:rounded-3xl rounded-xl transition-colors duration-200
                  ${
                    isActive
                      ? "text-white font-semibold border border-white"
                      : "text-gray-400 hover:text-gray-100"
                  }
                `}
              >
                {section.title}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Toggle (mobile only) */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden p-2"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        <ChevronRight
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-270" : "rotate-90"
          }`}
        />
      </button>
    </nav>
  );
};

export default SideBar;
