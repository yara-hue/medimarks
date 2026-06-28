export const siteConfig = {
  name: "MediMarks",
  tagline: "Innovation by Design for Healthcare, Infrastructure, and Modern Spaces",
  description:
    "Since 2015, MediMarks has been designing and manufacturing specialized products that combine functionality, quality, and innovation across multiple industries.",
  founded: 2015,
  email: "info@medimarks.com",
  phone: "+966 59 225 3166",
  hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
  location: "Al-Khobar, Saudi Arabia",
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
      { label: "Automation", href: "/solutions/automation" },
      { label: "Electrical Enclosures", href: "/solutions/electrical-enclosures" },
      { label: "Fire Resistant Doors", href: "/solutions/fire-resistant-doors" },
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
  {
    id: "automation",
    title: "Automation",
    description: "CNC machining, linear actuators, and custom automation solutions.",
    href: "/solutions/automation",
    icon: "Cog",
  },
  {
    id: "electrical-enclosures",
    title: "Electrical Enclosures",
    description: "Industrial electrical boxes, cabinets, and cable management systems.",
    href: "/solutions/electrical-enclosures",
    icon: "Zap",
  },
  {
    id: "fire-resistant-doors",
    title: "Fire Resistant Doors",
    description: "Certified fire-rated doors and isolation materials for commercial safety.",
    href: "/solutions/fire-resistant-doors",
    icon: "Shield",
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
    name: "Three-Table Refractive Unit",
    slug: "three-table-refractive-unit",
    category: "Ophthalmic Equipment",
    description:
      "A specialized examination table designed for refractive procedures in ophthalmic clinics. Engineered for stability, precision, and patient comfort.",
    specs: [
      "Frame Construction: Heavy-duty welded steel with chemical-resistant, non-porous surfaces optimized for clinical disinfection.",
      "Patient Support: Chair equipped with two medical-grade, low-noise, low-voltage insulated motors certified to IEC 60601-1 and IEC 60601-2-52 standards, featuring an integrated fail-safe static brake.",
      "Table Movement: Motorized rotating tables with intelligent speed control for soft start/stop, fluid positioning, and silent micro-stepping vibration isolation.",
      "Safety Metrics: Multi-point system including active anti-crush sensors and electronic pinch-point detection.",
      "Power Architecture: Integrated medical-grade power supply featuring an automatic universal input-voltage range selector, compliant with IEC 60601-1 (2xMOPP patient isolation) and IEC 60601-1-2 EMC compatibility.",
      "Electrical Ratings: Universal input voltage of 100–240V AC (50/60Hz) with an efficient maximum power consumption of 350VA to 500VA under peak simultaneous motor load.",
    ],
    benefits: [
      "Clinic Ergonomics: Optimized with a fully automated refractive layout to maximize workflow efficiency and reduce doctor strain.",
      "Charging Station: Two high-efficiency charging cradles featuring fully adjustable power intensity profiles.",
      "Examination Light: High-contrast clinical lighting equipped with step-less dimming adjustments for optimal pupillary dilation.",
      "Storage Capacity: Three spacious drawers specifically configured for organized storage of trial lenses, accessories, and tools.",
      "Refractor Arm: Micro-controlled positioning arm with built-in instant safety stop mechanisms to protect the patient's face.",
      "Wheelchair Accessibility: One-touch mode seamlessly adapts the unit configuration for wheelchair-bound patients.",
      "Emergency Stop: Instantly halts all motorized motion with a single hit to the e-stop button, any keypad button, or the foot pedal.",
      "Color Options: Available in a variety of color combinations to perfectly match your clinic's interior design and branding.",
    ],
    image: "/images/products/Medical Furniture/Refractive unit Model T3000/Refractive Unit Model T3000.jpg",
    images: [
      "/images/products/Medical Furniture/Refractive unit Model T3000/Refractive Unit Model T3000.jpg",
      "/images/products/Medical Furniture/Refractive unit Model T3000/Refractive Unit T-3000 design Inside.JPG",
      "/images/products/Medical Furniture/Refractive unit Model T3000/Custom Made KeyPad STD.Pantone colors.JPG",
    ],
  },
  {
    name: "Recliner Chair",
    slug: "recliner-chair",
    category: "Patient Seating",
    description:
      "Multi-position reclining chair designed for patient examination and recovery. Ergonomically engineered for extended use in clinical environments with electrical adjustment.",
    specs: [
      "Control Interface: Identical dual-side integrated control panels paired with a heavy-duty, low-profile foot switch console providing intuitive Up and Down directional control.",
      "Construction Material: Heavy-duty welded steel base plate and frame with a clean, medical-grade finish.",
      "Actuation System: Driven by two medical-grade, low-noise, low-voltage linear insulated motors complying with IEC 60601-1 and IEC 60601-2-52 standards.",
      "Safety Mechanisms: Integrated fail-safe static brake to prevent back-driving or unpowered descent under full patient load.",
      "Electrical Safety: Powered via an isolated low-voltage system to eliminate shock risks and comply with stringent clinical standards.",
    ],
    benefits: [
      "Dual-Sided Control Access: Equipped with identical control boards on both sides of the chair, allowing the practitioner to adjust positioning seamlessly from either left or right approaches.",
      "Hands-Free Height Adjustment: Heavy-duty foot switch allows doctors to adjust the vertical lift smoothly while keeping their hands entirely free for patient examinations.",
      "Patient Comfort: Ergonomically contoured green upholstery designed to comfortably support patients during prolonged eye procedures.",
      "Robust Load Capacity: High-strength mechanical framework built to smoothly handle heavy-duty clinical weight demands without stress.",
      "Precise Positioning: Smooth, low-voltage vertical lift ensures accurate patient alignment with slit lamps and refractor heads.",
      "Stable Solid Base: Extra-wide floor plate prevents tipping, wobbling, or shifting during patient entry and exit.",
    ],
    image: "/images/products/Medical Furniture/Recliner Chair/Recliner Electrical Chair.JPG",
    images: [
      "/images/products/Medical Furniture/Recliner Chair/Recliner Electrical Chair.JPG",
    ],
  },
  {
    name: "Electrical Instrument Table TA-60s",
    slug: "electrical-instrument-table-ta-60s",
    category: "Examination Equipment",
    description:
      "Height-adjustable electric examination table with smooth motorized positioning. Built for clinical efficiency and patient accessibility with internal thrust unit design.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Motorized height adjustment",
      "Smooth and quiet operation",
      "Internal thrust unit design",
      "Enhanced patient accessibility",
    ],
    image: "/images/products/Medical Furniture/Electrical Tables/Electrical instrument Table Model TA-60s/Electrical instrument Table TA-60s.jpg",
    images: [
      "/images/products/Medical Furniture/Electrical Tables/Electrical instrument Table Model TA-60s/Electrical instrument Table TA-60s.jpg",
      "/images/products/Medical Furniture/Electrical Tables/Electrical instrument Table Model TA-60s/Our design-internal Thrust Unit.jpg",
    ],
  },
  {
    name: "Electrical Instrument Table TB-80s",
    slug: "electrical-instrument-table-tb-80s",
    category: "Examination Equipment",
    description:
      "Advanced electrical instrument table with height control and stability-tested design. Ideal for modern clinical environments requiring precise positioning.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Height control system",
      "Stability tested design",
      "Smooth motorized operation",
      "Compact footprint",
    ],
    image: "/images/products/Medical Furniture/Electrical Tables/Electrical Instrument Table  model TB-80s/Table TB-80S with Height Control.jpg",
    images: [
      "/images/products/Medical Furniture/Electrical Tables/Electrical Instrument Table  model TB-80s/Table TB-80S with Height Control.jpg",
      "/images/products/Medical Furniture/Electrical Tables/Electrical Instrument Table  model TB-80s/Electrical Instrument Table  model TB-80s-P2_.jpg",
    ],
  },
  {
    name: "Electrical Instrument Table TA-70s",
    slug: "electrical-instrument-table-ta-70s",
    category: "Examination Equipment",
    description:
      "Discontinued model TA-70s and TA-70c electric instrument tables. Previously used in clinical settings for examination and treatment procedures.",
    specs: ["Discontinued model", "Specifications available upon request"],
    benefits: [
      "Electric height adjustment",
      "Reliable clinical performance",
      "Robust construction",
    ],
    image: "/images/products/Medical Furniture/Electrical Tables/Electrical instrument Table TA-70s (Discontinued)/TA-70s.jpg",
    images: [
      "/images/products/Medical Furniture/Electrical Tables/Electrical instrument Table TA-70s (Discontinued)/TA-70s.jpg",
      "/images/products/Medical Furniture/Electrical Tables/Electrical instrument Table TA-70s (Discontinued)/TA Electric Instrument Tables TA-70s, TA-70c.JPG",
    ],
  },
  {
    name: "Wheel Chair Electrical Instrument Table TL-70HS / TL-70HC",
    slug: "tl-70hs-tl-70hc",
    category: "Ophthalmic Equipment",
    description:
      "Specialized wheel chair electric instrument table designed for ophthalmic procedures. Features switching power supply unit and wheelchair-accessible design.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Wheelchair accessible design",
      "Electric height adjustment",
      "Ophthalmic procedure optimized",
      "Switching power supply included",
    ],
    image: "/images/products/Medical Furniture/Electrical Tables/Wheel Chair Electrical Instrument Table TL-70HS, TL-70HC/Wheel Chair E-Tables.jpg",
    images: [
      "/images/products/Medical Furniture/Electrical Tables/Wheel Chair Electrical Instrument Table TL-70HS, TL-70HC/Wheel Chair E-Tables.jpg",
      "/images/products/Medical Furniture/Electrical Tables/Wheel Chair Electrical Instrument Table TL-70HS, TL-70HC/Switching _ Power Supply Unit.jpg",
    ],
  },
];

