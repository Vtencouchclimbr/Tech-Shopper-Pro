import React, { useState, useEffect } from 'react';
import AddressAutocomplete from '../components/AddressAutoComplete';
import { useCart } from '../components/CartState';
import { CartItem } from './Cart';  // Import CartItem interface from Cart.tsx
import '../utils/Checkout.css';

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
    <div className="container my-4">
      <h1 className="text-center mb-4">Checkout</h1>

      {/* Cart Summary Section */}
      <div className="cart-summary mb-4">
        <h2 className="mb-3">Cart Summary</h2>
        <ul className="list-group">
          {cartItems.map((item: CartItem) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                {/* Display product image with fallback */}
                <img
                  src={item.image || 'https://via.placeholder.com/150'}
                  alt={item.name}
                  className="img-fluid me-3"
                  style={{ width: '100px', height: 'auto' }}
                />
                <span>{item.name}</span>
              </div>
              <span>{item.quantity} x ${item.price} = ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h3 className="mt-3 text-end">Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {/* Checkout Form Section */}
      <form onSubmit={handleFormSubmit} className="needs-validation cartText">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-12 mb-3">
                <AddressAutocomplete
                  label="Street Address"
                  placeholder="Enter your street address"
                  value={streetAddress}
                  onChange={setStreetAddress}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter your state"
                  value={stateAddress}
                  onChange={(e) => setStateAddress(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter your country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Button Column */}
          <div className="col-md-3 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100">Proceed to Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
