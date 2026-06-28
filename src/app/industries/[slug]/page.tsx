import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, type Industry } from "@/data/site";
import { IndustryHero } from "@/components/sections/industry/IndustryHero";
import { IndustryChallenges } from "@/components/sections/industry/IndustryChallenges";
import { IndustrySolutions } from "@/components/sections/industry/IndustrySolutions";
import { IndustryProjects } from "@/components/sections/industry/IndustryProjects";
import { IndustryWhyWork } from "@/components/sections/industry/IndustryWhyWork";
import { IndustryCTA } from "@/components/sections/industry/IndustryCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.title} | Industries`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug) as Industry | undefined;

  if (!industry) notFound();

  return (
    <>
      <IndustryHero
        title={industry.title}
        tagline={industry.tagline}
        description={industry.description}
        heroImage={industry.heroImage}
        eyebrow={`${industry.title} Industry`}
      />
      <IndustryChallenges
        subtitle="Understanding the unique challenges faced by the industry."
        challenges={industry.challenges}
      />
      <IndustrySolutions
        subtitle="Our divisions deliver solutions tailored to this sector."
        divisionIds={industry.divisions}
      />
      <IndustryProjects projects={[]} />
      <IndustryWhyWork
        subtitle="Experience and expertise you can count on."
        proofPoints={industry.proofPoints}
        certifications={industry.certifications}
      />
      <IndustryCTA
        title={`Let's Discuss Your ${industry.title} Project`}
        description="Contact our team to learn how MediMarks can support your next initiative."
      />
    </>
  );
}
