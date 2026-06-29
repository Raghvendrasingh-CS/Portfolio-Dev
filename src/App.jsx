import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import WebPresence from './components/WebPresence';
import AskMe from './components/AskMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer to handle reveal-on-scroll and skill bar loading animations
    const revealElements = document.querySelectorAll('.reveal');
    const skillTracks = document.querySelectorAll('.skill-bar-track');

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // Trigger slightly before element is fully in view
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Animate skill bars specifically when they enter
          if (entry.target.classList.contains('skill-bar-track')) {
            const fill = entry.target.querySelector('.skill-bar-fill');
            if (fill) {
              const level = fill.getAttribute('data-level');
              fill.style.width = `${level}%`;
            }
          }
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));
    skillTracks.forEach((track) => observer.observe(track));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    const move = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="app-container">
      <div id="cursor-glow" className="cursor-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <WebPresence />
        <AskMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
