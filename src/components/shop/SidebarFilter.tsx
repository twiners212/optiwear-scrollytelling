"use client";

import { formatIDR } from "@/lib/mockProducts";

type SidebarFilterProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  shapes: string[];
  selectedShape: string;
  setSelectedShape: (shape: string) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
};

export function SidebarFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  shapes,
  selectedShape,
  setSelectedShape,
  maxPrice,
  setMaxPrice,
}: SidebarFilterProps) {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 md:pr-8 md:border-r border-outline-variant mb-12 md:mb-0">
      <div className="sticky top-32 space-y-10">
        <div>
          <h3 className="font-label-md text-label-md mb-4 uppercase tracking-widest text-primary border-b border-outline-variant pb-2">
            Category
          </h3>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li>
              <label className="flex items-center cursor-pointer hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={selectedCategory === "All"}
                  onChange={() => setSelectedCategory("All")}
                  className="mr-3 rounded-sm border-outline text-primary focus:ring-primary h-4 w-4"
                />
                All
              </label>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <label className="flex items-center cursor-pointer hover:text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="mr-3 rounded-sm border-outline text-primary focus:ring-primary h-4 w-4"
                  />
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-label-md text-label-md mb-4 uppercase tracking-widest text-primary border-b border-outline-variant pb-2">
            Frame Shape
          </h3>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li>
              <label className="flex items-center cursor-pointer hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={selectedShape === "All"}
                  onChange={() => setSelectedShape("All")}
                  className="mr-3 rounded-sm border-outline text-primary focus:ring-primary h-4 w-4"
                />
                All
              </label>
            </li>
            {shapes.map((shape) => (
              <li key={shape}>
                <label className="flex items-center cursor-pointer hover:text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedShape === shape}
                    onChange={() => setSelectedShape(shape)}
                    className="mr-3 rounded-sm border-outline text-primary focus:ring-primary h-4 w-4"
                  />
                  {shape}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-label-md text-label-md mb-4 uppercase tracking-widest text-primary border-b border-outline-variant pb-2">
            Price
          </h3>
          <div className="pt-2">
            <input
              type="range"
              min={1000000}
              max={15000000}
              step={500000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between mt-2 font-label-sm text-label-sm text-on-surface-variant">
              <span>Rp 1jt</span>
              <span>{formatIDR(maxPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
