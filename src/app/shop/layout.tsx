import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { MockCheckoutModal } from "@/components/shop/MockCheckoutModal";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navigation />
      <div className="flex-grow pt-24 pb-12">
        {children}
      </div>
      <Footer />
      <CartDrawer />
      <MockCheckoutModal />
    </div>
  );
}
