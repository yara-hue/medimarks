"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const milestones = [
  { year: "2015", label: "Founded in Jeddah" },
  { year: "2016", label: "First medical furniture line" },
  { year: "2018", label: "Expanded to 5 divisions" },
  { year: "2020", label: "Quality management system" },
  { year: "2022", label: "Expanded to 7 divisions" },
  { year: "Present", label: "Regional market leader" },
];

export function AboutStory() {
  return (
    <section id="story" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-navy-500 dark:text-navy-200 font-medium text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
              From Vision to Seven Divisions
            </h2>
            <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              <p>
                MediMarks was founded in 2015 with a clear vision: to create high-quality
                manufacturing solutions for the Middle East and Africa. Starting with medical
                furniture, the company quickly established a reputation for precision engineering
                and reliable delivery.
              </p>
              <p>
                Through continuous investment in capabilities, equipment, and talent, MediMarks
                expanded into seven specialized divisions — each serving a distinct industry
                while sharing the same commitment to quality and engineering excellence.
              </p>
              <p>
                Today, MediMarks employs over 100 team members across our facilities,
                delivering products to healthcare facilities, commercial projects, government
                institutions, and public spaces throughout the region.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-gray-50 dark:bg-navy-800/50 rounded-2xl p-8 md:p-10">
              <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white mb-6">
                Timeline
              </h3>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-navy-500 dark:bg-navy-500 shrink-0 mt-1.5" />
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 bg-gray-200 dark:bg-navy-700 min-h-[32px]" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className="font-heading font-bold text-sm text-navy-600 dark:text-navy-200">
                        {m.year}
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{m.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
