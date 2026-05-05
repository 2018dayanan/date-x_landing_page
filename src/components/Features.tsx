import React, { useState, useEffect } from 'react';
import './Features.css';

const features = [
  {
    icon: '📹',
    title: 'HD Video Calls',
    description: 'Experience crystal clear high-definition video calls with optimized low-latency connection and advanced noise cancellation.',
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    accent: '#f48c25',
    stats: '4K Quality',
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Instant messaging with smart read receipts, media sharing, and disappearing messages for ultimate privacy.',
    gradient: 'linear-gradient(135deg, #007AFF 0%, #00BFFF 100%)',
    accent: '#007AFF',
    stats: '< 100ms',
  },
  {
    icon: '🎁',
    title: 'Virtual Gifts',
    description: 'Express yourself with 100+ interactive 3D gifts and earn rewards as you connect with amazing people.',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #FF007F 100%)',
    accent: '#7000FF',
    stats: '100+ Gifts',
  },
  {
    icon: '🔒',
    title: 'End-to-End Security',
    description: 'Military-grade encryption for all calls and messages. Your privacy is our top priority, always.',
    gradient: 'linear-gradient(135deg, #00C853 0%, #B2FF59 100%)',
    accent: '#00C853',
    stats: '256-bit',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    description: 'Meet interesting people from across 190+ countries. Our smart algorithm finds your perfect match.',
    gradient: 'linear-gradient(135deg, #FFD600 0%, #FF6D00 100%)',
    accent: '#FFD600',
    stats: '190+ Countries',
  },
  {
    icon: '💎',
    title: 'Premium Perks',
    description: 'Unlock exclusive profile badges, custom themes, priority matching, and ad-free experience.',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    accent: '#7000FF',
    stats: 'VIP Access',
  },
];

const Features: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <div className="feature-orb feature-orb-1" />
          <div className="feature-orb feature-orb-2" />
        </>
      )}

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span className="section-badge">✨ Features</span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, marginBottom: '16px', color: '#FFFFFF', marginTop: '16px' }}>
            Everything You Need for <span className="text-gradient">Perfect Connections</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Packed with powerful features designed to make every interaction meaningful and memorable.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass feature-card reveal ${hoveredIndex === index ? 'feature-card-active' : ''}`}
              style={{
                animationDelay: isMobile ? '0s' : `${index * 0.1}s`,
                '--accent-color': feature.accent,
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient border */}
              <div className="feature-card-border" style={{ background: feature.gradient }} />

              {/* Icon with glow effect */}
              <div
                className="feature-icon-wrapper"
                style={{
                  background: feature.gradient,
                  transform: hoveredIndex === index && !isMobile ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: hoveredIndex === index && !isMobile ? `0 15px 40px ${feature.accent}50` : `0 10px 30px ${feature.accent}30`,
                }}
              >
                <span style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{feature.icon}</span>

                {/* Pulse ring effect on hover */}
                {!isMobile && hoveredIndex === index && <div className="feature-icon-pulse" style={{ background: feature.gradient }} />}
              </div>

              {/* Stats badge */}
              <div
                className="feature-stats-badge"
                style={{ background: `${feature.accent}20`, border: `1px solid ${feature.accent}40` }}
              >
                <span style={{ color: feature.accent }}>{feature.stats}</span>
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

              {/* Learn more with animated arrow */}
              <div
                className="feature-learn-more"
                style={{
                  color: feature.accent,
                  background: `${feature.accent}10`,
                  border: `1px solid ${feature.accent}30`,
                }}
              >
                <span>Explore</span>
                <span className="feature-arrow" style={{ transform: hoveredIndex === index && !isMobile ? 'translateX(4px)' : 'translateX(0)' }}>→</span>
              </div>

              {/* Bottom accent line */}
              <div className="feature-bottom-line" style={{ background: feature.gradient }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>
            And many more exciting features waiting for you!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="feature-cta-btn">
              Start Free Trial
            </button>
            <button className="feature-cta-btn-secondary">
              View All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;