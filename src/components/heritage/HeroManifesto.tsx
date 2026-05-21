"use client";

import ScrollReveal from "./ScrollReveal";

export default function HeroManifesto() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <ScrollReveal variant="image" className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden bg-surface-variant mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Artisan hands working on eyewear"
          className="w-full h-full object-cover grayscale"
          src="/assets/images/heritage/hero_manifesto.png"
        />
      </ScrollReveal>
      
      <ScrollReveal variant="text" className="max-w-4xl mx-auto text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 text-primary">
          &ldquo;Timelessness is the ultimate form of precision.&rdquo;
        </h1>
        <p className="font-label-md text-label-md text-secondary uppercase tracking-widest">
          The Manifesto
        </p>
      </ScrollReveal>
    </section>
  );
}
