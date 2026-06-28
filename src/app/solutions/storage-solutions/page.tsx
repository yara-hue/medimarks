import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { storageProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Storage Solutions",
  description:
    "Engineered storage systems for commercial and industrial environments. Adjustable shelving, warehouse racking, and modular storage solutions.",
};

const division = divisions.find((d) => d.id === "storage-solutions")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "Every storage system is engineered for your specific space, load requirements, and workflow. We design solutions that maximize efficiency.",
    icon: "Cog",
  },
  {
    title: "Quality Assurance",
    description:
      "Heavy-duty materials and precision manufacturing ensure long-term durability and reliability in demanding warehouse environments.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From consultation and site survey through installation and after-sales support — we deliver complete storage solutions.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "Precision Fabrication",
    description:
      "Advanced laser cutting and forming of steel components for shelving, racking, and storage structures with consistent quality.",
    icon: "Cog",
  },
  {
    title: "Welding & Assembly",
    description:
      "Certified structural welding for heavy-duty storage frames, beam connections, and load-bearing components.",
    icon: "Wrench",
  },
  {
    title: "Powder Coating & Finishing",
    description:
      "Durable powder coating in multiple RAL colors for corrosion resistance and long-lasting appearance.",
    icon: "Paintbrush",
  },
  {
    title: "Load Testing",
    description:
      "Rigorous load capacity testing to ensure every storage system meets safety standards and specified weight ratings.",
    icon: "ShieldCheck",
  },
];

const certifications = ["ISO 9001:2015", "CE Marking", "SASO"];

const industries = [
  { name: "Warehouses", href: "/industries/industrial", icon: "Warehouse" },
  { name: "Retail", href: "/industries/commercial", icon: "Store" },
  { name: "Logistics", href: "/industries/industrial", icon: "Package" },
  { name: "Manufacturing", href: "/industries/industrial", icon: "Building2" },
  { name: "Cold Storage", href: "/industries/industrial", icon: "Building2" },
];

export default function StorageSolutionsPage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-shelf-model-1.jpg"
        eyebrow="Storage Solutions"
      />
      <DivisionOverview
        title="Optimizing Space, Maximizing Efficiency"
        paragraphs={[
          "MediMarks Storage Solutions division designs and manufactures adjustable-height shelving systems, heavy-duty racking, and modular storage structures for commercial and industrial environments.",
          "Our storage systems are engineered for maximum load capacity, ease of assembly, and long-term durability. Whether you need warehouse racking, retail shelving, or custom storage configurations, we deliver solutions that optimize your space.",
          "Every system is designed with safety, accessibility, and scalability in mind — allowing your storage infrastructure to grow with your business.",
        ]}
        stats={[
          { value: "Heavy-Duty", label: "Load Ratings" },
          { value: "Modular", label: "System Design" },
          { value: "Regional", label: "Delivery & Install" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Storage Solutions"
        subtitle="Engineered for performance, built to last."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Storage Products"
        subtitle="Versatile shelving and racking systems for every application."
        products={storageProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        certifications={certifications}
      />
      <DivisionIndustries
        subtitle="Trusted across commercial and industrial sectors."
        industries={industries}
      />
      <DivisionCTA
        title="Ready to optimize your storage space?"
        description="Let's discuss your requirements and design a storage solution that works for you."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
