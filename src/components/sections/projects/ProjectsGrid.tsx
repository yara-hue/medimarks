"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectCardData {
  slug: string;
  title: string;
  industry: string;
  division: string;
  description: string;
  images: string[];
}

interface ProjectsGridProps {
  projects: ProjectCardData[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 dark:text-gray-500 text-lg">
          No projects match your filters. Try adjusting your selection.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={staggerItem}>
          <Link
            href={`/projects/${project.slug}`}
            className="group block bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/9] bg-gray-100 dark:bg-navy-800 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${project.images[0] || ""}")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-white">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-medium">View Project</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] tracking-widest uppercase font-medium text-navy-500 dark:text-blue-300 bg-navy-50 dark:bg-navy-800 px-2 py-0.5 rounded">
                  {project.division}
                </span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500">
                  {project.industry}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-navy-900 dark:text-white line-clamp-2">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
