import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartState';  // Use the global cart state
import { useWishlist } from '../components/wishlistSate';

// Defines the structure of a cart item
export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  // Access cart state and dispatch from the global cart context
  const { state, dispatch } = useCart();
  const { items: cartItems } = state;

  const { dispatch: wishlistDispatch } = useWishlist();

  // Function to remove an item from the cart
  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // Function to move an item to the wishlist
  const handleMoveToWishlist = (item: CartItem) => {
    handleRemoveItem(item.id);  // Remove the item from the cart
    wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: { id: item.id, name: item.name, price: item.price } });
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {/* Display the product image with fallback */}
                <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} style={{ width: '100px', marginRight: '10px' }} />
                <span>{item.name} - Price: ${item.price}</span>
                <button onClick={() => handleMoveToWishlist(item)}>Move to Wishlist</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

          <Link to="/checkout">
            <button className="btn btn-primary">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
