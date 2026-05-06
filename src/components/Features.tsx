import React, { useState, useEffect } from 'react';
import './Features.css';
import Button from './Button';

const features = [
  {
    icon: '📹',
    title: 'HD Video Calls',
    description: 'Experience crystal clear high-definition video calls with optimized low-latency connection and advanced noise cancellation.',
    stats: '4K Quality',
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    description: 'Instant messaging with smart read receipts, media sharing, and disappearing messages for ultimate privacy.',
    stats: '< 100ms',
  },
  {
    icon: '🎁',
    title: 'Virtual Gifts',
    description: 'Express yourself with 100+ interactive 3D gifts and earn rewards as you connect with amazing people.',
    stats: '100+ Gifts',
  },
  {
    icon: '🔒',
    title: 'End-to-End Security',
    description: 'Military-grade encryption for all calls and messages. Your privacy is our top priority, always.',
    stats: '256-bit',
  },
  {
    icon: '🌍',
    title: 'Global Community',
    description: 'Meet interesting people from across 190+ countries. Our smart algorithm finds your perfect match.',
    stats: '190+ Countries',
  },
  {
    icon: '💎',
    title: 'Premium Perks',
    description: 'Unlock exclusive profile badges, custom themes, priority matching, and an ad-free experience.',
    stats: 'VIP Access',
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
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span className="section-badge">✨ Features</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '16px', color: 'var(--on-surface)', marginTop: '24px' }}>
            Everything You Need for <span style={{ color: 'var(--primary)' }}>Perfect Connections</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
            Packed with powerful features designed to make every interaction meaningful and memorable.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card reveal"
              style={{ animationDelay: isMobile ? '0s' : `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                <span>{feature.icon}</span>
              </div>

              <div className="feature-stats-badge">
                <span>{feature.stats}</span>
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-learn-more">
                <span>Explore</span>
                <span className="feature-arrow">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
          <p style={{ color: 'var(--on-surface-variant)', marginBottom: '24px', fontWeight: 500 }}>
            And many more exciting features waiting for you!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="md">
              Start Free Trial
            </Button>
            <Button variant="outline" size="md">
              View All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;