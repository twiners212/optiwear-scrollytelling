import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { CartProvider } from "@/context/CartContext";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optiwear | Precision in Pieces",
  description: "The architecture of clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background text-on-background antialiased overflow-x-hidden selection:bg-surface-variant selection:text-on-background",
          ebGaramond.variable,
          hankenGrotesk.variable
        )}
      >
        <CartProvider>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </CartProvider>
      </body>
    </html>
  );
}
