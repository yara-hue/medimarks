import { cn } from "@/lib/utils";

interface SkipLinkProps {
  className?: string;
  href?: string;
}

export function SkipLink({ className, href = "#main-content" }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "fixed top-0 left-0 z-[100] -translate-y-full focus:translate-y-0",
        "bg-white text-navy-900 px-4 py-3 text-sm font-medium shadow-lg",
        "transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-navy-500",
        className
      )}
    >
      Skip to main content
    </a>
  );
}
