"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Cog, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Concept & Design",
    description:
      "Every product begins with a thorough analysis of requirements. Our engineering team collaborates with clients to translate needs into precise technical specifications and manufacturable designs.",
    icon: Lightbulb,
  },
  {
    title: "Engineering & Prototyping",
    description:
      "Using advanced CAD software and in-house prototyping capabilities, we refine designs for performance, durability, and manufacturability before moving to production.",
    icon: PenTool,
  },
  {
    title: "Manufacturing & Assembly",
    description:
      "Our facilities are equipped with modern CNC machinery, fabrication tools, and skilled technicians who ensure every component meets exact specifications.",
    icon: Cog,
  },
  {
    title: "Quality Assurance & Delivery",
    description:
      "Each product undergoes rigorous inspection and testing. We document compliance with relevant standards and ensure safe, timely delivery to our clients.",
    icon: ShieldCheck,
  },
];

export function Process() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Our Process"
          subtitle="How we take a product from concept to completion with engineering rigor at every step."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-navy-700 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:pl-20"
                >
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-navy-600 dark:bg-navy-500 items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="md:hidden flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-600 dark:bg-navy-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-navy-500 dark:text-blue-300 tracking-widest uppercase">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
