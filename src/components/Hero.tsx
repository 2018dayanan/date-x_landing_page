import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Hero.css';
import heroBanner from '../assets/hero_banner.png';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [landingPageData, setLandingPageData] = useState<{ imageUrl?: string; demoVideo?: string } | null>(null);

  useEffect(() => {
    const fetchLandingPage = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7023';
        const response = await fetch(`${baseUrl}/api/landing-page/active`, {
          headers: {
            'x-api-key': 'XJCuElXqpYLUfkZbuQMnpqAHWWxkRXC'
          }
        });
        const result = await response.json();
        if (result.status && result.data && result.data.length > 0) {
          setLandingPageData(result.data[0]); // Take the latest active record
        }
      } catch (error) {
        console.error('Failed to fetch landing page data:', error);
      }
    };

    fetchLandingPage();
  }, []);

  const videoUrl = landingPageData?.demoVideo || 'https://www.youtube.com/embed/B8HUkEZG-Nw?autoplay=1';

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // YouTube watch link: youtube.com/watch?v=ID
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
    }
    
    // Vimeo parsing
    regExp = /vimeo\.com\/([0-9]+)/;
    match = url.match(regExp);
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
    }

    return url;
  };

  const isDirectVideo = (url: string) => {
    if (!url) return false;
    const cleanUrl = url.split('?')[0].toLowerCase();
    return cleanUrl.endsWith('.mp4') || cleanUrl.endsWith('.webm') || cleanUrl.endsWith('.ogg') || url.includes('res.cloudinary.com');
  };

  const currentBanner = landingPageData?.imageUrl || heroBanner;

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
                <img src={currentBanner} alt="DateX Live Streaming Banner" className="hero-banner-img" />
              </div>
            </div>

            <p className="hero-description">
              Experience the next generation of social interaction. HD video calls,
              instant rewards, and a global community waiting for you.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas">
              <a href="https://play.google.com/store/apps/details?id=com.datexstreaming.app" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" style={{ minWidth: '180px' }}>
                  Start Exploring
                </Button>
              </a>
              <Button variant="outline" size="md" style={{ minWidth: '180px' }} onClick={() => setIsVideoOpen(true)}>
                Watch Demo
              </Button>
            </div>

          </div>

          {/* Desktop Banner: Rendered as right column on desktop screens */}
          <div className="hero-mockup-column reveal hide-mobile">
            <div className="hero-banner-container">
              <img src={currentBanner} alt="DateX Live Streaming Banner" className="hero-banner-img" />
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
            {isDirectVideo(videoUrl) ? (
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                style={{ width: '100%', height: '100%', border: 'none' }} 
              />
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={getEmbedUrl(videoUrl)}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;