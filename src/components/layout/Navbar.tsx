"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
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
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const solutionsItem = navigation.find((item) => item.children);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:bg-navy-900/90 dark:border-navy-700/50"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/medimarks/images/medimarks-logo.png"
              alt="MediMarks"
              width={600}
              height={130}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                        pathname.startsWith("/solutions")
                          ? "text-navy-500"
                          : "text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 mt-0.5" />
                    </Link>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-200 dark:bg-navy-800 dark:border-navy-600">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              "block px-5 py-2.5 text-sm transition-colors",
                              pathname === child.href
                                ? "text-navy-500 font-medium bg-navy-50 dark:text-navy-300 dark:bg-navy-700/50"
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
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors py-2",
                    pathname === item.href
                      ? "text-navy-500"
                      : "text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white"
                  )}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="lg:hidden p-3 text-gray-600 hover:text-navy-500 dark:text-gray-400 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setIsOpen(false)} />
      )}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-navy-900 border-t border-gray-200/50 dark:border-navy-700/50 shadow-lg animate-in fade-in duration-200 relative z-50">
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between w-full px-3 py-3.5 text-sm font-medium text-gray-600 hover:text-navy-500 rounded-lg transition-colors dark:text-gray-300 dark:hover:text-white"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          mobileDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="ml-4 space-y-1 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              "block px-3 py-3.5 text-sm rounded-lg transition-colors",
                              pathname === child.href
                                ? "text-navy-500 font-medium bg-navy-50 dark:text-navy-300 dark:bg-navy-700/50"
                                : "text-gray-500 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-navy-700/50"
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
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "block px-3 py-3.5 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-navy-500 bg-navy-50 dark:text-navy-300 dark:bg-navy-700/50"
                      : "text-gray-600 hover:text-navy-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-navy-700/50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
