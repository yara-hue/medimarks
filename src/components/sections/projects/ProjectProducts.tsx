"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { divisions } from "@/data/site";

interface ProjectProductsProps {
  divisionIds: string[];
}

export function ProjectProducts({ divisionIds }: ProjectProductsProps) {
  const relevantDivisions = divisions.filter((d) => divisionIds.includes(d.id));

  if (relevantDivisions.length === 0) return null;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-navy-900">
      <Container>
        <SectionHeading title="Products Used" subtitle="Divisions involved in this project." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {relevantDivisions.map((div) => (
            <motion.div key={div.id} variants={staggerItem}>
              <Link
                href={div.href}
                className="group block bg-gray-50 dark:bg-navy-800/50 rounded-xl p-6 border border-gray-200/60 dark:border-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <h4 className="font-heading font-bold text-base text-navy-900 dark:text-white group-hover:text-navy-500 dark:group-hover:text-blue-300 transition-colors">
                  {div.title}
                </h4>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                  {div.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-navy-500 dark:text-navy-200">
                  View division
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
