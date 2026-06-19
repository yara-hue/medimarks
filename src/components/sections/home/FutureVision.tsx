"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FutureVision() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-silver font-medium text-sm tracking-widest uppercase">
            Future Vision
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
            Expanding
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Possibilities
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 dark:text-gray-400 leading-relaxed max-w-2xl">
            As MediMarks continues to strengthen its manufacturing and engineering
            capabilities, the company aims to expand into new sectors, develop
            innovative products, and build long-term partnerships across regional
            and international markets.
          </p>
          <div className="mt-10">
            <Button
              href="/about"
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 dark:bg-white dark:text-navy-900"
            >
              Learn More About Our Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
