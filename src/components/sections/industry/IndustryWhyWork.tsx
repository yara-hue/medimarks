"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProofPoint {
  value: string;
  label: string;
}

interface IndustryWhyWorkProps {
  title?: string;
  subtitle?: string;
  proofPoints: ProofPoint[];
}

export function IndustryWhyWork({
  title = "Why Work With Us",
  subtitle,
  proofPoints,
}: IndustryWhyWorkProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point.label}
              variants={staggerItem}
              className="text-center bg-white dark:bg-navy-900 rounded-xl p-8 border border-gray-200/60 dark:border-navy-700"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-navy-500 dark:text-navy-200">
                {point.value}
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                {point.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
