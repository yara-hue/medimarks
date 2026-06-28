"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  PenTool,
  Box,
  Wrench,
  CheckCircle,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    number: "01",
    name: "Consult",
    icon: Handshake,
    description:
      "Understanding your needs. We listen, ask questions, and define the project scope, budget, and timeline.",
  },
  {
    number: "02",
    name: "Design",
    icon: PenTool,
    description:
      "Translating requirements into detailed engineering drawings, 3D models, and material specifications.",
  },
  {
    number: "03",
    name: "Prototype",
    icon: Box,
    description:
      "Building and testing physical prototypes to validate form, fit, function, and manufacturability.",
  },
  {
    number: "04",
    name: "Manufacture",
    icon: Wrench,
    description:
      "Precision fabrication using advanced CNC machinery, welding, finishing, and skilled craftsmanship.",
  },
  {
    number: "05",
    name: "Quality Assurance",
    icon: CheckCircle,
    description:
      "Rigorous testing, inspection, and verification to ensure every specification and standard is met.",
  },
  {
    number: "06",
    name: "Deliver",
    icon: Truck,
    description:
      "Logistics, on-site installation support, and follow-up to ensure complete satisfaction.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Our Six-Step Engineering Process"
          subtitle="From concept to delivery, every project follows a proven framework that ensures consistency, quality, and transparency."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative lg:flex lg:items-start lg:gap-0 max-w-6xl mx-auto mt-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative flex-1 lg:px-3 mb-10 lg:mb-0"
              >
                {/* Desktop connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-1 z-10">
                    <ArrowRight className="w-5 h-5 text-gray-300 dark:text-navy-600" />
                  </div>
                )}

                {/* Step number background */}
                <div className="hidden lg:block text-[3rem] font-heading font-bold text-navy-500/20 dark:text-white/10 leading-none mb-2 select-none">
                  {step.number}
                </div>

                {/* Mobile layout: horizontal row with left accent */}
                <div className="lg:text-center">
                  <div className="flex items-center gap-4 lg:justify-center lg:flex-col lg:items-center">
                    <div className="w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-navy-600 dark:text-blue-300" />
                    </div>
                    <div className="lg:text-center lg:mt-4">
                      <div className="lg:hidden text-xs font-bold text-navy-500/50 dark:text-white/20 tracking-widest uppercase mb-1">
                        Step {step.number}
                      </div>
                      <h4 className="font-heading font-bold text-lg text-navy-900 dark:text-white">
                        {step.name}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed lg:max-w-xs lg:mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Mobile step connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden ml-6 mt-2 w-px h-8 bg-gray-200 dark:bg-navy-700" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
