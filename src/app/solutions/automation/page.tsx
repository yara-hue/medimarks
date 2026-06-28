import type { Metadata } from "next";
import { DivisionHero } from "@/components/sections/division/DivisionHero";
import { DivisionOverview } from "@/components/sections/division/DivisionOverview";
import { DivisionWhyChooseUs } from "@/components/sections/division/DivisionWhyChooseUs";
import { DivisionProducts } from "@/components/sections/division/DivisionProducts";
import { DivisionCapabilities } from "@/components/sections/division/DivisionCapabilities";
import { DivisionIndustries } from "@/components/sections/division/DivisionIndustries";
import { DivisionCTA } from "@/components/sections/division/DivisionCTA";
import { automationProducts, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "CNC machining, linear actuators, and custom automation solutions for precision manufacturing and industrial processes.",
};

const division = divisions.find((d) => d.id === "automation")!;

const whyChooseUsReasons = [
  {
    title: "Custom Engineering",
    description:
      "We design and build custom automation solutions tailored to your specific manufacturing processes, improving efficiency and precision.",
    icon: "Settings",
  },
  {
    title: "Quality Assurance",
    description:
      "Every automation system undergoes rigorous testing to ensure reliable operation, accuracy, and long-term performance in industrial environments.",
    icon: "ShieldCheck",
  },
  {
    title: "End-to-End Service",
    description:
      "From concept and design through fabrication, programming, installation, and ongoing support — we deliver complete automation solutions.",
    icon: "Wrench",
  },
];

const capabilities = [
  {
    title: "CNC Machining",
    description:
      "Multi-axis CNC routing, milling, and cutting for precision components in metal, wood, composites, and plastics.",
    icon: "Cog",
  },
  {
    title: "Linear Actuator Systems",
    description:
      "Design and manufacture of custom linear motion systems for lifting, positioning, and automated material handling.",
    icon: "Settings",
  },
  {
    title: "Control Systems Integration",
    description:
      "PLC programming, motor control, sensor integration, and HMI development for fully automated production lines.",
    icon: "Zap",
  },
  {
    title: "System Testing & Commissioning",
    description:
      "Comprehensive testing, calibration, and on-site commissioning to ensure your automation system performs as specified.",
    icon: "ShieldCheck",
  },
];

const industries = [
  { name: "Manufacturing", href: "/industries/industrial", icon: "Building2" },
  { name: "Woodworking", href: "/industries/industrial", icon: "Building2" },
  { name: "Metal Fabrication", href: "/industries/industrial", icon: "Cog" },
  { name: "Packaging", href: "/industries/industrial", icon: "Package" },
  { name: "Automotive", href: "/industries/industrial", icon: "Settings" },
];

export default function AutomationPage() {
  return (
    <>
      <DivisionHero
        title={division.title}
        description={division.description}
        image="/images/products/product-lc3-narrow-vertical.jpg"
        eyebrow="Automation"
      />
      <DivisionOverview
        title="Precision Through Automation"
        paragraphs={[
          "MediMarks Automation division specializes in CNC machining, linear actuator systems, and custom automation solutions for precision manufacturing and industrial processes.",
          "Our product range includes CNC routers, linear actuators, lifting columns, and custom automated systems — each engineered to improve production efficiency, accuracy, and repeatability.",
          "We serve manufacturers across multiple industries, providing automation solutions that reduce labor costs, improve quality consistency, and scale production capacity.",
        ]}
        stats={[
          { value: "Multi-Axis", label: "CNC Capability" },
          { value: "Custom", label: "System Design" },
          { value: "Industrial", label: "Grade Reliability" },
        ]}
      />
      <DivisionWhyChooseUs
        title="Why Choose Our Automation Solutions"
        subtitle="Engineered for precision, built for production."
        reasons={whyChooseUsReasons}
      />
      <DivisionProducts
        title="Our Automation Products"
        subtitle="CNC machines, actuators, and custom automation systems."
        products={automationProducts}
      />
      <DivisionCapabilities
        capabilities={capabilities}
        />
      <DivisionIndustries
        subtitle="Serving industrial and manufacturing sectors."
        industries={industries}
      />
      <DivisionCTA
        title="Ready to automate your production?"
        description="Let's discuss how our automation solutions can improve your manufacturing efficiency."
        primaryCta={{ label: "Request Consultation", href: "/contact" }}
        secondaryCta={{ label: "View All Solutions", href: "/solutions" }}
      />
    </>
  );
}
