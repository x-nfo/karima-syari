import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate sending
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-40 md:pt-52 pb-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
            <div className="container mx-auto max-w-6xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Contact Info */}
                    <div>
                        <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-4">Contact Us</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-karima-brand italic mb-8">Get in Touch</h1>
                        <p className="text-karima-ink/60 font-light leading-relaxed mb-12 max-w-md">
                            We are at your disposal to answer any questions about our creations or to assist you with your order.
                        </p>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-karima-brand mb-4 flex items-center gap-2">
                                    <Mail size={14} /> Email
                                </h3>
                                <a href="mailto:info@karima.com" className="text-xl font-serif italic text-karima-ink hover:text-karima-gold transition-colors">
                                    info@karima.com
                                </a>
                                <div className="mt-1 text-sm text-karima-ink/40 font-light">Response within 24 hours</div>
                            </div>

                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-karima-brand mb-4 flex items-center gap-2">
                                    <Instagram size={14} /> Social
                                </h3>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl font-serif italic text-karima-ink hover:text-karima-gold transition-colors">
                                    @karima_official
                                </a>
                            </div>

                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-karima-brand mb-4 flex items-center gap-2">
                                    <MapPin size={14} /> Atelier
                                </h3>
                                <div className="text-lg font-light text-karima-ink/80 leading-relaxed">
                                    Jl. Senopati No. 45<br />
                                    Kebayoran Baru, Jakarta Selatan<br />
                                    Indonesia 12190
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-karima-brand mb-4 flex items-center gap-2">
                                    <Clock size={14} /> Hours
                                </h3>
                                <div className="text-lg font-light text-karima-ink/80 leading-relaxed">
                                    Monday - Saturday<br />
                                    10:00 AM - 7:00 PM WIB
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 shadow-sm border border-karima-brand/5 self-start mt-8 lg:mt-24">
                        {formStatus === 'success' ? (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                                <div className="w-16 h-16 bg-karima-gold/10 rounded-full flex items-center justify-center mb-6 text-karima-gold">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-3xl font-serif italic text-karima-brand mb-4">Message Sent</h3>
                                <p className="text-karima-ink/60 font-light max-w-xs">
                                    Thank you for reaching out. Our team will get back to you shortly along with a confirmation email.
                                </p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="mt-8 text-xs uppercase tracking-widest text-karima-brand border-b border-karima-brand pb-1 hover:text-karima-gold hover:border-karima-gold transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-karima-ink/40 mb-3">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-karima-brand/20 py-3 text-karima-brand font-serif italic text-xl focus:outline-none focus:border-karima-brand transition-colors placeholder:text-karima-brand/10"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-karima-ink/40 mb-3">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="email@example.com"
                                        className="w-full bg-transparent border-b border-karima-brand/20 py-3 text-karima-brand font-serif italic text-xl focus:outline-none focus:border-karima-brand transition-colors placeholder:text-karima-brand/10"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-karima-ink/40 mb-3">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-transparent border-b border-karima-brand/20 py-3 text-karima-brand font-serif text-lg focus:outline-none focus:border-karima-brand transition-colors"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="order">Order Assistance</option>
                                        <option value="wholesale">Wholesale</option>
                                        <option value="press">Press & Media</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-karima-ink/40 mb-3">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="How can we help you?"
                                        className="w-full bg-transparent border-b border-karima-brand/20 py-3 text-karima-brand font-light resize-none focus:outline-none focus:border-karima-brand transition-colors placeholder:text-karima-brand/10"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-karima-brand text-white py-4 px-8 uppercase tracking-[0.2em] text-xs hover:bg-karima-brand/90 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {!formStatus && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
