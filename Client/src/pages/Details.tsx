import ProductDetail from '../components/ProductDetails';
import SearchBar from '../components/SearchBar';
import '../utils/Details.css';

const Details = () => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      {/* SearchBar that sticks to the top */}
      <div>
        <SearchBar />
      </div>

      {/* Product Details */}
      <div className="flex-grow-2">
        <ProductDetail />
      </div>
    </div>
  );
};

export default Details;
