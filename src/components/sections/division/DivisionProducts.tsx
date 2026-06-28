"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Product {
  name: string;
  category?: string;
  description: string;
  benefits?: string[];
  specs?: string[];
  image?: string;
}

interface DivisionProductsProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function DivisionProducts({ title, subtitle, products }: DivisionProductsProps) {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={staggerItem}
              className="grid md:grid-cols-5 gap-8 md:gap-12 items-center"
            >
              <div className="md:col-span-2">
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                  {product.image ? (
                    <FitBlurImage src={product.image} alt={product.name} />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 dark:from-navy-800 dark:to-navy-900 flex items-center justify-center">
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
                  )}
                </div>
              </div>

              <div className="md:col-span-3">
                {product.category && (
                  <span className="text-navy-500 dark:text-navy-200 text-xs font-medium tracking-widest uppercase">
                    {product.category}
                  </span>
                )}
                <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-navy-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>

                {(product.benefits || product.specs) && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {product.benefits && product.benefits.length > 0 && (
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white mb-2">
                          Key Benefits
                        </h4>
                        <ul className="space-y-1.5">
                          {product.benefits.map((b) => (
                            <li
                              key={b}
                              className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-navy-400 mt-0.5">•</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {product.specs && product.specs.length > 0 && (
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white mb-2">
                          Technical Specifications
                        </h4>
                        <ul className="space-y-1.5">
                          {product.specs.map((s) => (
                            <li
                              key={s}
                              className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-navy-400 mt-0.5">•</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
