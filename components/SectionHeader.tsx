import React from 'react';

const SectionHeader = ({ subtitle, title, dark = false, align = 'center' }: { subtitle: string, title: string, dark?: boolean, align?: 'left' | 'center' }) => (
    <div className={`mb-24 ${align === 'center' ? 'text-center' : 'text-left'} ${dark ? 'text-karima-base' : 'text-karima-ink'} reveal-on-scroll transition-all duration-1000`}>
        <span className={`text-[9px] uppercase tracking-[0.3em] font-medium block mb-5 ${dark ? 'text-karima-gold' : 'text-karima-accent'}`}>{subtitle}</span>
        <h2 className="text-4xl md:text-7xl font-serif italic font-light tracking-tight">{title}</h2>
    </div>
);

export default SectionHeader;
