import type { Metadata } from "next";
import { ArtHero } from "@/components/sections/art/Hero";
import { ArtOverview } from "@/components/sections/art/Overview";
import { ArtProcess } from "@/components/sections/art/Process";
import { ArtPortfolio } from "@/components/sections/art/Portfolio";
import { ArtCTA } from "@/components/sections/art/CTASection";

export const metadata: Metadata = {
  title: "Art & Sculptures",
  description:
    "Explore MediMarks' Art & Sculptures division. Custom metal fabrication, architectural art, and commissioned sculptures for public and private spaces.",
};

export default function ArtSculpturesPage() {
  return (
    <>
      <ArtHero />
      <ArtOverview />
      <ArtProcess />
      <ArtPortfolio />
      <ArtCTA />
    </>
  );
}
