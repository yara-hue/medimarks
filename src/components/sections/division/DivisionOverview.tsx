"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

interface DivisionOverviewProps {
  title: string;
  paragraphs: string[];
  stats?: { value: string; label: string }[];
}

export function DivisionOverview({ title, paragraphs, stats }: DivisionOverviewProps) {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-navy-900">
      <Container>
        <div className="max-w-3xl">
          <AnimatedSection delay={0.1}>
            <span className="text-navy-500 dark:text-blue-300 font-medium text-sm tracking-widest uppercase">
              Overview
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight">
              {title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {stats && stats.length > 0 && (
          <AnimatedSection delay={0.3}>
            <div className="mt-16 grid sm:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-navy-900/50 rounded-xl p-8 text-center"
                >
                  <div className="font-heading font-bold text-3xl text-navy-500 dark:text-blue-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
