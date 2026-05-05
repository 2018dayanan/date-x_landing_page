import React, { useState, useEffect } from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Download App',
    description: 'Get Date-x on your iOS or Android device for free. Available on all major platforms.',
    icon: '📥',
    gradient: 'linear-gradient(135deg, #f48c25 0%, #FF007F 100%)',
    color: '#f48c25',
  },
  {
    title: 'Create Profile',
    description: 'Sign up in seconds and set up your profile with photos and interests that represent you.',
    icon: '👤',
    gradient: 'linear-gradient(135deg, #7000FF 0%, #00FFFF 100%)',
    color: '#7000FF',
  },
  {
    title: 'Find Matches',
    description: 'Our smart algorithm helps you find compatible connections based on your interests.',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #FF007F 0%, #f48c25 100%)',
    color: '#FF007F',
  },
  {
    title: 'Start Connecting',
    description: 'Jump into high-quality video calls and start building meaningful connections.',
    icon: '🎥',
    gradient: 'linear-gradient(135deg, #00C853 0%, #00FFFF 100%)',
    color: '#00C853',
  },
];

const HowItWorks: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section">
      {/* Background orbs */}
      {!isMobile && (
        <>
          <div className="howit-orb howit-orb-1" />
          <div className="howit-orb howit-orb-2" />
        </>
      )}

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span className="section-badge">🚀 Simple Process</span>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#FFFFFF', marginTop: '16px', marginBottom: '16px' }}>
            How It <span className="text-gradient">Works</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            Getting started with Date-x is easy. Follow these simple steps to begin your journey.
          </p>
        </div>

        {/* Steps Container */}
        <div className="howit-card reveal">
          <div className="howit-grid">
            {/* Connecting Line */}
            {!isMobile && <div className="howit-connector" />}

            {steps.map((step, index) => (
              <div
                key={index}
                className={`howit-step ${hoveredStep === index ? 'active' : ''}`}
                style={{ '--step-color': step.color } as React.CSSProperties}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step number badge */}
                <div className="howit-number" style={{ background: step.gradient }}>
                  {index + 1}
                </div>

                {/* Icon Circle */}
                <div
                  className="howit-icon-wrapper"
                  style={{
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}30`,
                  }}
                >
                  <div
                    className="howit-icon"
                    style={{ background: step.gradient }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="howit-title">{step.title}</h3>
                <p className="howit-description">{step.description}</p>

                {/* Bottom accent */}
                <div className="howit-accent" style={{ background: step.gradient }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
          <div className="howit-cta">
            <span>Ready to start your journey?</span>
            <button className="howit-cta-btn">
              Get Started Now 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;