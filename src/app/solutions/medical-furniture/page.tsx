import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionProjects } from "@/components/sections/division/DivisionProjects";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { medicalProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Medical Furniture",
  description:
    "Precision medical equipment manufacturing for healthcare facilities. Examination tables, patient chairs, ophthalmic equipment, and mobility solutions.",
};

const division = divisions.find((d) => d.id === "medical-furniture")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "Every product is designed with a focus on functionality, durability, and the practical needs of healthcare professionals. We tailor solutions to your clinical requirements.",
    icon: "Cog",
  },
  {
    title: "Quality Assurance",
    description:
      "We use medical-grade materials and rigorous quality control to ensure reliability in demanding clinical environments. Every product meets stringent standards.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From consultation and design through manufacturing, delivery, and after-sales support — we provide complete lifecycle service for every product.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "Precision Fabrication",
    description:
      "Advanced CNC machining and sheet metal fabrication for medical-grade components with tight tolerances and consistent quality.",
    icon: "Cog",
  },
  {
    title: "Welding & Assembly",
    description:
      "Certified welding and skilled assembly of steel frames,升降 columns, and mechanical systems for examination and treatment equipment.",
    icon: "Wrench",
  },
  {
    title: "Powder Coating & Finishing",
    description:
      "Medical-grade powder coating and surface finishing that meets hygiene, corrosion resistance, and aesthetic requirements.",
    icon: "Paintbrush",
  },
  {
    title: "Quality Testing",
    description:
      "Rigorous testing of electrical safety, load capacity, stability, and durability to ensure compliance with medical device standards.",
    icon: "ShieldCheck",
  },
];

const certifications = ["ISO 9001:2015", "ISO 13485", "CE Marking", "SASO"];

const industries = [
  { name: "Hospitals", href: "/industries/healthcare", icon: "Building2" },
  { name: "Clinics", href: "/industries/healthcare", icon: "Building2" },
  { name: "Ophthalmic Centers", href: "/industries/healthcare", icon: "HeartPulse" },
  { name: "Diagnostic Labs", href: "/industries/healthcare", icon: "FlaskConical" },
  { name: "Rehabilitation Centers", href: "/industries/healthcare", icon: "Microscope" },
];

const projects: {
  title: string;
  industry: string;
  description: string;
  image?: string;
  href?: string;
}[] = [];

export default function MedicalFurniturePage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-t3000.jpg"
        eyebrow="Medical Furniture"
        primaryCta={{ label: "View Products", href: "#products" }}
        secondaryCta={{ label: "Request Consultation", href: "/contact" }}
      />
      <DivisionOverview
        title="Our Founding Division"
        paragraphs={[
          `As MediMarks' founding division, Medical Furniture represents our core expertise and commitment to quality. Since ${new Date().getFullYear() - 10}, we have been designing and manufacturing specialized equipment for healthcare facilities across the region.`,
          `Our product range includes examination tables, patient chairs, ophthalmic equipment, and mobility solutions — each engineered for the unique demands of clinical environments. Every product reflects our dedication to precision, reliability, and patient-centered design.`,
          `We work closely with healthcare professionals to understand their workflow requirements, ensuring that every piece of equipment enhances clinical efficiency and patient comfort.`,
        ]}
        stats={[
          { value: `${new Date().getFullYear() - 10}`, label: "Established" },
          { value: "5+", label: "Product Lines" },
          { value: "Regional", label: "Market Reach" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Medical Furniture"
        subtitle="What sets MediMarks apart in healthcare equipment manufacturing."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Medical Products"
        subtitle="Engineered for healthcare environments. Each product reflects our commitment to quality and functionality."
        products={medicalProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        certifications={certifications}
      />
      <DivisionIndustries
        subtitle="Our medical equipment is trusted across a range of healthcare settings."
        industries={industries}
      />
      <DivisionProjects projects={projects} />
      <DivisionCTA
        title="Ready to discuss your Medical Furniture needs?"
        description="Request a consultation, product specifications, or more information about our healthcare equipment."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
