import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, ArrowUpRight } from 'lucide-react';

const Highlights = () => {
    return (
        <div className="min-h-screen pt-40 md:pt-52 pb-24 bg-white relative">
            {/* Back Link */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>

            <div className="container mx-auto max-w-6xl px-6">
                {/* Hero Text */}
                <div className="text-center mb-24 md:mb-32 reveal-on-scroll">
                    <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-6">Editorial & Releases</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-karima-brand italic mb-8 leading-tight">
                        Highlights <span className="font-light not-italic text-karima-ink/80">& Launches.</span>
                    </h1>
                    <div className="w-24 h-[1px] bg-karima-brand/10 mx-auto mb-8"></div>
                    <p className="text-karima-ink/70 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A curation of our defining moments, upcoming collections, and press features.
                    </p>
                </div>

                {/* Featured Launch (Hero-ish) */}
                <div className="grid md:grid-cols-2 gap-0 mb-32 border border-black/5 bg-stone-50">
                    <div className="relative aspect-square md:aspect-auto overflow-hidden group">
                        <img
                            src="/images/SLIDE 7 2.jpg"
                            alt="Upcoming Collection"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 text-xxs uppercase tracking-widest text-karima-brand">
                            Coming Soon
                        </div>
                    </div>
                    <div className="p-12 md:p-20 flex flex-col justify-center">
                        <span className="text-karima-gold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <Calendar size={14} /> Ramadan 2026
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-karima-brand italic mb-6">The Serenity Edit</h2>
                        <p className="text-karima-ink/70 font-light leading-loose mb-10">
                            Inspired by the quiet moments before dawn. Soft hues of lilac, cream, and sage meet structured silhouettes designed for spiritual tranquility and effortless elegance.
                        </p>
                        <button className="self-start border-b border-karima-brand text-karima-brand pb-1 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">
                            Join Waitlist
                        </button>
                    </div>
                </div>

                {/* Press / Past Highlights */}
                <div className="mb-32">
                    <h3 className="text-center text-xl font-serif italic text-karima-brand mb-16">As Seen In</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            {
                                outlet: "Vogue Arabia",
                                title: "The Rise of Modest Luxury",
                                date: "October 2025",
                                desc: "Karima named 'Brand to Watch' for its uncompromising approach to Medina Silk."
                            },
                            {
                                outlet: "Harper's Bazaar",
                                title: "Faithfully Beautiful",
                                date: "December 2025",
                                desc: "An exclusive interview with founder Siti Karima on bridging tradition and trends."
                            },
                            {
                                outlet: "Elle Indonesia",
                                title: "Jakarta Fashion Week Highlights",
                                date: "January 2025",
                                desc: "The 'Desert Rose' collection takes center stage with its earth-toned palette."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="border-t border-black/10 py-6 transition-all duration-500 group-hover:border-karima-brand">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs uppercase tracking-widest text-karima-gold">{item.outlet}</span>
                                        <ArrowUpRight size={16} className="text-karima-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h4 className="text-2xl font-serif text-karima-brand mb-3">{item.title}</h4>
                                    <p className="text-sm text-karima-ink/60 font-light leading-relaxed mb-4">
                                        {item.desc}
                                    </p>
                                    <span className="text-xxs text-karima-ink/30 uppercase tracking-widest block">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
