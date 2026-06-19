"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  { title: "Architectural Design", description: "Each pole is designed to complement and enhance its surrounding environment.", icon: "🏛" },
  { title: "Durable Construction", description: "Built with high-quality materials to withstand outdoor conditions and provide long service life.", icon: "🔨" },
  { title: "Custom Finishes", description: "Available in various colors, textures, and finishes to match project requirements.", icon: "🎨" },
  { title: "Urban Integration", description: "Designed for seamless integration into streetscapes, parks, plazas, and public spaces.", icon: "🏙" },
];

export function LightingBenefits() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title="Why Choose Our Light Poles" subtitle="Quality and design that stand the test of time." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-xl p-8 border border-gray-300 dark:border-navy-500"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-heading font-semibold text-lg text-navy-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
