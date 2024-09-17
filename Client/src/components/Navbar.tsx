import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/" style={{  }}>
          Tech Shopper Pro
        </Link>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
                style={{  }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Register"
                className={`nav-link ${currentPage === '/Register' ? 'active' : ''}`}
                style={{  }}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Details"
                className={`nav-link ${currentPage === '/Details' ? 'active' : ''}`}
                style={{  }}
              >
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Cart"
                className={`nav-link ${currentPage === '/Cart' ? 'active' : ''}`}
                style={{  }}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Checkout"
                className={`nav-link ${currentPage === '/Checkout' ? 'active' : ''}`}
                style={{  }}
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
