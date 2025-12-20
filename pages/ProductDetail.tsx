import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';
import RelatedProducts from '../components/RelatedProducts';
import SizeGuideModal from '../components/SizeGuideModal';
import { ArrowLeft, Heart, ChevronLeft, ChevronRight, Ruler, Truck } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = PRODUCTS.find(p => p.id === id);

    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // Use the new images array if available, otherwise fallback to existing behavior
    const productImages = product?.images?.length
        ? product.images
        : (product ? [product.image, product.hoverImage].filter(Boolean) : []);

    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

    useEffect(() => {
        if (product) {
            setSelectedColor(product.colors?.[0] || '');
            setSelectedSize(product.sizes?.[0] || '');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsLiked(false); // Reset like on new product load
        }
    }, [id, product]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="pt-0 lg:pt-12 min-h-screen bg-white">
            <div className="container mx-auto max-w-7xl px-0 lg:px-8 lg:pt-32">
                <Link to="/shop" className="hidden lg:flex lg:items-center lg:gap-3 lg:mb-12 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Collection
                </Link>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
                    {/* Gallery */}
                    <div className="lg:w-7/12">
                        {/* Mobile Carousel (Full Screen, Snap) */}
                        <div className="lg:hidden relative h-screen w-full bg-stone-100">
                            {/* Back Button Mobile (Inside Carousel for Alignment) */}
                            <Link to="/shop" className="absolute top-8 left-6 z-30 text-white hover:text-white/70 transition-colors drop-shadow-md">
                                <ArrowLeft size={24} strokeWidth={1.5} />
                            </Link>

                            {/* Wishlist Button Mobile */}
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`absolute top-8 right-6 z-30 p-2.5 rounded-full transition-all duration-300 ${isLiked ? 'bg-rose-500 text-white shadow-md border-transparent' : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40'}`}
                            >
                                <Heart size={20} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.5} />
                            </button>

                            <div
                                id="mobile-carousel"
                                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
                                onScroll={(e) => {
                                    const scrollLeft = e.currentTarget.scrollLeft;
                                    const width = e.currentTarget.clientWidth;
                                    setActiveImgIndex(Math.round(scrollLeft / width));
                                }}
                            >
                                {productImages.map((img, idx) => (
                                    <div key={idx} className="w-full h-full shrink-0 snap-center relative">
                                        <img src={img} className="w-full h-full object-cover" alt={`View ${idx + 1}`} />
                                        {/* Mobile Overlay Gradient for Text Visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Dots Indicator (Mobile) */}
                            {productImages.length > 1 && (
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                    {productImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                const carousel = document.getElementById('mobile-carousel');
                                                if (carousel) {
                                                    carousel.scrollTo({
                                                        left: carousel.clientWidth * idx,
                                                        behavior: 'smooth'
                                                    });
                                                }
                                            }}
                                            className={`h-1.5 rounded-full transition-all duration-300 drop-shadow-md ${idx === activeImgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Strip (Mobile) - Below carousel */}
                        {productImages.length > 1 && (
                            <div className="lg:hidden flex gap-2 justify-center px-6 py-4 bg-white">
                                {productImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            const carousel = document.getElementById('mobile-carousel');
                                            if (carousel) {
                                                carousel.scrollTo({
                                                    left: carousel.clientWidth * idx,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                        className={`w-16 h-20 overflow-hidden transition-all duration-300 ${idx === activeImgIndex ? 'ring-2 ring-karima-brand ring-offset-2 opacity-100' : 'opacity-50 hover:opacity-80'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Desktop Layout: Main Image + Thumbnails */}
                        <div className="hidden lg:flex flex-col gap-6 w-full">
                            {/* Active Main Image */}
                            <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative group w-full">
                                {/* Wishlist Button Desktop */}
                                <button
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all duration-300 transform ${isLiked ? 'bg-rose-500 text-white shadow-md opacity-100' : 'bg-white/60 backdrop-blur-sm text-karima-brand hover:bg-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}`}
                                >
                                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.5} />
                                </button>

                                <img
                                    src={productImages[activeImgIndex]}
                                    className="w-full h-full object-cover transition-all duration-500 animate-fade-in"
                                    alt="Active View"
                                />

                                {/* Dots Indicator (Desktop) */}
                                {productImages.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                        {productImages.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveImgIndex(idx)}
                                                className={`h-1.5 rounded-full transition-all duration-300 drop-shadow-md ${idx === activeImgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails Row */}
                            {productImages.length > 1 && (
                                <div className="flex gap-4">
                                    {productImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setActiveImgIndex(idx)}
                                            className={`w-24 aspect-[4/5] bg-stone-100 cursor-pointer overflow-hidden relative transition-all duration-300 ${activeImgIndex === idx ? 'ring-1 ring-karima-brand ring-offset-2 opacity-100' : 'opacity-60 hover:opacity-100 hover:ring-1 hover:ring-karima-brand/30 hover:ring-offset-1'}`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product Info - Sticky */}
                    <div className="lg:w-5/12 lg:sticky lg:top-32 h-fit py-4 px-6 lg:px-0">
                        <div className="flex flex-col gap-2 mb-8">
                            <span className="text-karima-accent text-xxs uppercase tracking-[0.3em] block">{product.category}</span>
                            <h1 className="text-3xl md:text-6xl font-serif text-karima-brand italic leading-none">{product.name}</h1>
                            <span className="text-2xl font-light font-serif text-karima-ink mt-2">Rp {product.price.toLocaleString('id-ID')}</span>
                        </div>

                        <div className="w-full h-[1px] bg-karima-brand/10 mb-8"></div>

                        <p className="text-karima-ink/70 font-light mb-12 text-sm leading-loose max-w-md">
                            {product.description}
                        </p>

                        {/* Selection Area */}
                        <div className="space-y-8 mb-10">
                            {/* Color Select */}
                            <div>
                                <span className="text-micro uppercase tracking-widest text-karima-ink/40 mb-4 block">Select Shade</span>
                                <div className="flex gap-4">
                                    {product.colors?.map((c, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedColor(c)}
                                            className={`w-8 h-8 rounded-full focus:outline-none transition-all duration-300 ${selectedColor === c ? 'ring-1 ring-offset-4 ring-karima-brand scale-110' : 'hover:scale-110 opacity-70 hover:opacity-100'}`}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Select */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-micro uppercase tracking-widest text-karima-ink/40">Select Size</span>
                                    <button
                                        onClick={() => setIsSizeGuideOpen(true)}
                                        className="flex items-center gap-2 text-xs text-karima-brand/60 hover:text-karima-brand transition-colors group"
                                    >
                                        <Ruler size={14} className="group-hover:rotate-12 transition-transform" />
                                        <span className="border-b border-transparent group-hover:border-karima-brand transition-colors">Size Guide</span>
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes?.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedSize(s)}
                                            className={`h-12 w-14 flex items-center justify-center border text-xs uppercase tracking-wider transition-all duration-300 ${selectedSize === s ? 'bg-karima-brand text-white border-karima-brand shadow-md' : 'border-karima-brand/10 text-karima-ink hover:border-karima-brand/40 bg-white'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => addToCart(product, selectedSize, selectedColor)}
                            disabled={!selectedSize || !selectedColor}
                            className="w-full bg-karima-brand text-karima-base py-5 text-xs font-bold uppercase tracking-[0.25em] hover:bg-karima-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6 group relative overflow-hidden"
                        >
                            <span className="relative z-10">{(!selectedSize || !selectedColor) ? 'Select Options' : 'Add to Bag'}</span>
                        </button>

                        <div className="grid grid-cols-2 gap-8 border-t border-karima-brand/10 pt-8 opacity-70">
                            <div>
                                <span className="block text-karima-brand font-serif italic text-lg mb-1">Medina Silk</span>
                                <span className="text-micro uppercase tracking-widest text-karima-ink/50">Material Composition</span>
                            </div>
                            <div>
                                <span className="block text-karima-brand font-serif italic text-lg mb-1">Jakarta, ID</span>
                                <span className="text-micro uppercase tracking-widest text-karima-ink/50">Artisan Crafted</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-karima-ink/60 text-xs font-light mt-8">
                            <Truck size={16} />
                            <span>Free shipping on orders over Rp 3.000.000. <Link to="/shipping" className="underline hover:text-karima-brand">Details</Link></span>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedProducts
                currentProductId={product.id}
                onProductClick={(p) => navigate(`/product/${p.id}`)}
            />
            <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
        </div>
    );
};

export default ProductDetail;
