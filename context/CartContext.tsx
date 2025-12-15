import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, size: string, color: string) => void;
    removeFromCart: (itemId: string, size: string, color: string) => void;
    updateQuantity: (itemId: string, size: string, color: string, delta: number) => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product, size: string, color: string) => {
        const existingItem = cart.find(
            item => item.id === product.id && item.selectedSize === size && item.selectedColor === color
        );

        if (existingItem) {
            setCart(cart.map(item =>
                (item.id === product.id && item.selectedSize === size && item.selectedColor === color)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, {
                ...product,
                quantity: 1,
                selectedSize: size,
                selectedColor: color
            }]);
        }
        // You might want to move the alert to the UI component or use a toast
        // alert(`Added ${product.name} (${size}) to bag`);
    };

    const removeFromCart = (itemId: string, size: string, color: string) => {
        setCart(cart.filter(item => !(item.id === itemId && item.selectedSize === size && item.selectedColor === color)));
    };

    const updateQuantity = (itemId: string, size: string, color: string, delta: number) => {
        setCart(cart.map(item => {
            if (item.id === itemId && item.selectedSize === size && item.selectedColor === color) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }));
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
