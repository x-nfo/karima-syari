import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 md:border-none last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 md:py-0 md:bg-transparent text-left group"
            >
                <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-karima-gold opacity-80 group-hover:text-karima-gold transition-colors">
                    {title}
                </h4>
                <ChevronDown
                    className={`w-4 h-4 text-karima-gold transition-transform duration-300 md:hidden opacity-60 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out md:max-h-none md:opacity-100 md:overflow-visible md:mt-8
                ${isOpen ? 'max-h-[500px] opacity-100 mt-4 pb-6' : 'max-h-0 opacity-0 mt-0 pb-0'}`}
            >
                {children}
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-karima-brand text-karima-base pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Silhouette Text */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] pointer-events-none select-none w-full flex justify-center z-0"
                style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)' }}
            >
                <span className="text-[8rem] md:text-[16rem] font-sans font-bold text-white opacity-[0.05] tracking-tighter whitespace-nowrap leading-none">
                    KARIMA
                </span>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-12 lg:gap-x-24 mb-12 md:mb-24">

                    {/* Brand Column (Span 4) */}
                    <div className="md:col-span-4 lg:col-span-5 space-y-10 mb-10 md:mb-0">
                        <h2 className="text-5xl font-serif italic text-white tracking-tight">
                            <img src="/images/logo karima.png" alt="karima syari" width={100} />
                        </h2>
                        <p className="text-sm font-light leading-relaxed opacity-60 max-w-sm tracking-wide">
                            Redefining modest fashion with timeless elegance.
                            Each piece is a testament to the modern woman's grace, crafted in Jakarta using the finest Medina Silk.
                        </p>
                        <div className="flex gap-8 opacity-50 text-xxs uppercase tracking-widest">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <FooterSection title="Information">
                            <ul className="space-y-4 text-xs font-light opacity-60 uppercase tracking-widest pt-2 md:pt-0">
                                <li><Link to="/about" className="hover:text-white hover:opacity-100 transition-all">Our Story</Link></li>
                                <li><Link to="/community" className="hover:text-white hover:opacity-100 transition-all">Community</Link></li>
                                <li><Link to="/highlights" className="hover:text-white hover:opacity-100 transition-all">Highlights & Launches</Link></li>
                                <li><Link to="/blog" className="hover:text-white hover:opacity-100 transition-all">Journal</Link></li>
                            </ul>
                        </FooterSection>
                    </div>

                    <div className="md:col-span-3 lg:col-span-3">
                        <FooterSection title="Customer Support">
                            <ul className="space-y-4 text-xs font-light opacity-60 uppercase tracking-widest pt-2 md:pt-0">
                                <li><Link to="/shipping" className="hover:text-white hover:opacity-100 transition-all">Shipping Policy</Link></li>
                                <li><Link to="/returns" className="hover:text-white hover:opacity-100 transition-all">Returns & Exchanges</Link></li>
                                <li><Link to="/size-guide" className="hover:text-white hover:opacity-100 transition-all">Size Guide</Link></li>
                                <li><Link to="/faq" className="hover:text-white hover:opacity-100 transition-all">FAQ</Link></li>
                                <li><Link to="/contact" className="hover:text-white hover:opacity-100 transition-all">Contact Us</Link></li>
                            </ul>
                        </FooterSection>
                    </div>

                    <div className="md:col-span-3 lg:col-span-2">
                        <FooterSection title="Legal">
                            <ul className="space-y-4 text-xs font-light opacity-60 uppercase tracking-widest pt-2 md:pt-0">
                                <li><Link to="/privacy" className="hover:text-white hover:opacity-100 transition-all">Privacy</Link></li>
                                <li><Link to="/terms" className="hover:text-white hover:opacity-100 transition-all">Terms</Link></li>
                            </ul>
                        </FooterSection>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-micro uppercase tracking-[0.2em] opacity-30">
                    <p>© 2025 KARIMA OFFICIAL.</p>
                    <p>Jakarta, Indonesia</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
