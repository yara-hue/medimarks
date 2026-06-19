"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CompanyOverview() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-navy-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-5xl font-heading font-bold text-white/20">2015</div>
                  <div className="mt-2 text-white/40 text-sm tracking-widest uppercase">
                    Founded
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    {["Medical Furniture", "Storage Solutions", "Light Poles", "Art & Sculpture"].map(
                      (item) => (
                        <div key={item} className="text-white/60 text-xs tracking-wide">
                          {item}
                        </div>
                      )
                    )}
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
