"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function LightingOverview() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-navy-900">
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
            Illuminating Urban Spaces
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            Our decorative light poles combine functional illumination with architectural
            design. Each piece is crafted to enhance public environments while providing
            reliable, long-lasting performance. From modern urban boulevards to classic
            architectural settings, our lighting solutions are built to make a statement.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
