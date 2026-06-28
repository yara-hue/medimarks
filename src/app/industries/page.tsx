import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { industries } from "@/data/site";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "MediMarks serves healthcare, commercial, hospitality, government, and education sectors with specialized manufacturing solutions.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20 md:pt-24">
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-navy-900 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full text-center">
          <span className="text-xs tracking-widest uppercase text-navy-300 font-medium">
            Industries
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight">
            Industries We Serve
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Across five key sectors, MediMarks delivers engineered solutions that address
            real-world challenges with precision, quality, and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-navy-900">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = getIcon(industry.icon);
              return (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="group block bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-navy-300 dark:hover:border-navy-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 dark:bg-navy-800 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-navy-600 dark:text-blue-300" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy-900 dark:text-white group-hover:text-navy-500 dark:group-hover:text-blue-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {industry.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-navy-500 dark:text-blue-300 transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
