import React from 'react';

const Marquee = () => (
  <div className="w-full overflow-hidden py-6 md:py-10 border-b border-karima-brand/5 relative bg-karima-base z-20">
    <div className="flex gap-32 animate-marquee whitespace-nowrap">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-32 opacity-30">
          <span className="text-md md:text-3xl font-serif italic text-karima-brand">Autumn Winter 2025</span>
          <span className="text-[9px] uppercase tracking-[0.4em] font-medium text-karima-brand mt-1">Atelier Collection</span>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 60s linear infinite;
      }
    `}</style>
  </div>
);

export default Marquee;
