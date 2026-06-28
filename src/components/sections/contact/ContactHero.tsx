"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactHero() {
  return (
    <section className="relative min-h-[45vh] flex items-center overflow-hidden pt-14 md:pt-16 bg-white dark:bg-navy-900">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full text-center">
        <AnimatedSection delay={0.1}>
          <span className="text-navy-500 dark:text-blue-300 font-medium text-sm tracking-widest uppercase">
            Contact
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy-900 dark:text-white tracking-tight leading-tight">
            Let&apos;s Talk
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Reach out and let&apos;s discuss how we can help.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href={`mailto:${siteConfig.email}`}
              size="lg"
              variant="primary"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
            <Button
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              size="lg"
              variant="secondary"
              className="border-navy-300 text-navy-900 hover:bg-navy-50 dark:border-navy-600 dark:text-white dark:hover:bg-navy-800"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
