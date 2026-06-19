"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Engineering-Led Design",
    description: "Every product is designed with a focus on functionality, durability, and the practical needs of healthcare professionals.",
    icon: "⚙",
  },
  {
    title: "Quality Materials & Construction",
    description: "We use medical-grade materials and rigorous quality control to ensure reliability in demanding clinical environments.",
    icon: "✓",
  },
  {
    title: "Regional Manufacturing",
    description: "Based in Jeddah, we offer regional manufacturing advantages including shorter lead times and responsive support.",
    icon: "📍",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <Container>
        <SectionHeading
          title="Why Choose Our Medical Furniture"
          subtitle="What sets MediMarks apart in healthcare equipment manufacturing."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200/60"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-heading font-semibold text-lg text-navy-900">{item.title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
