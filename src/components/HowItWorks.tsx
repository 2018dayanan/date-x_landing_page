import React from 'react';
import colors from '../styles/colors';
import Button from './Button';

const steps = [
  {
    number: '01',
    icon: '📥',
    title: 'Download the App',
    description: 'Get Date-x on your iOS, Android, or desktop device for free.',
    color: colors.primary,
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
  },
  {
    number: '02',
    icon: '👤',
    title: 'Create Your Profile',
    description: 'Sign up in seconds and set up your profile with photos and interests.',
    color: colors.accent,
    gradient: 'linear-gradient(135deg, #7000FF 0%, #FF007F 100%)',
  },
  {
    number: '03',
    icon: '🔍',
    title: 'Discover People',
    description: 'Browse through thousands of active users and find your perfect match.',
    color: colors.secondary,
    gradient: colors.primaryGradient,
  },
  {
    number: '04',
    icon: '📹',
    title: 'Start Connecting',
    description: 'Make video calls, chat, send gifts, and enjoy seamless communication.',
    color: colors.primary,
    gradient: colors.accentGradient,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '120px 0',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-8%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-8%',
        width: '400px',
        height: '400px',
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
          <div className="step-badge">Simple Process</div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '20px' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Getting started with Date-x is easy. Follow these three simple steps.
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
          padding: '60px 40px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}>
          <h3 style={{ fontSize: '32px', fontWeight: 800, color: colors.white, marginBottom: '16px' }}>
            Ready to Get Started?
          </h3>
          <p style={{ fontSize: '18px', color: colors.textSecondary, marginBottom: '32px' }}>
            Join millions of users already connecting on Date-x
          </p>
          <Button variant="primary" size="lg">
            🚀 Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;