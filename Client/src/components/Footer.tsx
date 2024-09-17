import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-center py-4">
      {/* LinkedIn */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0e76a8' }} />
      </a>

      {/* GitHub */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faGithub} style={{ color: '#97e3b8' }} />
      </a>

      {/* X (Twitter) */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faXTwitter} style={{ color: '#e1e7a6' }} />
      </a>
    </footer>
  );
}
