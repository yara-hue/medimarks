"use client";

import { motion } from "framer-motion";
import { Award, FileCheck, ShieldCheck, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const certs = [
  { name: "ISO 9001:2015", description: "Quality Management System", icon: Award },
  { name: "ISO 13485", description: "Medical Devices QMS", icon: ShieldCheck },
  { name: "CE Marking", description: "European Conformity", icon: FileCheck },
  { name: "SASO", description: "Saudi Standards", icon: CheckCircle },
];

export function AboutCertifications() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-navy-800/50">
      <Container>
        <SectionHeading title="Certifications" subtitle="Standards we maintain across all operations." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className="flex items-center gap-3 bg-white dark:bg-navy-900 px-6 py-4 rounded-xl border border-gray-200/60 dark:border-navy-700"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-navy-600 dark:text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-navy-900 dark:text-white">
                    {cert.name}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {cert.description}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
