import React from 'react';
import { Brain, Code2, Layers, Zap } from 'lucide-react';

function About() {
  const cards = [
    {
      icon: <Brain className="about-card-icon" size={24} />,
      title: "AI-First Thinking",
      desc: "I integrate AI into every project — not as a gimmick, but as the core."
    },
    {
      icon: <Code2 className="about-card-icon" size={24} />,
      title: "Clean Code",
      desc: "Readable, maintainable, well-structured. I care about the craft."
    },
    {
      icon: <Layers className="about-card-icon" size={24} />,
      title: "Full-Stack",
      desc: "Comfortable across the entire stack — from UI pixels to API design."
    },
    {
      icon: <Zap className="about-card-icon" size={24} />,
      title: "Ship Fast",
      desc: "Move quickly, deploy often, iterate on real feedback."
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
              I'm Raghvendra Singh, a Computer Science student with a genuine obsession with building things.
              I started with frontend, fell in love with AI, and now I ship full-stack products that combine both.
            </p>
            <p className="about-text">
              My current focus is <strong>AI Style Mirror</strong> — a Myntra-inspired virtual styling app with real
              Claude Vision integration, canvas-based try-on, and a persistent user profile via Supabase.
              It's what I learn on and what I'm most proud of.
            </p>
            <p className="about-text">
              I care about shipping things that actually work — not just projects that look good in a demo.
            </p>

            {/* Tags Container */}
            <div className="about-tags">
              <span className="tag">Jaipur, Rajasthan 🇮🇳</span>
              <span className="tag">Open to Internships</span>
              <span className="tag">CS Undergrad</span>
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
