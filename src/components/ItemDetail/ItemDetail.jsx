import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, title, category, description, price, img, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            title,
            price,
        };

        addItem(item, quantity);
    };

    return (
        <div className='Detail'>
            <article className="CardDetail">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {title}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={title} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Category: {category}
                    </p>
                    <p className="InfoDes">
                        Description: {description}
                    </p>
                    <p className="Info">
                        Price: ${price}
                    </p>
                </section>
                <footer className="ItemFooter">
                    {quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Go to cart</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                    )}
                </footer>
            </article>
        </div>
    );
}

export default ItemDetail;
