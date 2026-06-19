"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0A1628 0%, #0A1628 25%, #0F2040 45%, #162D4A 65%, #1E3A5F 85%, rgba(30,58,95,0.6) 100%)" }} />
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-heading font-bold text-white leading-[1.05] tracking-tight"
          >
            Engineering Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Healthcare, Infrastructure,
            </span>
            and Modern Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Since 2015, MediMarks has been designing and manufacturing specialized products
            that combine functionality, quality, and innovation across multiple industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/solutions" size="lg" className="bg-white text-navy-900 hover:bg-gray-100">
              Explore Our Solutions
            </Button>
            <Button href="/contact" size="lg" variant="secondary" className="border-white/30 text-white hover:bg-white/10">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
