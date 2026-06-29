import React from 'react';

const techCategories = [
  {
    category: 'AI & APIs',
    color: '#7C3AED',
    techs: [
      { name: 'Claude API', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/120px-Anthropic_logo.svg.png' },
      { name: 'OpenAI API', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/120px-OpenAI_Logo.svg.png' },
      { name: 'REST APIs', logo: null },
      { name: 'Prompt Eng.', logo: null }
    ]
  },
  {
    category: 'Frontend',
    color: '#6D28D9',
    techs: [
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png' },
      { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png' },
      { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png' },
      { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/120px-Tailwind_CSS_Logo.svg.png' },
      { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' }
    ]
  },
  {
    category: 'Backend & DB',
    color: '#5B21B6',
    techs: [
      { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png' },
      { name: 'Express.js', logo: null },
      { name: 'Supabase', logo: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
      { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/120px-Postgresql_elephant.svg.png' },
      { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/120px-MongoDB_Logo.svg.png' }
    ]
  },
  {
    category: 'Tools & DevOps',
    color: '#4C1D95',
    techs: [
      { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/120px-Git_icon.svg.png' },
      { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png' },
      { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
      { name: 'VS Code', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/120px-Visual_Studio_Code_1.35_icon.svg.png' },
      { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/120px-Figma-logo.svg.png' },
      { name: 'Postman', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png' }
    ]
  },
  {
    category: 'Languages',
    color: '#7C3AED',
    techs: [
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/120px-Python-logo-notext.svg.png' },
      { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png' },
      { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/120px-Java_programming_language_logo.svg.png' },
      { name: 'SQL', logo: null }
    ]
  }
];

function TechStack() {
  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">04.</span>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        <div className="techstack-wrapper reveal">
          {techCategories.map((cat, cIdx) => (
            <div className="techstack-category" key={cIdx}>
              <h3 className="techstack-category-title" style={{ color: cat.color }}>
                {cat.category}
              </h3>
              <div className="techstack-grid">
                {cat.techs.map((tech, tIdx) => (
                  <div className="tech-pill" key={tIdx}>
                    {tech.logo ? (
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="tech-logo"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    ) : (
                      <div className="tech-logo-placeholder">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
