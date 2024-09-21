import React, { useState, useEffect } from 'react';
import { useWishlist } from '../components/wishlistSate';

// Defines the structure of a cart item
interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }
  
  const Cart: React.FC = () => {
    // Local state to store cart items
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    // Access wishlist dispatch from wishlist state
    const { dispatch: wishlistDispatch } = useWishlist();
  
    // Function to load cart items from localStorage when component mounts
    useEffect(() => {
      const savedCart = localStorage.getItem('toCart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }, []);  // Empty dependency array ensures this runs once when component mounts
  
    // Function to save the updated cart to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('toCart', JSON.stringify(cartItems));
    }, [cartItems]);
  
    // Function to remove an item from the cart
    const handleRemoveItem = (id: number) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };
  
    // Function to move an item to the wishlist
    const handleMoveToWishlist = (item: CartItem) => {
      handleRemoveItem(item.id);  // Remove the item from the cart
      wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: { id: item.id, name: item.name, price: item.price } });
    };
  
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
            <ul>
  {cartItems.map((item) => (
    <li key={item.id}>
      {/* Display the product image */}
      <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '10px' }} />

      {/* Display the product name and price */}
      <span>{item.name} - Price: ${item.price}</span>

      {/* Move to Wishlist Button */}
      <button onClick={() => handleMoveToWishlist(item)}>Move to Wishlist</button>

      {/* Remove Button */}
      <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
    </li>
  ))}
</ul>
        )}
      </div>
    );
  };
  
  export default Cart;




