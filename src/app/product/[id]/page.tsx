"use client"

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { ArrowLeft, Plus, Minus, ShoppingBag } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      return;
    }

    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
      },
      quantity
    );
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 text-primary hover:text-terracotta hover:bg-primary/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-soft">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-primary shadow-md"
                      : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <Badge
              variant="secondary"
              className="mb-3 bg-primary/10 text-primary"
            >
              {product.category}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-3xl font-semibold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-charcoal/70 font-body text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
              Size
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedSize === size
                      ? "border-primary bg-primary text-white"
                      : "border-sage/30 hover:border-primary text-charcoal"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
              Color
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedColor === color
                      ? "border-primary bg-primary text-white"
                      : "border-sage/30 hover:border-primary text-charcoal"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
              Quantity
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-sage/30 rounded-lg overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  className="p-3 hover:bg-primary/10 transition-colors duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-semibold min-w-[80px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-3 hover:bg-primary/10 transition-colors duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="pt-4">
            <Button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-terracotta hover:from-terracotta hover:to-primary text-white font-semibold py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-elegant disabled:opacity-50 disabled:hover:scale-100"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>

            {(!selectedSize || !selectedColor) && (
              <p className="text-sm text-muted mt-2 text-center">
                Please select size and color
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
