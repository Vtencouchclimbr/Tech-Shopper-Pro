import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../interfaces/ShoppingData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
        alt={product.title || 'Product Image'}
        style={{ width: '300px', height: '300px' }}
      />
      <p>{product.description || 'No description available.'}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
