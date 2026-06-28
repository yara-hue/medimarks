import type { Metadata } from "next";
import { ProcessHero } from "@/components/sections/process/ProcessHero";
import { ProcessSteps } from "@/components/sections/process/ProcessSteps";
import { WhyItMatters } from "@/components/sections/process/WhyItMatters";
import { Timeline } from "@/components/sections/process/Timeline";
import { ProcessCTA } from "@/components/sections/process/ProcessCTA";

export const metadata: Metadata = {
  title: "Process",
  description:
    "From concept to delivery — our six-step engineering process ensures precision, quality, and transparency in every project.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessSteps />
      <WhyItMatters />
      <Timeline />
      <ProcessCTA />
    </>
  );
}
