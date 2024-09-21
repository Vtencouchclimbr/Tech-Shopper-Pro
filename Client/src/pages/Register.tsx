import { useState } from 'react';
import '../utils/Register.css';

function Register() {
  const [formInfo, setformInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const emailValidate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = formInfo;
    if (!email.trim()) {
      alert('Please enter your email before submitting.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      await handleFormSubmit(e);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInfo), // Sending form data to backend
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      // Reset form fields
      setformInfo({
        username: '',
        email: '',
        password: '', // Reset the password field too
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <div className="hiddenContainer d-none d-lg-block d-md-block ms-5">
        <p style={{ fontSize: '50px' }}>Welcome to Tech Shopper Pro!</p>
      </div>
      <div className="d-flex container-fluid formContainer">
        <form className="row g-3" onSubmit={emailValidate}>
          <p className="offerText">
            Sign-up to receive special offers <br />
            on shipping and purchases
          </p>

          {/* User Name */}
          <div className="col-12 col-md-6">
            <input
              value={formInfo.username}
              name="username"
              onChange={handleInput}
              className="form-control shadow"
              type="text"
              placeholder="User Name"
              required
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
              required
            />
          </div>

          {/* Password */}
          <div className="col-12">
            <input
              value={formInfo.password}
              name="password"
              onChange={handleInput}
              className="form-control shadow"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center">
            <button className="btn btn-primary shadow" type="submit">
              Submit
            </button>
          </div>
          <a href="/" className="btn btn-link">
            Already have an account? Login here!
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
