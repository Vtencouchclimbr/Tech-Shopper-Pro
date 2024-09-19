import { useState } from 'react';
import '../utils/Register.css';

function Register() {
  const [formInfo, setformInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInput = e => {
    setformInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const emailValidate = (e) => {
    e.preventDefault();
    const { email } = formInfo;
    if (!email.trim()) {
      alert('Please enter your email before submitting.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      handleFormSubmit(e);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setformInfo({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
    alert('Form submitted successfully!');
  };

  return (
    <div>
        <div className='hiddenContainer d-none d-lg-block d-md-block ms-5'>
        <p style={{ fontSize: '50px' }}>Welcome to Tech Shopper Pro!</p>
      </div>
    <div className="d-flex container-fluid formContainer">
      <form className="row g-3" onSubmit={emailValidate}>
      <p className='offerText'>Sign-up and recieve special offers <br></br>on shipping and purchases</p>
        {/* First Name */}
        <div className="col-12 col-md-6">
          <input
            value={formInfo.firstName}
            name="firstName"
            onChange={handleInput}
            className="form-control shadow"
            type="text"
            placeholder="First Name"
          />
        </div>

        {/* Last Name */}
        <div className="col-12 col-md-6">
          <input
            value={formInfo.lastName}
            name="lastName"
            onChange={handleInput}
            className="form-control shadow"
            type="text"
            placeholder="Last Name"
          />
        </div>

        {/* Email */}
        <div className="col-12">
          <input
            value={formInfo.email}
            name="email"
            onChange={handleInput}
            className="form-control shadow"
            type="email"
            placeholder="Youremail@address.com"
          />
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <button className="btn btn-primary shadow" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;
