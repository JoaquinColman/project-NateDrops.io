import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsFromFirestore, getProductsByCategoryFromFirestore } from '../../firebaseFunctions'; 
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = categoryId ? getProductsByCategoryFromFirestore : getProductsFromFirestore;
        
        fetchData(categoryId)
            .then(response => {
                if (Array.isArray(response)) {
                    setProducts(response);
                } else {
                    console.error('Expected an array from the API, but got:', response);
                    setProducts([]); 
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('Error fetching products'); 
                setProducts([]); 
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="containerGreeting">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
