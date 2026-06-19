"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700" />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(45deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Want to learn more?
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            We&apos;d be happy to discuss our capabilities, products, or potential partnerships.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg" className="bg-white text-navy-900 hover:bg-gray-100">
              Contact Us
            </Button>
            <Button href="/solutions" size="lg" variant="secondary" className="border-white/30 text-white hover:bg-white/10">
              View Our Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
