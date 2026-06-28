import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { electricalProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Electrical Enclosures",
  description:
    "Industrial electrical boxes, cabinets, and cable management systems for commercial and industrial installations.",
};

const division = divisions.find((d) => d.id === "electrical-enclosures")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "Every enclosure is designed to meet specific environmental, electrical, and installation requirements — from IP ratings to custom cutouts.",
    icon: "Cog",
  },
  {
    title: "Quality Assurance",
    description:
      "All enclosures are constructed from high-grade materials with precision fabrication to ensure protection, durability, and compliance.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From specification and design through fabrication, finishing, and delivery — we provide complete enclosure solutions.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "Sheet Metal Fabrication",
    description:
      "Precision laser cutting, bending, and forming of steel and stainless steel enclosures for electrical and electronic equipment.",
    icon: "Cog",
  },
  {
    title: "Welding & Assembly",
    description:
      "Certified welding for enclosure frames, doors, and mounting panels with consistent quality and dimensional accuracy.",
    icon: "Wrench",
  },
  {
    title: "Surface Finishing",
    description:
      "Powder coating in standard and custom RAL colors for corrosion protection and professional appearance.",
    icon: "Paintbrush",
  },
  {
    title: "Sealing & Protection",
    description:
      "IP-rated sealing solutions including gaskets, weatherproofing, and environmental protection for indoor and outdoor installations.",
    icon: "ShieldCheck",
  },
];

const industries = [
  { name: "Industrial Facilities", href: "/industries/industrial", icon: "Building2" },
  { name: "Commercial Buildings", href: "/industries/commercial", icon: "Building2" },
  { name: "Infrastructure", href: "/industries/infrastructure", icon: "Building2" },
  { name: "Telecommunications", href: "/industries/infrastructure", icon: "Zap" },
  { name: "Renewable Energy", href: "/industries/industrial", icon: "Zap" },
];

export default function ElectricalEnclosuresPage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-wheel-chair-etables.jpg"
        eyebrow="Electrical Enclosures"
      />
      <DivisionOverview
        title="Protecting Your Electrical Systems"
        paragraphs={[
          "MediMarks Electrical Enclosures division manufactures industrial electrical boxes, cabinets, and cable management systems for commercial and industrial installations.",
          "Our enclosures are designed to protect sensitive electrical and electronic equipment from environmental factors including dust, moisture, impact, and corrosion.",
          "We offer a range of standard and custom enclosures with various IP ratings, material options, and configurations to suit diverse application requirements.",
        ]}
        stats={[
          { value: "IP-Rated", label: "Protection Levels" },
          { value: "Custom", label: "Configurations Available" },
          { value: "Indoor & Outdoor", label: "Installation Ready" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Electrical Enclosures"
        subtitle="Built to protect, designed to perform."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Enclosure Products"
        subtitle="Electrical boxes, cabinets, and accessories for every application."
        products={electricalProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        />
      <DivisionIndustries
        subtitle="Trusted across industrial and commercial sectors."
        industries={industries}
      />
      <DivisionCTA
        title="Need a custom enclosure solution?"
        description="Let's discuss your requirements and engineer the right protection for your equipment."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
