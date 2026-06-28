import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FitBlurImage } from "@/components/ui/FitBlurImage";
import { Markdown } from "@/components/ui/Markdown";
import { divisionProductMap, type ProductEntry } from "@/data/products";
import { divisions } from "@/data/site";

interface Props {
  params: Promise<{ division: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { division: string; slug: string }[] = [];
  for (const entry of Object.values(divisionProductMap)) {
    for (const product of entry.products) {
      params.push({ division: entry.divisionId, slug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { division, slug } = await params;
  const product = findProduct(division, slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

function findProduct(divisionId: string, slug: string): ProductEntry | undefined {
  const entry = divisionProductMap[divisionId];
  if (!entry) return undefined;
  return entry.products.find((p: { slug: string }) => p.slug === slug);
}

export default async function ProductPage({ params }: Props) {
  const { division, slug } = await params;
  const product = findProduct(division, slug);
  if (!product) notFound();

  const divInfo = divisions.find((d: { id: string }) => d.id === division);

  return (
    <main className="min-h-screen pt-20">
      <section className="py-10 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-navy-800">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-6">
            <Link href="/" className="hover:text-navy-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-navy-500 transition-colors">Solutions</Link>
            <span>/</span>
            {divInfo && (
              <>
                <Link href={divInfo.href} className="hover:text-navy-500 transition-colors">{divInfo.title}</Link>
                <span>/</span>
              </>
            )}
            <span className="text-navy-500 dark:text-navy-300 font-medium">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-navy-900/50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <div className="aspect-[4/3] rounded-2xl relative overflow-hidden bg-gray-100 dark:bg-navy-800">
                {product.image ? (
                  <FitBlurImage src={product.image} alt={product.name} />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy-100 dark:from-navy-800 to-navy-50 dark:to-navy-900 flex items-center justify-center">
                    <span className="text-navy-300 text-4xl">◈</span>
                  </div>
                )}
              </div>

              {"images" in product && Array.isArray(product.images) && product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {product.images.map((img: string, i: number) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-navy-800">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              {"category" in product && typeof product.category === "string" && (
                <span className="text-navy-500 dark:text-navy-300 text-xs font-medium tracking-widest uppercase">
                  {product.category}
                </span>
              )}
              <h1 className="mt-2 font-heading font-bold text-3xl md:text-4xl text-navy-900 dark:text-white leading-tight">
                {product.name}
              </h1>
              <div className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
                <Markdown text={product.description} />
              </div>

              {"benefits" in product && Array.isArray(product.benefits) && product.benefits.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-heading font-semibold text-lg text-navy-900 dark:text-white mb-3">Key Benefits</h2>
                  <ul className="space-y-2">
                    {product.benefits.map((b: string) => (
                      <li key={b} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-navy-400 mt-0.5 shrink-0">•</span>
                        <Markdown text={b} as="span" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {"specs" in product && Array.isArray(product.specs) && product.specs.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-heading font-semibold text-lg text-navy-900 dark:text-white mb-3">Technical Specifications</h2>
                  <ul className="space-y-2">
                    {product.specs.map((s: string) => (
                      <li key={s} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-navy-400 mt-0.5 shrink-0">•</span>
                        <Markdown text={s} as="span" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {divInfo && (
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-navy-700">
                  <Link
                    href={divInfo.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 dark:text-navy-300 hover:text-navy-800 dark:hover:text-white transition-colors"
                  >
                    ← Back to {divInfo.title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
