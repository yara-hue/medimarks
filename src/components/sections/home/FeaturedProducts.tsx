"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { medicalProducts } from "@/data/site";

export function FeaturedProducts() {
  const displayed = medicalProducts.slice(0, 6);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Featured Products"
          subtitle="A selection of our manufactured products across medical, storage, and lighting divisions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((product, index) => (
            <motion.div
              key={product.name}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30 h-full flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-100 dark:from-navy-800 to-navy-50 dark:to-navy-900 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-navy-200/50 dark:bg-navy-700/50 flex items-center justify-center mb-3">
                      <span className="text-navy-500 dark:text-navy-300 font-heading font-bold text-xl">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-navy-400 dark:text-navy-300 text-xs tracking-widest uppercase font-medium">
                      Product Image Placeholder
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-navy-500 dark:text-navy-300 text-xs font-medium tracking-widest uppercase">
                    {product.category}
                  </span>
                  <h3 className="mt-2 font-heading font-semibold text-lg text-navy-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.benefits.slice(0, 3).map((benefit) => (
                      <span
                        key={benefit}
                        className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-navy-800 px-2.5 py-1 rounded-md"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button href="/solutions" variant="secondary">
            View All Products &rarr;
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
