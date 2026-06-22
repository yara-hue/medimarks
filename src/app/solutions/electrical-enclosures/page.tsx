import type { Metadata } from "next";
import { ElectricalHero } from "@/components/sections/electrical/Hero";
import { ElectricalOverview } from "@/components/sections/electrical/Overview";
import { ElectricalProducts } from "@/components/sections/electrical/Products";
import { ElectricalCTA } from "@/components/sections/electrical/CTASection";

export const metadata: Metadata = {
  title: "Electrical Enclosures",
  description:
    "MediMarks' Electrical Enclosures division offers industrial electrical boxes, cabinets, and cable management systems for commercial and industrial installations.",
};

export default function ElectricalEnclosuresPage() {
  return (
    <>
      <ElectricalHero />
      <ElectricalOverview />
      <ElectricalProducts />
      <ElectricalCTA />
    </>
  );
}
