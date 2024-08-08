import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, title, category, description, price, img, stock }) => {
    const item = { id, title, category, description, price, img, stock };

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
                    <ItemCount item={item} stock={stock} initial={1} />
                </footer>
            </article>
        </div>
    );
};

export default ItemDetail;



