import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#163865' }} className="text-center py-4">
      <div className="container">
        <div className="d-flex justify-content-center">
          {/* LinkedIn */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0e76a8', fontSize: '2rem' }} />
          </a>

          {/* GitHub */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: '#97e3b8', fontSize: '2rem' }} />
          </a>

          {/* X (Twitter) */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ color: '#e1e7a6', fontSize: '2rem' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
