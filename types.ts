export interface Product {
  id: string;
  name: string;
  category: 'Abaya' | 'Abaya Denim' | 'Khimar' | 'Khimar Bandana';
  price: number;
  image: string;
  hoverImage: string;
  description: string;
  tags: string[];
  isNew?: boolean;
  colors?: string[]; // Hex codes
  sizes?: string[]; // e.g. 'XS', 'S', 'M', 'L'
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  relatedProductIds?: string[];
}

export enum ViewState {
  HOME = 'HOME',
  SHOP = 'SHOP',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  CART = 'CART'
}