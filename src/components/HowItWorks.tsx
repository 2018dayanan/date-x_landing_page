import React, { useState } from 'react';
import { Download, UserCircle, HeartHandshake, Video } from 'lucide-react';
import './HowItWorks.css';
import Button from './Button';

// Import assets for the cards
import downloadAsset from '../assets/chamet/phoneFrame.BSPiujGq.webp';
import createAsset from '../assets/chamet/moments_pic.Bh_i2fnF.webp';
import matchAsset from '../assets/chamet/party_pic.BZI-3Trh.webp';
import connectAsset from '../assets/chamet/motion_moments.n4Z_9dfp.gif';

const steps = [
  {
    title: 'Download App',
    description: 'Get DateX on your iOS or Android device for free. Available on all major platforms.',
    Icon: Download,
    asset: downloadAsset,
  },
  {
    title: 'Create Profile',
    description: 'Sign up in seconds and set up your profile with photos and interests that represent you.',
    Icon: UserCircle,
    asset: createAsset,
  },
  {
    title: 'Find Matches',
    description: 'Our smart algorithm helps you find compatible connections based on your unique interests.',
    Icon: HeartHandshake,
    asset: matchAsset,
  },
  {
    title: 'Start Connecting',
    description: 'Jump into high-quality video calls and start building meaningful connections instantly.',
    Icon: Video,
    asset: connectAsset,
  },
];

const HowItWorks: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">🚀 Simple Process</span>
          <h2 className="section-title">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="section-subtitle">
            Getting started with DateX is easy. Follow these simple steps to begin your journey.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="timeline-container reveal">
          {/* Shared SVG Definitions */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(244, 140, 37, 0)" />
                <stop offset="20%" stopColor="var(--primary)" />
                <stop offset="80%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="rgba(244, 140, 37, 0)" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Animated Curved SVG Background Line (Desktop Only) */}
          <svg className="timeline-svg-curve desktop-only" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path 
              className="timeline-svg-path"
              d="M 50 0 C 60 15, 40 35, 50 50 C 60 65, 40 85, 50 100" 
            />
          </svg>
          
          <div className="timeline-items">
            {steps.map((step, index) => {
              const Icon = step.Icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`timeline-item ${isEven ? 'item-left' : 'item-right'} ${hoveredStep === index ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="timeline-content-wrapper">
                    <div className="timeline-card">
                      <div className="timeline-card-content">
                        <div className="timeline-step-badge">Step {index + 1}</div>
                        <h3 className="timeline-title">{step.title}</h3>
                        <p className="timeline-description">{step.description}</p>
                      </div>
                      <div className="timeline-card-visual">
                        <img src={step.asset} alt={step.title} loading="lazy" />
                      </div>
                    </div>
                  </div>

                  {/* Positioning the nodes to roughly match the curve */}
                  <div className={`timeline-node node-${index}`}>
                    <div className="node-icon-wrapper">
                      <Icon className="node-icon" size={28} />
                    </div>
                  </div>
                  
                  {/* Mobile Connecting Line (Rendered for all but last item) */}
                  {index < steps.length - 1 && (
                    <svg className={`timeline-mobile-connection ${isEven ? 'conn-left-to-right' : 'conn-right-to-left'}`} preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        className="timeline-svg-path"
                        d={isEven ? "M 0 0 C 0 50, 100 50, 100 100" : "M 100 0 C 100 50, 0 50, 0 100"} 
                      />
                    </svg>
                  )}
                  
                  <div className="timeline-empty"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="timeline-cta-wrapper reveal">
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