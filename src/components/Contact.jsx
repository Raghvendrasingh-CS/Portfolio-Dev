import React, { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin, Link2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY"; // Placeholder to be replaced by the user

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      // Auto-revert error to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    setStatus('idle');
  };

  const infoCards = [
    {
      icon: <Github size={20} />,
      label: "GITHUB",
      value: "Raghvendrasingh-CS",
      href: "https://github.com/Raghvendrasingh-CS"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LINKEDIN",
      value: "Connect with me",
      href: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
    },
    {
      icon: <Mail size={20} />,
      label: "EMAIL",
      value: "YOUR_REAL_EMAIL@gmail.com",
      href: "mailto:YOUR_REAL_EMAIL@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      label: "LOCATION",
      value: "Jaipur, Rajasthan 🇮🇳",
      href: null
    }
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label">06.</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <p className="contact-subtext reveal stagger-1">
          Open to internship roles, freelance projects, and interesting collaborations.
        </p>

        {/* Layout Column */}
        <div className="contact-grid">
          {/* Left Column: Form */}
          <div className="contact-left reveal stagger-2">
            {status === 'success' ? (
              <div className="contact-success-card">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-heading">Message Sent!</h3>
                <p className="success-subtext">
                  Thank you for reaching out. Raghvendra will get back to you as soon as possible.
                </p>
                <a href="#" className="success-link" onClick={handleResetForm}>
                  Send another message
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="form-input"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="form-input"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    required
                    className="form-input form-textarea"
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div className="contact-error-msg">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info Cards */}
          <div className="contact-right reveal stagger-3">
            <div className="info-cards-list">
              {infoCards.map((card, idx) => {
                const CardWrapper = card.href ? 'a' : 'div';
                const wrapperProps = card.href
                  ? {
                      href: card.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "contact-info-card interactive"
                    }
                  : { className: "contact-info-card" };

                return (
                  <CardWrapper key={idx} {...wrapperProps}>
                    <div className="contact-info-icon-wrapper">
                      {card.icon}
                    </div>
                    <div className="contact-info-details">
                      <span className="contact-info-label">{card.label}</span>
                      <span className="contact-info-value">{card.value}</span>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
