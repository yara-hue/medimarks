"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ArtPortfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading title="Portfolio" subtitle="A glimpse into our custom fabrication work." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (item % 3) * 0.1 }}
              className="aspect-square bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl flex items-center justify-center group cursor-pointer"
            >
              <div className="text-center p-6 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-3xl">✦</span>
                <p className="mt-2 text-gray-400 text-xs tracking-widest uppercase">Project {item}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center"
        >
          <p className="text-gray-400 text-sm italic">
            Portfolio images of completed sculptures, architectural elements, and custom
            fabrication projects will be added as they are completed.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
