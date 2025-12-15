import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import SizeGuide from './pages/SizeGuide';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Community from './pages/Community';
import Highlights from './pages/Highlights';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FeaturesBar from './components/FeaturesBar';

import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { X } from 'lucide-react';

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return null;
};

const AppContent = () => {
   const [searchOpen, setSearchOpen] = useState(false);

   return (
      <>
         <ScrollToTop />
         <Navbar onOpenSearch={() => setSearchOpen(true)} />

         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/product/:id" element={<ProductDetail />} />
               <Route path="/about" element={<About />} />
               <Route path="/community" element={<Community />} />
               <Route path="/highlights" element={<Highlights />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/blog/:id" element={<BlogPost />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/shipping" element={<Shipping />} />
               <Route path="/returns" element={<Returns />} />
               <Route path="/size-guide" element={<SizeGuide />} />
               <Route path="/privacy" element={<Privacy />} />
               <Route path="/terms" element={<Terms />} />
            </Routes>
         </main>


         <FeaturesBar />
         <Footer />

         {/* Search Overlay */}
         {searchOpen && (
            <div className="fixed inset-0 z-[60] bg-karima-base/95 backdrop-blur-xl p-12 flex flex-col animate-fade-in">
               <div className="flex justify-end">
                  <button onClick={() => setSearchOpen(false)} className="hover:rotate-90 transition-transform duration-500">
                     <X size={40} strokeWidth={0.5} className="text-karima-brand" />
                  </button>
               </div>
               <div className="flex-1 flex flex-col items-center justify-center">
                  <input
                     type="text"
                     placeholder="Search Collection..."
                     className="w-full max-w-4xl text-4xl md:text-7xl font-serif italic bg-transparent border-b border-karima-brand/20 py-8 focus:outline-none focus:border-karima-brand text-karima-brand text-center placeholder:text-karima-brand/20 transition-all"
                     autoFocus
                  />
               </div>
            </div>
         )}
      </>
   );
};

function App() {
   return (
      <div className="relative min-h-screen bg-karima-base text-karima-ink font-sans selection:bg-karima-brand selection:text-white">
         <BrowserRouter>
            <CartProvider>
               <AppContent />
            </CartProvider>
         </BrowserRouter>
      </div>
   );
}

export default App;