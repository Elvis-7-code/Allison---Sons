export const products = [
  // ========== BUILDING STONES ==========
  {
    id: 1,
    name: "Kab Stones (Premium)",
    category: "stones",
    subcategory: "building",
    price: 45,
    unit: "piece",
    minOrder: 100,
    image: "🪨",
    description: "High-quality machine-cut kab stones, uniform size",
    inStock: true,
    popular: true
  },
  {
    id: 2,
    name: "Kabros (Grade A)",
    category: "stones",
    subcategory: "building", 
    price: 55,
    unit: "piece",
    minOrder: 100,
    image: "🧱",
    description: "Premium kabros for durable wall construction",
    inStock: true,
    popular: true
  },
  {
    id: 3,
    name: "Chipping Stones - 1/2\"",
    category: "stones",
    subcategory: "aggregates",
    price: 3800,
    unit: "ton",
    minOrder: 1,
    image: "🪨",
    description: "Small chipping stones ideal for concrete mix",
    inStock: true,
    popular: false
  },
  {
    id: 4,
    name: "Hardcore Stones",
    category: "stones",
    subcategory: "aggregates",
    price: 3500,
    unit: "ton",
    minOrder: 1,
    image: "🪨",
    description: "Rubble stones for foundation filling",
    inStock: true,
    popular: false
  },

  // ========== CEMENT ==========
  {
    id: 5,
    name: "Bamburi Cement - 42.5",
    category: "cement",
    subcategory: "cement",
    price: 750,
    unit: "bag",
    minOrder: 1,
    image: "🧱",
    description: "High-grade Portland cement, 50kg bag",
    inStock: true,
    popular: true
  },
  {
    id: 6,
    name: "Simba Cement - 32.5",
    category: "cement",
    subcategory: "cement",
    price: 700,
    unit: "bag",
    minOrder: 1,
    image: "🧱",
    description: "General purpose cement for all construction",
    inStock: true,
    popular: true
  },
  {
    id: 7,
    name: "Nyahururu Cement",
    category: "cement",
    subcategory: "cement",
    price: 680,
    unit: "bag",
    minOrder: 1,
    image: "🧱",
    description: "Cost-effective quality cement",
    inStock: true,
    popular: false
  },

  // ========== SLABS & BLOCKS ==========
  {
    id: 8,
    name: "Paving Slabs - 300x300",
    category: "slabs",
    subcategory: "paving",
    price: 180,
    unit: "piece",
    minOrder: 50,
    image: "🔲",
    description: "Interlocking paving slabs for driveways",
    inStock: true,
    popular: true
  },
  {
    id: 9,
    name: "Paving Slabs - 400x400",
    category: "slabs",
    subcategory: "paving",
    price: 250,
    unit: "piece",
    minOrder: 50,
    image: "🔲",
    description: "Large format paving slabs",
    inStock: true,
    popular: false
  },
  {
    id: 10,
    name: "Hollow Blocks - 6 inch",
    category: "slabs",
    subcategory: "blocks",
    price: 220,
    unit: "piece",
    minOrder: 100,
    image: "🧱",
    description: "Standard hollow concrete blocks",
    inStock: true,
    popular: true
  },

  // ========== AGGREGATES (Ballast, Sand) ==========
  {
    id: 11,
    name: "Ballast - 3/4\"",
    category: "aggregates",
    subcategory: "ballast",
    price: 4500,
    unit: "ton",
    minOrder: 1,
    image: "🪨",
    description: "Crushed ballast for concrete mix",
    inStock: true,
    popular: true
  },
  {
    id: 12,
    name: "Ballast - 1/2\"",
    category: "aggregates",
    subcategory: "ballast",
    price: 4300,
    unit: "ton",
    minOrder: 1,
    image: "🪨",
    description: "Smaller ballast for fine concrete work",
    inStock: true,
    popular: false
  },
  {
    id: 13,
    name: "River Sand",
    category: "aggregates",
    subcategory: "sand",
    price: 3200,
    unit: "ton",
    minOrder: 1,
    image: "🏖️",
    description: "Clean river sand for plastering and bricklaying",
    inStock: true,
    popular: true
  },
  {
    id: 14,
    name: "Building Sand",
    category: "aggregates",
    subcategory: "sand",
    price: 2800,
    unit: "ton",
    minOrder: 1,
    image: "🏖️",
    description: "Coarse sand for foundation work",
    inStock: true,
    popular: true
  },

  // ========== DRAINAGE (Channel Drain, Roofers) ==========
  {
    id: 15,
    name: "Channel Drain - 1m",
    category: "drainage",
    subcategory: "channels",
    price: 1850,
    unit: "piece",
    minOrder: 5,
    image: "〰️",
    description: "Slotted channel drain for surface water",
    inStock: true,
    popular: true
  },
  {
    id: 16,
    name: "Channel Drain - 0.5m",
    category: "drainage",
    subcategory: "channels",
    price: 950,
    unit: "piece",
    minOrder: 5,
    image: "〰️",
    description: "Half-meter channel drain",
    inStock: true,
    popular: false
  },
  {
    id: 17,
    name: "Galvanized Roofers",
    category: "drainage",
    subcategory: "roofing",
    price: 4250,
    unit: "piece",
    minOrder: 10,
    image: "🔩",
    description: "Galvanized roofers for gutter installation",
    inStock: true,
    popular: true
  },

  // ========== STEEL (Channels) ==========
  {
    id: 18,
    name: "Mild Steel Channel - 3m",
    category: "steel",
    subcategory: "channels",
    price: 2850,
    unit: "piece",
    minOrder: 5,
    image: "📏",
    description: "C-channel for structural support",
    inStock: true,
    popular: true
  },
  {
    id: 19,
    name: "Mild Steel Channel - 6m",
    category: "steel",
    subcategory: "channels",
    price: 5500,
    unit: "piece",
    minOrder: 5,
    image: "📏",
    description: "Long span C-channel",
    inStock: true,
    popular: false
  },
  {
    id: 20,
    name: "U-Channel - 3m",
    category: "steel",
    subcategory: "channels",
    price: 3100,
    unit: "piece",
    minOrder: 5,
    image: "📏",
    description: "U-shaped channel for framing",
    inStock: true,
    popular: false
  }
];

// Get unique categories
export const categories = [
  { id: "all", name: "All Products", icon: "📦" },
  { id: "stones", name: "Stones", icon: "🪨" },
  { id: "cement", name: "Cement", icon: "🧱" },
  { id: "slabs", name: "Slabs & Blocks", icon: "🔲" },
  { id: "aggregates", name: "Aggregates", icon: "🏖️" },
  { id: "drainage", name: "Drainage", icon: "〰️" },
  { id: "steel", name: "Steel", icon: "📏" }
];