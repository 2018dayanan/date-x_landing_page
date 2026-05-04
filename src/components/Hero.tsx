import React, { useState } from 'react';
import Button from './Button';
import './Hero.css';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="hero-section">
      {/* Colorful Floating Glass Orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(244, 140, 37, 0.2), rgba(112, 0, 255, 0.2))',
        backdropFilter: 'blur(20px)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulse-glow 6s infinite alternate',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.15), rgba(112, 0, 255, 0.15))',
        backdropFilter: 'blur(30px)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'pulse-glow 8s infinite alternate-reverse',
        zIndex: 1,
      }} />

      {/* Hero Glow Effects */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">

          {/* Left Content */}
          <div className="reveal hero-content">
            {/* Premium Badge with Glass Effect */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(244, 140, 37, 0.15)',
              backdropFilter: 'blur(20px)',
              padding: '12px 24px',
              borderRadius: '50px',
              marginBottom: '32px',
              border: '1px solid rgba(244, 140, 37, 0.3)',
              boxShadow: '0 8px 32px rgba(244, 140, 37, 0.15)',
            }}>
              <span style={{ fontSize: '20px' }}>✨</span>
              <span style={{
                color: '#f48c25',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                The Future of Connection
              </span>
            </div>

            <h1 className="hero-title">
              Connect in{' '}
              <span className="text-gradient">Real-Time</span>
              <br />
              With the World
            </h1>

            <p className="hero-description">
              Experience the next generation of social interaction. HD video calls,
              instant rewards, and a global community waiting for you.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas">
              <Button variant="primary" size="lg" style={{ minWidth: '220px' }}>
                🚀 Start Exploring
              </Button>
              <Button variant="glass" size="lg" style={{ minWidth: '220px' }} onClick={() => setIsVideoOpen(true)}>
                🎬 Watch Demo
              </Button>
            </div>

            {/* Stats with Glass Effect */}
            <div style={{
              display: 'flex',
              gap: '32px',
              marginTop: '64px',
              padding: '24px 32px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap',
            }}>
              <div>
                <div className="stat-value" style={{ background: 'linear-gradient(135deg, #f48c25, #FF007F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>10M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} className="hide-mobile" />
              <div>
                <div className="stat-value" style={{ background: 'linear-gradient(135deg, #7000FF, #00FFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>4.9★</div>
                <div className="stat-label">App Rating</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} className="hide-mobile" />
              <div>
                <div className="stat-value" style={{ background: 'linear-gradient(135deg, #FF007F, #f48c25)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>190+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Advanced Phone Mockup */}
          <div className="phone-mockup-wrapper hide-mobile">
            <div className="phone-container">
              {/* Internal Screen */}
              <div className="phone-screen">
                <div style={{ padding: '40px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800 }}>Date-x</div>
                    <div style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                  </div>

                  {/* Video Call Mockup */}
                  <div style={{
                    width: '100%',
                    height: '360px',
                    background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.2), rgba(255, 0, 127, 0.2))',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 60%, #000000ee)` }} />
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                      <div style={{ fontWeight: 700, fontSize: '16px' }}>Sophia, 24 💫</div>
                      <div style={{ fontSize: '11px', opacity: 0.7 }}>Live Now</div>
                    </div>
                    {/* Live indicator */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      padding: '6px 12px',
                      background: 'rgba(255, 0, 127, 0.8)',
                      borderRadius: '20px',
                      fontSize: '10px',
                      fontWeight: 700,
                    }}>
                      🔴 LIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glass Cards */}
            <div
              className="glass"
              style={{
                position: 'absolute',
                top: '15%',
                right: '-30px',
                padding: '16px 24px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 20px 50px rgba(244, 140, 37, 0.2)',
                animation: 'float 5s ease-in-out infinite reverse',
                border: '1px solid rgba(244, 140, 37, 0.3)',
                background: 'rgba(244, 140, 37, 0.1)',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #f48c25, #FF007F)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
              }}>🎁</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>New Gift!</div>
                <div style={{ fontSize: '11px', color: '#f48c25', fontWeight: 600 }}>+500 Tokens</div>
              </div>
            </div>

            <div
              className="glass"
              style={{
                position: 'absolute',
                bottom: '25%',
                left: '-40px',
                padding: '14px 20px',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 20px 50px rgba(112, 0, 255, 0.2)',
                animation: 'float 6s ease-in-out infinite',
                border: '1px solid rgba(112, 0, 255, 0.3)',
                background: 'rgba(112, 0, 255, 0.1)',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #7000FF, #00FFFF)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}>⭐</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '13px' }}>4.9 Rating</div>
                <div style={{ fontSize: '10px', color: '#7000FF', fontWeight: 600 }}>Top App</div>
              </div>
            </div>

            {/* Connection Status Indicator */}
            <div
              className="glass"
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '-20px',
                padding: '10px 16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                animation: 'float 7s ease-in-out infinite',
                border: '1px solid rgba(0, 200, 83, 0.3)',
                background: 'rgba(0, 200, 83, 0.1)',
              }}
            >
              <div style={{
                width: '10px',
                height: '10px',
                background: '#00C853',
                borderRadius: '50%',
                animation: 'pulse-glow 2s infinite',
              }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#00C853' }}>Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsVideoOpen(false)} className="close-btn">
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