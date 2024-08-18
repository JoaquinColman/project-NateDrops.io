import React from 'react';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, removeItem }) => {
    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <h4>{name}</h4>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${price * quantity}</p>
            </div>
            <button onClick={() => removeItem(id)} className="remove-item-button">
                Eliminar
            </button>
        </div>
    );
};

export default CartItem;