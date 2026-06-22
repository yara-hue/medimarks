"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fireDoorProducts } from "@/data/site";

export function FireDoorsProducts() {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Our Fire Resistant Products"
          subtitle="Certified fire-rated doors and safety solutions for commercial buildings."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fireDoorProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-navy-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-navy-500 text-xs font-medium tracking-widest uppercase">
                  {product.category}
                </span>
                <h3 className="mt-2 font-heading font-semibold text-lg text-navy-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.benefits.slice(0, 3).map((b) => (
                    <span key={b} className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-navy-800 px-2.5 py-1 rounded-md">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
