"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { divisions } from "@/data/site";

interface IndustrySolutionsProps {
  title?: string;
  subtitle?: string;
  divisionIds: string[];
}

export function IndustrySolutions({ title = "Our Solutions", subtitle, divisionIds }: IndustrySolutionsProps) {
  const relevantDivisions = divisions.filter((d) => divisionIds.includes(d.id));

  if (relevantDivisions.length === 0) return null;

  return (
    <section id="solutions" className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {relevantDivisions.map((div) => (
            <motion.div key={div.id} variants={staggerItem}>
              <Link
                href={div.href}
                className="group block bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading font-bold text-lg text-navy-900 dark:text-white group-hover:text-navy-500 dark:group-hover:text-blue-300 transition-colors">
                  {div.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {div.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-navy-500 dark:text-navy-200">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
