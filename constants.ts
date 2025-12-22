import { Product } from './types';

// Menggunakan gambar terkurasi dari Unsplash dengan tema 'Modest Fashion', 'Neutral', 'High End'
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Hayya - Black',
    category: 'Abaya',
    price: 749000,
    // Close up / Texture / Neutral
    image: '/images/hayya-black-1.jpg',
    hoverImage: '/images/hayya-black-3.jpg',
    images: ['/images/hayya-black-1.jpg', '/images/hayya-black-3.jpg', '/images/hayya-black-2.jpg', '/images/hayya-black-4.jpg'],
    description: 'Inspired by Hayya - an invitation to move forward this abaya brings together feminity and strength. Modest yet empowering, in every detail.',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#000000'],
    sizes: ['S', 'M', 'L', 'XL']

  },
  {
    id: 'p2',
    name: 'Hayya - Choco',
    category: 'Abaya',
    price: 749000,
    // Close up / Texture / Neutral
    image: '/images/hayya-choco-1.jpg',
    hoverImage: '/images/hayya-choco-2.webp',
    images: ['/images/hayya-choco-1.jpg', '/images/hayya-choco-2.webp', '/images/hayya-choco-3.jpg', '/images/hayya-choco-4.webp'],
    description: 'Inspired by Hayya - an invitation to move forward this abaya brings together feminity and strength. Modest yet empowering, in every detail.',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#a68483'],
    sizes: ['S', 'M', 'L', 'XL']

  },
  {
    id: 'p3',
    name: 'Saliha - Almond',
    category: 'Abaya',
    price: 699000,
    // Elegant Black Abaya / Modest Wear
    image: '/images/saliha-almond-1.webp',
    hoverImage: '/images/saliha-almond-2.webp',
    images: ['/images/saliha-almond-1.webp', '/images/saliha-almond-2.webp'],
    description: 'Saliha - for women who dress with faith and dignitiy. More than modest war, its a reminder of beauty in righteousness. Designed in airy crinkle fabric',
    tags: ['elegant', 'black', 'silk', 'evening'],
    isNew: true,
    colors: ['#dbc5ba'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p4',
    name: 'Saliha - Wood',
    category: 'Abaya',
    price: 699000,
    // Close up / Texture / Neutral
    image: '/images/saliha-wood-1.jpg',
    hoverImage: '/images/saliha-wood-2.webp',
    images: ['/images/saliha-wood-1.jpg', '/images/saliha-wood-2.webp'],
    description: 'Saliha - for women who dress with faith and dignitiy. More than modest war, its a reminder of beauty in righteousness. Designed in airy crinkle fabric',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#e4cacd'],
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
    images: ['/images/KRMA8293 copy.jpg', '/images/KRMA8303 copy-min.jpg'],
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['luxury', 'navy', 'velvet', 'wedding'],
    colors: ['#99432f'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p6',
    name: 'Katta - Dusty Pink',
    category: 'Abaya',
    price: 699000,
    // Close up / Texture / Neutral
    image: '/images/katta-dusty-pink-1.jpg',
    hoverImage: '/images/katta-dusty-pink-2.jpg',
    images: ['/images/katta-dusty-pink-1.jpg', '/images/katta-dusty-pink-2.jpg'],
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#c97f86'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p7',
    name: 'Katta - Olive',
    category: 'Abaya',
    price: 699000,
    // Close up / Texture / Neutral
    image: '/images/katta-olive-1.jpg',
    hoverImage: '/images/katta-olive-2.webp',
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['everyday', 'basic', 'grey'],
    colors: ['#635c4a'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p8',
    name: 'Katta - Moss',
    category: 'Abaya',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/katta-moss-1.webp',
    hoverImage: '/images/katta-moss-2.webp',
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['prayer', 'travel', 'sage'],
    colors: ['#988076'],
    sizes: ['S', 'M', 'L', 'XL']
  },

  {
    id: 'p9',
    name: 'Katta - Sage',
    category: 'Abaya',
    price: 785000,
    // Clean White/Sage or Minimalist
    image: '/images/katta-sage-1.webp',
    hoverImage: '/images/katta-sage-2.webp',
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['prayer', 'travel', 'sage'],
    colors: ['#cfb59d'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p10',
    name: 'Katta - Tosca',
    category: 'Abaya',
    price: 785000,
    // Clean White/Sage or Minimalist
    image: '/images/katta-tosca-1.webp',
    hoverImage: '/images/katta-tosca-2.webp',
    description: 'Katta speaks in lines and strokes - a story woven into fabric. Minimal yet expressive, designed in textured striped material for a graceful everyday wear.',
    tags: ['prayer', 'travel', 'sage'],
    colors: ['#a3a2a0'],
    sizes: ['S', 'M', 'L', 'XL']
  },

  {
    id: 'p11',
    name: 'Safa - Navy',
    category: 'Abaya Denim',
    price: 699000,
    // Neutral Beige/Cream Set
    image: '/images/safa-navy-2.webp',
    hoverImage: '/images/safa-navy-3.webp',
    images: ['/images/safa-navy-1.webp', '/images/safa-navy-2.webp', '/images/safa-navy-3.webp', '/images/safa-navy-4.webp'],
    description: 'Inspired by Safa - the sacred hill of purity this abaya embodies simplicity and grace. Crafted from plain denim, it reflects strength in modesty and softness in spirit.',
    tags: ['casual', 'beige', 'linen', 'summer'],
    colors: ['#373557'],
    sizes: ['XS', 'S', 'M', 'L']

  },
  {
    id: 'p12',
    name: 'Safa - Jeans',
    category: 'Abaya Denim',
    price: 699000,
    // Neutral Beige/Cream Set
    image: '/images/safa-jeans-0.webp',
    hoverImage: '/images/safa-jeans-3.webp',
    images: ['/images/safa-jeans-1.jpg', '/images/safa-jeans-2.jpg', '/images/safa-jeans-3.webp', '/images/safa-jeans-4.webp'],
    description: 'Inspired by Safa - the sacred hill of purity this abaya embodies simplicity and grace. Crafted from plain denim, it reflects strength in modesty and softness in spirit.',
    tags: ['casual', 'beige', 'linen', 'summer'],
    colors: ['#6c84b8'],
    sizes: ['XS', 'S', 'M', 'L']

  },
  {
    id: 'p13',
    name: 'Safa - Blue',
    category: 'Abaya Denim',
    price: 699000,
    // Neutral Beige/Cream Set
    image: '/images/safa-blue-1.webp',
    hoverImage: '/images/safa-blue-2.webp',
    description: 'Inspired by Safa - the sacred hill of purity this abaya embodies simplicity and grace. Crafted from plain denim, it reflects strength in modesty and softness in spirit.',
    tags: ['casual', 'beige', 'linen', 'summer'],
    colors: ['#86a6cf'],
    sizes: ['XS', 'S', 'M', 'L']

  },
  {
    id: 'p14',
    name: 'Safa - Light Blue',
    category: 'Abaya Denim',
    price: 699000,
    // Neutral Beige/Cream Set
    image: '/images/safa-light-blue-2.webp',
    hoverImage: '/images/safa-light-blue-3.webp',
    images: ['/images/safa-light-blue-1.jpg', '/images/safa-light-blue-2.jpg', '/images/safa-light-blue-3.webp', '/images/safa-light-blue-4.webp'],
    description: 'Inspired by Safa - the sacred hill of purity this abaya embodies simplicity and grace. Crafted from plain denim, it reflects strength in modesty and softness in spirit.',
    tags: ['casual', 'beige', 'linen', 'summer'],
    colors: ['#d3e3f5'],
    sizes: ['XS', 'S', 'M', 'L']

  },




  {
    id: 'p15',
    name: 'Marwah - Navy',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/marwah-navy-2.webp',
    hoverImage: '/images/marwah-navy-3.webp',
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#373557'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p16',
    name: 'Marwah - Jeans',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/marwah-jeans-1.webp',
    hoverImage: '/images/marwah-jeans-2.webp',
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#6c84b8'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p17',
    name: 'Marwah - Blue',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/marwah-blue-1.webp',
    hoverImage: '/images/marwah-blue-2.webp',
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#86a6cf'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p18',
    name: 'Marwah - Light Blue',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/marwah-light-blue-1.webp',
    hoverImage: '/images/marwah-light-blue-3.webp',
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#d3e3f5'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p19',
    name: 'Khimar',
    category: 'Khimar',
    price: 349000,
    // Maroon/Red/Dark mood
    image: '/images/khimar-1.webp',
    hoverImage: '/images/khimar-1.webp',
    description: 'Grace in motion. The Side Khimar brings effortless modesty in six timeless shades, perfect for both daily wear and special moments.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#deccca', '#c97f86', '#786167', '#a7b4cc', '#522e28', '#000000'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p20',
    name: 'Khimar Bandana',
    category: 'Khimar Bandana',
    price: 349000,
    // Maroon/Red/Dark mood
    image: '/images/khimar-bandana-1.webp',
    hoverImage: '/images/khimar-bandana-1.webp',
    description: 'The Khimar Bandana offers a chic and modest twist for your daily wear. Available in four easy-to-style colors.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#c2b6b9', '#99432f', '#635c4a', '#704052'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p21',
    name: 'Safa Series',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/safa-series-baju.webp',
    hoverImage: '/images/safa-series.jpg',
    images: ['/images/safa-series-baju.webp', '/images/safa-navy-1.webp', '/images/safa-navy-2.webp', '/images/safa-jeans-2.jpg', '/images/safa-jeans-3.webp', '/images/safa-blue-1.webp', '/images/safa-blue-3.webp', '/images/safa-light-blue-1.jpg', '/images/safa-light-blue-3.webp'],
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#373557', '#6c84b8', '#86a6cf', '#d3e3f5'],
    colorImageIndex: {
      '#373557': 1, // Navy -> index 1
      '#6c84b8': 3, // Jeans -> index 3
      '#86a6cf': 5, // Blue -> index 5
      '#d3e3f5': 7  // Light Blue -> index 7
    },
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p22',
    name: 'Marwah Series',
    category: 'Abaya Denim',
    price: 699000,
    // Maroon/Red/Dark mood
    image: '/images/marwah-series-baju.webp',
    hoverImage: '/images/marwah-navy-1.jpg',
    images: ['/images/marwah-series-baju.webp', '/images/marwah-navy-1.jpg', '/images/marwah-navy-3.webp', '/images/marwah-jeans-1.webp', '/images/marwah-jeans-2.webp', '/images/marwah-blue-1.webp', '/images/marwah-blue-3.webp', '/images/marwah-light-blue-1.webp', '/images/marwah-light-blue-3.webp'],
    description: 'Inspired by Marwah - the sacred hill of Sa`i this abaya reflects softness and faith. Crafted in denim with subtle patternt. it brings color and elegance to modest wear.',
    tags: ['hijab', 'modest', 'maroon'],
    colors: ['#373557', '#6c84b8', '#86a6cf', '#d3e3f5'],
    colorImageIndex: {
      '#373557': 1, // Navy -> index 1
      '#6c84b8': 3, // Jeans -> index 3
      '#86a6cf': 5, // Blue -> index 5
      '#d3e3f5': 7  // Light Blue -> index 7
    },
    sizes: ['S', 'M', 'L', 'XL']
  },


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