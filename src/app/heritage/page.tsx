import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { MockCheckoutModal } from "@/components/shop/MockCheckoutModal";
import HeritagePageContent from "@/components/heritage";

export const metadata = {
  title: "Heritage | Optiwear Precision Eyewear",
  description: "Learn about the hand-crafted precision, history, and craftsmanship behind Optiwear.",
};

export default function HeritagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navigation />
      <HeritagePageContent />
      <Footer />
      <CartDrawer />
      <MockCheckoutModal />
    </div>
  );
}
