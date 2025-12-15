import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SizeGuide = () => {
    return (
        <div className="min-h-screen pt-40 md:pt-52 pb-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
            <div className="container mx-auto max-w-4xl px-6">
                <div className="text-center mb-16">
                    <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-4">Reference</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-karima-brand italic mb-6">Size Guide</h1>
                    <p className="text-karima-ink/60 font-light max-w-lg mx-auto leading-relaxed">
                        Our pieces are designed with a modest, relaxed fit. Use this guide to find the perfect size for your height and body type.
                    </p>
                </div>

                {/* Size Chart Table */}
                <div className="overflow-x-auto mb-16">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-karima-brand text-xs uppercase tracking-widest text-karima-brand">
                                <th className="py-4 px-4 font-medium">Size</th>
                                <th className="py-4 px-4 font-medium">US/UK</th>
                                <th className="py-4 px-4 font-medium">Bust (cm)</th>
                                <th className="py-4 px-4 font-medium">Hips (cm)</th>
                                <th className="py-4 px-4 font-medium">Length (cm)</th>
                            </tr>
                        </thead>
                        <tbody className="text-karima-ink/80 font-light text-sm">
                            <tr className="border-b border-karima-brand/10 hover:bg-karima-brand/5 transition-colors">
                                <td className="py-4 px-4 font-serif italic text-lg text-karima-brand">S</td>
                                <td className="py-4 px-4">4-6</td>
                                <td className="py-4 px-4">90-95</td>
                                <td className="py-4 px-4">98-103</td>
                                <td className="py-4 px-4">135</td>
                            </tr>
                            <tr className="border-b border-karima-brand/10 hover:bg-karima-brand/5 transition-colors">
                                <td className="py-4 px-4 font-serif italic text-lg text-karima-brand">M</td>
                                <td className="py-4 px-4">8-10</td>
                                <td className="py-4 px-4">95-100</td>
                                <td className="py-4 px-4">103-108</td>
                                <td className="py-4 px-4">138</td>
                            </tr>
                            <tr className="border-b border-karima-brand/10 hover:bg-karima-brand/5 transition-colors">
                                <td className="py-4 px-4 font-serif italic text-lg text-karima-brand">L</td>
                                <td className="py-4 px-4">12-14</td>
                                <td className="py-4 px-4">100-105</td>
                                <td className="py-4 px-4">108-113</td>
                                <td className="py-4 px-4">140</td>
                            </tr>
                            <tr className="border-b border-karima-brand/10 hover:bg-karima-brand/5 transition-colors">
                                <td className="py-4 px-4 font-serif italic text-lg text-karima-brand">XL</td>
                                <td className="py-4 px-4">16-18</td>
                                <td className="py-4 px-4">105-110</td>
                                <td className="py-4 px-4">113-118</td>
                                <td className="py-4 px-4">142</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <section>
                            <h3 className="font-serif text-2xl text-karima-brand italic mb-4">How to Measure</h3>
                            <ul className="space-y-4 text-sm text-karima-ink/70 font-light leading-relaxed">
                                <li>
                                    <strong className="text-karima-brand uppercase tracking-wider text-xs block mb-1">Bust</strong>
                                    Measure around the fullest part of your chest, keeping the tape measure horizontal.
                                </li>
                                <li>
                                    <strong className="text-karima-brand uppercase tracking-wider text-xs block mb-1">Hips</strong>
                                    Measure around the fullest part of your hips, standing with feet together.
                                </li>
                                <li>
                                    <strong className="text-karima-brand uppercase tracking-wider text-xs block mb-1">Length</strong>
                                    Measure from the highest point of your shoulder down to the floor (or desired hemline).
                                </li>
                            </ul>
                        </section>

                        <div className="bg-karima-brand/5 p-6 border border-karima-brand/10">
                            <p className="text-sm font-light text-karima-ink/80 italic">
                                "Our abayas are cut for a loose, modest drape. If you are between sizes or prefer a more fitted look, we recommend sizing down."
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-100 aspect-[3/4] relative flex items-center justify-center">
                        {/* Placeholder for Measurement Diagram */}
                        <div className="text-center p-8">
                            <span className="text-karima-brand/20 font-serif italic text-2xl">Measurement Guide Illustration</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;
