"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CompanyOverview() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">
              About MediMarks
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
              Built on Engineering,<br />
              <span className="text-navy-500">Driven by Innovation</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                MediMarks was established in 2015 with the vision of creating high-quality
                medical furniture for regional markets. Through continuous development and
                manufacturing expertise, the company expanded into additional sectors,
                delivering practical and innovative solutions across healthcare, storage
                systems, decorative infrastructure, and custom fabrication.
              </p>
              <p>
                Today, MediMarks continues to invest in product development, engineering
                excellence, and new opportunities that create value for customers and
                communities.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                About Us &rarr;
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/products/product-assem-echair.jpg)" }}
                />
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/products/product-shelf-model-1.jpg)" }}
                />
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/products/product-garden-light-pole.jpg)" }}
                />
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/products/product-star-alliance-2.jpg)" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 to-navy-800/75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-heading font-bold text-white/90">2015</div>
                  <div className="mt-2 text-white/70 text-sm tracking-widest uppercase">
                    Founded
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                    {[
                      { name: "Medical Furniture", img: "product-assem-echair.jpg" },
                      { name: "Storage Solutions", img: "product-shelf-model-1.jpg" },
                      { name: "Light Poles", img: "product-garden-light-pole.jpg" },
                      { name: "Art & Sculpture", img: "product-star-alliance-2.jpg" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg bg-cover bg-center shrink-0 border border-white/10"
                          style={{ backgroundImage: "url(/images/products/" + item.img + ")" }}
                        />
                        <span className="text-white/80 text-xs tracking-wide text-left leading-tight">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
