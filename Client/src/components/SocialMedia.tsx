// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-center py-4">
//       {/* LinkedIn */}
//       <a
//         href=""
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mx-2"
//       >
//         <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0e76a8' }} />
//       </a>

//       {/* GitHub */}
//       <a
//         href=""
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mx-2"
//       >
//         <FontAwesomeIcon icon={faGithub} style={{ color: '#97e3b8' }} />
//       </a>

//       {/* X (Twitter) */}
//       <a
//         href=""
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mx-2"
//       >
//         <FontAwesomeIcon icon={faXTwitter} style={{ color: '#e1e7a6' }} />
//       </a>
//     </footer>
//   );
// }

import React from 'react';

const MediaTab: React.FC = () => {
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <footer className="bg-light text-center p-3">
      <p></p>
      <button
        onClick={scrollToTop}
        className="btn btn-primary"
        style={{ position: 'fixed', bottom: '20px', justifyContent: 'center' }} // Adjust position
      >
        Back to Top
      </button>
    </footer>
  );
}

export default MediaTab;
