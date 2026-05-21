"use client";

import { useState } from "react";
import { mockProducts } from "@/lib/mockProducts";
import { SidebarFilter } from "@/components/shop/SidebarFilter";
import { ProductCard } from "@/components/shop/ProductCard";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedShape, setSelectedShape] = useState("All");
  const [maxPrice, setMaxPrice] = useState(15000000);

  const categories = Array.from(new Set(mockProducts.map((p) => p.category)));
  const shapes = Array.from(new Set(mockProducts.map((p) => p.shape)));

  const filteredProducts = mockProducts.filter((p) => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (selectedShape !== "All" && p.shape !== selectedShape) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  return (
    <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-gutter">
      <SidebarFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        shapes={shapes}
        selectedShape={selectedShape}
        setSelectedShape={setSelectedShape}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <section className="flex-grow">
        <header className="mb-12 flex justify-between items-end border-b border-outline-variant pb-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg text-primary">
              Precision Optics
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Engineered for clarity. Designed for impact. Explore our curated collection of optical frames.
            </p>
          </div>
        </header>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No products match your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedShape("All");
                setMaxPrice(15000000);
              }}
              className="mt-4 border border-primary text-primary px-6 py-2 rounded uppercase tracking-widest font-label-md hover:bg-surface-container transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

