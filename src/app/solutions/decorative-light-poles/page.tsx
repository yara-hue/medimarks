import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { lightingProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Decorative Light Poles",
  description:
    "Architectural lighting solutions for urban and public spaces. Decorative light poles combining elegant design with functional illumination.",
};

const division = divisions.find((d) => d.id === "decorative-light-poles")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "Each light pole is designed to match the architectural character of its environment while meeting structural and illumination requirements.",
    icon: "Lightbulb",
  },
  {
    title: "Quality Assurance",
    description:
      "Hot-dip galvanized steel and durable powder coating ensure long-term resistance to weather, corrosion, and UV exposure.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From design consultation through foundation work, installation, and electrical integration — we handle every aspect of your project.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "Steel Fabrication",
    description:
      "Precision cutting, bending, and welding of tapered and straight steel poles for municipal and commercial lighting applications.",
    icon: "Cog",
  },
  {
    title: "Hot-Dip Galvanizing",
    description:
      "In-house galvanizing capabilities ensure superior corrosion protection for long-term outdoor durability.",
    icon: "ShieldCheck",
  },
  {
    title: "Powder Coating",
    description:
      "Custom RAL color matching and durable powder coating for aesthetic integration with surrounding architecture.",
    icon: "Paintbrush",
  },
  {
    title: "Electrical Integration",
    description:
      "Complete electrical assembly including LED driver integration, photocell provisions, and wiring harness installation.",
    icon: "Zap",
  },
];

const industries = [
  { name: "Municipalities", href: "/industries/infrastructure", icon: "Building2" },
  { name: "Parks & Public Spaces", href: "/industries/public-spaces", icon: "Trees" },
  { name: "Roads & Highways", href: "/industries/infrastructure", icon: "Building2" },
  { name: "Commercial Plazas", href: "/industries/commercial", icon: "Store" },
  { name: "Hospitality", href: "/industries/commercial", icon: "Building2" },
];

export default function LightPolesPage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-garden-light-pole.jpg"
        eyebrow="Decorative Light Poles"
      />
      <DivisionOverview
        title="Illuminating Spaces with Elegance"
        paragraphs={[
          "MediMarks Decorative Light Poles division manufactures architecturally designed lighting solutions for urban environments, public spaces, and commercial developments.",
          "Our product range includes tapered steel poles, decorative luminaires, and integrated LED lighting systems — each engineered for both aesthetic appeal and functional performance.",
          "We work closely with architects, urban planners, and municipalities to deliver lighting solutions that enhance safety, ambiance, and visual identity.",
        ]}
        stats={[
          { value: "Custom", label: "Designs Available" },
          { value: "Galvanized", label: "Corrosion Protection" },
          { value: "LED-Ready", label: "Energy Efficient" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Light Poles"
        subtitle="Where design meets durability."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Lighting Products"
        subtitle="Architectural poles and luminaires for every setting."
        products={lightingProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        />
      <DivisionIndustries
        subtitle="Serving public and commercial sectors."
        industries={industries}
      />
      <DivisionCTA
        title="Planning a lighting project?"
        description="Let's design and manufacture light poles that elevate your space."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
