import React, { useState } from 'react';
import AddressAutocomplete from '../components/AddressAutoComplete'; 
import { useCart } from '../components/CartState'; 

const Checkout: React.FC = () => {
  const { state } = useCart();  // Access cart state
  const { items: cartItems } = state;  // Extract cart items
  // State for address fields
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // Handle form submission
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic for processing form data (e.g., sending it to a backend or processing payment)
    console.log('Form submitted with:', { streetAddress, city, stateAddress, zipCode, country, cartItems });
};

return (
  <div className="checkout-page">
    <h1>Checkout</h1>

    {/* Cart Summary Section */}
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>

    {/* Checkout Form Section */}
    <form onSubmit={handleFormSubmit}>
      {/* Street Address Field */}
      <AddressAutocomplete
        label="Street Address"
        placeholder="Enter your street address"
        value={streetAddress}
        onChange={setStreetAddress}
      />

      {/* City Field */}
      <AddressAutocomplete
        label="City"
        placeholder="Enter your city"
        value={city}
        onChange={setCity}
      />

      {/* State Field */}
      <AddressAutocomplete
        label="State"
        placeholder="Enter your state"
        value={stateAddress}
        onChange={setStateAddress}
      />

      {/* Zip Code Field */}
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>

      {/* Country Field */}
      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          placeholder="Enter your country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Proceed to Payment</button>
    </form>
  </div>
);
};

export default Checkout;

  


