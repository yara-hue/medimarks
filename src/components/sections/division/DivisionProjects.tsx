"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Project {
  title: string;
  industry: string;
  description: string;
  image?: string;
  href?: string;
}

interface DivisionProjectsProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
}

export function DivisionProjects({
  title = "Featured Projects",
  subtitle,
  projects,
}: DivisionProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={staggerItem}>
              <Link
                href={project.href || "#"}
                className="group block bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/9] bg-gray-100 dark:bg-navy-800 relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 dark:from-navy-800 dark:to-navy-900 flex items-center justify-center">
                      <span className="text-navy-300 dark:text-navy-600 text-sm">Project</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs text-navy-500 dark:text-navy-200 font-medium tracking-widest uppercase">
                    {project.industry}
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-lg text-navy-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
