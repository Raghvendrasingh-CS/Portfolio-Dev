import React from 'react';
import { Brain, Code2, Layers, Zap } from 'lucide-react';

function About() {
  const cards = [
    {
      icon: <Brain className="about-card-icon" size={24} />,
      title: "Learn",
      desc: "Always exploring better tools, better systems, and better engineering.."
    },
    {
      icon: <Code2 className="about-card-icon" size={24} />,
      title: "Build",
      desc: "Turning ideas into production ready software."
    },
    {
      icon: <Layers className="about-card-icon" size={24} />,
      title: "Lead",
      desc: "Taking ownership when needed and supporting the team at every stage."
    },
    {
      icon: <Zap className="about-card-icon" size={24} />,
      title: "Improve",
      desc: "Iterating continuously through feedback, experimentation, and curiosity."
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">01.</span>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Left Text Column */}
          <div className="about-left reveal">
            <p className="about-text">
              I'm Raghvendra Singh, a Computer Science undergraduate at IIIT Kota focused on building production ready full stack applications powered by AI. 
              I enjoy designing scalable backend systems, building intuitive user experiences, and turning ideas into software that people can rely on.
            </p>
            <p className="about-text">
              Over the past 6 months I've built projects ranging from multi agent AI platforms to intelligent 
              virtual styling applications, working with React, Node.js, Express, Docker, REST APIs, databases, and modern AI technologies.
              I enjoy solving engineering problems that require both thoughtful system design and attention to detail.
            </p>
            <p className="about-text">
              I believe the best outcomes come from people who genuinely care about the work, the people they work with,
              and doing things the right way. Whether I'm leading a team or contributing as a teammate, I value ownership, clear communication, and building software that everyone can be proud of.
            </p>

            {/* Tags Container */}
            <div className="about-tags">
              <span className="tag">Ganganagar, Rajasthan 🇮🇳</span>
              <span className="tag">Open to Internships</span>
              <span className="tag">Computer Science Undergrad</span>
            </div>
          </div>

          {/* Right Grid Column */}
          <div className="about-right grid-2x2 reveal stagger-2">
            {cards.map((card, index) => (
              <div className="about-card" key={index}>
                <div className="about-card-icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
