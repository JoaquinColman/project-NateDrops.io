import React, { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';
import './ItemCount.css';

const ItemCount = ({ item, stock, initial }) => {
    const [quantity, setQuantity] = useState(initial);
    const { addItemToCart } = useContext(CartContext);

    const handleIncrease = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Controls">
            <button className="Button" onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <span className="Number">{quantity}</span>
            <button className="Button" onClick={handleIncrease} disabled={quantity === stock}>+</button>
            <button className="Button Button-Add" onClick={() => addItemToCart(item, quantity)}>Add to Cart</button>
        </div>
    );
};

export default ItemCount;





























