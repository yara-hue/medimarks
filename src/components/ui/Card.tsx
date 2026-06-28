import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  variant?: "default" | "feature" | "overlay" | "statistic";
}

export function Card({ children, className, href, hover = true, variant = "default" }: CardProps) {
  const variantStyles = {
    default: "bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60",
    feature: "bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60 border-l-4 border-l-navy-500 dark:border-l-blue-400",
    overlay: "relative overflow-hidden bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60",
    statistic: "bg-white rounded-xl border border-gray-200/60 dark:bg-navy-800 dark:border-navy-600/60 bg-navy-50/50 dark:bg-navy-900/50",
  };

  const classes = cn(
    variantStyles[variant],
    hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30",
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
