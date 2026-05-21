"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/mockProducts";

type CartItem = {
  product: Product;
  quantity: number;
  colorName: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, colorName: string) => void;
  removeFromCart: (productId: string, colorName: string) => void;
  updateQuantity: (productId: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addToCart = (product: Product, quantity: number, colorName: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.colorName === colorName);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.colorName === colorName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, colorName }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, colorName: string) => {
    setItems((prev) => prev.filter((item) => !(item.product.id === productId && item.colorName === colorName)));
  };

  const updateQuantity = (productId: string, colorName: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(productId, colorName);
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.colorName === colorName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  if (!mounted) return null; // Avoid hydration mismatch for now

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
