"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;
const currentFrame = (index: number) =>
  `/images/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function ScrollytellingSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= FRAME_COUNT) setImagesLoaded(true);
      };
      img.onerror = () => {
        // Image failed to load — continue silently
        loadedCount++;
        if (loadedCount >= FRAME_COUNT) setImagesLoaded(true);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    const render = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (img) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate scaling to cover the canvas
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;
        
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Render first frame
    render(0);

    const animationState = { frame: 0 };

    // Find the parent <main> which holds the scrolling text
    const mainElement = document.getElementById("scrollytelling-main");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainElement,
        start: "top top",
        end: "bottom bottom", 
        scrub: 0.5,
      },
    });

    tl.to(animationState, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => render(Math.round(animationState.frame)),
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Canvas Area */}
      <div className="absolute inset-0 w-full h-full">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-on-primary font-body-md">
            Loading visual experience...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-90 mix-blend-screen"
        />
        {/* Background structural aesthetic */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Hero Title Container */}
      <div className="relative z-20 text-center px-margin-mobile pointer-events-none">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 drop-shadow-2xl">
          PRECISION IN PIECES
        </h1>
        <p className="font-body-lg text-body-lg text-tertiary-fixed-dim max-w-xl mx-auto drop-shadow-md">
          The architecture of clarity.
        </p>
      </div>

      {/* Faux 3D Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
        <div className="w-[800px] h-[400px] border border-surface-variant/20 rounded-full absolute mix-blend-overlay" />
        <div className="w-[600px] h-[300px] border border-surface-variant/10 rounded-full absolute translate-x-20 translate-y-10 mix-blend-overlay" />
      </div>
    </div>
  );
}
