"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function StorageOverview() {
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
            Engineered for Efficiency
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            Our storage solutions division provides adjustable-height shelving systems
            designed for warehouse, commercial, and industrial applications. Built with
            durable materials and flexible configurations, our storage products help
            organizations optimize their space and improve operational efficiency.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
