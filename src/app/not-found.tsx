"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 text-center">
        <AnimatedSection delay={0.1}>
          <span className="text-navy-300 font-medium text-sm tracking-widest uppercase">
            Error 404
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h1 className="mt-4 text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-none">
            Page Not Found
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="mt-6 text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-10">
            <Button href="/" size="lg" variant="cta">
              Go Home
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
