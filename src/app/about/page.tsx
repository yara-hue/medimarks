import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/Hero";
import { AboutStory } from "@/components/sections/about/Story";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { AboutValues } from "@/components/sections/about/Values";
import { AboutCapabilities } from "@/components/sections/about/Capabilities";
import { AboutRoadmap } from "@/components/sections/about/Roadmap";
import { AboutCTA } from "@/components/sections/about/CTASection";

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
      <MissionVision />
      <AboutValues />
      <AboutCapabilities />
      <AboutRoadmap />
      <AboutCTA />
    </>
  );
}
