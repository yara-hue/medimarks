"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function LightingCTA() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-indigo-800" />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `linear-gradient(45deg, #ffffff 1px, transparent 1px)`, backgroundSize: "30px 30px" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Planning an Urban Project?</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">Contact us to discuss your lighting requirements and explore how our solutions can enhance your space.</p>
          <div className="mt-8">
            <Button href="/contact" size="lg" className="bg-white text-navy-900 hover:bg-gray-100 dark:bg-white dark:text-navy-900">Request Information</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
