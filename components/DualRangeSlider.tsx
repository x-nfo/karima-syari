import React, { useCallback, useEffect, useState, useRef } from 'react';

interface DualRangeSliderProps {
    min: number;
    max: number;
    minVal: number;
    maxVal: number;
    onChange: (min: number, max: number) => void;
}

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({ min, max, minVal, maxVal, onChange }) => {
    const [minPrice, setMinPrice] = useState(minVal);
    const [maxPrice, setMaxPrice] = useState(maxVal);
    const minValRef = useRef(minVal);
    const maxValRef = useRef(maxVal);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minPrice);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minPrice, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxPrice);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxPrice, getPercent]);

    // Sync with props
    useEffect(() => {
        setMinPrice(minVal);
        setMaxPrice(maxVal);
    }, [minVal, maxVal])


    return (
        <div className="relative w-full py-4 max-w-xl">
            <input
                type="range"
                min={min}
                max={max}
                value={minPrice}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxPrice - 1);
                    setMinPrice(value);
                    minValRef.current = value;
                    onChange(value, maxPrice);
                }}
                className="thumb thumb--left pointer-events-none absolute h-0 w-full outline-none z-[3]"
                style={{ zIndex: minPrice > max - 100 ? 5 : 3 }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxPrice}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minPrice + 1);
                    setMaxPrice(value);
                    maxValRef.current = value;
                    onChange(minPrice, value);
                }}
                className="thumb thumb--right pointer-events-none absolute h-0 w-full outline-none z-[4]"
            />

            <div className="relative w-full">
                <div className="absolute h-1 w-full rounded bg-stone-200 z-[1]"></div>
                <div
                    ref={range}
                    className="absolute h-1 rounded bg-karima-brand z-[2]"
                ></div>

                {/* Thumb Styles injected here for simplicity or added to global css */}
                <style>{`
          .thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
            pointer-events: auto;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background-color: #1c1917; /* karima-ink/brand */
            border: 2px solid white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            cursor: pointer;
            margin-top: -6px; /* center on track */
          }
          .thumb::-moz-range-thumb {
            -webkit-appearance: none; 
            pointer-events: auto;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background-color: #1c1917;
            border: 2px solid white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            cursor: pointer;
            border: none;
          }
        `}</style>
            </div>

            <div className="flex justify-between items-center mt-6">
                <div className="text-xs font-serif text-karima-brand border border-stone-200 px-3 py-1 rounded-sm">
                    Rp {minPrice.toLocaleString('id-ID')}
                </div>
                <div className="h-[1px] w-4 bg-stone-300"></div>
                <div className="text-xs font-serif text-karima-brand border border-stone-200 px-3 py-1 rounded-sm">
                    Rp {maxPrice.toLocaleString('id-ID')}
                </div>
            </div>

        </div>
    );
};

export default DualRangeSlider;
