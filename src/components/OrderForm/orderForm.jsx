import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import './OrderForm.css';

const OrderForm = () => {
    const { cart, total, clearCart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name,
                email,
                address,
            },
            items: cart,
            total: total, // Aquí pasamos el total
        };

        // Simular la generación de un ID de orden
        const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);

        // Aquí puedes guardar la orden en tu base de datos si es necesario

        // Limpiar el carrito después de la orden
        clearCart();

        // Redirigir al checkout con la ID de la orden y el total
        navigate('/checkout', { state: { orderId, total } });
    };

    return (
        <div className="OrderForm">
            <h2>Complete Your Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default OrderForm;

