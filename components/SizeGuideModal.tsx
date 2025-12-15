import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SizeGuideModal = ({ isOpen, onClose }: SizeGuideModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-karima-base/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in border border-karima-brand/10">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-karima-brand hover:rotate-90 transition-transform duration-300 z-10"
                >
                    <X size={24} strokeWidth={1} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-3">Reference</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-karima-brand italic">Size Guide</h2>
                    </div>

                    <div className="overflow-x-auto mb-10">
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

                    <div className="space-y-6">
                        <section>
                            <h3 className="font-serif text-xl text-karima-brand italic mb-3">How to Measure</h3>
                            <ul className="space-y-3 text-sm text-karima-ink/70 font-light leading-relaxed">
                                <li>
                                    <strong className="text-karima-brand uppercase tracking-wider text-xs mr-2">Bust</strong>
                                    Measure around the fullest part of your chest, keeping the tape measure horizontal.
                                </li>
                                <li>
                                    <strong className="text-karima-brand uppercase tracking-wider text-xs mr-2">Hips</strong>
                                    Measure around the fullest part of your hips, standing with feet together.
                                </li>
                                <li>
                                    <strong className="text-karima-brand uppercase tracking-wider text-xs mr-2">Length</strong>
                                    Measure from the highest point of your shoulder down to the floor.
                                </li>
                            </ul>
                        </section>

                        <div className="bg-karima-brand/5 p-4 border border-karima-brand/10 text-center">
                            <p className="text-xs font-light text-karima-ink/80 italic">
                                "Our abayas are cut for a loose, modest drape. If you are between sizes, we recommend sizing down."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizeGuideModal;
