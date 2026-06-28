"use client";

import { motion } from "framer-motion";
import { Cog, Lightbulb, ShieldCheck, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";

const values = [
  {
    title: "Engineering Excellence",
    description: "Precision-driven approach to every project we undertake. We hold ourselves to the highest standards of quality and accuracy.",
    icon: Cog,
  },
  {
    title: "Innovation",
    description: "Continuous improvement and creative problem-solving. We invest in new technologies and processes to deliver better solutions.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description: "Reliability and durability in every product we deliver. Our quality management system ensures consistent, measurable results.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description: "Honest partnerships and transparent business practices. We build relationships based on trust, respect, and mutual success.",
    icon: HeartHandshake,
  },
];

export function AboutValues() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((item) => {
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
