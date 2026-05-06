import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Hero.css';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">

          {/* Left Content */}
          <div className="reveal hero-content">
            {/* Premium Badge */}
            <div className="premium-badge">
              <span style={{ fontSize: '18px' }}>✨</span>
              <span className="premium-badge-text">
                The Future of Connection
              </span>
            </div>

            <h1 className="hero-title">
              Connect in <span className="hero-title-highlight">Real-Time</span>
              <br />
              With the World
            </h1>

            <p className="hero-description">
              Experience the next generation of social interaction. HD video calls,
              instant rewards, and a global community waiting for you.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas">
              <Button variant="primary" size="md" style={{ minWidth: '180px' }}>
                Start Exploring
              </Button>
              <Button variant="outline" size="md" style={{ minWidth: '180px' }} onClick={() => setIsVideoOpen(true)}>
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats-container">
              <div>
                <div className="stat-value">10M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="hero-stat-divider hide-mobile" />
              <div>
                <div className="stat-value">4.9★</div>
                <div className="stat-label">App Rating</div>
              </div>
              <div className="hero-stat-divider hide-mobile" />
              <div>
                <div className="stat-value">190+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup - Hidden on mobile */}
          {!isMobile && (
            <div className="phone-mockup-wrapper hide-mobile">
              <div className="phone-container">
                <div className="phone-screen">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', width: '100%' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--on-surface)' }}>DateX</div>
                    <div style={{ width: '28px', height: '28px', background: 'var(--outline-variant)', borderRadius: '50%', flexShrink: 0 }} />
                  </div>

                  <div className="phone-screen-bg" style={{ width: '100%' }}>
                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2 }}>
                      <div style={{ fontWeight: 800, fontSize: '18px', color: '#fff' }}>Sophia, 24 ✨</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Live Now</div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      padding: '6px 12px',
                      background: 'var(--primary)',
                      color: 'white',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '11px',
                      fontWeight: 700,
                      zIndex: 2,
                    }}>
                      LIVE
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="floating-card"
                style={{
                  top: '15%',
                  right: '-40px',
                  animation: 'float 5s ease-in-out infinite reverse',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--primary-container)',
                  borderRadius: 'var(--radius-DEFAULT)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}>🎁</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--on-surface)' }}>New Gift!</div>
                  <div style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>+500 Tokens</div>
                </div>
              </div>

              <div
                className="floating-card"
                style={{
                  bottom: '25%',
                  left: '-50px',
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#ffb77d',
                  borderRadius: 'var(--radius-DEFAULT)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}>⭐</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--on-surface)' }}>4.9 Rating</div>
                  <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)', fontWeight: 600 }}>Top App</div>
                </div>
              </div>

            </div>
          )}
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