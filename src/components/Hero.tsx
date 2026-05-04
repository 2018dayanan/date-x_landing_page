import React, { useState } from 'react';
import colors from '../styles/colors';
import Button from './Button';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        <div className="hero-grid">
          
          {/* Left Content */}
          <div className="reveal hero-content" style={{ maxWidth: '720px' }}>
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
                The Future of Connection
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(44px, 7vw, 90px)',
                fontWeight: 900,
                color: colors.white,
                lineHeight: 1.05,
                marginBottom: '28px',
                letterSpacing: '-3px',
              }}
            >
              Connect in{' '}
              <span className="text-gradient">Real-Time</span>
              <br />
              With the World
            </h1>

            <p
              style={{
                fontSize: 'clamp(17px, 4vw, 21px)',
                color: colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: '48px',
                maxWidth: '580px',
              }}
            >
              Experience the next generation of social interaction. HD video calls, 
              instant rewards, and a global community waiting for you.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" style={{ minWidth: '220px' }}>
                🚀 Start Exploring
              </Button>
              <Button variant="outline" size="lg" style={{ minWidth: '220px' }} onClick={() => setIsVideoOpen(true)}>
                🎬 Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{ display: 'flex', gap: '48px', marginTop: '64px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: colors.white }}>10M+</div>
                <div style={{ fontSize: '14px', color: colors.textMuted, fontWeight: 500 }}>Active Users</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} className="hide-mobile" />
              <div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: colors.white }}>4.9★</div>
                <div style={{ fontSize: '14px', color: colors.textMuted, fontWeight: 500 }}>App Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Advanced Phone Mockup */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="hide-mobile">
            <div
              style={{
                width: '300px',
                height: '600px',
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
                    <div style={{ fontSize: '18px', fontWeight: 800 }}>Date-x</div>
                    <div style={{ width: '28px', height: '28px', background: colors.surface, borderRadius: '50%' }} />
                  </div>
                  
                  {/* Video Call Mockup */}
                  <div style={{ width: '100%', height: '360px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${colors.black}ee)` }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                      <div style={{ fontWeight: 700, fontSize: '16px' }}>Sophia, 24 💫</div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>Live Now</div>
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
                right: '-20px',
                padding: '12px 20px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                animation: 'float 5s ease-in-out infinite reverse',
              }}
            >
              <div style={{ fontSize: '20px' }}>🎁</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '13px' }}>New Gift!</div>
                <div style={{ fontSize: '10px', color: colors.textMuted }}>+500 Tokens</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '9/16',
              background: '#000',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 0 100px rgba(244, 140, 37, 0.3)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/B8HUkEZG-Nw?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;