"use client";

import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { formatIDR } from "@/lib/mockProducts";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal, setIsCheckoutOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-surface/40 backdrop-blur-sm z-[55] transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`bg-surface-container-lowest dark:bg-surface-container-low text-primary dark:text-on-primary font-body-md text-body-md fixed right-0 top-0 h-full w-full md:w-96 z-[60] shadow-2xl transition-transform duration-500 flex flex-col p-gutter border-l border-outline-variant ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-headline-md text-headline-md text-tertiary dark:text-on-surface">Your Selection</h2>
            <p className="text-on-surface-variant text-label-sm mt-1 uppercase tracking-widest">Precision Crafted Eyewear</p>
          </div>
          <button
            className="text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto space-y-6 hide-scrollbar">
          {items.length === 0 ? (
            <p className="text-on-surface-variant">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.colorName}`} className="flex gap-4 border-b border-outline-variant/50 pb-4">
                <div className="w-20 h-24 relative bg-surface-container-low rounded-sm overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.product.image} alt={item.product.name} className="object-cover w-full h-full mix-blend-multiply" />
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-body-lg text-body-lg font-semibold">{item.product.name}</h3>
                    <span className="font-label-md">{formatIDR(item.product.price)}</span>
                  </div>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">
                    {item.colorName} / {item.product.shape}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-2">
                    <div className="flex items-center border border-outline-variant rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.colorName, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-surface-container transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-label-md">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.colorName, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-surface-container transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id, item.colorName)}
                      className="text-on-surface-variant hover:text-error transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-auto pt-6 border-t border-outline-variant">
          <div className="flex justify-between font-label-md text-label-md mb-6 text-primary dark:text-on-primary">
            <span className="uppercase tracking-widest">Subtotal</span>
            <span>{formatIDR(cartTotal)}</span>
          </div>
          <button 
            disabled={items.length === 0}
            onClick={() => {
              setIsCartOpen(false);
              setIsCheckoutOpen(true);
            }}
            className="w-full bg-primary text-on-primary py-4 font-label-md text-label-md rounded hover:bg-tertiary transition-colors uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout Now
          </button>
        </div>
      </aside>
    </>
  );
}
