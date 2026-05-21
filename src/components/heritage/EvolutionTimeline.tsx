"use client";

import ScrollReveal from "./ScrollReveal";

export default function EvolutionTimeline() {
  return (
    <section className="bg-surface-container-low py-section-gap mb-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal variant="text" className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Silhouettes of Time
          </h2>
          <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
            Tracing the geometric foundations of our design language.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Item 1 - The Circle */}
          <ScrollReveal
            variant="text"
            delay={100}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-48 h-48 mb-8 border border-outline-variant/50 rounded-full flex items-center justify-center bg-surface p-8 transition-all duration-500 hover:border-primary hover:bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Round glasses"
                className="w-full h-auto grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/heritage/timeline_circle.png"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              The Circle
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              The genesis of optical design. A pure, unbroken line requiring absolute structural integrity.
            </p>
          </ScrollReveal>

          {/* Item 2 - The Square */}
          <ScrollReveal
            variant="text"
            delay={200}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-48 h-48 mb-8 border border-outline-variant/50 flex items-center justify-center bg-surface p-8 rounded-DEFAULT transition-all duration-500 hover:border-primary hover:bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Square glasses"
                className="w-full h-auto grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/heritage/timeline_square.png"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              The Square
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              A study in architectural dominance. Sharp angles calibrated for a strong, decisive presence.
            </p>
          </ScrollReveal>

          {/* Item 3 - The Aviator */}
          <ScrollReveal
            variant="text"
            delay={300}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-48 h-48 mb-8 border border-outline-variant/50 flex items-center justify-center bg-surface p-8 rounded-b-full transition-all duration-500 hover:border-primary hover:bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Aviator glasses"
                className="w-full h-auto grayscale mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                src="/assets/images/heritage/timeline_aviator.png"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              The Aviator
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Utilitarian heritage refined for the modern era. The iconic teardrop, engineered for balance.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
