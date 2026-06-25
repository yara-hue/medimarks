"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  medicalProducts, lightingProducts, storageProducts,
  artProducts, automationProducts, electricalProducts, fireDoorProducts,
} from "@/data/site";
import { FitBlurImage } from "@/components/ui/FitBlurImage";

const divisionMap: Record<string, string> = {
  "medical-furniture": "/solutions/medical-furniture",
  "storage-solutions": "/solutions/storage-solutions",
  "decorative-light-poles": "/solutions/decorative-light-poles",
  "art-sculptures": "/solutions/art-sculptures",
  "automation": "/solutions/automation",
  "electrical-enclosures": "/solutions/electrical-enclosures",
  "fire-resistant-doors": "/solutions/fire-resistant-doors",
};

interface ProductEntry {
  name: string;
  category?: string;
  description: string;
  image?: string;
  division: string;
}

const allProducts: ProductEntry[] = [
  ...medicalProducts.map((p) => ({ ...p, division: "medical-furniture" })),
  ...storageProducts.map((p) => ({ ...p, division: "storage-solutions" })),
  ...lightingProducts.map((p) => ({ ...p, division: "decorative-light-poles" })),
  ...artProducts.map((p) => ({ ...p, division: "art-sculptures" })),
  ...automationProducts.map((p) => ({ ...p, division: "automation" })),
  ...electricalProducts.map((p) => ({ ...p, division: "electrical-enclosures" })),
  ...fireDoorProducts.map((p) => ({ ...p, division: "fire-resistant-doors" })),
];



export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Featured Products"
          subtitle="A selection of our manufactured products across all divisions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product, index) => {
            const href = divisionMap[product.division];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={href}
                  className="group relative block rounded-xl overflow-hidden bg-gray-100 dark:bg-navy-800 aspect-[4/3]"
                >
                  <div className="relative w-full h-full">
                    {product.image ? (
                      <FitBlurImage
                        src={product.image}
                        alt={product.name}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-navy-100 dark:from-navy-800 to-navy-50 dark:to-navy-900 flex items-center justify-center">
                        <span className="text-navy-300 dark:text-navy-600 font-heading font-bold text-4xl">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-white font-heading font-bold text-base leading-tight">
                      {product.name}
                    </h3>
                    {product.category && (
                      <span className="text-white/60 text-xs mt-1 tracking-wider uppercase">
                        {product.category}
                      </span>
                    )}
                    <div className="mt-3 flex items-center gap-1.5 text-white/80 text-xs font-medium tracking-wide uppercase group-hover:text-white transition-colors">
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-navy-600 dark:text-navy-300 font-heading font-semibold text-sm tracking-wider uppercase hover:text-navy-800 dark:hover:text-white transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