export const storageProducts = [
  {
    name: "Metal Shelf Storage Solutions",
    slug: "metal-shelf-storage-solutions",
    category: "Heavy-Duty Storage",
    description:
      "Versatile metal shelving system with multiple models and configurations. Designed for durability, flexibility, and efficient space utilization in commercial and industrial settings.",
    specs: ["Multiple models available", "Specifications coming soon"],
    benefits: [
      "Adjustable Configuration",
      "Heavy-Duty Construction",
      "Space Optimization",
      "Long-Lasting Durability",
      "Accurate assembly design",
    ],
    image: "/images/products/Metal Shelf storage Solutions/Shelf Model 1.jpg",
    images: [
      "/images/products/Metal Shelf storage Solutions/Shelf Model 1.jpg",
      "/images/products/Metal Shelf storage Solutions/Model 1.jpg",
      "/images/products/Metal Shelf storage Solutions/Assembled2.jpg",
      "/images/products/Metal Shelf storage Solutions/Accurate Assembly.jpg",
    ],
  },
];

export const lightingProducts = [
  {
    name: "Garden Light Pole Model LPG1",
    slug: "garden-light-pole-model-lpg1",
    description: "Modern decorative light pole designed for gardens, pathways, and public landscapes with clean architectural lines.",
    image: "/images/products/Decorative Lighting Poles/Garden pole Model LPG1/Garden Light pole Model LPG1.jpg",
    images: [
      "/images/products/Decorative Lighting Poles/Garden pole Model LPG1/Garden Light pole Model LPG1.jpg",
    ],
  },
  {
    name: "Lighting Pole Model LP1",
    slug: "lighting-pole-model-lp1",
    description: "Slim-profile architectural lighting pole with brass-plated finish for golden effect. Features wire globe design for distinctive illumination.",
    image: "/images/products/Decorative Lighting Poles/Lighting Pole Model LP1/Lighting Pole Model LP1 Wire Globe.jpg",
    images: [
      "/images/products/Decorative Lighting Poles/Lighting Pole Model LP1/Lighting Pole Model LP1 Wire Globe.jpg",
      "/images/products/Decorative Lighting Poles/Lighting Pole Model LP1/Brass Plated Finish for Golden effect.jpg",
    ],
  },
  {
    name: "Lighting Pole Model LP2",
    slug: "lighting-pole-model-lp2",
    description: "Decorative lighting pole with wire globe design and robust base. Ideal for streetscapes, walkways, and urban settings.",
    image: "/images/products/Decorative Lighting Poles/Lighting pole Models LP2/Lighting Pole Model LP2.jpg",
    images: [
      "/images/products/Decorative Lighting Poles/Lighting pole Models LP2/Lighting Pole Model LP2.jpg",
      "/images/products/Decorative Lighting Poles/Lighting pole Models LP2/Lighting Pole Model LP2-Wire Globe.jpg",
      "/images/products/Decorative Lighting Poles/Lighting pole Models LP2/Lighting Pole Model LP2 Base.jpg",
    ],
  },
];

