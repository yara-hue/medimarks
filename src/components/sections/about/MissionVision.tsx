"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function MissionVision() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-navy-900 rounded-2xl p-10 md:p-12 border border-gray-200/60 dark:border-navy-700"
          >
            <div className="w-12 h-1 bg-navy-500 rounded-full mb-6" />
            <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">Our Mission</span>
            <blockquote className="mt-4 font-heading text-2xl md:text-3xl font-bold text-navy-900 dark:text-white leading-tight">
              &ldquo;We always find suitable values to add for people.&rdquo;
            </blockquote>
            <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              Every product we create, every solution we deliver, is guided by this principle.
              We measure success not just by what we build, but by the value it brings to
              those who use it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-navy-900 rounded-2xl p-10 md:p-12"
          >
            <div className="w-12 h-1 bg-navy-400 rounded-full mb-6" />
            <span className="text-silver font-medium text-sm tracking-widest uppercase">Our Vision</span>
            <blockquote className="mt-4 font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
              &ldquo;Using our capacity to improve existing products and efficiently create new ones, we aim to expand into additional sectors and markets.&rdquo;
            </blockquote>
            <p className="mt-6 text-gray-400 dark:text-gray-500 leading-relaxed">
              Growth through continuous improvement. We invest our engineering capacity
              in making things better and building new solutions for emerging needs.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
