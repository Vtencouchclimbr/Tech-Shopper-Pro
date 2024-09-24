import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useWishlist } from './components/wishlistState';
import React, { useState } from 'react';
import './utils/offCanvas.css';

const App: React.FC= () => {
  const { state: wishlistState } = useWishlist();
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar stays at the top on all screen sizes */}
      <Navbar toggleWishlist={toggleWishlist} />  {/* Pass the toggle function to Navbar */}

      {/* Main content area */}
      <main style={{ backgroundColor: '#f8f5e6' }} className="flex-grow-1 d-flex justify-content-center align-items-center">
        {/* Responsive container for the content */}
        <div className="container-fluid p-2">
          <Outlet />
        </div>
      </main>

      {/* Footer component */}
      <Footer />

      {/* Off-Canvas Wishlist */}
      <div className={`off-canvas ${showWishlist ? 'show' : ''}`}>  {/* slides in from the right */}
        <div className="off-canvas-header">
          <h2>Your Wishlist</h2>
          <button onClick={toggleWishlist}>Close</button>
        </div>
        <div className="off-canvas-body">
          {wishlistState.items.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            <ul>
              {wishlistState.items.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>Price: ${item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
