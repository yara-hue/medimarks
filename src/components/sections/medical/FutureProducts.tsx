"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function MedicalFuture() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">Coming Soon</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
            Future Product Development
          </h2>
          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
            MediMarks is actively developing new medical furniture products to expand
            our healthcare offering. We are investing in research, design, and testing
            to bring additional solutions to market.
          </p>
          <div className="mt-8 p-6 bg-white dark:bg-navy-900 rounded-xl border border-dashed border-gray-200 dark:border-navy-700">
            <p className="text-gray-400 dark:text-gray-500 text-sm italic">
              Information about upcoming products, development timelines, and new
              healthcare solutions will be announced as they become available.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
