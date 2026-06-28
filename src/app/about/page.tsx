import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutNumbers } from "@/components/sections/about/AboutNumbers";
import { AboutDivisions } from "@/components/sections/about/AboutDivisions";
import { AboutLeadership } from "@/components/sections/about/AboutLeadership";
import { AboutFacilities } from "@/components/sections/about/AboutFacilities";
import { AboutCertifications } from "@/components/sections/about/AboutCertifications";
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
      <AboutNumbers />
      <AboutDivisions />
      <AboutLeadership />
      <AboutFacilities />
      <AboutCertifications />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
