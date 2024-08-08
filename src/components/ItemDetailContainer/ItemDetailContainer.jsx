import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        console.log('Fetching product with ID:', itemId); 
        getProductById(itemId)
            .then(response => {
                console.log('Product fetched:', response); 
                setProduct(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;
