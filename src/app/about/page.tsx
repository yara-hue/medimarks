import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutDivisions } from "@/components/sections/about/AboutDivisions";
import { AboutFacilities } from "@/components/sections/about/AboutFacilities";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MediMarks — a manufacturing company founded in 2015, specializing in medical furniture, storage solutions, decorative lighting, and custom fabrication.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutDivisions />
      <AboutFacilities />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
