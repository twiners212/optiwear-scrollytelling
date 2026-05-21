"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnimatedText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      once: false,
      onEnter: () => {
        gsap.to(containerRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
      onLeaveBack: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
          duration: 0.8,
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    });

    // Initial state
    gsap.set(containerRef.current, { opacity: 0, y: 40, filter: "blur(10px)" });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("will-change-[opacity,transform,filter]", className)}>
      {children}
    </div>
  );
}
