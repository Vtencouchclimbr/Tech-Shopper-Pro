import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Product } from '../interfaces/ShoppingData';
import logo from '../utils/logo.jpg';

const items = [
  { id: 1, src: {logo}, alt: 'Item 1' },
  { id: 2, src: {logo}, alt: 'Item 2' },
  { id: 3, src: {logo}, alt: 'Item 3' },
  { id: 4, src: {logo}, alt: 'Item 4' },
  { id: 5, src: {logo}, alt: 'Item 5' },
  { id: 6, src: {logo}, alt: 'Item 6' },
  { id: 7, src: {logo}, alt: 'Item 7' },
  { id: 8, src: {logo}, alt: 'Item 8' },
  { id: 9, src: {logo}, alt: 'Item 9' },
  { id: 10, src: {logo}, alt: 'Item 10' },
  { id: 11, src: {logo}, alt: 'Item 11' },
  { id: 12, src: {logo}, alt: 'Item 12' },
];

const Carousel = () => {
  const [products, setproducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('/api/products')
    .then((response) => response.json())
    .then((data) => console.log(data))
}, []);

  return (
    <div id="multiItemCarousel" className="carousel slide" data-bs-interval="false">
      <div className="carousel-inner">
        {items.map((data, index) => {
          return (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-center">
                {items.slice(index, index + 6).map((item) => (
                  <div className="col-4 col-md-2" key={item.id} style={{ minWidth: '150px' }}>
                    <img src={item.src} className="img-fluid" alt={item.alt} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
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







// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';
// import { Product } from '../interfaces/ShoppingData'; // Assuming this contains the Product interface

// const Carousel = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products when the component mounts
//   useEffect(() => {
//     fetch('/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched Products:', data);
//         setProducts(data); // Store fetched products
//         setLoading(false); // Turn off loading state
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//         setLoading(false); // Turn off loading state even in case of error
//       });
//   }, []);

//   // Return loading spinner while fetching data
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Split products into groups of 6
//   const groupedProducts = [];
//   for (let i = 0; i < products.length; i += 6) {
//     groupedProducts.push(products.slice(i, i + 6));
//   }

//   return (
//     <div id="multiItemCarousel" className="carousel slide" data-bs-interval="false">
//       <div className="carousel-inner">
//         {groupedProducts.map((group, index) => {
//           return (
//             <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//               <div className="d-flex justify-content-center">
//                 {/* Render each group of products */}
//                 {group.map((product) => (
//                   <div className="col-4 col-md-2" key={product.id} style={{ minWidth: '150px' }}>
//                     <img src={product.images[0]} className="img-fluid" alt={product.title} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Carousel controls */}
//       <button className="carousel-control-prev" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#multiItemCarousel" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;
