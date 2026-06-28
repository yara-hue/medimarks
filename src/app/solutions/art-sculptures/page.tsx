import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { artProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Art & Sculptures",
  description:
    "Custom metal fabrication, architectural art, and commissioned sculptures for public and private spaces. Where engineering meets artistry.",
};

const division = divisions.find((d) => d.id === "art-sculptures")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "We translate artistic visions into engineered realities, using precision fabrication to create sculptures that are structurally sound and visually striking.",
    icon: "Sparkles",
  },
  {
    title: "Quality Assurance",
    description:
      "Every piece is fabricated with attention to detail, using high-grade materials and finishing techniques that ensure longevity and visual impact.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From concept development and material selection through fabrication, finishing, and on-site installation — we manage the entire process.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "Custom Metal Fabrication",
    description:
      "Expert steel, stainless steel, and aluminum fabrication for sculptural and architectural art pieces of any scale.",
    icon: "Cog",
  },
  {
    title: "Welding & Assembly",
    description:
      "Artistic and structural welding techniques including TIG, MIG, and specialty processes for complex geometries.",
    icon: "Wrench",
  },
  {
    title: "Surface Finishing",
    description:
      "Specialized finishing including powder coating, patina, brushing, and polishing to achieve the desired aesthetic effect.",
    icon: "Paintbrush",
  },
  {
    title: "Installation Services",
    description:
      "On-site installation including foundation work, structural mounting, and final positioning for permanent public art displays.",
    icon: "ShieldCheck",
  },
];

const certifications = ["ISO 9001:2015"];

const industries = [
  { name: "Public Art", href: "/industries/public-spaces", icon: "Trees" },
  { name: "Corporate Campuses", href: "/industries/commercial", icon: "Building2" },
  { name: "Hotels & Resorts", href: "/industries/commercial", icon: "Building2" },
  { name: "Cultural Centers", href: "/industries/public-spaces", icon: "Building2" },
  { name: "Retail Spaces", href: "/industries/commercial", icon: "Store" },
];

export default function ArtSculpturesPage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-star-alliance-2.jpg"
        eyebrow="Art & Sculptures"
      />
      <DivisionOverview
        title="Where Vision Meets Structure"
        paragraphs={[
          "MediMarks Art & Sculptures division specializes in custom metal fabrication for artistic, architectural, and decorative applications.",
          "Our portfolio includes monumental public sculptures, architectural feature walls, custom railings, branded installations, and decorative metalwork for commercial and public spaces.",
          "We collaborate with artists, architects, and designers to bring creative visions to life — combining traditional craftsmanship with modern fabrication technology.",
        ]}
        stats={[
          { value: "Custom", label: "One-of-a-Kind Pieces" },
          { value: "Indoor & Outdoor", label: "Installation" },
          { value: "Any Scale", label: "From Concept to Install" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Art & Sculpture Services"
        subtitle="Engineering artistry you can trust."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Art Portfolio"
        subtitle="Selected works showcasing our fabrication capabilities."
        products={artProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        certifications={certifications}
      />
      <DivisionIndustries
        subtitle="Our work enhances spaces across sectors."
        industries={industries}
      />
      <DivisionCTA
        title="Have a vision for a custom piece?"
        description="Let's discuss your project and bring your artistic vision to life."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
