import React from 'react';
import './Download.css';

const Download: React.FC = () => {
  return (
    <section id="download" className="download-section">
      {/* Colorful Glass Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, rgba(244, 140, 37, 0.15), rgba(255, 0, 127, 0.15))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-glow 10s infinite alternate',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.15), rgba(0, 255, 255, 0.15))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-glow 8s infinite alternate-reverse',
        zIndex: 0,
      }} />

      <div className="container">
        {/* Main Glass CTA Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(30px)',
          borderRadius: '48px',
          padding: '80px 60px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 40px 120px rgba(0, 0, 0, 0.4)',
        }}>
          {/* Glow Effects */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(244, 140, 37, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }} />

          {/* Animated Border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #f48c25, #FF007F, #7000FF, #00FFFF, #f48c25)',
            backgroundSize: '300% 100%',
            animation: 'gradientShift 4s linear infinite',
          }} />

          {/* Content */}
          <h2 className="download-title">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="download-description">
            Join millions of people already using Date-x to discover meaningful connections
            and experience the future of social interaction.
          </p>

          {/* Glass Download Buttons */}
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{
              padding: '20px 48px',
              background: 'linear-gradient(135deg, #f48c25, #FF007F)',
              borderRadius: '50px',
              border: 'none',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 15px 50px rgba(244, 140, 37, 0.4)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(244, 140, 37, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(244, 140, 37, 0.4)';
              }}
            >
              <span style={{ fontSize: '24px' }}></span>
              App Store
            </div>

            <div style={{
              padding: '20px 48px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = '#00C853';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <span style={{ fontSize: '24px' }}>▶</span>
              Google Play
            </div>
          </div>

          {/* Glass Stats Row */}
          <div style={{
            marginTop: '48px',
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
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
                gap: '10px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: item.color }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges with Glass Effect */}
        <div style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
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
              gap: '12px',
              padding: '16px 28px',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = `${badge.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              <span style={{ fontSize: '24px' }}>{badge.icon}</span>
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: badge.color,
              }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;