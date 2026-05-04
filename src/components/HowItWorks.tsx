import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Download App',
    description: 'Get Date-x on your iOS or Android device for free.',
    icon: '📥',
    color: '#f48c25'
  },
  {
    title: 'Create Profile',
    description: 'Sign up in seconds and set up your profile with photos.',
    icon: '👤',
    color: '#7000FF'
  },
  {
    title: 'Find Matches',
    description: 'Our smart algorithm helps you find compatible connections.',
    icon: '🔍',
    color: '#FF007F'
  },
  {
    title: 'Start Connecting',
    description: 'Jump into high-quality video calls and start building connections.',
    icon: '🎥',
    color: '#f48c25'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
          <div className="step-badge">Simple Process</div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '20px' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Getting started with Date-x is easy. Follow these simple steps.
          </p>
        </div>

        <div className="how-it-works-grid">
          {/* Connector Line (Desktop Only) */}
          <div className="connector-line hide-mobile" />

          {steps.map((step, index) => (
            <div key={index} className="step-card reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <div 
                className="step-icon-wrapper"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotate(5deg)';
                  e.currentTarget.style.borderColor = `${step.color}88`;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${step.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
              >
                {step.icon}
                <div className="step-number" style={{ backgroundColor: step.color }}>{index + 1}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;