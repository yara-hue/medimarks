"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";

interface ProjectDetailHeroProps {
  title: string;
  client: string;
  industry: string;
  division: string;
  location: string;
  heroImage: string;
}

export function ProjectDetailHero({
  title,
  client,
  industry,
  division,
  location,
  heroImage,
}: ProjectDetailHeroProps) {
  const IndustryIcon = getIcon(
    industry === "Healthcare" ? "HeartPulse" :
    industry === "Government" ? "Building2" :
    industry === "Commercial" ? "Building2" :
    industry === "Hospitality" ? "Building2" :
    industry === "Education" ? "School" : "Building2"
  );

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-end overflow-hidden pt-20 md:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #0E3A31 0%, #0E3A31 30%, #16594C 45%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full pb-16 md:pb-20">
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] tracking-widest uppercase font-medium text-blue-300 bg-white/10 px-3 py-1 rounded">
              {division}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <IndustryIcon className="w-3.5 h-3.5" />
              {industry}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight max-w-4xl">
            {title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-navy-400">Client:</span> {client}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-navy-400">Location:</span> {location}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-8">
            <Button href="/contact" size="md" variant="cta">
              Start a Similar Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
