import React from 'react';
import './Download.css';

const Download: React.FC = () => {
  return (
    <section id="download" className="download-section">
      <div className="container">
        {/* Main CTA Card - Simplified */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: '32px',
          padding: '48px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}>
          {/* Animated Border - Hidden on mobile */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #f48c25, #FF007F, #7000FF, #00FFFF, #f48c25)',
            backgroundSize: '300% 100%',
          }} className="hide-mobile" />

          <h2 className="download-title">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="download-description">
            Join millions of people already using Date-x to discover meaningful connections.
          </p>

          {/* Download Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #f48c25, #FF007F)',
              borderRadius: '50px',
              border: 'none',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ fontSize: '20px' }}></span>
              App Store
            </div>

            <div style={{
              padding: '16px 36px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ fontSize: '20px' }}>▶</span>
              Google Play
            </div>
          </div>

          {/* Stats Row */}
          <div style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '⭐', text: '4.9/5 Rating', color: '#FFD600' },
              { icon: '🚀', text: '10M+ Downloads', color: '#f48c25' },
              { icon: '🌍', text: '190+ Countries', color: '#7000FF' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <span style={{ fontSize: '16px' }}>{item.icon}</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: item.color }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges - Simplified */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }} className="reveal">
          {[
            { icon: '🛡️', label: 'Secure Payments', color: '#00C853' },
            { icon: '🔒', label: 'Privacy Protected', color: '#007AFF' },
            { icon: '⚡', label: 'Fast Installation', color: '#f48c25' },
            { icon: '💬', label: '24/7 Support', color: '#7000FF' },
          ].map((badge, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}>
              <span style={{ fontSize: '18px' }}>{badge.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: badge.color }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;