import AboutSection from "@/components/sections/home/About";
import CTASection from "@/components/sections/home/CTA";
import HeroSection from "@/components/sections/home/Hero";
import ProductsSection from "@/components/sections/home/Products";
import ValuesSection from "@/components/sections/home/Values";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
