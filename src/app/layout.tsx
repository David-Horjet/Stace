import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Nabar";
import Cart from "@/components/sections/home/Cart";
import { ToastProvider } from "@/components/ui/toast";
import { Analytics } from "@vercel/analytics/next"

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

export const metadata: Metadata = {
  title: "Stace YarnArt 🧶",
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
          <ToastProvider>
            <div className="min-h-screen">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
            <Cart />
          </ToastProvider>
        </CartProvider>
      </body>
      <Analytics />
    </html>
  );
}
