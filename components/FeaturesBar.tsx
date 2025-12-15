import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Globe, CreditCard } from 'lucide-react';

const FeaturesBar = () => {
    const features = [
        {
            icon: <Sparkles size={20} className="mb-2" strokeWidth={1} />,
            title: "Best-in-Class Materials",
            description: "Sourced efficiently"
        },
        {
            icon: <Star size={20} className="mb-2" strokeWidth={1} />,
            title: "Loyalty Point Rewards",
            description: "Earn as you shop"
        },
        {
            icon: <Globe size={20} className="mb-2" strokeWidth={1} />,
            title: "Worldwide Shipping",
            description: "Global delivery"
        },
        {
            icon: <CreditCard size={20} className="mb-2" strokeWidth={1} />,
            title: "Multiple Payment Options",
            description: "Secure checkout"
        }
    ];

    return (
        <div className="bg-white text-karima-brand py-6 border-t border-b border-karima-brand/10 relative z-10 w-full">
            <div className="container mx-auto px-6">
                <div className="flex lg:grid lg:grid-cols-4 gap-8 lg:gap-8 overflow-x-auto lg:overflow-visible no-scrollbar items-center snap-x snap-mandatory px-2">
                    {features.map((feature, idx) => {
                        // Determine link destination
                        let linkTo = "/shop"; // Default
                        if (feature.title.includes("Shipping")) linkTo = "/shipping";
                        if (feature.title.includes("Materials")) linkTo = "/about"; // Or maybe scroll to a section? Let's use /shop for now or remove link for materials if no page exists.
                        if (feature.title.includes("Loyalty")) linkTo = "/shop"; // Placeholder
                        if (feature.title.includes("Payment")) linkTo = "/faq";

                        const Content = (
                            <div className="flex flex-row items-center justify-start text-left gap-3 shrink-0 w-auto pr-8 snap-start group cursor-pointer">
                                <div className="text-karima-gold shrink-0 transition-transform group-hover:scale-110 duration-300">
                                    {React.cloneElement(feature.icon as React.ReactElement, { size: 16, className: "lg:w-5 lg:h-5" })}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-karima-brand leading-tight lg:text-[10px] lg:tracking-[0.2em] whitespace-nowrap group-hover:text-karima-gold transition-colors">
                                        {feature.title}
                                    </span>
                                    <span className="text-[9px] text-karima-ink/50 font-serif italic hidden lg:block group-hover:text-karima-ink/70">
                                        {feature.description}
                                    </span>
                                </div>
                            </div>
                        );

                        // If it's the Materials or Loyalty feature which don't have dedicated pages yet, we might not want to link them or just link to Shop?
                        // Let's link Shipping to /shipping and Payment to /faq
                        if (linkTo === "/shipping" || linkTo === "/faq") {
                            return (
                                <Link to={linkTo} key={idx} className="block">
                                    {Content}
                                </Link>
                            )
                        }

                        return <div key={idx}>{Content}</div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBar;
