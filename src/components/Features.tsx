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
        top: '20%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: `radial-gradient(circle, ${colors.accent}10 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, marginBottom: '20px', letterSpacing: '-1px' }}>
            Unleash the <span className="text-gradient">Experience</span>
          </h2>
          <p style={{ fontSize: '18px', color: colors.textSecondary, lineHeight: 1.7 }}>
            Packed with cutting-edge features designed to make every interaction meaningful, 
            secure, and incredibly fun.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          position: 'relative',
          zIndex: 2 
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass reveal"
              style={{
                padding: '40px 32px',
                borderRadius: '32px',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                animationDelay: `${index * 0.1}s`,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-12px)';
                el.style.borderColor = `${feature.accent}44`;
                el.style.background = 'rgba(255, 255, 255, 0.05)';
                el.style.boxShadow = `0 30px 60px ${feature.accent}15`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                el.style.background = 'rgba(255, 255, 255, 0.03)';
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                background: feature.gradient,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '28px',
                boxShadow: `0 12px 24px ${feature.accent}33`,
              }}>
                {feature.icon}
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '16px', color: colors.white }}>
                {feature.title}
              </h3>

              <p style={{ fontSize: '15px', color: colors.textSecondary, lineHeight: 1.8 }}>
                {feature.description}
              </p>

              <div style={{ 
                marginTop: 'auto', 
                paddingTop: '28px',
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: feature.accent, 
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
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