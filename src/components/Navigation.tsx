"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navigation() {
  const { items, setIsCartOpen } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
    <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto relative z-50">
        <Link
          href="/"
          onClick={closeMenu}
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
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary transition-transform duration-300">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div 
      className={`md:hidden fixed inset-0 top-20 z-40 bg-surface/95 dark:bg-surface-container/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-start pt-12 h-full space-y-6 px-6 overflow-y-auto pb-8">
        <Link
          href="/"
          onClick={closeMenu}
          className={`w-full max-w-sm py-5 px-6 rounded-2xl border flex items-center justify-center font-headline-sm text-headline-sm uppercase tracking-widest transition-all ${
            pathname === "/" 
              ? "bg-primary text-on-primary border-primary shadow-lg" 
              : "bg-surface-container text-primary border-outline-variant hover:border-primary/50"
          }`}
        >
          Collections
        </Link>
        <Link
          href="/heritage"
          onClick={closeMenu}
          className={`w-full max-w-sm py-5 px-6 rounded-2xl border flex items-center justify-center font-headline-sm text-headline-sm uppercase tracking-widest transition-all ${
            pathname === "/heritage" 
              ? "bg-primary text-on-primary border-primary shadow-lg" 
              : "bg-surface-container text-primary border-outline-variant hover:border-primary/50"
          }`}
        >
          Heritage
        </Link>
        <Link
          href="/shop"
          onClick={closeMenu}
          className={`w-full max-w-sm py-5 px-6 rounded-2xl border flex items-center justify-center font-headline-sm text-headline-sm uppercase tracking-widest transition-all ${
            pathname === "/shop" 
              ? "bg-primary text-on-primary border-primary shadow-lg" 
              : "bg-surface-container text-primary border-outline-variant hover:border-primary/50"
          }`}
        >
          Shop
        </Link>
      </div>
    </div>
    </>
  );
}
