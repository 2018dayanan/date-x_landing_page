import React, { useState, useEffect } from 'react';
import './HowItWorks.css';
import Button from './Button';

const steps = [
  {
    title: 'Download App',
    description: 'Get DateX on your iOS or Android device for free. Available on all major platforms.',
    icon: '📥',
  },
  {
    title: 'Create Profile',
    description: 'Sign up in seconds and set up your profile with photos and interests that represent you.',
    icon: '👤',
  },
  {
    title: 'Find Matches',
    description: 'Our smart algorithm helps you find compatible connections based on your interests.',
    icon: '🔍',
  },
  {
    title: 'Start Connecting',
    description: 'Jump into high-quality video calls and start building meaningful connections.',
    icon: '🎥',
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
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal">
          <span className="section-badge">🚀 Simple Process</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'var(--on-surface)', marginTop: '24px', marginBottom: '16px' }}>
            How It <span style={{ color: 'var(--primary)' }}>Works</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--on-surface-variant)', maxWidth: '550px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
            Getting started with DateX is easy. Follow these simple steps to begin your journey.
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
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step number badge */}
                <div className="howit-number">
                  {index + 1}
                </div>

                {/* Icon Circle */}
                <div className="howit-icon-wrapper">
                  <div className="howit-icon">
                    {step.icon}
                  </div>
                </div>

                <h3 className="howit-title">{step.title}</h3>
                <p className="howit-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
          <div className="howit-cta">
            <span>Ready to start your journey?</span>
            <Button variant="primary" size="md">
              Get Started Now 🚀
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;