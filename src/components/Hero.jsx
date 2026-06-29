import React, { useState, useEffect } from 'react';
import { GitFork, Linkedin, ArrowDown, Sparkles } from 'lucide-react';

const words = [
  "Developer",
  "Programmer",
  "Aspiring Software Engineer",
  "Designer",
  "Open Source Contributor"
];

function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        setSpeed(100);
        
        if (text === currentWord) {
          setIsDeleting(true);
          setSpeed(2000); // Wait 2s before deleting
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        setSpeed(50);
        
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(500); // Wait 0.5s before starting next word
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, speed, wordIndex]);

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
          {/* <span className="green-dot-pulse"></span> */}
          {/* Available for internship & freelance */}
        </div>

        {/* Name */}
        <h1 className="hero-name reveal stagger-1">
          Raghvendra <br className="mobile-only" />
          <span className="gradient-text">Singh</span>
        </h1>

        {/* Terminal Typing Line */}
        <div className="typing-container reveal stagger-2">
          <span className="typing-prefix"> </span>
          <span className="typing-text">{text}</span>
          <span className="typing-cursor"></span>
        </div>

        {/* Bio */}
        <p className="hero-bio reveal stagger-3">
          CS student building AI-powered products. Currently working on an AI fashion styling app and learning to ship things people actually use.
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas reveal stagger-4">
          <button className="btn btn-primary" onClick={(e) => scrollToSection(e, 'experience')}>
            View My Work &rarr;
          </button>
          <a
            href="https://github.com/Raghvendrasingh-CS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GitFork size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raghvendra-singh-850399323" // We will make this clear to fill in
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Stats Strip */}
        <div className="stats-strip reveal stagger-5">
          <div className="stat-item">
            <span className="stat-value">5+</span>
            <span className="stat-label">// PROJECTS BUILT</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">20+</span>
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
