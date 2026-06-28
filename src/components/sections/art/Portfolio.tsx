"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { artProducts } from "@/data/site";
import { Markdown } from "@/components/ui/Markdown";

export function ArtPortfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title="Portfolio" subtitle="A glimpse into our custom fabrication work." />

        <div className="grid md:grid-cols-2 gap-8">
          {artProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:col-span-2"
            >
              <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                <div className="md:col-span-2">
                  <div className="aspect-square rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                    {product.image ? (
                      <FitBlurImage
                        src={product.image}
                        alt={product.name}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-100 to-gray-100 dark:from-navy-800 dark:to-navy-900 flex items-center justify-center">
                        <div className="text-center p-6">
                          <span className="text-4xl">✦</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-3">
                  {product.category && (
                    <span className="text-navy-500 dark:text-navy-300 text-xs font-medium tracking-widest uppercase">
                      {product.category}
                    </span>
                  )}
                  <Link href={`/solutions/art-sculptures/${product.slug}`}>
                    <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-navy-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-200 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <Markdown text={product.description} className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 bg-gray-50 dark:bg-navy-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-navy-700 text-center"
        >
          <p className="text-gray-400 dark:text-gray-500 text-sm italic">
            More portfolio images of completed sculptures, architectural elements, and custom
            fabrication projects will be added as they are completed.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
