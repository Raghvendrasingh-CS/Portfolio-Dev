import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'AI Style Mirror',
    subtitle: 'AI Fashion Styling App',
    description: 'A Myntra-inspired virtual styling app with real Claude Vision body analysis, canvas-based virtual try-on, weather-aware outfit suggestions, and an AI stylist chat (Mira). Built with Vanilla JS + Vite, deployed on Vercel.',
    tags: ['Claude API', 'Vanilla JS', 'Vite', 'Canvas API', 'Supabase', 'Vercel'],
    github: 'https://github.com/Raghvendrasingh-CS',
    live: 'https://your-style-mirror-url.vercel.app',
    featured: true
  },
  {
    number: '02',
    title: 'Portfolio Website',
    subtitle: 'This Site',
    description: 'Full-stack portfolio with a built-in Claude-powered AI chat widget that answers recruiter questions in real time. Built with React + Vite + Plain CSS.',
    tags: ['React', 'Vite', 'CSS', 'Claude API'],
    github: 'https://github.com/Raghvendrasingh-CS',
    live: null
  },
  {
    number: '03',
    title: 'ML Feedback Loop',
    subtitle: 'Smart Recommendation Engine',
    description: 'Adaptive ML system that tracks user interactions with outfit suggestions and refines recommendations over time using collaborative filtering principles.',
    tags: ['Python', 'Machine Learning', 'API Design', 'Data Storage'],
    github: 'https://github.com/Raghvendrasingh-CS',
    live: null
  },
  {
    number: '04',
    title: 'Weather-Aware Outfit Engine',
    subtitle: 'Context-Aware Feature',
    description: 'Pulls real-time weather data and integrates with Claude to suggest contextually appropriate clothing based on temperature, humidity, and conditions.',
    tags: ['OpenWeather API', 'Claude API', 'JavaScript'],
    github: 'https://github.com/Raghvendrasingh-CS',
    live: null
  }
];

function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = Math.max(0, windowHeight - rect.top);
      const progress = Math.min(scrolled / (sectionHeight + windowHeight * 0.5), 1);
      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">02.</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="proj-timeline">
          {/* Animated left bar */}
          <div className="proj-timeline-track">
            <div
              className="proj-timeline-fill"
              ref={lineRef}
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          {/* Project entries */}
          <div className="proj-list">
            {projects.map((project, idx) => (
              <div className="proj-item reveal" key={idx}>
                <div className="proj-dot" />
                <div className={`proj-card ${project.featured ? 'proj-card--featured' : ''}`}>
                  <div className="proj-card-top">
                    <span className="proj-number">{project.number}</span>
                    {project.featured && (
                      <span className="proj-featured-badge">⭐ Featured</span>
                    )}
                  </div>
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-subtitle">{project.subtitle}</p>
                  <p className="proj-desc">{project.description}</p>
                  <div className="proj-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span className="tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                  <div className="proj-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline proj-btn">
                      <Github size={15} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary proj-btn">
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
