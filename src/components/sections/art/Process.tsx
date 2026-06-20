"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { step: "01", title: "Concept & Design", description: "We work with artists, architects, and clients to develop concepts into detailed fabrication designs." },
  { step: "02", title: "Material Selection", description: "Choosing the right materials — steel, aluminum, copper, or specialty alloys — for each unique piece." },
  { step: "03", title: "Precision Fabrication", description: "Using cutting, welding, forming, and assembly techniques to bring the design to life with accuracy." },
  { step: "04", title: "Finishing & Installation", description: "Surface treatment, patinas, coatings, and on-site installation for the completed piece." },
];

export function ArtProcess() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title="Our Fabrication Process" subtitle="From concept to installation — how we create custom art and sculpture." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-navy-900 rounded-xl p-8 border border-gray-200/60 dark:border-navy-700"
            >
              <span className="text-navy-200 font-heading font-bold text-3xl">{item.step}</span>
              <h3 className="mt-3 font-heading font-semibold text-lg text-navy-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
