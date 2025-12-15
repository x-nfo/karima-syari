import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { PRODUCTS } from '../constants';
import { Filter, LayoutGrid, Grid3X3 } from 'lucide-react';

const Shop = () => {
    const navigate = useNavigate();

    // UI States
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [gridCols, setGridCols] = useState<2 | 3>(3); // Desktop grid columns
    const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

    // Filter Stats
    const [filters, setFilters] = useState<{
        category: string[];
        colors: string[];
        minPrice: number;
        maxPrice: number;
    }>({
        category: [],
        colors: [],
        minPrice: 0,
        maxPrice: 10000000
    });

    const activeFiltersCount = filters.category.length + filters.colors.length;

    const filteredProducts = PRODUCTS.filter(p => {
        // Category Filter
        if (filters.category.length > 0 && !filters.category.includes(p.category)) return false;

        // Color Filter (Assuming product.colors contains overlap with selected)
        if (filters.colors.length > 0) {
            if (!p.colors?.some(c => filters.colors.includes(c))) return false;
        }

        // Price Filter
        if (filters.minPrice > 0 && p.price < filters.minPrice) return false;
        if (filters.maxPrice > 0 && p.price > filters.maxPrice) return false;

        return true;
    }).sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        // Default Newest (assuming last added is new, or check isNew flag)
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    });

    return (
        <div className="py-28 md:pt-48 px-6 min-h-screen bg-white">
            <div className="container mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-center mb-16 gap-8 animate-fade-in text-center">
                    <div>
                        <span className="text-xxs text-karima-accent uppercase tracking-[0.4em] font-medium block mb-4">FW / 2025</span>
                        <h1 className="text-5xl md:text-8xl font-serif text-karima-brand italic font-thin tracking-tight leading-none">
                            Collection
                        </h1>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="bg-white border-b border-karima-brand/10 py-4 mb-8 flex items-center justify-between">

                    {/* Filter Toggle (Mobile Only) */}
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="lg:hidden flex items-center gap-2 text-xxs uppercase tracking-widest text-karima-brand"
                    >
                        <Filter size={16} /> Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                    </button>

                    {/* Desktop Filter Label */}
                    <span className="hidden lg:block text-xxs uppercase tracking-widest text-karima-ink/40">
                        {filteredProducts.length} Products
                    </span>

                    <div className="flex items-center gap-6">
                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 group relative">
                            <span className="text-xxs uppercase tracking-widest text-karima-ink/40">Sort By</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as any)}
                                className="bg-transparent text-xs font-serif italic text-karima-brand focus:outline-none cursor-pointer border-none appearance-none pr-4"
                            >
                                <option value="newest">Newest in</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Grid Toggle (Desktop) */}
                        <div className="hidden lg:flex items-center gap-2 border-l border-karima-brand/10 pl-6">
                            <button
                                onClick={() => setGridCols(2)}
                                className={`p-1 hover:text-karima-brand transition-colors ${gridCols === 2 ? 'text-karima-brand' : 'text-karima-ink/30'}`}
                            >
                                <LayoutGrid size={18} />
                            </button>
                            <button
                                onClick={() => setGridCols(3)}
                                className={`p-1 hover:text-karima-brand transition-colors ${gridCols === 3 ? 'text-karima-brand' : 'text-karima-ink/30'}`}
                            >
                                <Grid3X3 size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative">
                    {/* Sidebar Filters (Desktop) */}
                    <div className="hidden lg:block w-64 shrink-0 h-fit">
                        <FilterSidebar
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                            filters={filters}
                            setFilters={setFilters}
                            clearFilters={() => setFilters(prev => ({ ...prev, category: [], colors: [] }))}
                        />
                    </div>

                    {/* Filter Sidebar (Mobile Drawer) */}
                    <div className="lg:hidden">
                        <FilterSidebar
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                            filters={filters}
                            setFilters={setFilters}
                            clearFilters={() => setFilters(prev => ({ ...prev, category: [], colors: [] }))}
                        />
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1 min-h-[50vh]">
                        {filteredProducts.length > 0 ? (
                            <div className={`grid grid-cols-2 ${gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16 animate-slide-up`}>
                                {filteredProducts.map(p => (
                                    <ProductCard
                                        key={p.id}
                                        product={p}
                                        onClick={() => navigate(`/product/${p.id}`)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-32 text-center opacity-50">
                                <span className="text-6xl font-serif italic mb-4">Empty</span>
                                <p className="text-xs uppercase tracking-widest">No products match your filters.</p>
                                <button
                                    onClick={() => setFilters(prev => ({ ...prev, category: [], colors: [] }))}
                                    className="mt-8 text-karima-brand underline underline-offset-4 text-xs"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Shop;
