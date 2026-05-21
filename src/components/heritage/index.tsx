"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroManifesto from "./HeroManifesto";
import CraftsmanshipSection from "./CraftsmanshipSection";
import EvolutionTimeline from "./EvolutionTimeline";
import ScrollReveal from "./ScrollReveal";

export default function HeritagePageContent() {
  return (
    <main className="flex-grow pt-32 pb-16 bg-surface">
      {/* Hero Manifesto Section */}
      <HeroManifesto />
      
      {/* Craftsmanship Pillars Section */}
      <CraftsmanshipSection />
      
      {/* Evolution Timeline Grid */}
      <EvolutionTimeline />
      
      {/* Final CTA */}
      <ScrollReveal
        variant="text"
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center pt-12 pb-16"
      >
        <Link
          href="/shop"
          className="inline-flex items-center space-x-4 group hover:opacity-85 transition-opacity duration-300 pb-1"
        >
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase border-b border-primary pb-1">
            Explore the Collection
          </span>
          <ArrowRight className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </ScrollReveal>
    </main>
  );
}
