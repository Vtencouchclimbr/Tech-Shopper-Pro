import { retrieveProducts } from '../api/productsAPI';  // Make sure the path to productsAPI.tsx is correct

const Home = () => {

  const handleClick = async () => {
    const products = await retrieveProducts();
    console.log(products); // Do something with the products, like setting them in state or displaying them
  };

  return (
    <>
      <h1>Home</h1>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default Home;
