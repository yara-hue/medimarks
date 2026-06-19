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
        "max-w-3xl mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2
        className="text-4xl md:text-5xl font-heading font-bold text-navy-900 leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
