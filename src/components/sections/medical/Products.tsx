"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { medicalProducts } from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { Markdown } from "@/components/ui/Markdown";

export function MedicalProducts() {
  return (
    <section id="products" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
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
                <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                  {product.image ? (
                    <FitBlurImage
                      src={product.image}
                      alt={product.name}
                    />
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
                <span className="text-navy-500 text-xs font-medium tracking-widest uppercase">
                  {product.category}
                </span>
                <Link href={`/solutions/medical-furniture/${product.slug}`}>
                  <h3 className="mt-2 font-heading font-bold text-2xl md:text-3xl text-navy-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-200 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <Markdown text={product.description} className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed" />

                <div className="mt-6">
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

                {"brochure" in product && typeof product.brochure === "string" && (
                  <div className="mt-4">
                    <a
                      href={product.brochure}
                      download
                      className="inline-flex items-center gap-1.5 text-sm text-navy-500 dark:text-navy-300 hover:text-navy-700 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Brochure
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
