"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LightingProjects() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications of our decorative lighting solutions."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="p-12 bg-white rounded-2xl border border-dashed border-gray-200 text-center"
        >
          <span className="text-4xl">🏗</span>
          <h3 className="mt-4 font-heading font-semibold text-xl text-navy-900">Project Case Studies</h3>
          <p className="mt-2 text-gray-400 text-sm max-w-md mx-auto">
            Detailed project case studies and installation photography will be added as projects
            are completed and documented.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
