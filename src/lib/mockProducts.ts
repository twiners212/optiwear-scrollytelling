export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Men" | "Women" | "Unisex";
  shape: "Aviator" | "Round" | "Square";
  colors: { name: string; hex: string }[];
  image: string;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: "titanium-one",
    name: "Titanium One",
    price: 6750000,
    category: "Unisex",
    shape: "Round",
    colors: [
      { name: "Gunmetal", hex: "#2a3439" },
      { name: "Silver", hex: "#c0c0c0" },
    ],
    image:
      "/assets/images/products/titanium_one.png",
    description: "Minimalist round frame with premium titanium finish. Designed for maximum comfort and visual clarity.",
  },
  {
    id: "acetate-bold",
    name: "Acetate Bold",
    price: 5775000,
    category: "Men",
    shape: "Square",
    colors: [
      { name: "Onyx", hex: "#0f0f0f" },
      { name: "Tortoise", hex: "#4a3525" },
    ],
    image:
      "/assets/images/products/acetate_bold.png",
    description: "Bold black acetate frame with strong character. Makes a sharp, modern statement.",
  },
  {
    id: "wire-classic",
    name: "Wire Classic",
    price: 6150000,
    category: "Women",
    shape: "Aviator",
    colors: [
      { name: "Gold", hex: "#ffd700" },
      { name: "Rose Gold", hex: "#b76e79" },
    ],
    image:
      "/assets/images/products/wire_classic.png",
    description: "Classic gold-toned wireframe. A timeless heritage design.",
  },
  {
    id: "carbon-lite",
    name: "Carbon Lite",
    price: 8250000,
    category: "Men",
    shape: "Square",
    colors: [
      { name: "Matte Black", hex: "#222222" },
    ],
    image:
      "/assets/images/products/carbon_lite.jpg",
    description: "Ultra-lightweight carbon fiber frame. The pinnacle of modern eyewear engineering for all-day comfort.",
  },
  {
    id: "crystal-clear",
    name: "Crystal Clear",
    price: 4800000,
    category: "Women",
    shape: "Round",
    colors: [
      { name: "Clear", hex: "#ffffff" },
      { name: "Champagne", hex: "#f7e7ce" },
    ],
    image:
      "/assets/images/products/crystal_clear.jpg",
    description: "Transparent acetate frame for a clean, minimal, contemporary look.",
  },
  {
    id: "vintage-brow",
    name: "Vintage Brow",
    price: 7200000,
    category: "Unisex",
    shape: "Square",
    colors: [
      { name: "Tortoise/Gold", hex: "#4a3525" },
      { name: "Black/Silver", hex: "#0f0f0f" },
    ],
    image:
      "/assets/images/products/vintage_brow.jpg",
    description: "Classic browline style blending mid-century retro aesthetics with a modern touch.",
  }
];

export const formatIDR = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
