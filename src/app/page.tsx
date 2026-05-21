import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollytellingSection } from "@/components/ScrollytellingSection";
import { DotNavigation } from "@/components/DotNavigation";
import { AnimatedText } from "@/components/AnimatedText";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { MockCheckoutModal } from "@/components/shop/MockCheckoutModal";

export default function Home() {
  return (
    <>
      <Navigation />
      <DotNavigation />

      <main id="scrollytelling-main" className="relative bg-primary">
        {/* Scrollytelling visual layer - uses position sticky */}
        <ScrollytellingSection />

        {/* Scrolling Content Layers */}
        <div className="relative z-10 w-full">
          {/* Space before first content block (Intro Area) */}
          <div id="section-intro" className="h-[716px]"></div>

          {/* Section 1 */}
          <div id="section-1" className="min-h-screen flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pointer-events-none">
            <AnimatedText className="w-full md:w-1/2 pointer-events-auto bg-inverse-surface/80 backdrop-blur-md p-10 border-l border-outline-variant/30">
              <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
                Titanium Skeleton.
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
                Weightless strength.
              </p>
            </AnimatedText>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="min-h-screen flex items-center justify-end px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pointer-events-none">
            <AnimatedText className="w-full md:w-1/2 pointer-events-auto bg-inverse-surface/80 backdrop-blur-md p-10 border-r border-outline-variant/30 text-right">
              <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
                Sapphire Crystal.
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
                Unrivaled transparency.
              </p>
            </AnimatedText>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="min-h-screen flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pointer-events-none">
            <AnimatedText className="w-full md:w-1/2 pointer-events-auto bg-inverse-surface/80 backdrop-blur-md p-10 border-l border-outline-variant/30">
              <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
                Hand-Finished Heritage.
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
                Crafted with rigorous attention to detail.
              </p>
            </AnimatedText>
          </div>
          
          {/* Space before transition to next section */}
          <div className="h-[307px]"></div>
        </div>
      </main>

      {/* Final CTA Section */}
      <section className="relative bg-surface-container-lowest py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 max-w-3xl">
          Experience the Collection
        </h2>
        <div className="w-24 h-px bg-outline-variant mb-10"></div>
        <Link href="/shop" className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest px-10 py-4 rounded-DEFAULT hover:bg-inverse-surface transition-colors duration-300">
          Explore Now
        </Link>
      </section>

      <Footer />
      <CartDrawer />
      <MockCheckoutModal />
    </>
  );
}
