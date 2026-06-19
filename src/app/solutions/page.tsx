import type { Metadata } from "next";
import { SolutionsHero } from "@/components/sections/solutions/Hero";
import { DivisionCards } from "@/components/sections/solutions/DivisionCards";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore MediMarks' four divisions: Medical Furniture, Storage Solutions, Decorative Light Poles, and Art & Sculptures. Engineering-driven manufacturing since 2015.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <DivisionCards />
    </>
  );
}
