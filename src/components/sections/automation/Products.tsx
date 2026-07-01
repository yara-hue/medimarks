"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { automationProducts } from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { Markdown } from "@/components/ui/Markdown";

export function AutomationProducts() {
  return (
    <section id="products" className="py-10 md:py-14 lg:py-20 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Our Automation Products"
          subtitle="Precision-engineered solutions for industrial automation and manufacturing."
        />

        <div className="space-y-12">
          {automationProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-5 gap-8 md:gap-12 items-center group hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30 transition-all duration-300 rounded-2xl p-4 -m-4"
            >
              <div className="md:col-span-2">
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800 group-hover:scale-[1.02] transition-transform duration-300">
                  <FitBlurImage
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <span className="text-navy-500 text-xs font-medium tracking-widest uppercase">
                  {product.category}
                </span>
                <Link href={`/solutions/automation/${product.slug}`}>
                  <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-navy-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-200 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <Markdown text={product.description} className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed" />
                <div className="mt-4">
                  <Link
                    href={`/solutions/automation/${product.slug}`}
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
