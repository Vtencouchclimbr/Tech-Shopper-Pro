import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import '../utils/Home.css';

const Shop = () => {

  return (
    <div style={{ height: '' }} className="flair d-flex flex-column">
      <h2>Redefining the Way You Shop for Tech</h2>
      <div className="flex-grow-2 pt-3 searchBar">
      <SearchBar />
      </div>
      <div className="flex-grow-3 pt-5 carousel">
      <Carousel />
      </div>
    </div>
  );
};

export default Shop;