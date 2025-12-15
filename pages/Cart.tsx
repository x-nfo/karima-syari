import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const subtotal = cart.reduce((a, c) => a + (c.price * c.quantity), 0);

    return (
        <div className="py-40 px-6 min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-5xl md:text-6xl font-serif text-karima-brand mb-12 italic">Your Selection</h1>
                {cart.length === 0 ? (
                    <div className="py-32 border-t border-b border-karima-brand/10">
                        <p className="text-karima-ink/40 text-sm font-light mb-8 uppercase tracking-widest">Your shopping bag is empty</p>
                        <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.2em] text-karima-brand border-b border-karima-brand pb-1 hover:text-karima-gold hover:border-karima-gold transition-colors">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className="space-y-10 text-left">
                        {cart.map((item) => (
                            <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-8 bg-transparent pb-8 border-b border-karima-brand/5">
                                <img src={item.image} className="w-24 h-32 object-cover grayscale-[20%]" alt={item.name} />
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-serif text-xl text-karima-brand">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                            className="text-karima-ink/30 hover:text-karima-brand transition-colors"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>

                                    <div className="flex gap-6 text-[10px] uppercase tracking-widest text-karima-ink/60">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.selectedColor }}></div>
                                            <span>{item.selectedSize}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center gap-4 text-karima-ink/80">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)}
                                                className="text-sm hover:text-karima-brand"
                                            >
                                                -
                                            </button>
                                            <span className="text-xs font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)}
                                                className="text-sm hover:text-karima-brand"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="text-sm font-medium text-karima-brand">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="pt-8 text-right">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xs uppercase tracking-widest text-karima-ink/50">Subtotal</span>
                                <span className="text-3xl font-serif text-karima-brand italic">Rp {subtotal.toLocaleString('id-ID')}</span>
                            </div>
                            <button className="w-full bg-karima-brand text-karima-base py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-karima-ink transition-colors">Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
