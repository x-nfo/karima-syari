import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { getStylistRecommendation, StylistResponse } from '../services/geminiService';
import { ChatMessage, Product } from '../types';
import { PRODUCTS } from '../constants';

interface AIStylistProps {
  onProductClick: (product: Product) => void;
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

const AIStylist: React.FC<AIStylistProps> = ({ onProductClick, isOpenExternal, onCloseExternal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Welcome to Karima Atelier. I am Noora, your styling assistant. How may I elevate your wardrobe today?"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpenExternal !== undefined) {
        setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  const handleClose = () => {
      setIsOpen(false);
      if (onCloseExternal) onCloseExternal();
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response: StylistResponse = await getStylistRecommendation(input);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: response.message,
      relatedProductIds: response.recommendedProductIds
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const getRelatedProducts = (ids: string[] | undefined) => {
    if (!ids) return [];
    return PRODUCTS.filter(p => ids.includes(p.id));
  };

  return (
    <>
      {/* Elegant Floating Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-karima-brand text-karima-base px-6 py-4 rounded-full shadow-2xl hover:bg-karima-ink transition-all duration-500 flex items-center gap-3 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={18} strokeWidth={1} className="group-hover:rotate-12 transition-transform" />
        <span className="font-serif italic pr-1">Ask Noora</span>
      </button>

      {/* Main Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-karima-base z-50 shadow-[0_0_50px_rgba(0,0,0,0.1)] transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-8 border-b border-karima-brand/10 flex justify-between items-center bg-karima-base">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-karima-brand text-karima-base flex items-center justify-center">
               <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-karima-brand italic">Noora</h3>
              <p className="text-[9px] text-karima-accent uppercase tracking-[0.2em]">Styling Concierge</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-2 hover:rotate-90 transition-transform duration-300 text-karima-brand">
            <X size={24} strokeWidth={0.5} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-karima-base">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] space-y-3`}>
                <div className={`p-5 text-sm font-light leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-karima-brand text-white rounded-t-xl rounded-bl-xl' 
                    : 'bg-white text-karima-ink rounded-t-xl rounded-br-xl border border-karima-brand/5'
                }`}>
                  {msg.text}
                </div>

                {msg.role === 'model' && msg.relatedProductIds && msg.relatedProductIds.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {getRelatedProducts(msg.relatedProductIds).map(product => (
                      <div 
                        key={product.id} 
                        className="bg-white p-2 cursor-pointer hover:shadow-md transition-all group border border-karima-brand/5"
                        onClick={() => onProductClick(product)}
                      >
                        <div className="aspect-[3/4] overflow-hidden mb-2">
                          <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                        </div>
                        <p className="text-[10px] font-bold text-karima-brand uppercase tracking-wider truncate">{product.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white px-4 py-3 rounded-full flex gap-1 items-center shadow-sm">
                 <span className="w-1.5 h-1.5 bg-karima-brand rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-karima-brand rounded-full animate-bounce delay-100"></span>
                 <span className="w-1.5 h-1.5 bg-karima-brand rounded-full animate-bounce delay-200"></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-karima-brand/10 bg-white">
           <form onSubmit={handleSubmit} className="relative">
             <input
               type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Describe your occasion..."
               className="w-full pl-6 pr-14 py-4 bg-karima-base border-none focus:ring-1 focus:ring-karima-brand text-sm font-light placeholder:text-karima-ink/30 rounded-full"
             />
             <button 
               type="submit" 
               disabled={isLoading || !input.trim()}
               className="absolute right-2 top-2 p-2.5 bg-karima-brand text-white rounded-full hover:bg-karima-ink disabled:opacity-50 transition-colors shadow-lg"
             >
               <Send size={16} />
             </button>
           </form>
        </div>
      </div>
    </>
  );
};

export default AIStylist;