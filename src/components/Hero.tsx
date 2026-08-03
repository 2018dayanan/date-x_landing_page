import React, { useState } from 'react';
import Button from './Button';
import './Hero.css';
import heroBanner from '../assets/hero_banner.png';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">

          {/* Left Content */}
          <div className="reveal hero-content">
            {/* Premium Badge */}
            <div className="premium-badge">
              <span style={{ fontSize: '18px' }}>⚡</span>
              <span className="premium-badge-text">
                The Future of Connection
              </span>
            </div>

            <h1 className="hero-title">
              Connect in <span className="hero-title-highlight">Real-Time</span>
              <br />
              With the World
            </h1>

            {/* Mobile Banner: Rendered directly below the title on mobile screens */}
            <div className="hero-mockup-column hide-desktop">
              <div className="hero-banner-container">
                <img src={heroBanner} alt="DateX Live Streaming Banner" className="hero-banner-img" />
              </div>
            </div>

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
          </div>

          {/* Desktop Banner: Rendered as right column on desktop screens */}
          <div className="hero-mockup-column reveal hide-mobile">
            <div className="hero-banner-container">
              <img src={heroBanner} alt="DateX Live Streaming Banner" className="hero-banner-img" />
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