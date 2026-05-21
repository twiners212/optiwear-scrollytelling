"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

const SECTIONS = [
  { id: "section-intro", label: "Intro" },
  { id: "section-1", label: "Titanium Skeleton" },
  { id: "section-2", label: "Sapphire Crystal" },
  { id: "section-3", label: "Heritage" },
];

export function DotNavigation() {
  const [activeId, setActiveId] = useState<string>("section-intro");

  useEffect(() => {
    // Use GSAP ScrollTrigger to detect active section
    // seamlessly syncing with the existing scrollytelling experience
    const triggers: ScrollTrigger[] = [];

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const st = ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveId(id);
            }
          },
        });
        triggers.push(st);
      }
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use GSAP for buttery smooth cinematic scrolling
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-6">
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            aria-label={`Scroll to ${label}`}
            className="group relative flex items-center justify-center p-2 outline-none"
          >
            {/* The Cinematic Dot */}
            <div
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-700",
                isActive 
                  ? "bg-on-primary scale-[2] opacity-100 shadow-[0_0_12px_rgba(255,255,255,0.6)]" 
                  : "bg-on-primary/30 scale-100 opacity-50 group-hover:opacity-100 group-hover:scale-125 group-hover:bg-on-primary/60"
              )}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            />
            {/* Tooltip / Label */}
            <span
              className={cn(
                "absolute right-full mr-4 text-xs font-label-sm uppercase tracking-widest text-on-primary/90 whitespace-nowrap transition-all duration-500 pointer-events-none drop-shadow-md",
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 group-hover:opacity-70 group-hover:translate-x-2"
              )}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
