"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative min-h-[45vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="text-silver font-medium text-sm tracking-widest uppercase">Contact</span>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">Get in Touch</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s
            discuss how MediMarks can help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
