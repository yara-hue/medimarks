import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  variant?: "default" | "feature" | "overlay" | "statistic" | "glass";
}

export function Card({ children, className, href, hover = true, variant = "default" }: CardProps) {
  const variantStyles = {
    default: "bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60",
    feature: "bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60 border-l-4 border-l-navy-500 dark:border-l-blue-400",
    overlay: "relative overflow-hidden bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60",
    statistic: "bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60 bg-navy-50/50 dark:bg-navy-900/50",
    glass: "bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(255,255,255,0.055)] backdrop-blur-[16px] saturate-[1.6] rounded-xl border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_0_3px_1px_rgba(255,255,255,0.35)] dark:border-white/[0.12] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_3px_1px_rgba(255,255,255,0.12)]",
  };

  const classes = cn(
    variantStyles[variant],
    variant === "glass" && hover
      ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_3px_1px_rgba(255,255,255,0.5),0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_0_3px_1px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.3)]"
      : hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
