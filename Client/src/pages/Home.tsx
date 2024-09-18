import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import '../utils/Home.css';

const Home = () => {

  return (
    <div style={{ height: '700px' }} className="d-flex flex-column ">
      <h2>Where wings take dream</h2>
      <div className="flex-grow-2 pt-3">
      <SearchBar />
      </div>
      <div className="flex-grow-3 pt-5">
      <Carousel />
      </div>
    </div>
  );
};

export default Home;
