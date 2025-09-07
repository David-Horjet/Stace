import Button from "@/components/ui/button";
import heroImg from "../../../../public/images/banner.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Handmade crochet fashion lifestyle"
          className="w-full h-full object-cover object-[70%] opacity-95" 
          // object-[70%] shifts focus of image to the right
          priority
        />
        {/* Gradient overlay to improve text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
      </div>

      {/* Content shifted to the left */}
      <div className="relative z-10 text-left px-6 sm:px-12 lg:px-20 max-w-2xl">
        <div className="fade-in-up">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Handmade</span>
            <span className="block gradient-text">Crochet Wear</span>
            <span className="block text-foreground/80 text-2xl sm:text-3xl lg:text-4xl font-normal mt-2">
              Crafted with Love
            </span>
          </h1>
        </div>

        <div className="fade-in-up stagger-delay-2">
          <p className="font-body text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed">
            Discover our collection of unique, handcrafted crochet pieces
            designed for the modern woman who values artistry and authenticity.
          </p>
        </div>

        <div className="fade-in-up stagger-delay-3">
          <Button
            size="lg"
            className="bg-dusty-rose hover:bg-terracotta text-white font-medium px-8 py-4 rounded-full text-lg shadow-elegant hover:shadow-floating transition-all duration-300 hover:scale-105"
          >
            Shop Collection
          </Button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-dusty-rose/30 rounded-full animate-gentle-bounce" />
      <div
        className="absolute bottom-32 right-16 w-6 h-6 bg-terracotta/20 rounded-full animate-gentle-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-8 w-3 h-3 bg-soft-pink/40 rounded-full animate-gentle-bounce"
        style={{ animationDelay: "2s" }}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
