import type { Metadata } from "next";
import { StorageHero } from "@/components/sections/storage/Hero";
import { StorageOverview } from "@/components/sections/storage/Overview";
import { StorageProduct } from "@/components/sections/storage/ProductShowcase";
import { StorageApplications } from "@/components/sections/storage/Applications";
import { StorageCTA } from "@/components/sections/storage/CTASection";

export const metadata: Metadata = {
  title: "Storage Solutions",
  description:
    "MediMarks' Storage Solutions division offers adjustable-height shelving systems engineered for commercial warehouses, retail, and industrial environments.",
};

export default function StorageSolutionsPage() {
  return (
    <>
      <StorageHero />
      <StorageOverview />
      <StorageProduct />
      <StorageApplications />
      <StorageCTA />
    </>
  );
}
