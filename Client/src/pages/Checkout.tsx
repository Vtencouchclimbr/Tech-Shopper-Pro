import React, { useState } from 'react';
import AddressAutocomplete from '../components/AddressAutoComplete';
import { useCart } from '../components/CartState';

const Checkout: React.FC = () => {
  const { state } = useCart();
  const { items: cartItems } = state;  

  // State for address fields
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  // Handles address selection and update all fields
  const handleSelectAddress = (addressDetails: any) => {
    console.log('Address Selected:', addressDetails);
    setStreetAddress(addressDetails.street);  
    setCity(addressDetails.city);  
    setStateAddress(addressDetails.state);  
    setZipCode(addressDetails.postalCode);  
    setCountry(addressDetails.country);  
};

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
          {cartItems.map((item) => (
            <li key={item.id}>
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
          onSelectAddress={handleSelectAddress}  
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
