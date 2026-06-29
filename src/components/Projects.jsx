import React from 'react';
import { GraduationCap, Briefcase, GitBranch, ExternalLink } from 'lucide-react';

const experiences = [
  {
    emoji: '🎓',
    icon: GraduationCap,
    role: 'B.Tech in Computer Science',
    org: 'YOUR UNIVERSITY NAME',
    period: '2022 – Present',
    type: 'Education',
    description: 'Pursuing core Computer Science fundamentals including Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object Oriented Programming. Applying academic knowledge to build real-world AI-powered applications simultaneously.',
    highlights: [
      'Strong foundation in DSA — solved 100+ problems across platforms',
      'Applied OS and DBMS concepts in real project (Supabase + PostgreSQL)',
      'Consistent academic performance while shipping side projects'
    ],
    tags: ['DSA', 'OS', 'DBMS', 'Networks', 'OOP', 'C++', 'Java'],
    link: null
  },
  {
    emoji: '🚀',
    icon: Briefcase,
    role: 'Lead Developer — AI Style Mirror',
    org: 'Self Initiated Project',
    period: '2025 – Present',
    type: 'Project Lead',
    description: 'Designed, built, and deployed an end-to-end AI fashion styling web application. Integrated Claude Vision API for real-time body analysis, built a Canvas-based virtual try-on feature from scratch, implemented weather-aware outfit generation using OpenWeather API, and set up a persistent user profile system using Supabase and PostgreSQL.',
    highlights: [
      'Integrated Claude Vision for body shape analysis and style recommendations',
      'Built Canvas API virtual try-on — no library, custom pixel manipulation',
      'Shipped 10 features including PWA, offline mode, and ML feedback loop'
    ],
    tags: ['Claude API', 'Supabase', 'Canvas API', 'Vite', 'Vanilla JS', 'Vercel'],
    link: 'https://github.com/Raghvendrasingh-CS'
  },
  {
    emoji: '💻',
    icon: GitBranch,
    role: 'Open Source Contributor',
    org: 'GitHub — Raghvendrasingh-CS',
    period: '2024 – Present',
    type: 'Open Source',
    description: 'Actively maintaining public repositories and contributing to the open source ecosystem. Writing professional documentation, maintaining clean commit history, and building projects that others can learn from and build on top of.',
    highlights: [
      'Public repos with proper README, setup guides, and architecture notes',
      'Clean commit history and branch management practices',
      'Projects used as reference by peers and fellow CS students'
    ],
    tags: ['Git', 'GitHub', 'Documentation', 'Open Source', 'Markdown'],
    link: 'https://github.com/Raghvendrasingh-CS'
  }
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">03.</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="exp-cards-list">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div className="exp-card reveal" key={idx}>
                <div className="exp-card-left">
                  <div className="exp-emoji">{exp.emoji}</div>
                  <div className="exp-period-badge">{exp.period}</div>
                  <div className="exp-type-label">{exp.type}</div>
                </div>

                <div className="exp-card-right">
                  <div className="exp-card-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-org">{exp.org}</p>
                    </div>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-link-btn">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="exp-desc">{exp.description}</p>

                  <ul className="exp-highlights">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="exp-highlight-item">
                        <span className="exp-bullet">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tags">
                    {exp.tags.map((tag, tIdx) => (
                      <span className="tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
