import React, { useState } from 'react';
import AddressAutocomplete from '../components/AddressAutoComplete';
import { useCart } from '../components/CartState';
//import '../utils/Checkout.css';

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
    <div className="container my-4">
      <h1 className="text-center mb-4">Checkout</h1>
      {/* Cart Summary Section */}
      <div className="cart-summary mb-4">
        <h2>Cart Summary</h2>
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex align-items-center">
              <img
                src={item.image || 'https://via.placeholder.com/150'}
                alt={item.name}
                className="img-fluid me-3"
                style={{ width: '100px' }}
              />
              <div>
                {item.name} - {item.quantity} x ${item.price} = ${(item.price * item.quantity).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-3">Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      {/* Checkout Form Section */}
      <form onSubmit={handleFormSubmit}>
        <div className="row mb-3">
          <div className="col-12">
            <AddressAutocomplete
              label="Street Address"
              placeholder="Enter your street address"
              value={streetAddress}
              onChange={setStreetAddress}
              onSelectAddress={handleSelectAddress}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input
              type="text"
              id="state"
              className="form-control"
              placeholder="Enter your state"
              value={stateAddress}
              onChange={(e) => setStateAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="zip" className="form-label">Zip Code</label>
            <input
              type="text"
              id="zip"
              className="form-control"
              placeholder="Enter your zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input
              type="text"
              id="country"
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