export const artProducts = [
  {
    name: "Star Alliance Stainless Steel Sculpture",
    slug: "star-alliance-stainless-steel-sculpture",
    category: "Metal Sculpture",
    description:
      "A stunning stainless steel sculpture featuring the Star Alliance emblem. Custom-fabricated for decorative and commemorative installations.",
    specs: ["Custom fabrication", "Stainless steel construction"],
    benefits: [
      "Custom design capability",
      "Durable stainless steel",
      "Weather-resistant finish",
      "Indoor/outdoor installation",
    ],
    image: "/images/products/Metalic Sculputure/Star Aliance Stainless Steel Sculpture.jpg",
    images: [
      "/images/products/Metalic Sculputure/Star Aliance Stainless Steel Sculpture.jpg",
    ],
  },
];

export const automationProducts = [
  {
    name: "4 Axis CNC Router Machine 1530",
    slug: "4-axis-cnc-router-machine-1530",
    category: "CNC Machining",
    description:
      "Advanced 4-axis CNC router machine with 1500x3000mm working area. Designed for precision cutting, engraving, and machining of various materials.",
    specs: ["4-axis operation", "1500x3000mm working area", "High-precision machining"],
    benefits: [
      "Multi-axis precision machining",
      "Large format capability",
      "Versatile material processing",
      "Industrial-grade reliability",
    ],
    image: "/images/products/Automation/4 Axis CNC Router Machine 1530.jpg",
    images: [
      "/images/products/Automation/4 Axis CNC Router Machine 1530.jpg",
      "/images/products/Automation/Assem_CNC2.JPG",
    ],
  },
  {
    name: "CNC Router Target Works",
    slug: "cnc-router-target-works",
    category: "CNC Machining",
    description:
      "Showcasing the precision and artistry of our CNC router capabilities. From artistic boards and decorative panels to wood turning and crib cradle production.",
    specs: ["Custom CNC routing", "Multi-material capability"],
    benefits: [
      "Artistic precision",
      "Custom design capability",
      "Wide range of finishes",
      "Rapid prototyping",
    ],
    image: "/images/products/Automation/Target Works of CNC Router/Artistic.jpg",
    images: [
      "/images/products/Automation/Target Works of CNC Router/Artistic.jpg",
      "/images/products/Automation/Target Works of CNC Router/Artistic Boards.jpg",
      "/images/products/Automation/Target Works of CNC Router/Boards.jpg",
      "/images/products/Automation/Target Works of CNC Router/Wood Turning.jpg",
      "/images/products/Automation/Target Works of CNC Router/Engraved Board.jpg",
      "/images/products/Automation/Target Works of CNC Router/Decoration.jpg",
      "/images/products/Automation/Target Works of CNC Router/Crib Cradle.jpg",
    ],
  },
  {
    name: "Electric Linear Actuator Model LC4",
    slug: "electric-linear-actuator-model-lc4",
    category: "Linear Actuation",
    description:
      "Component-level design electric linear actuator with lifting column. Our design includes precision-engineered components for reliable linear motion applications.",
    specs: ["Component-level design", "Lifting column integration"],
    benefits: [
      "High-precision linear motion",
      "Custom integration capability",
      "Robust construction",
      "Reliable performance",
    ],
    image: "/images/products/Automation/Electric Linear Actuator    (Component level-design ) Model LC4/Lifting Column Model LC4 (Our design component level).jpg",
    images: [
      "/images/products/Automation/Electric Linear Actuator    (Component level-design ) Model LC4/Lifting Column Model LC4 (Our design component level).jpg",
      "/images/products/Automation/Electric Linear Actuator    (Component level-design ) Model LC4/Lifting Column CL3 .jpg",
    ],
  },
  {
    name: "XZ-Base Plate Assembly",
    slug: "xz-base-plate-assembly",
    category: "Automation Components",
    description:
      "Precision-machined XZ-base plate assembly designed for automation systems. Fabricated with tight tolerances for reliable machine operation.",
    specs: ["Precision machined", "Custom fabrication"],
    benefits: [
      "High precision machining",
      "Tight tolerance control",
      "Custom design capability",
      "Industrial-grade quality",
    ],
    image: "/images/products/Automation/Assem XZ-Base Plate D2.JPG",
    images: [
      "/images/products/Automation/Assem XZ-Base Plate D2.JPG",
    ],
  },
  {
    name: "Control Module Assembly",
    slug: "control-module-assembly",
    category: "Automation Components",
    description:
      "Custom-fabricated control module assembly in metal sheets. Designed for integration into automated systems and machinery.",
    specs: ["Metal sheet fabrication", "Custom assembly"],
    benefits: [
      "Custom metal fabrication",
      "Integration-ready design",
      "Durable construction",
      "Application-specific design",
    ],
    image: "/images/products/Automation/Assem_Control Module-- Metal Sheets.JPG",
    images: [
      "/images/products/Automation/Assem_Control Module-- Metal Sheets.JPG",
    ],
  },
];

