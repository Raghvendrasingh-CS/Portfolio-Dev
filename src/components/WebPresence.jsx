import React from 'react';

const presenceLinks = [
  {
    title: 'LinkedIn',
    sub: 'CONNECT',
    href: 'https://www.linkedin.com/in/raghvendra-singh-850399323',
    bg: '#0A66C2',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    title: 'GitHub',
    sub: 'COMMIT',
    href: 'https://github.com/Raghvendrasingh-CS',
    bg: '#1a1a1a',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    title: 'LeetCode',
    sub: 'COMPETE',
    href: 'https://leetcode.com/YOUR_LEETCODE_USERNAME',
    bg: '#FFA116',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    )
  },
  {
    title: 'Email',
    sub: 'REACH OUT',
    href: 'mailto:chronix6996@gmail.com',
    bg: '#EA4335',
    logo: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    )
  }
];

function WebPresence() {
  return (
    <section className="section" id="web-presence">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">06.</span>
          <h2 className="section-title">Web Presence</h2>
        </div>

        <p className="web-presence-intro reveal stagger-1">
          Find me across the dev network — connect, follow, or just say hi.
        </p>

        <div className="web-presence-cards reveal stagger-2">
          {presenceLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="presence-card"
            >
              <div
                className="presence-card-icon"
                style={{ background: item.bg }}
              >
                {item.logo}
              </div>
              <div>
                <div className="presence-card-title">{item.title}</div>
                <div className="presence-card-sub">{item.sub}</div>
              </div>
            </a>
          ))}
        </div>

        <p className="presence-hint reveal stagger-3">
          You can explore further by clicking on any of the profile cards above!
        </p>
      </div>
    </section>
  );
}

export default WebPresence;
