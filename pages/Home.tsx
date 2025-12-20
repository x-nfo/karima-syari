import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import StoreBanner from '../components/StoreBanner';
import { ArrowUpRight, Sparkles, Mail } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    // --- ANIMATION LOGIC ---
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.4s ease-out, transform 1.4s ease-out;
          will-change: opacity, transform;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

            <Hero onShopNow={() => navigate('/shop')} />

            {/* 1. MARQUEE */}
            <Marquee />

            {/* 2. MAIN PRODUCT SHOWCASE */}
            <section className="py-16 md:py-40 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-8 md:mb-28 reveal-on-scroll">
                        <span className="text-[10px] text-karima-accent uppercase tracking-[0.4em] mb-4 md:mb-6 block font-medium">New Arrivals</span>
                        <h2 className="text-3xl md:text-7xl lg:text-8xl font-serif text-karima-brand leading-none text-center font-thin">
                            The <span className="italic opacity-70">Essentials.</span>
                        </h2>
                    </div>

                    <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-28 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                        {PRODUCTS.slice(0, 6).map((product, idx) => (
                            <div key={product.id} className="reveal-on-scroll w-[40vw] md:w-auto snap-start shrink-0" style={{ transitionDelay: `${idx * 150}ms` }}>
                                <ProductCard
                                    product={product}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 md:mt-32 text-center reveal-on-scroll">
                        <Link to="/shop" className="group text-xs font-bold uppercase tracking-[0.25em] text-karima-brand transition-all flex items-center gap-4 mx-auto w-fit">
                            <span>View Full Collection</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* BEST SELLERS SECTION */}
            <section className="py-16 md:py-40 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-8 md:mb-28 reveal-on-scroll">
                        <span className="text-[10px] text-karima-accent uppercase tracking-[0.4em] mb-4 md:mb-6 block font-medium">Most Loved</span>
                        <h2 className="text-3xl md:text-7xl lg:text-8xl font-serif text-karima-brand leading-none text-center font-thin">
                            Best <span className="italic opacity-70">Sellers.</span>
                        </h2>
                    </div>

                    <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar gap-2 md:grid-cols-3 md:gap-x-12 md:gap-y-28 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                        {PRODUCTS.slice(6, 9).map((product, idx) => (
                            <div key={product.id} className="reveal-on-scroll w-[40vw] md:w-auto snap-start shrink-0" style={{ transitionDelay: `${idx * 150}ms` }}>
                                <ProductCard
                                    product={product}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CURATED CATEGORIES - Editorial Style */}
            <section className="py-10 md:py-20 px-0 bg-white">
                <div className="w-full">
                    <div className="flex flex-col items-center mb-8 md:mb-28 reveal-on-scroll px-6">
                        <span className="text-[10px] text-karima-accent uppercase tracking-[0.4em] mb-4 md:mb-6 block font-medium">Explore</span>
                        <h2 className="text-3xl md:text-7xl lg:text-8xl font-serif text-karima-brand leading-none text-center font-thin">
                            Curated <span className="italic opacity-70">Categories</span>
                        </h2>
                    </div>

                    <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar w-full gap-2 md:grid-cols-2 lg:grid-cols-4 md:gap-0">
                        {['Abaya', 'Abaya Denim', 'Khimar', 'Khimar Bandana'].map((cat) => (
                            <Link
                                to="/shop"
                                key={cat}
                                className="group relative w-[40vw] aspect-[2/3] md:w-auto md:aspect-auto md:h-[600px] snap-start shrink-0 overflow-hidden cursor-pointer bg-stone-100 border-r border-white/10 block md:first:ml-0 md:last:mr-0"
                            >
                                <img
                                    src={
                                        cat === 'Abaya' ? PRODUCTS[0].image :
                                            cat === 'Abaya Denim' ? PRODUCTS[10].image :
                                                cat === 'Khimar' ? PRODUCTS[18].image :
                                                    PRODUCTS[19].image
                                    }
                                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105"
                                    alt={cat}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
                                    <span className="text-sm md:text-4xl font-serif text-white italic tracking-wide group-hover:-translate-y-4 transition-transform duration-700 drop-shadow-md">{cat}</span>
                                    <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-700">
                                        <span className="text-[9px] text-white uppercase tracking-[0.3em] border-b border-white/50 pb-1">Shop Category</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BRAND ATMOSPHERE - Minimalist Typography */}
            <section className="hidden relative w-full py-20 md:py-48 overflow-hidden bg-karima-brand">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1974&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                        alt="Atelier"
                    />
                    <div className="absolute inset-0 bg-karima-brand/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center reveal-on-scroll">
                    <Sparkles className="text-karima-gold mx-auto mb-10 opacity-80" size={32} strokeWidth={0.5} />
                    <h2 className="text-3xl md:text-5xl lg:text-8xl font-serif text-karima-base italic font-thin mb-6 md:mb-10 leading-tight drop-shadow-2xl">
                        Modesty is the <br /> ultimate elegance.
                    </h2>
                    <div className="w-24 h-[1px] bg-karima-base/30 mx-auto mb-10"></div>
                    <p className="max-w-xl mx-auto text-base font-light text-karima-base/80 leading-loose mb-16 tracking-wide">
                        Crafted in Jakarta using the finest Medina Silk. <br />
                        Designed for the modern woman who seeks grace in every layer.
                    </p>
                    <Link to="/shop" className="inline-block border border-karima-base/30 text-karima-base px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-karima-base hover:text-karima-brand transition-all duration-500">
                        Our Heritage
                    </Link>
                </div>
            </section>

            {/* 5. NEWSLETTER - High-End Input Style */}
            <StoreBanner />
            <section className="py-24 md:py-40 px-6 bg-white">
                <div className="container mx-auto flex flex-col items-center reveal-on-scroll">
                    <div className="w-full max-w-xl text-center">
                        <div className="flex justify-center mb-8 text-karima-brand">
                            <Mail size={20} strokeWidth={0.5} />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif text-karima-brand italic mb-4">The Inner Circle</h3>
                        <p className="text-karima-ink/60 mb-12 font-light text-sm tracking-wide">
                            Join our private list for early access to limited textile drops.
                        </p>

                        <form className="flex flex-col relative group" onSubmit={(e) => e.preventDefault()}>
                            {/* Minimalist Underline Input */}
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent border-b border-karima-brand/20 px-0 py-4 text-center text-karima-ink text-lg font-serif placeholder:font-sans placeholder:text-sm placeholder:text-karima-ink/30 focus:outline-none focus:border-karima-brand transition-colors w-full"
                            />
                            <button className="absolute right-0 bottom-4 text-xs font-bold uppercase tracking-[0.2em] text-karima-brand hover:text-karima-gold transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
