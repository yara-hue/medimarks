import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
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
    sm: "px-5 py-3.5 text-sm rounded-lg min-h-[44px]",
    md: "px-7 py-4 text-base rounded-xl min-h-[48px]",
    lg: "px-9 py-4 text-lg rounded-xl min-h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800 dark:bg-navy-500 dark:hover:bg-navy-400",
    secondary:
      "border-2 border-navy-700 text-navy-700 bg-transparent hover:bg-navy-700 hover:text-white dark:border-navy-300 dark:text-navy-300 dark:hover:bg-navy-300 dark:hover:text-navy-900",
    ghost: "text-navy-700 hover:bg-navy-500/10 dark:text-navy-300 dark:hover:bg-navy-300/15",
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
