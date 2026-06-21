"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  { title: "CNC Machining", description: "Precision computer-controlled cutting and shaping of metals and materials to exact specifications.", icon: "🖥" },
  { title: "Metal Fabrication", description: "Expert welding, cutting, forming, and assembly of metal structures and components.", icon: "🔧" },
  { title: "Assembly & Finishing", description: "Professional assembly, surface treatment, painting, and final quality finishing.", icon: "🎨" },
  { title: "Quality Control", description: "Systematic inspection and testing to ensure every product meets our standards.", icon: "📋" },
];

export function AboutCapabilities() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Manufacturing Capabilities"
          subtitle="Our facilities and expertise span the full manufacturing lifecycle."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-xl p-8 border border-gray-200/60 dark:border-navy-700"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center text-xl mb-5">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl overflow-hidden relative"
        >
          <div
            className="aspect-[3/1] max-w-2xl mx-auto w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/products/product-assem-echair.jpg)" }}
          >
            <div className="w-full h-full bg-navy-900/60 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white/70 text-sm tracking-widest uppercase font-medium">
                Manufacturing Facility
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
