"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, type NavItem } from "@/data/site";

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors py-2",
          pathname.startsWith(item.href)
            ? "text-navy-500"
            : "text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 mt-0.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </Link>
      {open && (
        <div
          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200/80 py-2 dark:bg-navy-800 dark:border-navy-600"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {item.children?.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className={cn(
                "block px-5 py-2.5 text-sm transition-colors",
                pathname === child.href
                  ? "text-navy-500 font-medium bg-navy-50 dark:text-navy-200 dark:bg-navy-700/50"
                  : "text-gray-600 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-700/50"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id="nav-liquid-glass" color-interpolation-filters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" xChannelSelector="R" yChannelSelector="G" scale="6" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="0.3" />
          </filter>
        </defs>
      </svg>
      <div className={cn(
        isScrolled
          ? "bg-[rgba(255,255,255,0.18)] dark:bg-[rgba(255,255,255,0.055)] backdrop-blur-[20px] saturate-[1.8] border-b border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_0_3px_1px_rgba(255,255,255,0.4)] dark:border-white/[0.12] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_3px_1px_rgba(255,255,255,0.12)]"
          : "bg-transparent"
      )}
        style={isScrolled ? { filter: "url(#nav-liquid-glass)" } : {}}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link
            href="/"
            className={cn(
              "font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors",
              isScrolled
                ? "text-navy-900 dark:text-white"
                : "text-white"
            )}
          >
            MediMarks
            <span
              className={cn(
                "block text-[10px] font-sans font-normal tracking-widest uppercase -mt-1 transition-colors",
                isScrolled
                  ? "text-gray-400 dark:text-gray-500"
                  : "text-gray-400"
              )}
            >
              Innovation by Design
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              if (item.children) {
                return <DesktopDropdown key={item.label} item={item} />;
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors py-2",
                    pathname === item.href
                      ? "text-navy-500"
                      : isScrolled
                      ? "text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                const isDark = document.documentElement.classList.toggle('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
              }}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-gray-500 hover:text-navy-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-navy-800"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              )}
              aria-label="Toggle dark mode"
            >
              <Sun className="w-4 h-4 hidden dark:block" />
              <Moon className="w-4 h-4 block dark:hidden" />
            </button>
          </div>

          <button
            className={cn(
              "lg:hidden p-3 transition-colors",
              isScrolled
                ? "text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white"
                : "text-gray-300 hover:text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full z-50 flex flex-col bg-white dark:bg-navy-900">
          <div className="flex items-center justify-between h-14 md:h-16 px-6 md:px-10 lg:px-16 border-b border-gray-100 dark:border-navy-800">
            <span className="font-heading text-xl font-bold text-navy-900 dark:text-white">
              MediMarks
            </span>
            <button
              className="p-3 text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-6 space-y-1 max-w-md mx-auto w-full">
              {navigation.map((item) => (
                <NavMobileItem key={item.label} item={item} onNavigate={() => setIsOpen(false)} />
              ))}
              <button
                onClick={() => {
                  const isDark = document.documentElement.classList.toggle('dark');
                  localStorage.setItem('theme', isDark ? 'dark' : 'light');
                }}
                className="flex items-center gap-3 w-full px-4 py-4 text-base font-medium rounded-xl transition-colors text-gray-700 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-800"
              >
                <Sun className="w-5 h-5 hidden dark:block" />
                <Moon className="w-5 h-5 block dark:hidden" />
                <span>
                  <span className="dark:hidden">Dark Mode</span>
                  <span className="hidden dark:inline">Light Mode</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavMobileItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "block px-4 py-4 text-base font-medium rounded-xl transition-colors",
          pathname === item.href
            ? "text-navy-500 bg-navy-50 dark:text-navy-200 dark:bg-navy-800"
            : "text-gray-700 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-800"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center justify-between w-full px-4 py-4 text-base font-medium rounded-xl transition-colors",
          pathname.startsWith(item.href)
            ? "text-navy-500 bg-navy-50 dark:text-navy-200 dark:bg-navy-800"
            : "text-gray-700 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-800"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      {isExpanded && (
        <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-gray-100 dark:border-navy-700 pl-4">
          {item.children?.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className={cn(
                "block px-4 py-3 text-sm rounded-lg transition-colors",
                pathname === child.href
                  ? "text-navy-500 font-medium bg-navy-50 dark:text-navy-200 dark:bg-navy-800"
                  : "text-gray-500 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-navy-800"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
