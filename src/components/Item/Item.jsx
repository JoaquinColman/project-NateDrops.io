import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({ id, title, price, img, stock }) => {


    return (
        <div className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{title}</h2>   
            </header>
            <picture>
                <img src={img} alt={title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Price: ${price}</p>
                <p className="Info">Stock: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Add to cart</Link>
            </footer>
        </div>
    );
};

export default Item;