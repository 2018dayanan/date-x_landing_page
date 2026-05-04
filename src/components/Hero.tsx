import React, { useState } from 'react';
import Button from './Button';
import './Hero.css';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Background Elements */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

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
              <Button variant="outline" size="lg" style={{ minWidth: '220px' }} onClick={() => setIsVideoOpen(true)}>
                🎬 Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div>
                <div className="stat-value">10M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} className="hide-mobile" />
              <div>
                <div className="stat-value">4.9★</div>
                <div className="stat-label">App Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Advanced Phone Mockup */}
          <div className="phone-mockup-wrapper hide-mobile">
            <div className="phone-container">
              {/* Internal Screen */}
              <div className="phone-screen">
                {/* App UI Simulation */}
                <div style={{ padding: '40px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800 }}>Date-x</div>
                    <div style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                  </div>
                  
                  {/* Video Call Mockup */}
                  <div style={{ width: '100%', height: '360px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 60%, #000000ee)` }} />
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
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>+500 Tokens</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
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