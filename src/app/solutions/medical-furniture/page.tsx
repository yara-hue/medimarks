import type { Metadata } from "next";
import { MedicalHero } from "@/components/sections/medical/Hero";
import { MedicalOverview } from "@/components/sections/medical/Overview";
import { WhyChooseUs } from "@/components/sections/medical/WhyChooseUs";
import { MedicalProducts } from "@/components/sections/medical/Products";
import { MedicalFuture } from "@/components/sections/medical/FutureProducts";
import { MedicalCTA } from "@/components/sections/medical/CTASection";

export const metadata: Metadata = {
  title: "Medical Furniture",
  description:
    "Explore MediMarks' flagship Medical Furniture division. Specializing in examination tables, recliner chairs, and ophthalmic equipment for clinics and hospitals.",
};

export default function MedicalFurniturePage() {
  return (
    <>
      <MedicalHero />
      <MedicalOverview />
      <WhyChooseUs />
      <MedicalProducts />
      <MedicalFuture />
      <MedicalCTA />
    </>
  );
}
