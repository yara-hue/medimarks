"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const phases = [
  { label: "Consult", duration: "1–2 wks", color: "bg-navy-600 dark:bg-navy-500" },
  { label: "Design", duration: "2–4 wks", color: "bg-navy-500 dark:bg-navy-400" },
  { label: "Prototype", duration: "3–5 wks", color: "bg-navy-400" },
  { label: "Manufacture", duration: "4–8 wks", color: "bg-navy-600 dark:bg-navy-500" },
  { label: "QA", duration: "1–2 wks", color: "bg-navy-500 dark:bg-navy-400" },
  { label: "Deliver", duration: "1–2 wks", color: "bg-navy-400" },
];

export function Timeline() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading
          title="Estimated Timeline"
          subtitle="Typical duration for each phase. Timelines vary based on project complexity and scope."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="hidden md:flex items-stretch rounded-xl overflow-hidden border border-gray-200 dark:border-navy-700">
            {phases.map((phase) => (
              <motion.div
                key={phase.label}
                variants={staggerItem}
                className="flex-1 flex flex-col items-center text-center p-5 border-r border-gray-200 dark:border-navy-700 last:border-r-0"
              >
                <div className={`w-full h-2 rounded-full ${phase.color} mb-4`} />
                <span className="font-heading font-semibold text-sm text-navy-900 dark:text-white">
                  {phase.label}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {phase.duration}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden space-y-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.label}
                variants={staggerItem}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-navy-700"
              >
                <div className={`w-3 h-3 rounded-full ${phase.color} shrink-0`} />
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-heading font-semibold text-sm text-navy-900 dark:text-white">
                    {phase.label}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {phase.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
