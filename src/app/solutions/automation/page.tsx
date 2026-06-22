import type { Metadata } from "next";
import { AutomationHero } from "@/components/sections/automation/Hero";
import { AutomationOverview } from "@/components/sections/automation/Overview";
import { AutomationProducts } from "@/components/sections/automation/Products";
import { AutomationCTA } from "@/components/sections/automation/CTASection";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "MediMarks' Automation division specializes in CNC machining, linear actuators, and custom automation solutions for precision manufacturing and industrial processes.",
};

export default function AutomationPage() {
  return (
    <>
      <AutomationHero />
      <AutomationOverview />
      <AutomationProducts />
      <AutomationCTA />
    </>
  );
}
