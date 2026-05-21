"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "text" | "image";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "text",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isImage = variant === "image";

    if (isImage) {
      gsap.set(el, { opacity: 0, clipPath: "inset(100% 0 0 0)" });
    } else {
      gsap.set(el, { opacity: 0, y: 20 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    if (isImage) {
      tl.to(el, {
        opacity: 1,
        clipPath: "inset(0 0 0 0)",
        duration: 1.2,
        ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        delay: delay / 1000,
      });
    } else {
      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: delay / 1000,
      });
    }

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [variant, delay]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}
