import { Product } from './types';

// Menggunakan gambar terkurasi dari Unsplash dengan tema 'Modest Fashion', 'Neutral', 'High End'
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Medina Silk Abaya',
    category: 'Abaya',
    price: 1250000,
    // Elegant Black Abaya / Modest Wear
    image: '/images/saliha 1.jpg',
    hoverImage: '/images/saliha 2.jpg',
    description: 'A masterpiece of minimalism. Crafted from premium Japanese Medina silk, this abaya flows like water. Perfect for evening gatherings or upscale daily wear.',
    tags: ['elegant', 'black', 'silk', 'evening'],
    isNew: true,
    colors: ['#1a1a1a', '#4a4a4a', '#8b4513'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p2',
    name: 'Sahara Earth Tone Set',
    category: 'Abaya Denim',
    price: 1450000,
    // Neutral Beige/Cream Set
    image: '/images/safa.jpg',
    hoverImage: '/images/marwah 2.jpg',
    description: 'Inspired by the dunes. A breathable linen blend two-piece set featuring a modest tunic and wide-leg trousers.',
    tags: ['casual', 'beige', 'linen', 'summer'],
    colors: ['#d2b48c', '#f5f5dc', '#a0522d'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'p3',
    name: 'Royal Chiffon Khimar',
    category: 'Khimar',
    price: 450000,
    // Maroon/Red/Dark mood
    image: '/images/marwah 1.jpg',
    hoverImage: '/images/safa 2.jpg',
    description: 'Double-layered chiffon providing full coverage without the weight. Designed for ultimate comfort and grace.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#800000', '#000000', '#ffc0cb'],
    sizes: ['Standard']
  },
  {
    id: 'p4',
    name: 'Urban Prayer Gown',
    category: 'Abaya',
    price: 850000,
    // Clean White/Sage or Minimalist
    image: '/images/tas karima.jpg',
    hoverImage: '/images/medina-silk-abaya.png',
    description: 'Compact, travel-friendly, and stylish. The modern woman\'s essential for spiritual connection anywhere.',
    tags: ['prayer', 'travel', 'sage'],
    colors: ['#556b2f', '#f0f8ff', '#708090'],
    sizes: ['Free Size']
  },
  {
    id: 'p5',
    name: 'Noor Evening Gown',
    category: 'Abaya',
    price: 2100000,
    // Dark Blue / Evening / Luxury
    image: '/images/karima biru.jpg',
    hoverImage: '/images/royal-chiffon-khimar.png',
    description: 'Hand-beaded details on soft velvet. A statement piece for weddings and galas.',
    tags: ['luxury', 'navy', 'velvet', 'wedding'],
    colors: ['#000080', '#4b0082'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p6',
    name: 'Essential Jersey Scarf',
    category: 'Khimar Bandana',
    price: 250000,
    // Close up / Texture / Neutral
    image: '/images/karima halal fair.jpg',
    hoverImage: '/images/royal-chiffon-khimar.png',
    description: 'Premium cotton jersey. Non-slip, breathable, and needs no pins.',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#808080', '#ffffff', '#000000', '#d3d3d3'],
    sizes: ['Standard']
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are 'Noora', the personal AI stylist for KARIMA, a premium Syar'i fashion brand. 
Your goal is to help women find modest, elegant outfits based on their occasion, mood, or weather.
Your tone is sophisticated, warm, and helpful (like a high-end boutique concierge).

The available products are:
${JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, category: p.category, tags: p.tags, description: p.description })))}

When answering:
1. Provide styling advice.
2. Recommend specific products from the list above by referring to their ID.
3. Keep it brief and elegant.

Output format should be valid JSON:
{
  "message": "Your styling advice text here...",
  "recommendedProductIds": ["p1", "p2"]
}
`;