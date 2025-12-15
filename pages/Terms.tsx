import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
    return (
        <div className="min-h-screen pt-40 md:pt-52 pb-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/" className="inline-flex items-center gap-2 text-karima-ink/40 hover:text-karima-brand transition-colors text-xs uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
            <div className="container mx-auto max-w-3xl px-6">
                <div className="text-center mb-16">
                    <span className="text-xxs text-karima-accent uppercase tracking-[0.3em] font-medium block mb-4">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-karima-brand italic mb-6">Terms of Service</h1>
                    <p className="text-karima-ink/60 font-light max-w-lg mx-auto leading-relaxed text-sm">
                        Please read these terms carefully before using our services.
                    </p>
                </div>

                <div className="prose prose-stone max-w-none text-karima-ink/70 font-light leading-loose text-sm">
                    <p>
                        By accessing or using the KARIMA website, you agree to be bound by these Terms of Service.
                    </p>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">1. General Conditions</h3>
                        <p>
                            We reserve the right to refuse service to anyone for any reason at any time. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">2. Products and Services</h3>
                        <p>
                            We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right to limit the sales of our products to any person or geographic region.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">3. Pricing</h3>
                        <p>
                            Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">4. Accuracy of Billing Information</h3>
                        <p>
                            You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">5. Governing Law</h3>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with the laws of Indonesia.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
