import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Left copyright notice */}
        <div className="footer-left">
          &copy; 2026 chronix aka Raghvendra Singh &middot; Built with React + Claude API
        </div>

        {/* Right social and top trigger links */}
        <div className="footer-right">
          <a
            href="https://github.com/Raghvendrasingh-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/raghvendra-singh-850399323"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            onClick={scrollToTop}
            className="footer-social-link scroll-top-btn"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
