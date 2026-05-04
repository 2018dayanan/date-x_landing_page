import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Download App',
    description: 'Get Date-x on your iOS or Android device for free.',
    icon: '📥',
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    color: '#f48c25',
  },
  {
    title: 'Create Profile',
    description: 'Sign up in seconds and set up your profile with photos.',
    icon: '👤',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    color: '#7000FF',
  },
  {
    title: 'Find Matches',
    description: 'Our smart algorithm helps you find compatible connections.',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #FF007F 0%, #f48c25 100%)',
    color: '#FF007F',
  },
  {
    title: 'Start Connecting',
    description: 'Jump into high-quality video calls and start building connections.',
    icon: '🎥',
    gradient: 'linear-gradient(135deg, #00C853 0%, #00FFFF 100%)',
    color: '#00C853',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      {/* Background - hidden on mobile */}
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <div className="step-badge">Simple Process</div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '16px' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
            Getting started with Date-x is easy. Follow these simple steps.
          </p>
        </div>

        {/* Simplified Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '32px',
          padding: '40px 20px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}>
          <div className="how-it-works-grid">
            {/* Connector Line - Hidden on mobile */}
            <div className="connector-line hide-mobile" />

            {steps.map((step, index) => (
              <div key={index} className="step-card reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* Icon Container */}
                <div
                  className="step-icon-wrapper"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    willChange: 'transform',
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: step.gradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    boxShadow: `0 8px 24px ${step.color}30`,
                  }}>
                    {step.icon}
                  </div>
                  <div
                    className="step-number"
                    style={{ background: step.gradient }}
                  >
                    {index + 1}
                  </div>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                <div style={{
                  width: '40px',
                  height: '4px',
                  background: step.gradient,
                  borderRadius: '10px',
                  marginTop: '16px',
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '40px', textAlign: 'center' }} className="reveal">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 32px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '24px',
            border: '1px solid rgba(244, 140, 37, 0.2)',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Ready to start your journey?
            </span>
            <button
              style={{
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #f48c25, #FF007F)',
                borderRadius: '50px',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Get Started 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;