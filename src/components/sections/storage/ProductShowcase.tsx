"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { storageProducts } from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";

export function StorageProduct() {
  const product = storageProducts[0];

  return (
    <section id="product" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800">
            {product.image ? (
              <FitBlurImage
                src={product.image}
                alt={product.name}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-navy-800 dark:to-navy-900 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-gray-400 text-5xl">▤</span>
                  <p className="mt-3 text-gray-400 text-xs tracking-widest uppercase">Product Image</p>
                </div>
              </div>
            )}
          </div>
          <div>
            <span className="text-navy-500 text-xs font-medium tracking-widest uppercase">{product.category}</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
              {product.name}
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {product.benefits.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white dark:bg-navy-900 rounded-xl border border-dashed border-gray-200 dark:border-navy-700">
              <p className="text-gray-400 dark:text-gray-500 text-sm italic">
                Detailed specifications, load capacities, and dimension options available upon request.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