export const electricalProducts = [
  {
    name: "Electrical Box Model 1",
    slug: "electrical-box-model-1",
    category: "Electrical Enclosures",
    description:
      "Standard electrical enclosure box designed for commercial and industrial applications. Provides secure housing for electrical components.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Secure electrical housing",
      "Durable construction",
      "Standard mounting compatibility",
      "Industrial-grade protection",
    ],
    image: "/images/products/Electrical Enclosures/Electrical Box 1.jpg",
    images: [
      "/images/products/Electrical Enclosures/Electrical Box 1.jpg",
    ],
  },
  {
    name: "Electrical Box Model 2",
    slug: "electrical-box-model-2",
    category: "Electrical Enclosures",
    description:
      "Heavy-duty electrical enclosure box with enhanced capacity for larger electrical installations and component housing.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Enhanced capacity",
      "Heavy-duty protection",
      "Secure locking capability",
      "Weather-resistant design",
    ],
    image: "/images/products/Electrical Enclosures/Electrical Box 2.JPG",
    images: [
      "/images/products/Electrical Enclosures/Electrical Box 2.JPG",
    ],
  },
  {
    name: "Electrical Cables Box",
    slug: "electrical-cables-box",
    category: "Cable Management",
    description:
      "Specialized cable management enclosure designed for organizing and protecting electrical cables in commercial and industrial settings.",
    specs: ["Specifications coming soon"],
    benefits: [
      "Cable organization",
      "Protection for wiring",
      "Neat installation finish",
      "Durable construction",
    ],
    image: "/images/products/Electrical Enclosures/Electrical Cables Box.jpg",
    images: [
      "/images/products/Electrical Enclosures/Electrical Cables Box.jpg",
    ],
  },
];

