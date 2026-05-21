"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { formatIDR } from "@/lib/mockProducts";

export function MockCheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");

  // Reset step when opened
  useEffect(() => {
    if (isCheckoutOpen) {
      setStep("shipping");
    }
  }, [isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    
    // Simulate payment processing
    setTimeout(() => {
      setStep("success");
      clearCart();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-surface/80 backdrop-blur-md transition-opacity" 
        onClick={() => step !== "payment" && setIsCheckoutOpen(false)}
      />

      {/* Modal Content */}
      <div className="relative bg-surface-container-lowest dark:bg-surface-container-low border border-outline-variant rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-outline-variant bg-surface">
          <h2 className="font-headline-md text-headline-md text-primary">
            {step === "shipping" && "Shipping Details"}
            {step === "payment" && "Processing Payment"}
            {step === "success" && "Order Confirmed"}
          </h2>
          {step !== "payment" && (
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {step === "shipping" && (
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Full Name</label>
                  <input required type="text" className="w-full bg-surface-container-low border border-outline-variant rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary font-body-md" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Email</label>
                  <input required type="email" className="w-full bg-surface-container-low border border-outline-variant rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary font-body-md" placeholder="budi@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Shipping Address</label>
                  <input required type="text" className="w-full bg-surface-container-low border border-outline-variant rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary font-body-md" placeholder="123 Main Street, City" />
                </div>
              </div>
              
              <div className="mt-8 border-t border-outline-variant pt-6">
                <div className="flex justify-between font-label-md text-label-md mb-2">
                  <span className="uppercase tracking-widest">Total</span>
                  <span className="text-primary">{formatIDR(cartTotal)}</span>
                </div>
              </div>
            </form>
          )}

          {step === "payment" && (
            <div className="py-12 flex flex-col items-center justify-center space-y-6">
              <Loader2 className="w-16 h-16 text-primary animate-spin" />
              <p className="font-body-lg text-body-lg text-on-surface-variant animate-pulse">Connecting to secure payment gateway...</p>
            </div>
          )}

          {step === "success" && (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
              <CheckCircle className="w-20 h-20 text-[#2e7d32]" />
              <h3 className="font-headline-lg text-headline-lg text-primary mt-4">Thank You!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Your simulated order has been placed successfully. Order number: <span className="font-bold text-primary">#OPT-{Math.floor(1000 + Math.random() * 9000)}</span>
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== "payment" && (
          <div className="p-6 border-t border-outline-variant bg-surface flex justify-end">
            {step === "shipping" ? (
              <button 
                type="submit" 
                form="checkout-form"
                className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded hover:bg-tertiary transition-colors uppercase tracking-widest"
              >
                Pay {formatIDR(cartTotal)}
              </button>
            ) : (
              <button 
                onClick={() => setIsCheckoutOpen(false)}
                className="border border-outline-variant text-primary font-label-md text-label-md px-8 py-3 rounded hover:bg-surface-container transition-colors uppercase tracking-widest"
              >
                Close
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
