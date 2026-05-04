import React from 'react';
import colors from '../styles/colors';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: colors.darkGradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '160px 0 100px',
      }}
    >
      {/* Dynamic Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '800px',
          height: '800px',
          background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse-glow 8s infinite alternate',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${colors.secondary}10 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'pulse-glow 10s infinite alternate-reverse',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Content */}
          <div className="reveal" style={{ maxWidth: '640px' }}>
            {/* Premium Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(244, 140, 37, 0.1)',
                padding: '10px 20px',
                borderRadius: '50px',
                marginBottom: '32px',
                border: '1px solid rgba(244, 140, 37, 0.2)',
              }}
            >
              <span style={{ fontSize: '18px' }}>✨</span>
              <span style={{ color: colors.primary, fontWeight: 700, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Discover The Future of Connection
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(48px, 8vw, 84px)',
                fontWeight: 900,
                color: colors.white,
                lineHeight: 1,
                marginBottom: '28px',
                letterSpacing: '-2px',
              }}
            >
              Connect in{' '}
              <span className="text-gradient">Real-Time</span>
              <br />
              With the World
            </h1>

            <p
              style={{
                fontSize: '20px',
                color: colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: '48px',
                maxWidth: '560px',
              }}
            >
              Experience the next generation of social interaction. HD video calls, instant rewards, and a global community waiting for you.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg">
                🚀 Start Exploring
              </Button>
              <Button variant="outline" size="lg">
                🎬 How it Works
              </Button>
            </div>

            {/* Trusted By / Stats */}
            <div style={{ display: 'flex', gap: '48px', marginTop: '64px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: colors.white }}>10M+</div>
                <div style={{ fontSize: '14px', color: colors.textMuted, fontWeight: 500 }}>Active Users</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: colors.white }}>4.9★</div>
                <div style={{ fontSize: '14px', color: colors.textMuted, fontWeight: 500 }}>App Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Advanced Phone Mockup */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '320px',
                height: '640px',
                background: '#0a0a0a',
                borderRadius: '54px',
                padding: '12px',
                boxShadow: `0 30px 100px rgba(0,0,0,0.8), 0 0 80px ${colors.primary}22`,
                position: 'relative',
                animation: 'float 6s ease-in-out infinite',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Internal Screen */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: colors.darkGradient,
                  borderRadius: '44px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {/* App UI Simulation */}
                <div style={{ padding: '40px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <div style={{ fontSize: '20px', fontWeight: 800 }}>Date-x</div>
                    <div style={{ width: '32px', height: '32px', background: colors.surface, borderRadius: '50%' }} />
                  </div>
                  
                  {/* Video Call Mockup */}
                  <div style={{ width: '100%', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${colors.black}ee)` }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                      <div style={{ fontWeight: 700, fontSize: '18px' }}>Sophia, 24 💫</div>
                      <div style={{ fontSize: '12px', opacity: 0.7 }}>Live from New York</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Reward Cards */}
            <div
              className="glass"
              style={{
                position: 'absolute',
                top: '20%',
                right: '-40px',
                padding: '16px 24px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                animation: 'float 5s ease-in-out infinite reverse',
              }}
            >
              <div style={{ fontSize: '24px' }}>🎁</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>New Gift!</div>
                <div style={{ fontSize: '11px', color: colors.textMuted }}>Received 500 Tokens</div>
              </div>
            </div>

            <div
              className="glass"
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '-60px',
                padding: '16px 24px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                animation: 'float 7s ease-in-out infinite 1s',
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: colors.primaryGradient }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>Matched!</div>
                <div style={{ fontSize: '11px', color: colors.textMuted }}>Start a video call</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;