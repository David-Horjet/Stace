export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    images: string[];
    description: string;
    shortDescription: string;
    sizes: string[];
    colors: string[];
    category: string;
    featured: boolean;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Crochet Halter Top",
      price: 89,
      images: ["/images/cloth1.jpeg"],
      description: "Delicate handcrafted halter top perfect for summer days. Made with premium cotton yarn in a classic crochet pattern that's both timeless and trendy. Features adjustable neck ties and a comfortable fit that flatters all body types.",
      shortDescription: "Delicate handcrafted halter top perfect for summer days",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cream", "Dusty Rose", "Sage Green"],
      category: "Tops",
      featured: true
    },
    {
      id: 2,
      name: "Intimate Crochet Set",
      price: 124,
      images: ["/images/cloth2.jpeg"],
      description: "Soft and comfortable crochet lingerie set crafted with the finest materials. This two-piece set features a delicate lace pattern and provides both comfort and elegance. Perfect for special occasions or everyday luxury.",
      shortDescription: "Soft and comfortable crochet lingerie set",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cream", "Blush Pink"],
      category: "Lingerie",
      featured: true
    },
    {
      id: 3,
      name: "Boho Mini Dress",
      price: 156,
      images: ["/images/cloth3.jpeg"],
      description: "Elegant crochet dress for special occasions. This stunning mini dress features intricate crochet work and a flattering silhouette. Perfect for date nights, brunches, or any time you want to feel effortlessly chic.",
      shortDescription: "Elegant crochet dress for special occasions",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cream", "Terracotta", "Sage Green"],
      category: "Dresses",
      featured: true
    },
    {
      id: 4,
      name: "Two-Piece Set",
      price: 134,
      images: ["/images/cloth4.jpeg"],
      description: "Versatile crop top and shorts set that transitions effortlessly from day to night. Made with breathable cotton yarn in a modern crochet pattern. Perfect for summer festivals, beach days, or casual outings.",
      shortDescription: "Versatile crop top and shorts set",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cream", "Dusty Rose", "Terracotta"],
      category: "Sets",
      featured: true
    },
    {
      id: 5,
      name: "Crochet Summer Top",
      price: 40,
      images: ["/images/cloth5.jpeg"], // Reusing image for demo
      description: "Light and airy summer top perfect for warm weather. Features a relaxed fit and breathable crochet pattern that keeps you cool and comfortable. Pairs beautifully with jeans, skirts, or shorts.",
      shortDescription: "Light and airy summer top perfect for warm weather",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Cream", "Sage Green"],
      category: "Tops",
      featured: false
    },
    {
      id: 6,
      name: "Handmade Crochet Bralette",
      price: 25,
      images: ["/images/cloth1.jpeg"], // Reusing image for demo
      description: "Comfortable and stylish crochet bralette that provides gentle support with a bohemian flair. Made with soft cotton yarn and featuring adjustable straps for the perfect fit.",
      shortDescription: "Comfortable and stylish crochet bralette",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Cream", "Blush Pink", "Sage Green"],
      category: "Lingerie",
      featured: false
    },
    {
      id: 7,
      name: "Crochet Beach Dress",
      price: 60,
      images: ["/images/cloth2.jpeg"], // Reusing image for demo
      description: "Flowing beach dress perfect for vacation days. Features an open crochet pattern that's perfect as a cover-up or worn on its own. Light, breathable, and effortlessly elegant.",
      shortDescription: "Flowing beach dress perfect for vacation days",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Cream", "Terracotta"],
      category: "Dresses",
      featured: false
    }
  ];