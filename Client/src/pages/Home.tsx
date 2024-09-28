import { useState } from 'react';
import Auth from '../utils/auth.ts';
import { Link } from 'react-router-dom';

function Login() {
  const [formInfo, setFormInfo] = useState({
    username: "",
    password: ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Call the login API endpoint with formInfo data
      const response = await fetch('http://localhost:3001/auth/login', {
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
      console.log('Login response', data);
      Auth.login(data.token);

      // Reset form after submission
      setFormInfo({
        username: "",
        password: "",
      });

      alert('Form submitted successfully!');
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="hiddenContainer d-none d-lg-block ms-5">
        <h1 className="display-4">Welcome to Tech Shopper Pro!</h1>
      </div>
      <div className="formContainer col-12 col-md-8 col-lg-6">
        <form className="row g-3" onSubmit={handleFormSubmit}>
          <p className="offerText text-center">Sign-in</p>

          {/* User Name */}
          <div className="col-12">
            <input
              value={formInfo.username}
              name="username"
              onChange={handleInput}
              className="form-control shadow"
              type="text"
              placeholder="User Name"
            />
          </div>

          {/* Password */}
          <div className="col-12 mt-3">
            <input
              value={formInfo.password}
              name="password"
              onChange={handleInput}
              className="form-control shadow"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary shadow" type="submit">
              Submit
            </button>
          </div>
          <Link to="/register" className="btn btn-link mt-3">
            Don't have an account? Register here
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
