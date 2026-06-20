"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lightingProducts } from "@/data/site";

export function LightingGallery() {
  return (
    <section id="gallery" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title="Product Gallery" subtitle="Our range of decorative light poles." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lightingProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-indigo-50 to-navy-50 rounded-2xl flex items-center justify-center mb-4">
                <div className="text-center p-6">
                  <span className="text-4xl">☼</span>
                  <p className="mt-3 text-indigo-300 text-xs tracking-widest uppercase">Image</p>
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-900 dark:text-white">{product.name}</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
