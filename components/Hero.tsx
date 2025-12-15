import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

const SLIDES = [
  {
    id: 1,
    subtitle: 'Faith & Dignity',
    title: 'Saliha Series',
    image: '/images/KARIMA 4.jpg',
    alt: 'Saliha Series '
  },
  {
    id: 2,
    subtitle: 'Feminity & Strength',
    title: 'Hayya Series',
    image: '/images/KARIMAPOST.jpg', // Replaced with a valid portrait/fashion image
    alt: 'Hayya Series'
  },
  {
    id: 3,
    subtitle: 'Strength in Modesty',
    title: 'Abaya Denim',
    image: '/images/3.jpg', // Replaced with a valid dark/elegant image
    alt: 'Abaya Denim Collection'
  }
];

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, [nextSlide]);

  // Reset transition lock after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Matches CSS transition duration
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-karima-brand group">

      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image with Zoom Effect */}
          <div className={`relative w-full h-full ${index === currentSlide ? 'animate-[zoomOut_20s_linear_infinite]' : ''}`}>
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={slide.alt}
            />
            {/* Global Dark Overlay for Better Contrast */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Gradient for Text Readability - Themed */}
            <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-karima-brand/90 via-karima-brand/40 to-transparent"></div>
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-16 z-20 pointer-events-none">
        <div className="container mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row items-end justify-between gap-10 text-karima-base">

          {/* Left: Collection Title */}
          <div className="animate-fade-in text-left w-full md:w-auto relative overflow-hidden">
            {/* We use a key on the content wrapper to re-trigger animations on slide change */}
            <div key={currentSlide} className="animate-[slideUp_1s_ease-out_forwards]">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-[1px] bg-karima-gold"></span>
                <span className="text-xxs uppercase tracking-[0.4em] font-medium text-karima-gold">
                  {SLIDES[currentSlide].subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-serif italic font-light tracking-wide leading-[1.1] text-white opacity-90 drop-shadow-sm">
                {SLIDES[currentSlide].title}
              </h2>
            </div>
          </div>

          {/* Right: CTA & Navigation */}
          <div className="animate-fade-in w-full md:w-auto flex items-end md:items-center justify-between md:justify-end gap-8 pointer-events-auto pb-2">

            {/* Arrows */}
            <div className="flex gap-4 z-30">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 text-white hover:text-karima-gold transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} strokeWidth={1} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full border border-white/20 hover:bg-white/10 text-white hover:text-karima-gold transition-all duration-300 backdrop-blur-sm"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} strokeWidth={1} />
              </button>
            </div>

            <button
              onClick={onShopNow}
              className="group/btn relative py-2 overflow-hidden"
            >
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-bold text-white group-hover/btn:text-karima-gold transition-colors duration-500">
                Discover Collection
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-karima-gold transition-all duration-700 ease-out group-hover/btn:w-full"></span>
            </button>
          </div>

        </div>
      </div>



    </section>
  );
};

export default Hero;