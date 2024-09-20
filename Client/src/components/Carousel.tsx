import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Product } from '../interfaces/ShoppingData'; // Assuming this contains the Product interface

const Carousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products immediately when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  // Return loading spinner while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Return error message if there's an issue
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle case where no products are available
  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  // Split products into groups of 6
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 6) {
    groupedProducts.push(products.slice(i, i + 6));
  }

  return (
    <div id="multiItemCarousel" className="carousel slide" data-bs-interval="false">
      <div className="carousel-inner">
        {groupedProducts.map((group, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center">
              {group.map((product) => (
                <div className="col-4 col-md-2 text-center" key={product.id} style={{ minWidth: '150px' }}>
                  <a href={`/product/${product.id}`} target="_blank" rel="noopener noreferrer">
                    <img
                      src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
                      className="img-fluid"
                      alt={product.title || 'Product Image'}
                    />
                  </a>
                  <p className="mt-2">{product.title || 'No description available'}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
