"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const facilities = [
  {
    title: "Main Manufacturing Facility",
    description: "15,000 sqm production facility in Al-Khobar with CNC machining, welding, and assembly lines serving all seven divisions.",
    image: "",
  },
  {
    title: "Medical Equipment Assembly",
    description: "Clean assembly area for medical furniture and ophthalmic equipment following ISO 13485 quality standards.",
    image: "",
  },
  {
    title: "CNC Machining Workshop",
    description: "Multi-axis CNC routers, laser cutters, and precision machining centers for metal and composite fabrication.",
    image: "",
  },
  {
    title: "Quality Testing Lab",
    description: "In-house testing facility for load capacity, electrical safety, material strength, and product durability verification.",
    image: "",
  },
];

export function AboutFacilities() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title="Our Facilities" subtitle="Where engineering happens — our manufacturing and testing facilities." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {facilities.map((facility) => (
            <motion.div key={facility.title} variants={staggerItem}>
              <div className="bg-gray-50 dark:bg-navy-800/50 rounded-xl overflow-hidden border border-gray-200/60 dark:border-navy-700">
                <div className="aspect-[16/9] bg-navy-100 dark:bg-navy-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-navy-200/50 dark:bg-navy-700/50 flex items-center justify-center mb-3">
                      <span className="text-navy-500 dark:text-navy-300 font-heading font-bold text-lg">
                        {facility.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-navy-400 dark:text-navy-500 text-xs tracking-widest uppercase font-medium">
                      Facility Photo
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
