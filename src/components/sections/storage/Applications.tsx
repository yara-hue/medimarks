"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const applications = [
  { title: "Warehouses", description: "Heavy-duty storage for inventory and logistics operations.", icon: "🏭" },
  { title: "Retail Storage", description: "Organized backroom and display storage solutions.", icon: "🏪" },
  { title: "Industrial Facilities", description: "Workshop and production area storage systems.", icon: "⚙" },
  { title: "Commercial Spaces", description: "Office and facility storage for professional environments.", icon: "🏢" },
];

export function StorageApplications() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title="Applications" subtitle="Where our storage solutions are deployed." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-navy-900/50 rounded-xl p-8 border border-gray-100 dark:border-navy-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-heading font-semibold text-lg text-navy-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
