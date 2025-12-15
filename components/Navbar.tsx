import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For product pages, only show navbar after scrolling past the main view (approx 80vh)
      // For other pages, show "scrolled" state immediately after 50px
      const threshold = window.location.pathname.startsWith('/product/') ? window.innerHeight * 0.7 : 50;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount/route change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isHome = pathname === '/';
  const isProductPage = pathname.startsWith('/product/');

  // Logic to hide navbar completely on product page if not scrolled
  const hideNavbar = isProductPage && !isScrolled;

  // --- LUXURY COLOR LOGIC ---
  // Home Page (Top): Transparent background with Light text (for dark Hero).
  // Other Pages (Top): Transparent background with Dark text (for light page bg).
  // Scrolled (Any Page): Solid/Blur background with Dark text.

  const useDarkText = isScrolled || (!isHome && !isProductPage); // Use dark text if scrolled (on glass) OR if standard internal page top.

  // Helper for responsive colors: Mobile (Light/Dark based on useDarkText) vs Desktop (Product Page needs Dark on Top)
  const getResponsiveColor = (darkInfo: string, lightInfo: string) => {
    // If we are definitely using dark text (plain page top), return dark.
    if (useDarkText) return darkInfo;
    // If we are on Product Page (Top), Mobile is Light (Hidden/Overlay), Desktop is Dark (White BG).
    if (isProductPage && !isScrolled) return `${lightInfo} lg:${darkInfo}`;
    // Else (Home Top OR Scrolled), Light.
    return lightInfo;
  };

  const textColorClass = getResponsiveColor('text-karima-ink', 'text-karima-base');
  const logoColorClass = getResponsiveColor('text-karima-brand', 'text-karima-base');
  const bgLinkHover = getResponsiveColor('bg-karima-brand', 'bg-karima-base');
  const accentColorClass = getResponsiveColor('text-karima-accent', 'text-karima-base/70');
  const cartBadgeBg = getResponsiveColor('bg-karima-brand', 'bg-karima-base');
  const cartBadgeText = getResponsiveColor('text-karima-base', 'text-karima-brand');


  const navLinkClass = `relative text-[10px] uppercase tracking-[0.25em] font-medium ${textColorClass} hover:opacity-70 transition-all group py-4`;
  const navUnderlineClass = `absolute bottom-3 left-0 w-0 h-[1px] ${bgLinkHover} transition-all duration-500 group-hover:w-full opacity-50`;

  const handleMobileNav = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isTickerHidden = isScrolled;

  return (
    <>
      {/* Top Ticker */}
      <div className="hidden lg:block bg-karima-brand text-karima-base text-[9px] tracking-[0.2em] uppercase font-medium py-2 text-center absolute w-full z-[60]">
        <span>Complimentary Global Shipping on Orders Over Rp 3.000.000</span>
      </div>

      {/* Main Nav */}
      <nav
        className={`fixed left-0 w-full z-50 border-b transition-all duration-500 ease-in-out ${hideNavbar ? '-translate-y-full opacity-0 pointer-events-none lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto' : 'translate-y-0 opacity-100'
          } lg:top-0 top-0 ${isScrolled
            ? 'bg-white/10 backdrop-blur-md border-white/20 py-2 shadow-sm'
            : 'bg-white/5 backdrop-blur-sm border-white/10 pt-16 pb-8'
          }`}
      >
        <div className="container mx-auto px-8 md:px-12 flex items-center justify-between">

          {/* Left Nav */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-start">
            <Link to="/shop" className={navLinkClass}>
              Collections <span className={navUnderlineClass}></span>
            </Link>
            <Link to="/shop" className={navLinkClass}>
              New In <span className={navUnderlineClass}></span>
            </Link>
            <Link to="/about" className={navLinkClass}>
              Atelier <span className={navUnderlineClass}></span>
            </Link>
            <Link to="/blog" className={navLinkClass}>
              Journal <span className={navUnderlineClass}></span>
            </Link>
          </div>

          {/* Center Logo */}
          <Link
            to="/"
            className="flex-shrink-0 cursor-pointer text-center group transition-all duration-500"
          >
            <h1 className={`font-serif font-medium tracking-tight ${logoColorClass} transition-all duration-500 ${isScrolled ? 'text-2xl lg:text-3xl' : 'text-4xl lg:text-5xl'}`}>
              Karima
            </h1>
            <span className={`text-[10px] ${accentColorClass} hidden lg:block mt-1 font-serif italic tracking-wider transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
              Faithfully Beautiful
            </span>
          </Link>

          {/* Right Icons */}
          <div className={`flex items-center gap-8 flex-1 justify-end ${textColorClass}`}>
            <button onClick={onOpenSearch} className="hover:opacity-60 transition-opacity hidden sm:block">
              <Search size={18} strokeWidth={0.75} />
            </button>
            <button className="hover:opacity-60 transition-opacity hidden sm:block">
              <User size={18} strokeWidth={0.75} />
            </button>
            <Link
              to="/cart"
              className="relative hover:opacity-60 transition-opacity"
            >
              <ShoppingBag size={18} strokeWidth={0.75} />
              {cartCount > 0 && (
                <span className={`absolute -top-1.5 -right-1.5 ${cartBadgeBg} ${cartBadgeText} text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-serif italic`}>
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="lg:hidden ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} strokeWidth={0.75} /> : <Menu size={24} strokeWidth={0.75} />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Menu - Off-Canvas Slide from Left (Full Screen) */}
      <div className={`fixed inset-0 h-[100dvh] bg-karima-base z-[100] flex flex-col transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Header: Logo & Close Button Aligned */}
        <div className="w-full flex justify-between items-center p-8 md:p-12">
          <h1 className="text-3xl font-serif font-medium tracking-tight text-karima-brand">KARIMA</h1>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-karima-brand hover:opacity-70 transition-opacity">
            <X size={32} strokeWidth={0.5} />
          </button>
        </div>

        {/* Menu Items - Top Aligned */}
        <div className="flex flex-col gap-6 text-left pl-8 md:pl-12 pt-4">
          {[
            { label: 'New Arrivals', path: '/shop' },
            { label: 'Abayas', path: '/shop' },
            { label: 'Hijabs', path: '/shop' },
            { label: 'Journal', path: '/blog' }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleMobileNav(item.path)}
              className={`group flex items-center gap-4 text-3xl md:text-4xl font-serif transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
              style={{ transitionDelay: `${150 + (idx * 100)}ms` }}
            >
              <span className="group-hover:text-karima-gold transition-colors duration-300 text-karima-brand">{item.label}</span>
              <ArrowRight size={24} strokeWidth={0.5} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-karima-gold" />
            </button>
          ))}
        </div>

        <div
          className={`absolute bottom-12 left-8 md:left-12 text-karima-accent text-xxs uppercase tracking-[0.3em] transition-all duration-1000 delay-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Karima Official Store
        </div>
      </div>
    </>
  );
};

export default Navbar;