import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../cartItem/cartItem';

const Cart = () => {
    const { cart, clearCart, getTotalItems, total } = useContext(CartContext);

    if (getTotalItems() === 0) {
        return (
            <div className="cart-empty">
                <h1>There are no items in your cart!</h1>
                <Link to='/' className="Option">Go back to homepage</Link>
            </div>
        );
    }

    return (
        <div className="Cart">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Empty cart</button>
            <Link to='/order' className='Option'>Proceed to Checkout</Link> {/* Cambiado a /order */}
        </div>
    );
};

export default Cart;


