"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";
import Button from "../ui/button";
import Logo from "../ui/logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#values", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-foreground/70 hover:text-dusty-rose transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Cart & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart Button */}
            <Button
              onClick={() => setIsCartOpen(true)}
              //   variant="ghost"
              size="sm"
              className="relative text-foreground hover:text-dusty-rose hover:bg-dusty-rose/10 p-2 rounded-full transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-900 from-dusty-rose to-terracotta text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Button>

            <Button
              size="sm"
              className="bg-dusty-rose hover:bg-terracotta text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-dusty-rose transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-foreground/70 hover:text-dusty-rose transition-colors font-medium font-body"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                {/* Mobile Cart Button */}
                <Button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  //   variant="outline"
                  size="sm"
                  className="w-full border-dusty-rose text-dusty-rose hover:bg-dusty-rose hover:text-white font-medium py-2 rounded-full transition-all duration-300 relative"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart ({getItemCount()})
                </Button>

                <Button
                  size="sm"
                  className="w-full bg-dusty-rose hover:bg-terracotta text-white font-medium py-2 rounded-full"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
