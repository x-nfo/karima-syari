import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoreBanner = () => {
    const navigate = useNavigate();

    return (
        <section className=" py-6 md:py-12 px-4 md:px-6 bg-white">
            <div className="container mx-auto bg-karima-brand relative overflow-hidden shadow-2xl">
                {/* Background Pattern Effect (Optional subtle texture) */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
                    <svg width="100%" height="100%">
                        <filter id="noise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise)" />
                    </svg>
                </div>

                <div className="flex flex-row items-center h-[100px] md:h-auto">

                    {/* Text Content - Left Side */}
                    <div className="w-[60%] md:w-[50%] py-6 px-4 md:py-10 md:px-16 text-left z-10 flex flex-col justify-center h-full">
                        <h2 className="text-2xl md:text-8xl font-serif text-karima-base italic mb-2 md:mb-4 leading-tight whitespace-nowrap">
                            BUY 1 - GET 2
                        </h2>
                        <p className="hidden text-karima-base/70 text-xxs md:text-sm font-light tracking-wide mb-4 md:mb-6 max-w-md leading-relaxed line-clamp-2 md:line-clamp-none">
                            Don't worry — experience our collection in person. Check availability and visit our boutiques for a personalized styling session.
                        </p>
                        <button
                            onClick={() => navigate('/shop')}
                            className="inline-block border border-karima-base/30 text-karima-base px-4 py-2 md:px-8 md:py-3 text-nano md:text-xxs font-bold uppercase tracking-[0.25em] hover:bg-karima-base hover:text-karima-brand transition-all duration-500 rounded-full w-fit"
                        >
                            Pick TWO ITEMS, ONE OF THEM WILL BE FREE
                        </button>
                    </div>

                    {/* Right Side Image - Blended */}
                    <div className="w-[40%] md:w-[50%] h-full md:h-[350px] relative">
                        {/* Gradient Overlay for seamless blending */}
                        <div className="absolute inset-0 bg-[linear-gradient(105deg,var(--tw-gradient-stops))] from-karima-brand from-25% via-karima-brand/60 via-60% to-transparent z-10"></div>

                        <img
                            src="/images/SLIDE 7 2.jpg"
                            alt="Boutique Experience"
                            className="w-full h-full object-cover object-top opacity-90"
                            style={{ objectPosition: 'center' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreBanner;
