"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

interface DivisionHeroProps {
  title: string;
  description: string;
  image?: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function DivisionHero({
  title,
  description,
  image,
  eyebrow,
  primaryCta = { label: "View Products", href: "#products" },
  secondaryCta = { label: "Request Consultation", href: "/contact" },
}: DivisionHeroProps) {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-14 md:pt-16">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${image}")` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #0E3A31 0%, #0E3A31 35%, #0E3A31 50%, #16594C 60%, #16594C 68%, #1B6E5F 78%, #1D7C69 88%, #1F8A77 95%, #1F8A77 100%)",
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
            {eyebrow && (
              <span className="text-xs tracking-widest uppercase text-navy-300 font-medium">
                {eyebrow}
              </span>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
              {title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={primaryCta.href} size="lg" variant="cta">
                {primaryCta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                size="lg"
                variant="secondary"
                className="border-white/40 text-white hover:bg-white/15 dark:border-white/40 dark:text-white"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
