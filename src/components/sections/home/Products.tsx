"use client"

import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import Button from "@/components/ui/button";

const featuredProducts = products.filter(product => product.featured).slice(0, 4);

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Collection</span>
          </h2>
          <p className="text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            Discover our most loved pieces, each one carefully crafted to celebrate your unique style and the beauty of handmade artistry.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="fade-in-up group cursor-pointer block"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft group-hover:shadow-elegant transition-all duration-500 group-hover:scale-105">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Quick Shop Button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <Button 
                      size="sm" 
                      className="bg-black/90 hover:bg-black text-black font-medium px-6 py-2 rounded-full shadow-elegant backdrop-blur-sm"
                    >
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-foreground/60 font-body text-sm mb-3">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-primary">
                      ${product.price}
                    </span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-primary hover:text-terracotta hover:bg-primary/10 p-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 fade-in-up stagger-delay-4">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;