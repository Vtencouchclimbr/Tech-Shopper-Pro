import ProductDetail from '../components/ProductDetails';
import SearchBar from '../components/SearchBar';


const Details = () => {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      {/* SearchBar that sticks to the top */}
      <div>
        <SearchBar onSearch={(query: string) => console.log(query)} />
      </div>

      {/* Product Details */}
      <div className="flex-grow-2">
        <ProductDetail />
      </div>
    </div>
  );
};

export default Details;
