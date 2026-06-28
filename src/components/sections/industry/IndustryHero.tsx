"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

interface IndustryHeroProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  eyebrow: string;
}

export function IndustryHero({ title, tagline, description, heroImage, eyebrow }: IndustryHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-20 md:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #0A1628 0%, #0A1628 35%, #0C1C36 50%, #0F2040 60%, #122648 68%, #162D4A 78%, #1A3555 88%, #1E3A5F 95%, #1E3A5F 100%)",
        }}
      />
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-900 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-3xl">
          <AnimatedSection delay={0.1}>
            <span className="text-xs tracking-widest uppercase text-navy-300 font-medium">
              {eyebrow}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              {title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="mt-4 text-lg md:text-xl text-blue-200 font-medium">
              {tagline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#solutions" size="lg" variant="cta">
                Explore Solutions
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="border-white/40 text-white hover:bg-white/15 dark:border-white/40 dark:text-white"
              >
                Request Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
