import React, { useState, useEffect } from 'react';
import AddressAutocomplete from '../components/AddressAutoComplete';
import { useCart } from '../components/CartState';
import { CartItem } from './Cart';  // Import CartItem interface from Cart.tsx

const Checkout: React.FC = () => {
  const { state } = useCart();  // Access cart state
  const cartItems: CartItem[] = state.items;  // Extract cart items

  // State for address fields
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Add useEffect to log cartItems to ensure all items have an image property
  useEffect(() => {
    console.log("Cart items in checkout:", cartItems);
  }, [cartItems]);  // Log whenever cartItems change

  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with:', { streetAddress, city, stateAddress, zipCode, country, cartItems });
    alert('Checkout Complete!');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {/* Cart Summary Section */}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <ul>
        {cartItems.map((item: CartItem) => (
            <li key={item.id}>
              {/* Display product image with fallback */}
              <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} style={{ width: '100px', marginRight: '10px' }} />
              {item.name} - {item.quantity} x ${item.price} = ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {/* Checkout Form Section */}
      <form onSubmit={handleFormSubmit}>
        <AddressAutocomplete
          label="Street Address"
          placeholder="Enter your street address"
          value={streetAddress}
          onChange={setStreetAddress}
        />

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            placeholder="Enter your state"
            value={stateAddress}
            onChange={(e) => setStateAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Zip Code</label>
          <input
            type="text"
            placeholder="Enter your zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