export const fireDoorProducts = [
  {
    name: "MH Door 100x220",
    slug: "mh-door-100x220",
    category: "Fire Resistant Doors",
    description:
      "Fire-resistant metal door measuring 100x220 cm. Designed for commercial and industrial fire safety compliance.",
    specs: ["100x220 cm", "Fire-resistant construction"],
    benefits: [
      "Fire safety compliance",
      "Durable metal construction",
      "Standard size installation",
      "Professional finish",
    ],
    image: "/images/products/Fire Resistant Metal Doors/MH.Door 100x220.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/MH.Door 100x220.jpg",
    ],
  },
  {
    name: "MH Door 140x220 D1",
    slug: "mh-door-140x220-d1",
    category: "Fire Resistant Doors",
    description:
      "Large fire-resistant metal door measuring 140x220 cm. Design D1 with enhanced fire protection rating.",
    specs: ["140x220 cm", "Design D1", "Fire-resistant"],
    benefits: [
      "Large opening coverage",
      "Enhanced fire protection",
      "Durable metal build",
      "Professional installation",
    ],
    image: "/images/products/Fire Resistant Metal Doors/MH.Door 140X220 D1.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/MH.Door 140X220 D1.jpg",
    ],
  },
  {
    name: "MH Door 140x220 D2",
    slug: "mh-door-140x220-d2",
    category: "Fire Resistant Doors",
    description:
      "Large fire-resistant metal door measuring 140x220 cm. Design D2 with alternative configuration and finish options.",
    specs: ["140x220 cm", "Design D2", "Fire-resistant"],
    benefits: [
      "Alternative design option",
      "Fire safety certified",
      "Heavy-duty construction",
      "Custom finish available",
    ],
    image: "/images/products/Fire Resistant Metal Doors/MH.Door 140X220 D2.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/MH.Door 140X220 D2.jpg",
    ],
  },
  {
    name: "MH Swing Door 160x220",
    slug: "mh-swing-door-160x220",
    category: "Fire Resistant Doors",
    description:
      "Extra-large fire-resistant swing door measuring 160x220 cm. Designed for high-traffic commercial and industrial entries.",
    specs: ["160x220 cm", "Swing door design", "Fire-resistant"],
    benefits: [
      "Extra-large capacity",
      "Swing door convenience",
      "Fire safety compliance",
      "High-traffic durability",
    ],
    image: "/images/products/Fire Resistant Metal Doors/MH.Swing Door 160X220.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/MH.Swing Door 160X220.jpg",
    ],
  },
  {
    name: "Isolation Materials from Saudi Rock Wool",
    slug: "isolation-materials-from-saudi-rock-wool",
    category: "Fire Protection",
    description:
      "High-quality isolation materials manufactured from Saudi-sourced rock wool. Provides excellent fire resistance and thermal insulation.",
    specs: ["Saudi rock wool", "Fire resistant", "Thermal insulation"],
    benefits: [
      "Local Saudi materials",
      "Excellent fire resistance",
      "Thermal insulation",
      "Sound dampening properties",
    ],
    image: "/images/products/Fire Resistant Metal Doors/Isolation Materials From Saudi Rock Wool.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/Isolation Materials From Saudi Rock Wool.jpg",
    ],
  },
  {
    name: "Lock-Frame Assembly",
    slug: "lock-frame-assembly",
    category: "Door Hardware",
    description:
      "Precision-engineered lock-frame assembly for fire-resistant metal doors. Ensures secure closing and fire seal integrity.",
    specs: ["Custom fabrication", "Fire-rated hardware"],
    benefits: [
      "Secure closing mechanism",
      "Fire seal integrity",
      "Precision engineering",
      "Durable hardware",
    ],
    image: "/images/products/Fire Resistant Metal Doors/Lock-Frame.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/Lock-Frame.jpg",
    ],
  },
  {
    name: "Wood Laminated Fire Door",
    slug: "wood-laminated-fire-door",
    category: "Fire Resistant Doors",
    description:
      "Fire-resistant metal door with wood laminate finish. Combines the safety of fire-rated construction with aesthetic wood appearance.",
    specs: ["Wood laminate finish", "Fire-resistant core"],
    benefits: [
      "Aesthetic wood finish",
      "Fire-rated protection",
      "Durable construction",
      "Professional appearance",
    ],
    image: "/images/products/Fire Resistant Metal Doors/Wood Laminated.jpg",
    images: [
      "/images/products/Fire Resistant Metal Doors/Wood Laminated.jpg",
    ],
  },
];

export const faqs = [
  {
    q: "Where is MediMarks located?",
    a: "MediMarks is based in Al-Khobar, Saudi Arabia. Contact us for our full address and visiting hours.",
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
