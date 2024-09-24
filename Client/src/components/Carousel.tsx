import 'bootstrap/dist/css/bootstrap.min.css';
import '../utils/Carousel.css';
import { useState, useEffect } from 'react';
import { Product } from '../interfaces/ShoppingData';  // Assuming this contains the Product interface
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation

const Carousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products when the component mounts
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
      } catch (error: unknown) {
        // Type guard to ensure the error is an instance of Error
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available.</div>;
  }

  // Split products into groups of 5
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 5) {
    groupedProducts.push(products.slice(i, i + 5));
  }

  return (
    <div id="multiItemCarousel" className="carousel slide" data-bs-interval="false">
      {/* Carousel controls positioned above the carousel */}
      <div className="d-flex justify-content-between mb-3">
        <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="carousel-inner">
        {groupedProducts.map((group, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center">
              {group.map((product) => {
                console.log(product);  // Debug: log product details to the console

                return (
                  <div className="col-4 col-md-2 text-center" key={product.id} style={{ minWidth: '150px' }}>
                    {/* Pass the product id through the state property of Link */}
                    <Link
                      to={{
                        pathname: '/details',
                      }}
                      state={{ id: product.id }}  // Passing product.id through state
                    >
                      <img
                        src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'}
                        className="img-fluid col-10 col-md-10"
                        alt={product.title || 'Product Image'}
                      />
                    </Link>
                    <p className="mt-2">{product.title || 'No description available'}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
