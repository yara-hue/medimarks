import { Hero } from "@/components/sections/home/Hero";
import { CompanyOverview } from "@/components/sections/home/CompanyOverview";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { Approach } from "@/components/sections/home/Approach";
import { FutureVision } from "@/components/sections/home/FutureVision";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Capabilities />
      <FeaturedProducts />
      <Approach />
      <FutureVision />
      <ContactSection />
    </>
  );
}
