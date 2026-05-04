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
        padding: '140px 0',
        background: `linear-gradient(180deg, ${colors.deepBlue} 0%, #0a1426 100%)`,
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
        background: `radial-gradient(circle, ${colors.secondary}15 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(50px)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(112, 0, 255, 0.1)',
              borderRadius: '50px',
              color: colors.accent,
              fontWeight: 700,
              fontSize: '14px',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              border: '1px solid rgba(112, 0, 255, 0.2)',
            }}
          >
            Simple Process
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, marginBottom: '20px' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ fontSize: '18px', color: colors.textSecondary }}>
            Getting started with Date-x is simple. Follow these four steps to begin 
            your global connection journey.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', position: 'relative' }}>
          {/* Connector Line (Desktop) */}
          <div style={{
            position: 'absolute',
            top: '120px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${colors.primary}44, ${colors.secondary}44, transparent)`,
            zIndex: 0,
          }} className="desktop-nav" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal"
              style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: colors.glassGradient,
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  margin: '0 auto 32px',
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                {step.icon}
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '40px',
                    height: '40px',
                    background: colors.primaryGradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 900,
                    color: colors.white,
                    border: `4px solid ${colors.deepBlue}`,
                  }}
                >
                  {step.number}
                </div>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: colors.white }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '16px', color: colors.textSecondary, lineHeight: 1.7, maxWidth: '260px', margin: '0 auto' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '100px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '40px',
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