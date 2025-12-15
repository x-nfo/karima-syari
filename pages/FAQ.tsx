import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchTerm, setSearchTerm] = useState('');

    const faqs = [
        {
            question: "How do I find the right size?",
            answer: "We recommend referring to our Size Guide available on each product page. Our abayas are designed with a modest fit, so if you prefer a more tailored look, you might consider sizing down. For specific measurements, please contact our atelier."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship worldwide. Complimentary shipping is valid for orders above Rp 3.000.000. International delivery times vary between 3-7 business days depending on your location."
        },
        {
            question: "What is your return policy?",
            answer: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached. Please visit our Returns page to initiate a return request."
        },
        {
            question: "Can I cancel or modify my order?",
            answer: "We process orders quickly to ensure fast delivery. If you need to make changes, please contact us within 1 hour of placing your order. After this window, we may not be able to modify the shipment."
        },
        {
            question: "Where are your products made?",
            answer: "All KARIMA pieces are ethically crafted in our Jakarta atelier. We work with skilled artisans and source high-quality fabrics primarily from Indonesia and Turkey."
        },
        {
            question: "How do I care for my silk abaya?",
            answer: "We recommend dry cleaning or gentle hand wash in cold water for all our silk pieces. Avoid wringing or twisting the fabric. Iron on low heat or steam to remove creases."
        }
    ];

    return (
        <div className="min-h-screen pt-40 md:pt-52 pb-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
            <div className="container mx-auto max-w-3xl px-6">
                <div className="text-center mb-16">
                    <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-4">Support</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-karima-brand italic mb-6">Frequently Asked Questions</h1>
                    <p className="text-karima-ink/60 font-light max-w-lg mx-auto leading-relaxed">
                        Answers to common questions about our products, shipping, and care instructions.
                    </p>
                </div>

                <div className="mb-12 relative max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-transparent border-b border-karima-brand/20 py-3 text-karima-brand font-serif italic text-xl focus:outline-none focus:border-karima-brand transition-colors placeholder:text-karima-brand/30 text-center"
                    />
                </div>

                <div className="space-y-4">
                    {faqs.filter(faq =>
                        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((faq, idx) => (
                        <div
                            key={idx}
                            className="border-b border-karima-brand/10 transition-colors hover:border-karima-brand/30"
                        >
                            <button
                                onClick={() => setOpenIndex(active => active === idx ? null : idx)}
                                className="w-full text-left py-6 flex items-center justify-between group"
                            >
                                <span className={`font-serif italic text-lg text-karima-brand transition-colors ${openIndex === idx ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                                    {faq.question}
                                </span>
                                <div className={`ml-4 text-karima-ink/40 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                                    <ChevronDown size={20} strokeWidth={1} />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-karima-ink/70 font-light leading-loose text-sm pr-8">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                    {faqs.filter(faq =>
                        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
                    ).length === 0 && (
                            <div className="text-center py-12 opacity-50">
                                <p className="font-serif italic text-karima-brand text-lg">No results found.</p>
                            </div>
                        )}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-karima-ink/50 text-xs uppercase tracking-widest mb-4">Still have questions?</p>
                    <Link to="/contact" className="text-karima-brand font-serif italic text-xl border-b border-karima-brand/20 pb-1 hover:border-karima-brand transition-all hover:text-karima-gold">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
