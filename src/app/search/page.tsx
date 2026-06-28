"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Container } from "@/components/ui/Container";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { divisionProductMap } from "@/data/products";
import { divisions } from "@/data/site";

interface SearchItem {
  name: string;
  slug: string;
  divisionId: string;
  divisionTitle: string;
  category: string;
  description: string;
  image?: string;
}

const allItems: SearchItem[] = [];
for (const div of divisions) {
  const entry = divisionProductMap[div.id];
  if (!entry) continue;
  for (const p of entry.products) {
    allItems.push({
      name: p.name,
      slug: p.slug,
      divisionId: div.id,
      divisionTitle: div.title,
      category: "category" in p && typeof p.category === "string" ? p.category : "",
      description: p.description,
      image: p.image,
    });
  }
}

const fuse = new Fuse(allItems, {
  keys: [
    { name: "name", weight: 3 },
    { name: "category", weight: 2 },
    { name: "description", weight: 1 },
    { name: "divisionTitle", weight: 1 },
  ],
  threshold: 0.4,
});

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allItems;
    return fuse.search(query.trim()).map((r) => r.item);
  }, [query]);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-10 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-navy-800">
        <Container>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white">
            Search Products
          </h1>
          <div className="mt-6 relative max-w-xl">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, category, or description..."
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-navy-700 bg-gray-50 dark:bg-navy-800 text-navy-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-navy-400/50 transition-all text-base"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          {results.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4 opacity-30">🔍</div>
              <p className="text-gray-400 dark:text-gray-500 text-lg">
                No products found for &ldquo;{query}&rdquo;
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((item) => (
                <Link
                  key={`${item.divisionId}/${item.slug}`}
                  href={`/solutions/${item.divisionId}/${item.slug}`}
                  className="group bg-white dark:bg-navy-900 rounded-xl border border-gray-200/60 dark:border-navy-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                    {item.image ? (
                      <FitBlurImage src={item.image} alt={item.name} className="transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-100 dark:from-navy-800 to-navy-50 dark:to-navy-900 flex items-center justify-center">
                        <span className="text-navy-300 text-4xl">◈</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      {item.category && (
                        <span className="text-navy-500 dark:text-navy-300 text-xs font-medium tracking-widest uppercase">
                          {item.category}
                        </span>
                      )}
                      <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-navy-800 px-2 py-0.5 rounded">
                        {item.divisionTitle}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-base text-navy-900 dark:text-white group-hover:text-navy-600 dark:group-hover:text-navy-200 transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400 dark:text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
