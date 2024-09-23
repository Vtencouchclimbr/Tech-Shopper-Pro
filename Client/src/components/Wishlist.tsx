import React from 'react';
import { useWishlist } from './wishlistState';
import '../utils/offCanvas.css';
import { WishlistItem } from './wishlistState';

const Wishlist: React.FC = () => {
  const { state, dispatch } = useWishlist();
  const { items: wishlistItems } = state;

  console.log(wishlistItems);

  // Function to remove an item from the wishlist
  const handleRemoveFromWishlist = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };

  return (
    <div className="off-canvas-body">
      <h3>Wishlist</h3>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="list-group">
          {wishlistItems.map((item: WishlistItem) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              
              {/* Check and render product image */}
              <img
                src={item.image || 'https://via.placeholder.com/150'}  // Fallback image
                alt={item.name}
                className="img-fluid me-3"
                style={{ width: '50px', height: 'auto' }}
              />
              <div>
                <span>{item.name}</span>
                <span> - ${item.price}</span>
              </div>
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
