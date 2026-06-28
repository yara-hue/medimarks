import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { fireDoorProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Fire Resistant Doors",
  description:
    "Certified fire-rated doors, isolation materials, and hardware for commercial safety and regulatory compliance.",
};

const division = divisions.find((d) => d.id === "fire-resistant-doors")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "Each fire door is engineered to meet specific fire ratings, dimensions, and building code requirements for your project.",
    icon: "Shield",
  },
  {
    title: "Quality Assurance",
    description:
      "Our doors are tested and certified to meet international fire safety standards, ensuring reliable performance in emergency situations.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From specification and design through manufacturing, delivery, and installation support — we provide complete fire door solutions.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "Metal Door Fabrication",
    description:
      "Precision fabrication of steel fire-rated doors, frames, and hardware components to certified specifications.",
    icon: "Cog",
  },
  {
    title: "Fire Core Assembly",
    description:
      "Specialized assembly of fire-resistant core materials including mineral wool, ceramic fiber, and intumescent seals.",
    icon: "ShieldCheck",
  },
  {
    title: "Powder Coating & Finishing",
    description:
      "Durable powder coating in standard and custom colors for corrosion resistance and aesthetic integration.",
    icon: "Paintbrush",
  },
  {
    title: "Certification Testing",
    description:
      "In-house and third-party testing for fire resistance ratings, smoke leakage, and thermal insulation performance.",
    icon: "ShieldCheck",
  },
];

const certifications = ["ISO 9001:2015", "CE Marking", "SASO", "NFPA Compliant"];

const industries = [
  { name: "Commercial Buildings", href: "/industries/commercial", icon: "Building2" },
  { name: "Healthcare Facilities", href: "/industries/healthcare", icon: "HeartPulse" },
  { name: "Hotels & Hospitality", href: "/industries/commercial", icon: "Building2" },
  { name: "Educational Institutions", href: "/industries/commercial", icon: "School" },
  { name: "Industrial Facilities", href: "/industries/industrial", icon: "Building2" },
];

export default function FireResistantDoorsPage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-t3000.jpg"
        eyebrow="Fire Resistant Doors"
      />
      <DivisionOverview
        title="Safety Without Compromise"
        paragraphs={[
          "MediMarks Fire Resistant Doors division manufactures certified fire-rated doors, isolation materials, and door hardware for commercial safety and regulatory compliance.",
          "Our product range includes fire-rated steel doors, frames, vision panels, and associated hardware — each engineered to provide reliable protection in the event of a fire.",
          "We work closely with architects, contractors, and safety consultants to ensure every door meets the specific fire rating, accessibility, and aesthetic requirements of the project.",
        ]}
        stats={[
          { value: "Certified", label: "Fire Ratings" },
          { value: "Custom", label: "Sizes & Configurations" },
          { value: "Code", label: "Compliant" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Fire Resistant Doors"
        subtitle="Protection you can rely on."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Fire Door Products"
        subtitle="Certified fire-rated doors and hardware for commercial safety."
        products={fireDoorProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        certifications={certifications}
      />
      <DivisionIndustries
        subtitle="Essential safety solutions across sectors."
        industries={industries}
      />
      <DivisionCTA
        title="Planning a fire safety upgrade?"
        description="Let's discuss your requirements and provide certified fire door solutions."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
