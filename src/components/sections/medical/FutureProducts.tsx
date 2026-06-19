"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const rehabAreas = [
  {
    title: "Clinic-grade exercise systems",
    description:
      "Precision-controlled exercise equipment designed for clinical rehabilitation environments. Combining durable steel fabrication with smooth actuator-driven movement for safe, repeatable therapy protocols.",
  },
  {
    title: "Compact rehab equipment",
    description:
      "Space-efficient rehabilitation machines built for clinics and physiotherapy centers. Leveraging MediMarks' lifting-column and actuator expertise to create compact, reliable devices that fit standard clinical rooms.",
  },
  {
    title: "Physiotherapy use cases",
    description:
      "Targeted equipment for post-surgery recovery, injury rehabilitation, and mobility restoration. Designed with input from therapy professionals to address real clinical needs.",
  },
];

export function MedicalFuture() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-navy-500 font-medium text-sm tracking-widest uppercase">
            Future Pipeline
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
            Rehabilitation &amp; Physiotherapy Equipment
          </h2>
          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
            Fitness-equipment mechanisms can become medical/rehabilitation products
            when designed for clinics, physiotherapy centers, and controlled exercise.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rehabAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800/50 flex items-center justify-center mb-4">
                <span className="text-navy-500 dark:text-navy-300 font-heading font-bold text-lg">
                  {String(index + 1)}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy-900 dark:text-white mb-2">
                {area.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl"
        >
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Near-field extension: physiotherapy and rehabilitation centers already buy
            equipment that combines mechanics, controls, safety, and service requirements.
            MediMarks can use its lifting-column, actuator, steel fabrication, and
            service-driven design experience to develop safer, easier-to-maintain rehab
            machines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 bg-white dark:bg-navy-900 rounded-xl border border-dashed border-gray-200 dark:border-navy-700 max-w-3xl"
        >
          <p className="text-gray-400 dark:text-gray-500 text-sm italic leading-relaxed">
            This remains a future pipeline category; the first commercial focus stays on
            validated ophthalmic electrical tables and refractive-unit platform.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
