"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { medicalProducts } from "@/data/site";

export function MedicalProducts() {
  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Our Medical Products"
          subtitle="Engineered for healthcare environments. Each product reflects our commitment to quality and functionality."
        />

        <div className="space-y-12">
          {medicalProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-5 gap-8 md:gap-12 items-center"
            >
              <div className="md:col-span-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-100 to-navy-50 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-navy-200/50 flex items-center justify-center mb-3">
                      <span className="text-navy-500 font-heading font-bold text-2xl">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-navy-400 text-xs tracking-widest uppercase font-medium">
                      Product Image
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <span className="text-navy-500 text-xs font-medium tracking-widest uppercase">
                  {product.category}
                </span>
                <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-navy-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white mb-2">Key Benefits</h4>
                    <ul className="space-y-1.5">
                      {product.benefits.map((b) => (
                        <li key={b} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-navy-400 mt-0.5">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white mb-2">Technical Specifications</h4>
                    <p className="text-sm text-gray-400 dark:text-gray-500 italic bg-gray-50 dark:bg-navy-900/50 rounded-lg p-3">
                      Detailed specifications available upon request.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
