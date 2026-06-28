import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { CompanyOverview } from "@/components/sections/home/CompanyOverview";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { Process } from "@/components/sections/home/Process";
import { Stats } from "@/components/sections/home/Stats";
import { FutureVision } from "@/components/sections/home/FutureVision";
import { ContactSection } from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "MediMarks — designing and manufacturing specialized products that combine functionality, quality, and innovation across multiple industries since 2015.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CompanyOverview />
      <Capabilities />
      <FeaturedProducts />
      <Process />
      <Stats />
      <FutureVision />
      <ContactSection />
    </>
  );
}
