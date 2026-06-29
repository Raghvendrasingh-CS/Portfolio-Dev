import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => sectionObserver.observe(s));
    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo" onClick={handleLogoClick}>
          rk.dev
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
          <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
          <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="#tech-stack" className={`nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'tech-stack')}>Tech Stack</a></li>
          <li><a href="#ask-me" className={`nav-link ${activeSection === 'ask-me' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'ask-me')}>Ask Me</a></li>
          <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          <li>
            <button className="btn btn-primary nav-cta" onClick={(e) => handleLinkClick(e, 'contact')}>
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
          <li><a href="#experience" className={`mobile-nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
          <li><a href="#projects" className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
          <li><a href="#tech-stack" className={`mobile-nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'tech-stack')}>Tech Stack</a></li>
          <li><a href="#ask-me" className={`mobile-nav-link ${activeSection === 'ask-me' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'ask-me')}>Ask Me</a></li>
          <li><a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          <li style={{ marginTop: '12px' }}>
            <button className="btn btn-primary nav-cta" style={{ width: '100%' }} onClick={(e) => handleLinkClick(e, 'contact')}>
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
