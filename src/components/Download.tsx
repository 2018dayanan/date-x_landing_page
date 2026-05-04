import React from 'react';
import colors from '../styles/colors';
import Button from './Button';

const Download: React.FC = () => {
  return (
    <section
      id="download"
      style={{
        padding: '140px 0',
        background: colors.deepBlue,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div 
          className="glass reveal"
          style={{
            padding: '80px 40px',
            borderRadius: '48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 80px ${colors.primary}11`,
          }}
        >
          {/* Decorative Orbs */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '300px',
            height: '300px',
            background: colors.primaryGradient,
            filter: 'blur(100px)',
            opacity: 0.2,
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '300px',
            height: '300px',
            background: colors.accentGradient,
            filter: 'blur(100px)',
            opacity: 0.2,
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, color: colors.white, marginBottom: '24px', letterSpacing: '-2px' }}>
              Ready to Start Your <br /><span className="text-gradient">New Adventure?</span>
            </h2>
            <p style={{ fontSize: '20px', color: colors.textSecondary, marginBottom: '48px', maxWidth: '640px', margin: '0 auto 48px' }}>
              Join millions of users already connecting on Date-x. Download the app 
              today and experience the future of live video social.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" style={{ minWidth: '180px', flex: '1 1 180px' }}>
                🍎 App Store
              </Button>
              <Button variant="secondary" size="lg" style={{ minWidth: '180px', flex: '1 1 180px' }}>
                🤖 Play Store
              </Button>
            </div>

            <div style={{ 
              marginTop: '48px', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '24px', 
              alignItems: 'center', 
              opacity: 0.6,
              flexWrap: 'wrap'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 600 }}>⭐ 4.9/5 Rating</div>
              <div style={{ width: '4px', height: '4px', background: colors.white, borderRadius: '50%' }} className="hide-mobile" />
              <div style={{ fontSize: '13px', fontWeight: 600 }}>🚀 10M+ Downloads</div>
              <div style={{ width: '4px', height: '4px', background: colors.white, borderRadius: '50%' }} className="hide-mobile" />
              <div style={{ fontSize: '13px', fontWeight: 600 }}>🌍 190+ Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;