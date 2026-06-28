"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 text-center">
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to Build Something Exceptional?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your project and see how we can help.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg" variant="cta">
              Contact Us
            </Button>
            <Button
              href="/solutions"
              size="lg"
              variant="secondary"
              className="border-white/40 text-white hover:bg-white/15 dark:border-white/40 dark:text-white"
            >
              Explore Solutions
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
