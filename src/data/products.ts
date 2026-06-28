import {
  divisions,
  medicalProducts,
  storageProducts,
  lightingProducts,
  artProducts,
  automationProducts,
  electricalProducts,
  fireDoorProducts,
} from "@/data/site";



export type ProductEntry = {
  name: string;
  slug: string;
  description: string;
  image?: string;
  images?: string[];
  category?: string;
  benefits?: string[];
  specs?: string[];
};

interface DivisionMapEntry {
  divisionId: string;
  products: ProductEntry[];
}

const productMap: Record<string, ProductEntry[]> = {
  "medical-furniture": medicalProducts as ProductEntry[],
  "storage-solutions": storageProducts as ProductEntry[],
  "decorative-light-poles": lightingProducts as ProductEntry[],
  "art-sculptures": artProducts as ProductEntry[],
  "automation": automationProducts as ProductEntry[],
  "electrical-enclosures": electricalProducts as ProductEntry[],
  "fire-resistant-doors": fireDoorProducts as ProductEntry[],
};

export const divisionProductMap: Record<string, DivisionMapEntry> = {};
for (const div of divisions) {
  const products = productMap[div.id] || [];
  divisionProductMap[div.id] = { divisionId: div.id, products };
}

export function getAllProducts(): ProductEntry[] {
  const all: ProductEntry[] = [];
  for (const entry of Object.values(divisionProductMap)) {
    all.push(...entry.products);
  }
  return all;
}
