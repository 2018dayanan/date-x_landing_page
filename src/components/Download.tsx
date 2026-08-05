import React, { useState } from 'react';
import './Download.css';

const Download: React.FC = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  return (
    <section id="download" className="download-section">
      <div className="container">
        {/* Main CTA Card */}
        <div className="download-card reveal">
          {/* Badge */}
          <div className="download-badge">
            <span>🚀</span> Limited Time Offer
          </div>

          <h2 className="download-title">
            Ready to <span style={{ color: 'var(--primary)' }}>Get Started?</span>
          </h2>
          <p className="download-description">
            Join millions of people already using DateX. Download now and get <strong>500 FREE Tokens</strong> on signup!
          </p>

          {/* Platform Buttons */}
          <div className="download-platforms">
            {/* {/* App Store
            <button
              className={`download-btn download-btn-apple ${hoveredPlatform === 'apple' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredPlatform('apple')}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="download-btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="download-btn-text">
                <span className="download-btn-label">Download on the</span>
                <span className="download-btn-name">App Store</span>
              </div>
            </button> */}

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.datexstreaming.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`download-btn download-btn-google ${hoveredPlatform === 'google' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredPlatform('google')}
              onMouseLeave={() => setHoveredPlatform(null)}
              style={{ textDecoration: 'none' }}
            >
              <div className="download-btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 3.65629C2 2.15127 3.59967 1.18549 4.93149 1.88645L20.7844 10.2301C22.2091 10.9799 22.2091 13.0199 20.7844 13.7698L4.9315 22.1134C3.59968 22.8144 2 21.8486 2 20.3436V3.65629ZM19.8529 11.9999L16.2682 10.1132L14.2243 11.9999L16.2682 13.8866L19.8529 11.9999ZM14.3903 14.875L12.75 13.3608L6.75782 18.8921L14.3903 14.875ZM12.75 10.639L14.3903 9.12488L6.75782 5.10777L12.75 10.639ZM4 5.28391L11.2757 11.9999L4 18.7159V5.28391Z" />
                </svg>
              </div>
              <div className="download-btn-text">
                <span className="download-btn-label">GET IT ON</span>
                <span className="download-btn-name">Google Play</span>
              </div>
            </a>
          </div>

          {/* Features List */}
          <div className="download-features">
            {[
              { icon: '✓', text: 'Free to Download', color: 'var(--primary)' },
              { icon: '✓', text: '500 Bonus Tokens', color: 'var(--primary)' },
              { icon: '✓', text: 'No Credit Card Required', color: 'var(--primary)' },
            ].map((feature, i) => (
              <div key={i} className="download-feature-item">
                <span className="download-feature-icon" style={{ color: feature.color }}>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* {/* Stats Row 
        <div className="download-stats reveal">
          {[
            { icon: '⭐', value: '4.9/5', label: 'App Rating' },
            { icon: '📥', value: '10M+', label: 'Downloads' },
            { icon: '🌍', value: '190+', label: 'Countries' },
            { icon: '🔒', value: '100%', label: 'Secure' },
          ].map((stat, i) => (
            <div key={i} className="download-stat-card">
              <span className="download-stat-icon">{stat.icon}</span>
              <span className="download-stat-value">{stat.value}</span>
              <span className="download-stat-label">{stat.label}</span>
            </div>
          ))}
        </div> */}

        {/* Trust Badges */}
        <div className="download-trust reveal">
          {[
            { icon: '🛡️', label: 'Secure Payments' },
            { icon: '🔒', label: 'Privacy Protected' },
            { icon: '⚡', label: 'Fast Installation' },
            { icon: '💬', label: '24/7 Support' },
          ].map((badge, i) => (
            <div key={i} className="download-trust-item">
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;