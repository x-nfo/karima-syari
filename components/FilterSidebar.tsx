import React from 'react';
import { X } from 'lucide-react';

interface FilterSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    filters: {
        category: string[];
        colors: string[];
        minPrice: number;
        maxPrice: number;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        category: string[];
        colors: string[];
        minPrice: number;
        maxPrice: number;
    }>>;
    clearFilters: () => void;
}

const CATEGORIES = ['Abaya', 'Abaya Denim', 'Khimar', 'Khimar Bandana'];
const COLORS = [
    { name: 'Black', hex: '#000000' },
    { name: 'Navy', hex: '#1B243B' },
    { name: 'Maroon', hex: '#58181F' },
    { name: 'Sage', hex: '#9CAF88' },
    { name: 'Brown', hex: '#5D4037' },
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose, filters, setFilters, clearFilters }) => {

    const toggleCategory = (cat: string) => {
        setFilters(prev => ({
            ...prev,
            category: prev.category.includes(cat)
                ? prev.category.filter(c => c !== cat)
                : [...prev.category, cat]
        }));
    };

    const toggleColor = (hex: string) => {
        setFilters(prev => ({
            ...prev,
            colors: prev.colors.includes(hex)
                ? prev.colors.filter(c => c !== hex)
                : [...prev.colors, hex]
        }));
    };

    return (
        <>
            {/* Backdrop for Mobile */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <div className={`fixed inset-y-0 left-0 z-[90] w-[85vw] md:w-[320px] bg-white border-r border-karima-brand/5 shadow-2xl lg:shadow-none lg:border-none lg:static lg:w-full lg:h-auto lg:z-auto transition-transform duration-500 ease-elastic lg:transform-none transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="flex flex-col h-full bg-white lg:bg-transparent">
                    {/* Header (Mobile Only) */}
                    <div className="flex items-center justify-between p-6 lg:hidden border-b border-karima-brand/10">
                        <h3 className="text-xl font-serif text-karima-brand">Filters</h3>
                        <button onClick={onClose}><X size={24} className="text-karima-brand" /></button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 lg:p-0 space-y-12 no-scrollbar">

                        {/* Categories */}
                        <div>
                            <h4 className="font-serif text-lg text-karima-brand mb-6 italic">Category</h4>
                            <div className="space-y-4">
                                {CATEGORIES.map(cat => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-4 h-4 border border-karima-brand/30 flex items-center justify-center transition-all ${filters.category.includes(cat) ? 'bg-karima-brand border-karima-brand' : 'group-hover:border-karima-brand'}`}>
                                            {filters.category.includes(cat) && <div className="w-2 h-2 bg-white" />}
                                        </div>
                                        <span className={`text-xs uppercase tracking-widest transition-colors ${filters.category.includes(cat) ? 'text-karima-brand font-medium' : 'text-karima-ink/60 group-hover:text-karima-brand'}`}>
                                            {cat}
                                        </span>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={filters.category.includes(cat)}
                                            onChange={() => toggleCategory(cat)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range (Simple Placeholder for now) */}
                        {/* Price Range */}
                        <div>
                            <h4 className="font-serif text-lg text-karima-brand mb-6 italic">Price Range</h4>
                            <div className="space-y-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="5000000"
                                    step="100000"
                                    value={filters.maxPrice || 5000000}
                                    onChange={(e) => setFilters(prev => ({ ...prev, minPrice: 0, maxPrice: Number(e.target.value) }))}
                                    className="w-full h-1 bg-karima-brand/10 rounded-lg appearance-none cursor-pointer accent-karima-brand"
                                />
                                <div className="flex justify-between text-xs font-serif text-karima-brand italic">
                                    <span>Rp 1000</span>
                                    <span>Rp {(filters.maxPrice || 5000000).toLocaleString('id-ID')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Colors */}
                        <div>
                            <h4 className="font-serif text-lg text-karima-brand mb-6 italic">Colors</h4>
                            <div className="flex flex-wrap gap-3">
                                {COLORS.map(col => (
                                    <button
                                        key={col.hex}
                                        onClick={() => toggleColor(col.hex)}
                                        className={`w-8 h-8 rounded-full border transition-all duration-300 relative ${filters.colors.includes(col.hex) ? 'border-karima-brand scale-110' : 'border-black/10 hover:scale-110'}`}
                                        style={{ backgroundColor: col.hex }}
                                        title={col.name}
                                    >
                                        {filters.colors.includes(col.hex) && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="p-8 border-t border-karima-brand/5 mt-auto">
                        <button
                            onClick={clearFilters}
                            className="w-full text-xxs uppercase tracking-[0.25em] text-karima-ink/40 hover:text-karima-brand transition-colors mb-4"
                        >
                            Clear All Filters
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full bg-karima-brand text-white py-4 text-xs uppercase tracking-widest hover:bg-karima-ink transition-colors lg:hidden"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;
