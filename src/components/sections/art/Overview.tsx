"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function ArtOverview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-navy-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">Overview</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
            Engineering Meets Artistry
          </h2>
          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
            Our artistic fabrication division specializes in custom metal sculpture, decorative
            architectural elements, and commissioned art pieces. Leveraging the same engineering
            precision and manufacturing expertise that defines all MediMarks divisions, we bring
            creative visions to life in metal and other materials.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
