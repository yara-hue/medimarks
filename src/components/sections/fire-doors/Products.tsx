"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fireDoorProducts } from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { Markdown } from "@/components/ui/Markdown";

export function FireDoorsProducts() {
  return (
    <section id="products" className="py-10 md:py-14 lg:py-20 bg-gray-50 dark:bg-navy-900/50">
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
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                <FitBlurImage
                  src={product.image}
                  alt={product.name}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-navy-500 text-xs font-medium tracking-widest uppercase">
                  {product.category}
                </span>
                <Link href={`/solutions/fire-resistant-doors/${product.slug}`}>
                  <h3 className="mt-2 font-heading font-semibold text-lg text-navy-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-200 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 line-clamp-3">
                  <Markdown text={product.description} as="span" className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.benefits.slice(0, 3).map((b) => (
                    <span key={b} className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-navy-800 px-2.5 py-1 rounded-md">
                      <Markdown text={b} as="span" />
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/solutions/fire-resistant-doors/${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-navy-800 dark:hover:text-white transition-colors"
                  >
                    Explore <span className="text-lg leading-none">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
