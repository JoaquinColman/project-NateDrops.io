import React, { useState } from 'react';
import './ItemCount.css';
 

const ItemCount = ({ Item, stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

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
            <button className="Button Button-Add" onClick={() => onAdd(quantity)}>Add to Cart</button>
        </div>
    );
};

export default ItemCount;






























