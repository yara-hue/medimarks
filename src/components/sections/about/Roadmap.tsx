"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutRoadmap() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">Roadmap</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 leading-tight">
            Future Development
            <span className="block text-navy-500">& Expansion Plans</span>
          </h2>
          <p className="mt-6 text-gray-500 leading-relaxed max-w-2xl">
            MediMarks continues to invest in new product development, manufacturing
            capabilities, and market expansion. We are actively exploring opportunities
            in additional sectors and regional markets.
          </p>
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm italic">
              Detailed roadmap content coming soon. This section will outline specific
              product development timelines, market expansion targets, and strategic
              initiatives.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
