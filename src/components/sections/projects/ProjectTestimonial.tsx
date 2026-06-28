"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ProjectTestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function ProjectTestimonial({ quote, author, role }: ProjectTestimonialProps) {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-navy-900">
      <Container>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-10 h-10 text-navy-200 dark:text-navy-700 mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-heading font-medium text-navy-900 dark:text-white leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-6">
            <cite className="not-italic">
              <span className="block font-semibold text-navy-600 dark:text-navy-200 text-sm">
                {author}
              </span>
              <span className="block text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                {role}
              </span>
            </cite>
          </footer>
        </motion.blockquote>
      </Container>
    </section>
  );
}
