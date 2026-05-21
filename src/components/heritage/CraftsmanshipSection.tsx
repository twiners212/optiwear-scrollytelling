"use client";

import ScrollReveal from "./ScrollReveal";

export default function CraftsmanshipSection() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap space-y-24 md:space-y-32">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <ScrollReveal
          variant="image"
          className="md:col-span-7"
        >
          <div className="aspect-[4/3] bg-surface-variant overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Hand-polishing titanium"
              className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
              src="/assets/images/heritage/hand_polishing.png"
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal
          variant="text"
          className="md:col-span-4 md:col-start-9"
        >
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            The Art of Hand-Polishing
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Every frame is treated as a sculptural entity. Our artisans dedicate hours to meticulously polishing the Japanese titanium, ensuring a flawless finish that catches light with architectural precision.
          </p>
          <button className="font-label-md text-label-md text-secondary uppercase border-b border-outline hover:border-primary hover:text-primary transition-colors duration-300 w-fit pb-1 tracking-widest">
            Discover the Process
          </button>
        </ScrollReveal>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <ScrollReveal
          variant="text"
          className="md:col-span-4 md:col-start-2 mb-8 md:mb-0"
        >
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Organic Acetate &amp; Titanium
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            We source only the finest organic acetates from Italy and aerospace-grade titanium from Japan. This juxtaposition of warm, tactile organics with cold, unyielding metal creates a calibrated tension.
          </p>
          <button className="font-label-md text-label-md text-secondary uppercase border-b border-outline hover:border-primary hover:text-primary transition-colors duration-300 w-fit pb-1 tracking-widest">
            View Materials
          </button>
        </ScrollReveal>

        <ScrollReveal
          variant="image"
          className="md:col-span-7 md:col-start-6"
        >
          <div className="aspect-[4/5] md:aspect-[4/3] bg-surface-variant overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Raw material selection"
              className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
              src="/assets/images/heritage/raw_materials.png"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
