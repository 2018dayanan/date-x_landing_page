import React, { useState, useEffect } from 'react';
import './Features.css';

const features = [
  {
    icon: '📹',
    title: 'HD Video Calls',
    description: 'Experience crystal clear high-definition video calls with optimized low-latency connection.',
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    accent: '#f48c25',
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
    gradient: 'linear-gradient(135deg, #7000FF 0%, #FF007F 100%)',
    accent: '#7000FF',
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="features" className="features-section">
      {/* Background orbs - hidden on mobile */}
      {!isMobile && (
        <>
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
        </>
      )}

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, marginBottom: '16px', color: '#FFFFFF' }}>
            Next-Gen <span className="text-gradient">Features</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
            We've built everything you need for the perfect social experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass feature-card reveal"
              style={{
                animationDelay: isMobile ? '0s' : `${index * 0.1}s`,
                willChange: 'transform',
              }}
              onMouseEnter={(e) => {
                if (isMobile) return;
                const el = e.currentTarget;
                el.style.transform = 'translateY(-8px)';
                el.style.borderColor = `${feature.accent}44`;
                el.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                el.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div
                className="feature-icon-wrapper"
                style={{
                  background: feature.gradient,
                  willChange: 'transform',
                }}
              >
                {feature.icon}
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

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
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;