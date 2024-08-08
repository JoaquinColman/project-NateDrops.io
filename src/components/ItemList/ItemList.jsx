import './ItemList.css'
import Item from '../Item/Item'
import React from 'react';

const ItemList = ({ products }) => {
    if (!Array.isArray(products)) {
        console.error('Expected an array for products, but got:', products);
        return <p>No products available</p>; 
    }

    return (
        <div className="item-list">
            {products.map((product) => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ItemList;
