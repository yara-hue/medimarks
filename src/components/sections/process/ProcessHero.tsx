"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function ProcessHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection delay={0.1}>
            <span className="text-xs tracking-widest uppercase text-navy-300 font-medium">
              Process
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight">
              How We Build the Extraordinary
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              From initial concept to final installation, our six-step engineering process ensures precision, quality, and complete client satisfaction.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="cta">
                Request Consultation
              </Button>
              <Button href="/projects" size="lg" variant="secondary" className="border-white/40 text-white hover:bg-white/15 dark:border-white/40 dark:text-white">
                View Our Projects
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-900 to-transparent" />
    </section>
  );
}
