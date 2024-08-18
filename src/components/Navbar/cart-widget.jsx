import React, { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { CartContext } from '../../CartContext';

function CartWidget() {
    const { cart } = useContext(CartContext);

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const totalItems = getTotalItems();

    return (
        <div className="cart">
            <FaShoppingBag size="40px" />
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </div>
    );
}

export default CartWidget;

