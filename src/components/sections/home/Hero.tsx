"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/3 -left-12 w-[400px] h-[400px] rounded-full bg-navy-100/20 dark:bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-8 w-[320px] h-[320px] rounded-[48px] bg-navy-100/15 dark:bg-white/5 blur-3xl pointer-events-none rotate-12" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-navy-100/10 dark:bg-white/[0.03] blur-3xl pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <AnimatedSection delay={0.1}>
          <span className="inline-block text-navy-300 font-medium text-sm tracking-widest uppercase mb-4">
            Engineering Without Compromise
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight tracking-tight">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Without Compromise.
            </span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.35}>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Specialized products engineered for healthcare, infrastructure, and modern spaces — where precision meets purpose.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="cta">
              Request Consultation
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-900 to-transparent" />
    </section>
  );
}
