import { useState } from 'react';
import Auth from '../utils/auth.ts';

function Login() {
  const [formInfo, setFormInfo] = useState({
    userName: "",
    password: ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Call the login API endpoint with formInfo data
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInfo),
      });

      // Check if response is OK
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message}`);
      }

      // Parse the response and log in the user
      const data = await response.json();
      Auth.login(data.token);

      // Reset form after submission
      setFormInfo({
        userName: "",
        password: "",
      });

      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Failed to login', err);
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
            Sign-in
          </p>

          {/* User Name */}
          <div className="col-12 col-md-6">
            <input
              value={formInfo.userName}
              name="userName"
              onChange={handleInput}
              className="form-control shadow"
              type="text"
              placeholder="User Name"
            />
          </div>

          {/* Password */}
          <div className="col-12 col-md-6">
            <input
              value={formInfo.password}
              name="password" // Changed from lastName to password
              onChange={handleInput}
              className="form-control shadow"
              type="password" // Changed type to password for security
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center">
            <button className="btn btn-primary shadow" type="submit">
              Submit
            </button>
          </div>
          <a href="/register" className="btn btn-link">Don't have an account? Register here</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
