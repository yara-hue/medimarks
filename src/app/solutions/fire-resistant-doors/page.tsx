import type { Metadata } from "next";
import { FireDoorsHero } from "@/components/sections/fire-doors/Hero";
import { FireDoorsOverview } from "@/components/sections/fire-doors/Overview";
import { FireDoorsProducts } from "@/components/sections/fire-doors/Products";
import { FireDoorsCTA } from "@/components/sections/fire-doors/CTASection";

export const metadata: Metadata = {
  title: "Fire Resistant Doors",
  description:
    "MediMarks' Fire Resistant Doors division provides certified fire-rated doors, isolation materials, and door hardware for commercial safety and regulatory compliance.",
};

export default function FireResistantDoorsPage() {
  return (
    <>
      <FireDoorsHero />
      <FireDoorsOverview />
      <FireDoorsProducts />
      <FireDoorsCTA />
    </>
  );
}
