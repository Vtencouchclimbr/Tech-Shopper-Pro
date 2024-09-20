import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../utils/logo.jpg';
import '../utils/Navbar.css';

interface NavbarProps {
  toggleWishlist: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleWishlist }) => {
  const currentPage = useLocation().pathname;

  return (
    <nav style={{ backgroundColor: '#163865' }} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Brand and Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: '10px', width: '40px', height: '40px' }}
          />
          <span style={{ color: '#f8f5e6' }}>Tech Shopper Pro</span>
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
          style={{ borderColor: '#f8f5e6' }}
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
            {/* Add more nav items here */}
            <li className="nav-item">
              <button className="nav-link btn" onClick={toggleWishlist} style={{ color: '#f8f5e6' }}>
                Wishlist
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
