import { useState } from 'react';
import '../utils/Register.css';

function Register() {
  const [formInfo, setFormInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formInfo;

  // Handle input changes
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });  // Clear the error when user types
  };

  // Email validation logic
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (!username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;  // Prevent submission if form is invalid
    console.log('i', formInfo);

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInfo),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      // Reset form fields on successful submission
      setFormInfo({
        username: '',
        email: '',
        password: '',
      });

      alert('Registration successful!');

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
        <form className="row g-3" onSubmit={handleFormSubmit}>
          <p className="offerText">
            Sign-up to receive special offers <br />
            on shipping and purchases
          </p>

          {/* User Name */}
          <div className="col-12 col-md-6">
            <input
              value={username}
              name="username"
              onChange={handleInput}
              className={`form-control shadow ${errors.username ? 'is-invalid' : ''}`}
              type="text"
              placeholder="User Name"
              required
              aria-describedby="usernameError"
            />
            {errors.username && <div className="invalid-feedback" id="usernameError">{errors.username}</div>}
          </div>

          {/* Email */}
          <div className="col-12">
            <input
              value={email}
              name="email"
              onChange={handleInput}
              className={`form-control shadow ${errors.email ? 'is-invalid' : ''}`}
              type="email"
              placeholder="Youremail@address.com"
              required
              aria-describedby="emailError"
            />
            {errors.email && <div className="invalid-feedback" id="emailError">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="col-12">
            <input
              value={password}
              name="password"
              onChange={handleInput}
              className={`form-control shadow ${errors.password ? 'is-invalid' : ''}`}
              type="password"
              placeholder="Password"
              required
              aria-describedby="passwordError"
            />
            {errors.password && <div className="invalid-feedback" id="passwordError">{errors.password}</div>}
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
