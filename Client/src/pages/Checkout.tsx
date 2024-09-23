import React, { useState } from 'react';
import AddressAutocomplete from '../components/AddressAutoComplete';
import { useCart } from '../components/CartState';
import '../utils/Checkout.css';


const Checkout: React.FC = () => {
  const { state } = useCart();  // Access cart state
  const { items: cartItems } = state;  // Extract cart items
  // State for address fields
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  
  // Handle address selection and update all fields
  const handleSelectAddress = (addressDetails: any) => {
    setStreetAddress(addressDetails.street);  // Only street address
    setCity(addressDetails.city);  // City or region
    setStateAddress(addressDetails.state);  // State code
    setZipCode(addressDetails.postalCode);  // Postal code
    setCountry(addressDetails.country);  // Country
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with:', { streetAddress, city, stateAddress, zipCode, country, cartItems });
    alert('Checkout Complete!');
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Checkout</h1>

      {/* Cart Summary Section */}
      <div className="cart-summary mb-4 cartText">
        <h2>Cart Summary</h2>
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex align-items-center">
              <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} className="img-fluid" style={{ width: '100px', marginRight: '10px' }} />
              <div className="flex-grow-1">
                {item.name} - {item.quantity} x ${item.price} = ${(item.price * item.quantity).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-3">Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      {/* Checkout Form Section */}
      <form onSubmit={handleFormSubmit}>
        <div className="row form-container">
          <div className="col-12 mb-3">
            <AddressAutocomplete
              label="Street Address"
              placeholder="Enter your street address"
              value={streetAddress}
              onChange={setStreetAddress}
              onSelectAddress={handleSelectAddress}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your state"
              value={stateAddress}
              onChange={(e) => setStateAddress(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label>Zip Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
