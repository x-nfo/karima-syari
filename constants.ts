import { Product } from './types';

// Menggunakan gambar terkurasi dari Unsplash dengan tema 'Modest Fashion', 'Neutral', 'High End'
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Saliha - Almond',
    category: 'Abaya',
    price: 699000,
    // Elegant Black Abaya / Modest Wear
    image: '/images/saliha almond.jpg',
    hoverImage: '/images/saliha-almond-2.webp',
    description: 'Saliha - for women who dress with faith and dignitiy. More than modest war, its a reminder of beauty in righteousness. Designed in airy crinkle fabric',
    tags: ['elegant', 'black', 'silk', 'evening'],
    isNew: true,
    colors: ['#1a1a1a', '#4a4a4a', '#8b4513'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p2',
    name: 'Safa - Light Blue',
    category: 'Abaya Denim',
    price: 699000,
    // Neutral Beige/Cream Set
    image: '/images/safa light blue 1.jpg',
    hoverImage: '/images/safa light blue 3.webp',
    description: 'Inspired by Safa - the sacred hill of purity this abaya embodies simplicity and grace. Crafted from plain denim, it reflects strength in modesty and softness in spirit.',
    tags: ['casual', 'beige', 'linen', 'summer'],
    colors: ['#d2b48c', '#f5f5dc', '#a0522d'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'p3',
    name: 'Marwah - Navy',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/marwah-navy-1.jpg',
    hoverImage: '/images/marwah-navy-3.webp',
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#800000', '#000000', '#ffc0cb'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p4',
    name: 'Katta - Tosca',
    category: 'Abaya',
    price: 785000,
    // Clean White/Sage or Minimalist
    image: '/images/tas karima.jpg',
    hoverImage: '/images/KRMA8184 copy.webp',
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['prayer', 'travel', 'sage'],
    colors: ['#556b2f', '#f0f8ff', '#708090'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p5',
    name: 'Katta - Terracotta',
    category: 'Abaya',
    price: 785000,
    // Dark Blue / Evening / Luxury
    image: '/images/KRMA8293 copy.jpg',
    hoverImage: '/images/KRMA8303 copy-min.jpg',
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['luxury', 'navy', 'velvet', 'wedding'],
    colors: ['#000080', '#4b0082'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p6',
    name: 'Hayya - Black',
    category: 'Abaya',
    price: 749000,
    // Close up / Texture / Neutral
    image: '/images/KRMA8658 copy.jpg',
    hoverImage: '/images/KRMA8665 copy.jpg',
    description: 'Inspired by Hayya - an invitation to move forward this abaya brings together feminity and strength. Modest yet empowering, in every detail.',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#808080', '#ffffff', '#000000', '#d3d3d3'],
    sizes: ['S', 'M', 'L', 'XL']
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