import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Download App',
    description: 'Get Date-x on your iOS or Android device for free.',
    icon: '📥',
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    color: '#f48c25',
    glowColor: 'rgba(244, 140, 37, 0.4)',
  },
  {
    title: 'Create Profile',
    description: 'Sign up in seconds and set up your profile with photos.',
    icon: '👤',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    color: '#7000FF',
    glowColor: 'rgba(112, 0, 255, 0.4)',
  },
  {
    title: 'Find Matches',
    description: 'Our smart algorithm helps you find compatible connections.',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #FF007F 0%, #f48c25 100%)',
    color: '#FF007F',
    glowColor: 'rgba(255, 0, 127, 0.4)',
  },
  {
    title: 'Start Connecting',
    description: 'Jump into high-quality video calls and start building connections.',
    icon: '🎥',
    gradient: 'linear-gradient(135deg, #00C853 0%, #00FFFF 100%)',
    color: '#00C853',
    glowColor: 'rgba(0, 200, 83, 0.4)',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      {/* Glassmorphism Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.15), rgba(255, 0, 127, 0.15))',
        backdropFilter: 'blur(30px)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'pulse-glow 10s infinite alternate',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, rgba(244, 140, 37, 0.1), rgba(0, 255, 255, 0.1))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-glow 12s infinite alternate-reverse',
        zIndex: 0,
      }} />

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

        {/* Glass Container Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(20px)',
          borderRadius: '48px',
          padding: '60px 40px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}>
          <div className="how-it-works-grid">
            {/* Connector Line (Desktop Only) */}
            <div className="connector-line hide-mobile" />

            {steps.map((step, index) => (
              <div key={index} className="step-card reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Glass Icon Container */}
                <div
                  className="step-icon-wrapper"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: `0 20px 50px ${step.glowColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) rotate(5deg) scale(1.05)';
                    e.currentTarget.style.borderColor = `${step.color}66`;
                    e.currentTarget.style.boxShadow = `0 25px 60px ${step.glowColor}`;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = `0 20px 50px ${step.glowColor}`;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  {/* Inner Gradient Circle */}
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: step.gradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    boxShadow: `0 10px 30px ${step.glowColor}, inset 0 -3px 10px rgba(0,0,0,0.2)`,
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}>
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div
                    className="step-number"
                    style={{
                      background: step.gradient,
                      boxShadow: `0 4px 15px ${step.glowColor}`,
                      border: '3px solid #050B18',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                {/* Glass Accent Line */}
                <div style={{
                  width: '40px',
                  height: '4px',
                  background: step.gradient,
                  borderRadius: '10px',
                  marginTop: '20px',
                  boxShadow: `0 4px 15px ${step.glowColor}`,
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA with Glass Effect */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
        }} className="reveal">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 48px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            borderRadius: '32px',
            border: '1px solid rgba(244, 140, 37, 0.2)',
            boxShadow: '0 20px 60px rgba(244, 140, 37, 0.1)',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>
              Ready to start your journey?
            </span>
            <button
              style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #f48c25, #FF007F)',
                borderRadius: '50px',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(244, 140, 37, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(244, 140, 37, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(244, 140, 37, 0.3)';
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