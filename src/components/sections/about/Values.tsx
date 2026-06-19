"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valuesCards } from "@/data/site";

const icons = ["⚙", "💡", "✓", "🤝"];

export function AboutValues() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide every project, partnership, and product we deliver."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <span className="text-3xl">{icons[index]}</span>
              <h3 className="mt-4 font-heading font-semibold text-lg text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
