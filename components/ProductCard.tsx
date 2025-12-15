import React, { useState } from 'react';
import { Product } from '../types';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group cursor-pointer flex flex-col gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-stone-100">
        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-300 ${isLiked ? 'bg-rose-500 text-white shadow-md border-transparent' : 'bg-white/60 backdrop-blur-sm text-karima-brand hover:bg-white border border-white/40'}`}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.5} />
        </button>

        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out 
            ${isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />

        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out
            ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-110'}`}
        />

        {/* Subtle Inner Border/Shadow for Depth */}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none transition-opacity duration-500 group-hover:ring-black/0"></div>

        {/* Minimalist Overlay - Text appears on hover */}
        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-6 left-0 w-full text-center">
            <span className="inline-block border border-white/80 text-white px-8 py-3 text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm hover:bg-white hover:text-karima-brand transition-all duration-500">
              Quick View
            </span>
          </div>
        </div>
      </div>

      {/* Info - Clean & Centered */}
      <div className="flex flex-col items-center text-center pt-2 space-y-1">
        <div className="text-[9px] uppercase tracking-widest text-karima-ink/40 mb-1">
          {product.category}
        </div>

        <h3 className="font-serif text-sm md:text-2xl text-karima-brand leading-none group-hover:text-karima-gold transition-colors duration-500">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 text-xs font-medium text-karima-ink/80 pt-1">
          <span>Rp {product.price.toLocaleString('id-ID')}</span>
        </div>

        {/* Color Preview Dots - Fade in on hover */}
        {product.colors && product.colors.length > 0 && (
          <div className={`flex gap-2 pt-2 transition-all duration-700 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full border border-stone-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;