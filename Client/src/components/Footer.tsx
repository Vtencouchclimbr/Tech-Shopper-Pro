import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#163865' }} className="text-center py-4">
      <div className="footer-container"> {/* Changed from 'container' to 'footer-container' */}
        <div className="d-flex justify-content-center">
          {/* Instagram */}
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '2rem' }} />
          </Link>

          {/* Facebook */}
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '2rem' }} />
          </Link>

          {/* X (Twitter) */}
          <Link
            to="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ color: '#e1e7a6', fontSize: '2rem' }} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
