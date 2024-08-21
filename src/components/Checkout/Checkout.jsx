import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './Checkout.css';

const Checkout = () => {
    const { state } = useLocation();
    const { orderId, total } = state || {}; 
    const { cart, clearCart } = useContext(CartContext);

    return (
        <div className="Checkout">
            <h1>Thank you for your purchase!</h1>
            {orderId && <h3>Your Order ID is: {orderId}</h3>}
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





