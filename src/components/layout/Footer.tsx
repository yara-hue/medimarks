import Link from "next/link";
import { siteConfig, navigation } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const solutionsItem = navigation.find((item) => item.children);

  return (
    <footer className="bg-navy-900 text-gray-300">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-white tracking-tight"
            >
              MediMarks
              <span className="block text-[10px] font-sans font-normal text-gray-500 tracking-widest uppercase -mt-1">
                Innovation by Design
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation
                .filter((item) => !item.children)
                .map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutionsItem?.children?.map((child) => (
                <li key={child.label}>
                  <Link
                    href={child.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{siteConfig.location}</li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-gray-500">{siteConfig.hours}</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {["LinkedIn", "Facebook", "Instagram"].map((social) => (
                <span
                  key={social}
                  className="text-xs text-gray-500 bg-navy-800 px-3 py-1.5 rounded-md cursor-default"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MediMarks. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Innovation by Design for Healthcare, Infrastructure, and Modern Spaces
          </p>
        </div>
      </Container>
    </footer>
  );
}
