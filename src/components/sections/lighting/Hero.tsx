"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function LightingHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-indigo-900 to-navy-700" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`, backgroundSize: "50px 50px" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-silver font-medium text-sm tracking-widest uppercase">Decorative Lighting</span>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">Decorative Light Poles</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Architectural lighting solutions for urban and public spaces. Combining functional
            illumination with elegant design for streets, parks, and plazas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#gallery" size="lg" className="bg-white text-navy-900 hover:bg-gray-100">View Gallery</Button>
            <Button href="/contact" size="lg" variant="secondary" className="border-white/30 text-white hover:bg-white/10">Request Info</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
