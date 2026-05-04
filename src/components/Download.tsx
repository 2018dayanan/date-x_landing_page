import React from 'react';
import Button from './Button';
import './Download.css';

const Download: React.FC = () => {
  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="glass download-card reveal">
          <div className="download-glow" />
          
          <h2 className="download-title">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="download-description">
            Join millions of people already using Date-x to discover meaningful connections 
            and experience the future of social interaction.
          </p>

          <div className="download-buttons">
            <Button variant="primary" size="lg" style={{ minWidth: '200px' }}>
               App Store
            </Button>
            <Button variant="glass" size="lg" style={{ minWidth: '200px' }}>
              ▶ Google Play
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
            <div style={{ width: '4px', height: '4px', background: '#FFFFFF', borderRadius: '50%' }} className="hide-mobile" />
            <div style={{ fontSize: '13px', fontWeight: 600 }}>🚀 10M+ Downloads</div>
            <div style={{ width: '4px', height: '4px', background: '#FFFFFF', borderRadius: '50%' }} className="hide-mobile" />
            <div style={{ fontSize: '13px', fontWeight: 600 }}>🌍 190+ Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;