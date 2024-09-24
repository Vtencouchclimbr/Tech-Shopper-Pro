import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartState';  // Use the global cart state
import '../utils/Cart.css';
import { useWishlist } from '../components/wishlistState';

// Defines the structure of a cart item
export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const { items: cartItems } = state;
  const { dispatch: wishlistDispatch } = useWishlist();

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleMoveToWishlist = (item: CartItem) => {
   
    handleRemoveItem(item.id);  // Remove the item from the cart
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: { id: item.id, name: item.name, price: item.price, image: item.image } });
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container my-1">
      <h1 className="text-center mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group mb-4 item-container">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex  align-items-center flex-column flex-md-row">
                <div className="d-flex align-items-center mb-3 mb-md-0">
                  <img
                    src={item.image || 'https://via.placeholder.com/150'}
                    alt={item.name}
                    className="img-fluid me-3"
                    style={{ width: '100px', height: 'auto' }}
                  />
                  <span>{item.name}</span>
                </div>
                <div className="d-flex flex-column text-md-end text-center">
                  <span className="mb-2 small">Price: ${item.price.toFixed(2)}</span>
                  <div className="btn-group">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => handleMoveToWishlist(item)}
                    >
                      Move to Wishlist
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mb-4">
            <h3 className="mb-3">Total Price: ${totalPrice.toFixed(2)}</h3>
            <Link to="/checkout">
              <button className="btn btn-primary w-md-auto proceedBtn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
