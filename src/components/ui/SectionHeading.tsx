import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-8 md:mb-10",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 dark:text-white leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
