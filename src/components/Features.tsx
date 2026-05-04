import React from 'react';
import colors from '../styles/colors';

const features = [
  {
    icon: '📹',
    title: 'HD Video Calls',
    description: 'Experience crystal clear high-definition video calls with optimized low-latency connection.',
    gradient: colors.primaryGradient,
    accent: colors.primary,
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Instant messaging with smart read receipts and beautiful media sharing capabilities.',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #00BFFF 100%)',
    accent: '#007AFF',
  },
  {
    icon: '🎁',
    title: 'Virtual Gifts',
    description: 'Express yourself with interactive 3D gifts and earn rewards as you connect.',
    gradient: colors.accentGradient,
    accent: colors.secondary,
  },
  {
    icon: '🔒',
    title: 'End-to-End Security',
    description: 'Your privacy is our priority. Every call and message is fully encrypted.',
    gradient: 'linear-gradient(135deg, #00C853 0%, #B2FF59 100%)',
    accent: '#00C853',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    description: 'Meet interesting people from across 190+ countries in just one tap.',
    gradient: 'linear-gradient(135deg, #FFD600 0%, #FF6D00 100%)',
    accent: '#FFD600',
  },
  {
    icon: '💎',
    title: 'Premium Perks',
    description: 'Unlock exclusive profile badges, custom themes, and priority matching.',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    accent: '#7000FF',
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      style={{
        padding: '120px 0',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Orbs */}
      <div style={{
        position: 'absolute',
    <section id="features" className="features-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, marginBottom: '20px', color: '#FFFFFF' }}>
            Next-Gen <span className="text-gradient">Features</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            We've built everything you need for the perfect social experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass feature-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-12px)';
                el.style.borderColor = `${feature.accent}44`;
                el.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                el.style.background = 'rgba(255, 255, 255, 0.03)';
                el.style.boxShadow = 'none';
              }}
            >
              <div 
                className="feature-icon-wrapper"
                style={{ 
                  background: feature.gradient,
                  boxShadow: `0 12px 24px ${feature.accent}33`,
                }}
              >
                {feature.icon}
              </div>

              <h3 className="feature-title">
                {feature.title}
              </h3>

              <p className="feature-description">
                {feature.description}
              </p>

              <div 
                className="feature-learn-more"
                style={{ color: feature.accent }}
              >
                <span>Learn more</span>
                <span style={{ fontSize: '16px', transition: 'transform 0.3s' }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;