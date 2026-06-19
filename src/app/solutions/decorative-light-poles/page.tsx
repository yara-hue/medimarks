import type { Metadata } from "next";
import { LightingHero } from "@/components/sections/lighting/Hero";
import { LightingOverview } from "@/components/sections/lighting/Overview";
import { LightingProjects } from "@/components/sections/lighting/Projects";
import { LightingGallery } from "@/components/sections/lighting/Gallery";
import { LightingBenefits } from "@/components/sections/lighting/Benefits";
import { LightingCTA } from "@/components/sections/lighting/CTASection";

export const metadata: Metadata = {
  title: "Decorative Light Poles",
  description:
    "Discover MediMarks' Decorative Light Poles division. Architectural lighting solutions for urban spaces, streets, parks, and public environments.",
};

export default function LightPolesPage() {
  return (
    <>
      <LightingHero />
      <LightingOverview />
      <LightingProjects />
      <LightingGallery />
      <LightingBenefits />
      <LightingCTA />
    </>
  );
}
