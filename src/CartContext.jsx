import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(newTotal);
    }, [cart]);

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const addItem = (item, quantity) => {
        console.log('Adding item to cart:', item);
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('The item already exists in the cart');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalItems, total }}>
            {children}
        </CartContext.Provider>
    );
};


