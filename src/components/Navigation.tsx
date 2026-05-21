"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navigation() {
  const { items, setIsCartOpen } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md tracking-tighter text-primary dark:text-on-primary-fixed"
        >
          OPTIWEAR
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 scale-95 hover:scale-100 ease-in-out pb-1 ${
              pathname === "/"
                ? "text-primary dark:text-on-primary-fixed border-b border-primary"
                : "text-secondary dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-on-primary-fixed"
            }`}
          >
            Collections
          </Link>
          <Link
            href="/heritage"
            className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 scale-95 hover:scale-100 ease-in-out pb-1 ${
              pathname === "/heritage"
                ? "text-primary dark:text-on-primary-fixed border-b border-primary"
                : "text-secondary dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-on-primary-fixed"
            }`}
          >
            Heritage
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/shop" className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-DEFAULT hover:bg-inverse-surface transition-colors duration-300 scale-95 hover:scale-100 ease-in-out uppercase tracking-widest">
            Shop
          </Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag" 
            className="relative text-primary dark:text-on-primary-fixed hover:text-outline transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-error text-on-error text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag" 
            className="relative text-primary dark:text-on-primary-fixed hover:text-outline transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-error text-on-error text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
          <button className="text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
