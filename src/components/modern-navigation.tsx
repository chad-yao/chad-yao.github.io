"use client";

import { useState, useEffect } from "react";
import { Section } from "@/data/section-order";

interface ModernNavigationProps {
  sections: Section[];
}

// Modern section display with icons and names
const sectionInfo = {
  [Section.News]: { 
    name: "News", 
    abbr: "NEWS",
    icon: "📰",
    color: "from-blue-500 to-cyan-500"
  },
  [Section.Education]: { 
    name: "Education", 
    abbr: "EDU",
    icon: "🎓",
    color: "from-purple-500 to-pink-500"
  },
  [Section.Publication]: { 
    name: "Publications", 
    abbr: "PUB",
    icon: "📚",
    color: "from-green-500 to-emerald-500"
  },
  [Section.Experience]: { 
    name: "Experience", 
    abbr: "EXP",
    icon: "💼",
    color: "from-orange-500 to-red-500"
  },
  [Section.Portfolio]: { 
    name: "Portfolio", 
    abbr: "PORT",
    icon: "🚀",
    color: "from-indigo-500 to-purple-500"
  },
};

export function ModernNavigation({ sections }: ModernNavigationProps) {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Reduced offset
      
      const sectionElements = sections.map(section => {
        const element = document.querySelector(`[data-section="${section}"]`);
        return {
          section,
          element,
          top: element ? element.getBoundingClientRect().top + window.scrollY : 0,
          bottom: element ? element.getBoundingClientRect().bottom + window.scrollY : 0,
        };
      }).filter(item => item.element);

      // Find the section that is currently in view with more lenient detection
      let currentSection: Section | null = null;
      
      // First, try to find a section that contains the scroll position
      for (const item of sectionElements) {
        if (scrollPosition >= item.top && scrollPosition <= item.bottom) {
          currentSection = item.section;
          break;
        }
      }

      // If no section contains the scroll position, find the one that's closest to the top of viewport
      if (!currentSection) {
        let bestSection = sectionElements[0];
        let minDistance = Math.abs(scrollPosition - bestSection.top);
        
        for (const item of sectionElements) {
          // Check if this section is at least partially visible
          const isVisible = item.top < scrollPosition + window.innerHeight && item.bottom > scrollPosition;
          
          if (isVisible) {
            const distance = Math.abs(scrollPosition - item.top);
            if (distance < minDistance) {
              minDistance = distance;
              bestSection = item;
            }
          }
        }
        currentSection = bestSection.section;
      }

      setActiveSection(currentSection);
    };

    // Show navigation after initial load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [sections]);

  const scrollToSection = (section: Section) => {
    const element = document.querySelector(`[data-section="${section}"]`);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const offsetTop = elementTop - 100; // Add some offset from the top
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-700 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
    } hidden lg:block`}>
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-neutral-700/50 shadow-2xl" />
        
        {/* Navigation items */}
        <div className="relative p-4 space-y-2">
          {sections.map((section, index) => {
            const info = sectionInfo[section];
            const isActive = activeSection === section;
            
            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`group relative w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-gradient-to-r " + info.color + " text-white shadow-lg scale-105" 
                    : "hover:bg-white/50 dark:hover:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className={`text-lg transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-105"
                }`}>
                  {info.icon}
                </div>
                
                {/* Text */}
                <div className="flex flex-col items-start">
                  <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? "text-white" : "text-neutral-700 dark:text-neutral-300"
                  }`}>
                    {info.abbr}
                  </span>
                  <span className={`text-xs opacity-70 transition-opacity duration-300 ${
                    isActive ? "text-white/80" : "text-neutral-500 dark:text-neutral-500"
                  }`}>
                    {info.name}
                  </span>
                </div>


              </button>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="absolute -left-2 top-0 bottom-0 w-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
            style={{
              height: activeSection ? `${((sections.indexOf(activeSection) + 1) / sections.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
}
