import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MessageCircle, Heart, Calendar } from 'lucide-react';

const Community = () => {
    return (
        <div className="min-h-screen pt-40 md:pt-52 pb-24 bg-white relative">
            {/* Back Link */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
            <div className="container mx-auto max-w-5xl px-6">
                {/* Hero Text */}
                <div className="text-center mb-24 md:mb-32 reveal-on-scroll">
                    <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-6">The Karima Circle</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-karima-brand italic mb-8 leading-tight">
                        Sisterhood <span className="font-light not-italic text-karima-ink/80">& Style.</span>
                    </h1>
                    <div className="w-24 h-[1px] bg-karima-brand/10 mx-auto mb-8"></div>
                    <p className="text-karima-ink/70 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Join a global community of women who inspire, support, and redefine modesty together.
                    </p>
                </div>

                {/* Community Pillars */}
                <div className="grid md:grid-cols-3 gap-12 mb-32">
                    <div className="text-center p-8 bg-karima-brand/5 border border-karima-brand/10 hover:border-karima-brand/30 transition-colors group">
                        <div className="mb-6 flex justify-center text-karima-brand group-hover:scale-110 transition-transform duration-500">
                            <Users size={32} strokeWidth={1} />
                        </div>
                        <h3 className="text-xl font-serif italic text-karima-brand mb-4">Empowerment</h3>
                        <p className="text-sm text-karima-ink/60 font-light leading-relaxed">
                            Connect with like-minded women through our exclusive forums and events. Share your journey and find strength in numbers.
                        </p>
                    </div>
                    <div className="text-center p-8 bg-karima-brand/5 border border-karima-brand/10 hover:border-karima-brand/30 transition-colors group">
                        <div className="mb-6 flex justify-center text-karima-brand group-hover:scale-110 transition-transform duration-500">
                            <Calendar size={32} strokeWidth={1} />
                        </div>
                        <h3 className="text-xl font-serif italic text-karima-brand mb-4">Events & Workshops</h3>
                        <p className="text-sm text-karima-ink/60 font-light leading-relaxed">
                            Gain early access to styling workshops, pop-up events, and private gatherings in Jakarta, Dubai, and London.
                        </p>
                    </div>
                    <div className="text-center p-8 bg-karima-brand/5 border border-karima-brand/10 hover:border-karima-brand/30 transition-colors group">
                        <div className="mb-6 flex justify-center text-karima-brand group-hover:scale-110 transition-transform duration-500">
                            <Heart size={32} strokeWidth={1} />
                        </div>
                        <h3 className="text-xl font-serif italic text-karima-brand mb-4">Charity Initiatives</h3>
                        <p className="text-sm text-karima-ink/60 font-light leading-relaxed">
                            Participate in our annual charity drives. We believe in dressing well and doing good for those in need.
                        </p>
                    </div>
                </div>

                {/* Join Section */}
                <div className="bg-karima-base p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-karima-gold/50 to-transparent"></div>
                    <h2 className="text-3xl md:text-5xl font-serif text-karima-brand mb-8 italic">Be Part of the Circle</h2>
                    <p className="text-karima-ink/70 font-light mb-12 max-w-md mx-auto">
                        Sign up for our newsletter to receive invitations to upcoming community events and exclusive stories.
                    </p>

                    <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full bg-white border border-karima-brand/20 py-4 px-6 text-center text-karima-brand font-serif placeholder:text-karima-brand/30 focus:outline-none focus:border-karima-brand transition-colors"
                        />
                        <button className="bg-karima-brand text-white py-4 px-8 text-xs uppercase tracking-[0.2em] font-bold hover:bg-karima-ink transition-colors w-full">
                            Join Community
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Community;
