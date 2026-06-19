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
    sm: "px-5 py-2.5 text-sm rounded-lg",
    md: "px-7 py-3 text-base rounded-xl",
    lg: "px-9 py-4 text-lg rounded-xl",
  };

  const variantStyles = {
    primary:
      "bg-navy-500 text-white hover:bg-navy-600 active:bg-navy-700",
    secondary:
      "border-2 border-navy-500 text-navy-500 bg-transparent hover:bg-navy-500 hover:text-white",
    ghost: "text-navy-500 hover:bg-navy-500/5",
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
