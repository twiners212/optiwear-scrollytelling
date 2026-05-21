"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { mockProducts, formatIDR } from "@/lib/mockProducts";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Check } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : undefined;
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = mockProducts.find((p) => p.id === id);
  
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) {
    return (
      <div className="px-margin-mobile md:px-margin-desktop py-20 text-center">
        <h1 className="font-headline-lg text-primary">Product not found.</h1>
        <button onClick={() => router.back()} className="mt-4 text-primary hover:underline">
          Back
        </button>
      </div>
    );
  }

  const selectedColor = product.colors[selectedColorIndex];

  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8">
      <button 
        onClick={() => router.push('/shop')} 
        className="flex items-center text-on-surface-variant hover:text-primary transition-colors font-label-md uppercase tracking-widest mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
      </button>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="w-full lg:w-3/5 bg-surface-container-low rounded-sm overflow-hidden aspect-square relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover mix-blend-multiply transition-opacity duration-500"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="border-b border-outline-variant pb-6 mb-6">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">
              {product.category} • {product.shape}
            </p>
            <h1 className="font-headline-lg text-headline-lg md:font-display-lg-mobile md:text-display-lg-mobile text-primary mb-2">
              {product.name}
            </h1>
            <p className="font-headline-md text-headline-md text-primary">
              {formatIDR(product.price)}
            </p>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-10">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4">
              Color: {selectedColor.name}
            </h3>
            <div className="flex gap-4">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    selectedColorIndex === idx 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface' 
                      : 'border border-outline-variant hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                >
                  {selectedColorIndex === idx && (
                    <Check className={`w-5 h-5 ${['#ffffff', '#f7e7ce', '#c0c0c0'].includes(color.hex) ? 'text-primary' : 'text-on-primary'}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(product, 1, selectedColor.name)}
            className="w-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest py-5 rounded hover:bg-tertiary transition-colors"
          >
            Add to Cart
          </button>
          
          <div className="mt-8 space-y-4 pt-8 border-t border-outline-variant">
            <details className="group cursor-pointer">
              <summary className="font-label-md uppercase tracking-widest text-primary list-none flex justify-between items-center">
                Shipping & Returns
                <span className="transition group-open:rotate-180">+</span>
              </summary>
              <p className="font-body-md text-on-surface-variant mt-4">
                Free standard shipping on all orders. Returns accepted within 30 days of purchase with the product in its original condition.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
