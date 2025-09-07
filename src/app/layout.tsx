import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Nabar";
import Cart from "@/components/sections/home/Cart";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "100",
});

export const metadata: Metadata = {
  title: "Crochet by [BrandName]",
  description: "Handmade crochet tops, underwear, and unique wearable art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} antialiased bg-white text-gray-900`}
      >
        <CartProvider>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
