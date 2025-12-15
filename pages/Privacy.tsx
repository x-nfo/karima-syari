import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-karima-brand italic mb-6">Privacy Policy</h1>
                    <p className="text-karima-ink/60 font-light max-w-lg mx-auto leading-relaxed text-sm">
                        Last updated: December 14, 2025
                    </p>
                </div>

                <div className="prose prose-stone max-w-none text-karima-ink/70 font-light leading-loose text-sm">
                    <p>
                        KARIMA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by KARIMA.
                    </p>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">1. Information We Collect</h3>
                        <p>
                            We collect information you provide directly to us, such as when you create an account, place an order, subscribe to our newsletter, or contact us for support. This information may include your name, email address, shipping address, payment information, and phone number.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Process and fulfill your orders.</li>
                            <li>Communicate with you about your account or order.</li>
                            <li>Send you marketing communications (if you have opted in).</li>
                            <li>Improve our website and customer service.</li>
                            <li>Detect and prevent fraud.</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">3. Digital Payments & Security</h3>
                        <p>
                            We do not store your full credit card information on our servers. All payment processing is handled by secure third-party payment gateways (such as Midtrans or Stripe) that adhere to PCI-DSS standards.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">4. Cookies</h3>
                        <p>
                            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h3 className="font-serif text-lg text-karima-brand italic mb-2">5. Contact Us</h3>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@karima.com" className="text-karima-brand underline">privacy@karima.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
