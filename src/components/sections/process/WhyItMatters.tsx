"use client";

import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";

const proofs = [
  {
    title: "Consistency & Precision",
    description:
      "Every project follows the same rigorous framework, eliminating guesswork and ensuring predictable, high-quality outcomes.",
    icon: Ruler,
  },
  {
    title: "Transparency & Trust",
    description:
      "You're involved at every stage. No surprises, clear communication, and full visibility into progress and decisions.",
    icon: ShieldCheck,
  },
  {
    title: "Speed to Market",
    description:
      "By catching issues in design and prototype phases, we accelerate production and reduce costly delays downstream.",
    icon: Rocket,
  },
];

export function WhyItMatters() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-800/50">
      <Container>
        <SectionHeading
          title="Why This Process Matters"
          subtitle="A disciplined approach that delivers results — every time."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {proofs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <Card variant="feature" className="p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-navy-600 dark:text-blue-300" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
