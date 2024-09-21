import { useState, useEffect } from 'react';
import { Product } from '../interfaces/ShoppingData';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  const location = useLocation();
  const { id } = location.state;
  
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
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Function to handle adding the product to the cart (localStorage)
  const handleAddToCart = () => {
    if (!product) return;

    // Retrieve the current cart from localStorage or initialize an empty array
    const currentCart = JSON.parse(localStorage.getItem('toCart') || '[]');

    const productToAdd = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150',  // Add the image URL
      quantity: 1  // You can handle quantity changes later if needed
    };

    // Add the current product to the cart
    const updatedCart = [...currentCart, productToAdd];

    // Save the updated cart back into localStorage
    localStorage.setItem('toCart', JSON.stringify(updatedCart));


    // Optionally alert the user that the item has been added to the cart
    alert(`${product.title} has been added to your cart.`);
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-5">Error: {error}</div>;
  }

  if (!product) {
    return <div className="alert alert-warning mt-5">Product not found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-12 col-md-6 mb-4">
          <img
            src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
            alt={product.title || 'Product Image'}
            className="img-fluid rounded shadow-md"
            
          />
        </div>
        
        {/* Product Details */}
        <div className="col-12 col-md-6">
          <h1 className="h4">{product.title}</h1>
          <p>{product.description || 'No description available.'}</p>
          <p className="h5 text-primary">Price: ${product.price}</p>

          {/* Add to Cart Button */}
          <button className="btn btn-primary mt-3 shadow-md" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
