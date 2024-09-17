import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#205375' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/" style={{ fontFamily: 'Lucida Handwriting', color: 'antiquewhite', marginLeft: '20px' }}>
          Jesse Anderson
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

        <div style={{ marginRight: '20px' }} className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${currentPage === '/' ? 'active' : ''}`}
                style={{ color: '#f4f4f4' }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={`nav-link ${currentPage === '/Portfolio' ? 'active' : ''}`}
                style={{ color: '#f4f4f4' }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={`nav-link ${currentPage === '/Resume' ? 'active' : ''}`}
                style={{ color: '#f4f4f4' }}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`}
                style={{ color: '#f4f4f4' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
