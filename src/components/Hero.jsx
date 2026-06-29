import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const words = [
  "Full-Stack Developer",
  "AI App Builder",
  "CS Undergrad",
  "Open Source Contributor"
];

function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && text === currentWord) {
      // Finished typing — pause 2.2s then start deleting
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === '') {
      // Finished deleting — pause 400ms then next word
      setIsDeleting(false);
      timer = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 400);
    } else if (isDeleting) {
      // Deleting chars — fast and smooth
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 45);
    } else {
      // Typing chars — natural feel with slight variation
      const variance = Math.random() * 40;
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 90 + variance);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Effects */}
      <div className="grid-bg-wrapper"></div>
      <div className="glow-orb hero-glow"></div>

      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="availability-badge reveal">
          <span className="green-dot-pulse"></span>
          Available for internship & freelance
        </div>

        {/* Name */}
        <h1 className="hero-name reveal stagger-1">
          <span className="gradient-text">Raghvendra</span> <br className="mobile-only" />
          Singh
        </h1>

        {/* Terminal Typing Line */}
        <div className="typing-container reveal stagger-2">
          <span className="typing-prefix">&gt; </span>
          <span className="typing-text">{text}</span>
          <span className="typing-cursor"></span>
        </div>

        {/* Bio */}
        <p className="hero-bio reveal stagger-3">
          CS student building AI-powered products. Currently working on an AI fashion styling app and learning to ship things people actually use.
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas reveal stagger-4">
          <button className="btn btn-primary" onClick={(e) => scrollToSection(e, 'projects')}>
            View My Work &rarr;
          </button>
          <a
            href="https://github.com/Raghvendrasingh-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-resume"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Stats Strip */}
        <div className="stats-strip reveal stagger-5">
          <div className="stat-item">
            <span className="stat-value">10+</span>
            <span className="stat-label">// PROJECTS BUILT</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">5+</span>
            <span className="stat-label">// TECH STACKS</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">AI</span>
            <span className="stat-label">// POWERED APPS</span>
          </div>
        </div>

        {/* Scroll Hint */}
        <a href="#about" className="scroll-hint" onClick={(e) => scrollToSection(e, 'about')} aria-label="Scroll down">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
