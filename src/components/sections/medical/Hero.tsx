"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function MedicalHero() {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-14 md:pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/products/product-t3000.jpg)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0E3A31 0%, #0E3A31 35%, #0E3A31 50%, #16594C 60%, #16594C 68%, #1B6E5F 78%, #1D7C69 88%, #1F8A77 95%, #1F8A77 100%)" }} />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #ffffff 1px, transparent 1px),
            linear-gradient(-45deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-900 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-blue-200 font-medium text-sm tracking-widest uppercase">Flagship Division</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            Medical Furniture
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Precision-engineered medical equipment designed for healthcare professionals
            who demand reliability, functionality, and quality.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#products" size="lg" className="bg-white text-navy-900 hover:bg-gray-100 dark:bg-white dark:text-navy-900">
              View Products
            </Button>
            <Button href="/contact" size="lg" variant="secondary" className="border-white/40 text-white hover:bg-white/15 dark:border-white/40 dark:text-white">
              Request a Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
