"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { electricalProducts } from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { Markdown } from "@/components/ui/Markdown";

export function ElectricalProducts() {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Our Electrical Products"
          subtitle="Durable enclosures and cable management solutions for industrial applications."
        />

        <div className="space-y-12">
          {electricalProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-5 gap-8 md:gap-12 items-center"
            >
              <div className="md:col-span-2">
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800">
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
                <Link href={`/solutions/electrical-enclosures/${product.slug}`}>
                  <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-navy-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-200 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <Markdown text={product.description} className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed" />

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-navy-900 dark:text-white mb-2">Key Benefits</h4>
                    <ul className="space-y-1.5">
                      {product.benefits.map((b) => (
                        <li key={b} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-navy-400 mt-0.5 shrink-0">•</span>
                          <Markdown text={b} as="span" />
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
