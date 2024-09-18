import { Link, useLocation } from 'react-router-dom';
import logo from '../utils/logo.jpg';
import '../utils/Navbar.css';

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand and Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: '10px', width: '40px', height: '40px' }}
          />
          <span>Tech Shopper Pro</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Register"
                className={`nav-link ${currentPage === '/Register' ? 'active' : ''}`}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Cart"
                className={`nav-link ${currentPage === '/Cart' ? 'active' : ''}`}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
