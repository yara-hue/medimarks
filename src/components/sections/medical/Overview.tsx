"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function MedicalOverview() {
  return (
    <section className="py-6 md:py-10 lg:py-14 bg-white dark:bg-navy-900">
      <Container>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">Overview</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 leading-tight">
              Our Founding Division
            </h2>
            <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                As MediMarks&apos; founding division, Medical Furniture represents our core
                expertise and commitment to quality. Since 2015, we have been designing
                and manufacturing specialized equipment for healthcare facilities across
                the region.
              </p>
              <p>
                Our product range includes examination tables, patient chairs, ophthalmic
                equipment, and mobility solutions — each engineered for the unique demands
                of clinical environments.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-8"
        >
          {[
            { number: "2015", label: "Established" },
            { number: "5+", label: "Product Lines" },
            { number: "Regional", label: "Market Reach" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 dark:bg-navy-900/50 rounded-xl p-8 text-center">
              <div className="font-heading font-bold text-3xl text-navy-500">{stat.number}</div>
              <div className="mt-1 text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
