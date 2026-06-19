import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
}

export function Card({ children, className, href, hover = true }: CardProps) {
  const classes = cn(
    "bg-white rounded-xl border border-gray-300 dark:bg-navy-800 dark:border-navy-500",
    hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-300/50 dark:hover:shadow-black/40",
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
