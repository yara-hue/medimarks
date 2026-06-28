"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { Project } from "@/data/site";

interface ProjectRelatedProps {
  projects: Project[];
}

export function ProjectRelated({ projects }: ProjectRelatedProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title="Related Projects" subtitle="Similar projects you might find interesting." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/9] bg-gray-100 dark:bg-navy-800 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${project.images[0] || ""}")` }}
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-widest uppercase font-medium text-navy-500 dark:text-navy-200">
                    {project.division}
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-base text-navy-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-navy-500 dark:text-navy-200">
                    View Project
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
