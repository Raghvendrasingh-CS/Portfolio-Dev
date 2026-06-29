import React from 'react';
import { GraduationCap, Briefcase, GitBranch } from 'lucide-react';

const experiences = [
  {
    icon: 'education',
    role: 'B.Tech in Computer Science',
    org: 'YOUR UNIVERSITY NAME',
    period: '2022 – Present',
    description: 'Studying core CS fundamentals — Data Structures, Algorithms, Operating Systems, DBMS, and Networks — while building real AI-powered projects on the side.',
    tags: ['DSA', 'OS', 'DBMS', 'Networks', 'C++']
  },
  {
    icon: 'work',
    role: 'Lead Developer',
    org: 'AI Style Mirror — Self Initiated',
    period: '2025 – Present',
    description: 'Designed and built an AI fashion styling app end-to-end. Integrated Claude Vision for body analysis, Supabase for persistent profiles, and Canvas API for virtual try-on. Deployed on Vercel.',
    tags: ['Claude API', 'Supabase', 'Canvas API', 'Vite', 'Vercel']
  },
  {
    icon: 'code',
    role: 'Open Source Contributor',
    org: 'GitHub — Raghvendrasingh-CS',
    period: '2024 – Present',
    description: 'Maintaining public repositories, contributing to open source, and documenting projects to professional standards for portfolio visibility and collaboration.',
    tags: ['Git', 'GitHub', 'Open Source', 'Documentation']
  }
];

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  code: GitBranch
};

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">03.</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          <div className="timeline-list">
            {experiences.map((exp, idx) => {
              const Icon = iconMap[exp.icon];
              return (
                <div className="timeline-item reveal" key={idx}>
                  <div className="timeline-dot-wrapper">
                    <div className="timeline-dot">
                      <Icon size={14} />
                    </div>
                  </div>
                  <div className="timeline-card">
                    <span className="timeline-period-badge">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-org">{exp.org}</p>
                    <p className="timeline-desc">{exp.description}</p>
                    <div className="timeline-tags">
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
      </div>
    </section>
  );
}

export default Projects;
