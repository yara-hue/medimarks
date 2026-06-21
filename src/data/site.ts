export const siteConfig = {
  name: "MediMarks",
  tagline: "Engineering Solutions for Healthcare, Infrastructure, and Modern Spaces",
  description:
    "Since 2015, MediMarks has been designing and manufacturing specialized products that combine functionality, quality, and innovation across multiple industries.",
  founded: 2015,
  email: "info@medimarks.com",
  phone: "+966 XX XXX XXXX",
  hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
  location: "Jeddah, Saudi Arabia",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Medical Furniture", href: "/solutions/medical-furniture" },
      { label: "Storage Solutions", href: "/solutions/storage-solutions" },
      { label: "Decorative Light Poles", href: "/solutions/decorative-light-poles" },
      { label: "Art & Sculptures", href: "/solutions/art-sculptures" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const divisions = [
  {
    id: "medical-furniture",
    title: "Medical Furniture",
    description: "Precision medical equipment manufacturing for healthcare facilities.",
    href: "/solutions/medical-furniture",
    icon: "Hospital",
  },
  {
    id: "storage-solutions",
    title: "Storage Solutions",
    description: "Engineered storage systems for commercial and industrial environments.",
    href: "/solutions/storage-solutions",
    icon: "Warehouse",
  },
  {
    id: "decorative-light-poles",
    title: "Decorative Light Poles",
    description: "Architectural lighting solutions for urban and public spaces.",
    href: "/solutions/decorative-light-poles",
    icon: "Lamp",
  },
  {
    id: "art-sculptures",
    title: "Art & Sculptures",
    description: "Custom artistic fabrication and decorative engineering solutions.",
    href: "/solutions/art-sculptures",
    icon: "Sparkles",
  },
];

export const approachCards = [
  {
    title: "Design",
    description: "Transforming ideas into practical engineered solutions.",
    icon: "PenTool",
  },
  {
    title: "Manufacturing",
    description: "Precision production using modern fabrication methods.",
    icon: "Cog",
  },
  {
    title: "Quality",
    description: "Commitment to reliability, durability, and performance.",
    icon: "Shield",
  },
  {
    title: "Growth",
    description: "Continuous investment in new products and opportunities.",
    icon: "TrendingUp",
  },
];

export const valuesCards = [
  {
    title: "Engineering Excellence",
    description: "Precision-driven approach to every project we undertake.",
  },
  {
    title: "Innovation",
    description: "Continuous improvement and creative problem-solving.",
  },
  {
    title: "Quality",
    description: "Reliability and durability in every product we deliver.",
  },
  {
    title: "Integrity",
    description: "Honest partnerships and transparent business practices.",
  },
];

export const medicalProducts = [
  {
    name: "Tri Table Refractive Unit",
    category: "Ophthalmic Equipment",
    description:
      "A specialized examination table designed for refractive procedures in ophthalmic clinics. Engineered for stability, precision, and patient comfort.",
    specs: [
      "Specifications coming soon",
    ],
    benefits: [
      "Precision positioning for accurate procedures",
      "Patient comfort-focused design",
      "Durable medical-grade construction",
    ],
    image: "/images/products/product-t3000.jpg",
  },
  {
    name: "Recliner Chair",
    category: "Patient Seating",
    description:
      "Multi-position reclining chair designed for patient examination and recovery. Ergonomically engineered for extended use in clinical environments.",
    specs: [
      "Specifications coming soon",
    ],
    benefits: [
      "Multiple ergonomic positions",
      "Comfortable extended-use design",
      "Clinical-grade materials",
    ],
    image: "/images/products/product-assem-echair.jpg",
  },
  {
    name: "Electrical Table",
    category: "Examination Equipment",
    description:
      "Height-adjustable electric examination table with smooth motorized positioning. Built for clinical efficiency and patient accessibility.",
    specs: [
      "Specifications coming soon",
    ],
    benefits: [
      "Motorized height adjustment",
      "Smooth and quiet operation",
      "Enhanced patient accessibility",
    ],
    image: "/images/products/product-wheel-chair-etables.jpg",
  },
  {
    name: "Wheel Chair",
    category: "Mobility Solutions",
    description:
      "Durable, lightweight wheelchair designed for patient mobility in healthcare environments. Built for reliability and ease of use.",
    specs: [
      "Specifications coming soon",
    ],
    benefits: [
      "Lightweight yet durable frame",
      "Comfortable seating for extended use",
      "Smooth maneuverability",
    ],
    image: "/images/products/product-wheel-chair-etables-2.jpg",
  },
  {
    name: "Electric Ophthalmic Table",
    category: "Ophthalmic Equipment",
    description:
      "Motorized ophthalmic examination table with precise positioning capabilities. Optimized for eye care professionals who demand accuracy.",
    specs: [
      "Specifications coming soon",
    ],
    benefits: [
      "Precise motorized positioning",
      "Specialized ophthalmic configuration",
      "Professional-grade reliability",
    ],
  },
];

export const lightingProducts = [
  {
    name: "Garden Light Pole",
    description: "Modern decorative light pole designed for gardens, pathways, and public landscapes with clean architectural lines.",
    image: "/images/products/product-garden-light-pole.jpg",
  },
  {
    name: "LC3 Narrow Vertical",
    description: "Slim-profile architectural lighting pole for narrow streetscapes, walkways, and space-constrained urban settings.",
    image: "/images/products/product-lc3-narrow-vertical.jpg",
  },
  {
    name: "Star Alliance",
    description: "Decorative feature lighting piece for distinctive architectural settings and landmark installations.",
    image: "/images/products/product-star-alliance-2.jpg",
  },
];

export const storageProducts = [
  {
    name: "Industrial Shelving Unit",
    category: "Heavy-Duty Storage",
    description:
      "Versatile shelving system with adjustable height configurations. Designed for durability, flexibility, and efficient space utilization in commercial and industrial settings.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Adjustable Configuration",
      "Heavy-Duty Construction",
      "Space Optimization",
      "Long-Lasting Durability",
    ],
    image: "/images/products/product-shelf-model-1.jpg",
  },
];

export const faqs = [
  {
    q: "Where is MediMarks located?",
    a: "MediMarks is based in Jeddah, Saudi Arabia. Contact us for our full address and visiting hours.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve healthcare, commercial, industrial, municipal, and artistic sectors across the Middle East and Africa.",
  },
  {
    q: "Do you offer custom manufacturing?",
    a: "Yes. We welcome custom fabrication inquiries across all our divisions. Contact us with your project requirements.",
  },
  {
    q: "What is your typical lead time?",
    a: "Lead times vary by product and order volume. Please contact us for specific timelines for your project.",
  },
];
