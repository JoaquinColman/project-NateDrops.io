import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    return (
        <div className="Checkout">
            <h1>Thank you for your purchase!</h1>
            <h3>Your order details:</h3>
            {cart.map(item => (
                <div key={item.id} className="CheckoutItem">
                    <div>
                        <h4>{item.title}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>
                </div>
            ))}
            <h3>Total paid: ${total}</h3>
            <Link to='/' onClick={clearCart} className='Option'>Go back to homepage</Link>
        </div>
    );
};

export default Checkout;


