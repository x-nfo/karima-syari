import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface RelatedProductsProps {
  currentProductId: string;
  onProductClick: (product: Product) => void;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, onProductClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filter out the current product to show others
  const relatedProducts = PRODUCTS.filter(p => p.id !== currentProductId);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth; // scroll by container width
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 border-t border-karima-brand/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] text-karima-accent uppercase tracking-[0.25em] font-bold block mb-3">Complete The Look</span>
            <h3 className="text-2xl lg:text-4xl font-serif text-karima-brand italic">You Might Also Like</h3>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-karima-brand/20 flex items-center justify-center hover:border-karima-brand hover:bg-karima-brand hover:text-white transition-all disabled:opacity-50 text-karima-brand"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-karima-brand/20 flex items-center justify-center hover:border-karima-brand hover:bg-karima-brand hover:text-white transition-all text-karima-brand"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] md:min-w-[320px] cursor-pointer group snap-start"
              onClick={() => onProductClick(product)}
            >
              {/* Image Container */}
              <div className="w-full h-96 md:h-[28rem] mb-5 overflow-hidden relative bg-stone-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-karima-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="space-y-2 text-center md:text-left">
                <h4 className="font-serif text-xl text-karima-brand">{product.name}</h4>
                <p className="text-karima-ink/50 text-[10px] uppercase tracking-wider">{product.category}</p>
                <div className="pt-1 font-bold text-sm text-karima-ink">
                  <span>Rp {product.price.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;