import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  TrendingUp, 
  Wallet, 
  ShieldCheck, 
  Users2, 
  ArrowRight, 
  Sparkles,
  FileDown
} from 'lucide-react';
import './AgencyPartnerSection.css';

const AgencyPartnerSection: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="agency-benefit-icon" size={24} />,
      title: 'Up to 40% Commission',
      desc: 'Industry-leading tiered payout splits based on your host network volume.'
    },
    {
      icon: <Wallet className="agency-benefit-icon" size={24} />,
      title: 'Guaranteed Weekly Payouts',
      desc: 'Prompt weekly withdrawals with guaranteed exchange rate protection.'
    },
    {
      icon: <Building2 className="agency-benefit-icon" size={24} />,
      title: 'Custom Agency Portal',
      desc: 'Manage all your hosts, monitor real-time streaming stats, and track commissions.'
    },
    {
      icon: <ShieldCheck className="agency-benefit-icon" size={24} />,
      title: 'Diamond Reselling Profits',
      desc: 'Access wholesale diamond packages and earn high margins on resale.'
    }
  ];

  return (
    <section id="agency-partner" className="agency-partner-section">
      <div className="container">
        <div className="agency-partner-banner">
          {/* Decorative Glow */}
          <div className="agency-glow-orb agency-glow-1" />
          <div className="agency-glow-orb agency-glow-2" />

          <div className="agency-partner-content">
            <div className="agency-badge">
              <Sparkles size={16} />
              <span>Agency & Partner Program</span>
            </div>

            <h2 className="agency-title">
              Monetize Your Talent &amp; <br />
              <span className="agency-highlight">Earn Massive Commissions</span>
            </h2>

            <p className="agency-desc">
              Partner with DateX Streaming as an official Agency. Manage top streamers, 
              unlock tiered revenue shares, and scale your business with official platform backing.
            </p>

            {/* Feature Cards Grid */}
            <div className="agency-benefits-grid">
              {benefits.map((item, index) => (
                <div key={index} className="agency-benefit-card">
                  <div className="agency-benefit-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="agency-benefit-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="agency-cta-group">
              <Link to="/agency-registration" className="agency-btn-primary">
                <Users2 size={20} />
                <span>Register Your Agency</span>
                <ArrowRight size={18} />
              </Link>

              <a 
                href="/DateX_Streaming_Agency_Policy.pdf" 
                download="DateX_Streaming_Agency_Policy.pdf"
                className="agency-btn-secondary"
              >
                <FileDown size={18} />
                <span>Download Agency Policy</span>
              </a>
            </div>

            {/* Quick Stats Footnote */}
            <div className="agency-quick-stats">
              <div className="agency-stat-item">
                <span className="stat-value">5,000+</span>
                <span className="stat-label">Active Hosts</span>
              </div>
              <div className="agency-stat-divider" />
              <div className="agency-stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">Global Agencies</span>
              </div>
              <div className="agency-stat-divider" />
              <div className="agency-stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Verified Payouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyPartnerSection;
