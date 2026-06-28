"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { medicalProducts, lightingProducts, storageProducts, artProducts, automationProducts, electricalProducts, fireDoorProducts } from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { Markdown } from "@/components/ui/Markdown";

interface DisplayProduct {
  name: string;
  slug: string;
  divisionId: string;
  category?: string;
  description: string;
  benefits?: string[];
  image?: string;
  division: string;
}

export function FeaturedProducts() {
  const allProducts: DisplayProduct[] = [
    ...medicalProducts.slice(0, 2).map((p) => ({ ...p, division: "Medical", divisionId: "medical-furniture" })),
    ...automationProducts.slice(0, 1).map((p) => ({ ...p, division: "Automation", divisionId: "automation" })),
    ...lightingProducts.slice(0, 1).map((p) => ({ ...p, division: "Lighting", divisionId: "decorative-light-poles" })),
    ...storageProducts.slice(0, 1).map((p) => ({ ...p, division: "Storage", divisionId: "storage-solutions" })),
    ...electricalProducts.slice(0, 1).map((p) => ({ ...p, division: "Electrical", divisionId: "electrical-enclosures" })),
    ...fireDoorProducts.slice(0, 1).map((p) => ({ ...p, division: "Fire Doors", divisionId: "fire-resistant-doors" })),
    ...artProducts.slice(0, 1).map((p) => ({ ...p, division: "Art", divisionId: "art-sculptures" })),
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Featured Products"
          subtitle="A selection of our manufactured products across medical, storage, and lighting divisions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30 h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                  {product.image ? (
                    <FitBlurImage
                      src={product.image}
                      alt={product.name}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy-100 dark:from-navy-800 to-navy-50 dark:to-navy-900 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto rounded-full bg-navy-200/50 dark:bg-navy-700/50 flex items-center justify-center mb-3">
                          <span className="text-navy-500 dark:text-navy-300 font-heading font-bold text-xl">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-navy-400 dark:text-navy-300 text-xs tracking-widest uppercase font-medium">
                          Product Image
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {product.category && (
                      <span className="text-navy-500 dark:text-navy-300 text-xs font-medium tracking-widest uppercase">
                        {product.category}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-navy-800 px-2 py-0.5 rounded">
                      {product.division}
                    </span>
                  </div>
                  <Link href={`/solutions/${product.divisionId}/${product.slug}`}>
                    <h3 className="mt-1 font-heading font-semibold text-lg text-navy-900 dark:text-white hover:text-navy-600 dark:hover:text-navy-200 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-2 flex-1 line-clamp-3">
                    <Markdown text={product.description} as="span" className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" />
                  </div>
                  {product.benefits && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.benefits.slice(0, 3).map((benefit) => (
                        <span
                          key={benefit}
                          className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-navy-800 px-2.5 py-1 rounded-md"
                        >
                          <Markdown text={benefit} as="span" />
                        </span>
                      ))}
                    </div>
                  )}
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