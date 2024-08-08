
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;
        asyncFunc(categoryId)
            .then(response => {
                if (Array.isArray(response)) {
                    setProducts(response);
                } else {
                    console.error('Expected an array from the API, but got:', response);
                    setProducts([]); 
                }
            })
            .catch(error => {
                console.error(error);
                setProducts([]); 
            });
    }, [categoryId]);

    return (
        <div className="containerGreeting">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
