import React from 'react';
import './Features.css';

const features = [
  {
    icon: '📹',
    title: 'HD Video Calls',
    description: 'Experience crystal clear high-definition video calls with optimized low-latency connection.',
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    accent: '#f48c25',
    glowColor: 'rgba(244, 140, 37, 0.3)',
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Instant messaging with smart read receipts and beautiful media sharing capabilities.',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #00BFFF 100%)',
    accent: '#007AFF',
    glowColor: 'rgba(0, 122, 255, 0.3)',
  },
  {
    icon: '🎁',
    title: 'Virtual Gifts',
    description: 'Express yourself with interactive 3D gifts and earn rewards as you connect.',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #FF007F 100%)',
    accent: '#7000FF',
    glowColor: 'rgba(112, 0, 255, 0.3)',
  },
  {
    icon: '🔒',
    title: 'End-to-End Security',
    description: 'Your privacy is our priority. Every call and message is fully encrypted.',
    gradient: 'linear-gradient(135deg, #00C853 0%, #B2FF59 100%)',
    accent: '#00C853',
    glowColor: 'rgba(0, 200, 83, 0.3)',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    description: 'Meet interesting people from across 190+ countries in just one tap.',
    gradient: 'linear-gradient(135deg, #FFD600 0%, #FF6D00 100%)',
    accent: '#FFD600',
    glowColor: 'rgba(255, 214, 0, 0.3)',
  },
  {
    icon: '💎',
    title: 'Premium Perks',
    description: 'Unlock exclusive profile badges, custom themes, and priority matching.',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    accent: '#7000FF',
    glowColor: 'rgba(112, 0, 255, 0.3)',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      {/* Decorative Glass Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, rgba(244, 140, 37, 0.1), rgba(255, 0, 127, 0.1))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '350px',
        height: '350px',
        background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.1), rgba(0, 255, 255, 0.1))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

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
              style={{
                animationDelay: `${index * 0.1}s`,
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-12px)';
                el.style.borderColor = `${feature.accent}44`;
                el.style.background = 'rgba(255, 255, 255, 0.08)';
                el.style.boxShadow = `0 30px 60px ${feature.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                el.style.background = 'rgba(255, 255, 255, 0.03)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Rainbow Border Top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: '3px',
                background: feature.gradient,
                borderRadius: '0 0 10px 10px',
                filter: 'blur(1px)',
              }} />

              {/* Glass Icon Container */}
              <div
                className="feature-icon-wrapper"
                style={{
                  background: feature.gradient,
                  boxShadow: `0 12px 40px ${feature.glowColor}, inset 0 -2px 10px rgba(0,0,0,0.2)`,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{feature.icon}</span>
              </div>

              <h3 className="feature-title">
                {feature.title}
              </h3>

              <p className="feature-description">
                {feature.description}
              </p>

              {/* Learn More with Arrow */}
              <div
                className="feature-learn-more"
                style={{
                  color: feature.accent,
                  background: `${feature.accent}15`,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  marginTop: '16px',
                }}
              >
                <span>Learn more</span>
                <span style={{ fontSize: '16px', transition: 'transform 0.3s' }}>→</span>
              </div>

              {/* Corner Accent */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: `radial-gradient(circle at bottom right, ${feature.glowColor}, transparent 70%)`,
                borderRadius: '0 0 40px 0',
                opacity: 0.5,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;