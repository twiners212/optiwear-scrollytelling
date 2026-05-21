import Link from "next/link";
import { Product, formatIDR } from "@/lib/mockProducts";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.id}`}>
      <article className="group cursor-pointer relative flex flex-col h-full">
        <div className="relative bg-surface-container-low aspect-[4/5] overflow-hidden mb-4 rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-primary text-on-primary text-[10px] sm:text-label-md px-4 py-2 sm:px-8 sm:py-3 rounded hover:bg-tertiary transition-colors uppercase tracking-widest whitespace-nowrap">
              Quick View
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-body-lg text-body-lg text-primary">{product.name}</h3>
            <span className="font-label-md text-label-md text-primary">
              {formatIDR(product.price)}
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-auto pt-2">
            {product.colors[0].name} / {product.shape}
          </p>
        </div>
      </article>
    </Link>
  );
}
