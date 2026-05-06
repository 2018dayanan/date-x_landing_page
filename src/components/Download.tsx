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
            {/* App Store */}
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
            </button>

            {/* Google Play */}
            <button
              className={`download-btn download-btn-google ${hoveredPlatform === 'google' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredPlatform('google')}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="download-btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M3.18 23.76c.37.21.83.23 1.22.05l11.45-6.62-2.25-2.25L3.18 23.76zm-1.08-19.97l3.02 3.02 1.97-1.97-3.02-3.02-1.97 1.97zm9.8 5.44l4.37 2.53.69-1.95-4.03-2.35-1.03 1.77zm-1.61-.93l-.84-.49-2.34 2.34 2.35 2.35 2.16-2.16-1.33-2.04zm6.16 3.79c-.19.55-.46 1.09-.83 1.6l-2.36-2.36 2.36-2.36c.37.51.64 1.05.83 1.6l-3.33 1.93 3.33 1.93v-3.34zM.54 11.53l4.32 2.5 3.42-1.98-3.42-1.98L.54 11.53zM8.4 4.8L4.6 6.8l3.7 2.15L12.1 7l-3.7-2.2zm10.3 14.3l-1.9-3.3 1.9-3.3 2.25 3.9-2.25 2.7z" />
                </svg>
              </div>
              <div className="download-btn-text">
                <span className="download-btn-label">GET IT ON</span>
                <span className="download-btn-name">Google Play</span>
              </div>
            </button>
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