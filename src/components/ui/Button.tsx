import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm rounded-lg min-h-[40px]",
    md: "px-7 py-3 text-base rounded-xl min-h-[48px]",
    lg: "px-9 py-3.5 text-lg rounded-xl min-h-[56px]",
  };

  const variantStyles = {
    primary:
      "bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800 dark:bg-navy-500 dark:hover:bg-navy-400",
    secondary:
      "border-2 border-navy-700 text-navy-700 bg-transparent hover:bg-navy-700 hover:text-white dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-navy-900",
    ghost: "text-navy-700 hover:bg-navy-500/10 dark:text-blue-300 dark:hover:bg-blue-300/15",
    cta: "bg-white text-navy-900 hover:bg-gray-100 active:bg-gray-200 dark:bg-white dark:text-navy-900 dark:hover:bg-gray-200",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
