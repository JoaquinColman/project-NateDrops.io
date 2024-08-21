import { useState, useEffect } from 'react';
import { getProductByIdFromFirestore } from '../../firebaseFunctions';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {

        setLoading(true);

        const fetchProduct = async () => {
            try {
                const response = await getProductByIdFromFirestore(itemId);
                if (response) {
                    console.log('Producto encontrado:', response); 
                    setProduct(response);
                } else {
                    console.error('No se encontró el producto para el ID:', itemId);
                    setError('Product not found');
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
                setError('Error fetching product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [itemId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Product not found</p>}
        </div>
    );
};

export default ItemDetailContainer;



