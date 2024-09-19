import { useState } from 'react';

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
    <div className="container-fluid">

      {/* Text animation */}
      <div className="dynamic-text">
        {/* <TextAnimation /> */}
      </div>

      {/* Form section */}
      <form className="row g-3 justify-content-center form-text" onSubmit={emailValidate}>
        {/* First Name */}
        <div className="col-md-4 col-lg-3">
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
        <div className="col-md-4 col-lg-3">
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
        <div className="col-md-8 col-lg-6">
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
        <div className="col-md-12 text-center">
          <button className="btn btn-outline-light shadow" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;

