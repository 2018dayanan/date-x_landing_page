import React from 'react';
import { FileDown, Users, User } from 'lucide-react';
import './StreamingPolicies.css';

const StreamingPolicies: React.FC = () => {
  return (
    <section id="streaming-policies" className="policies-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
          <span className="section-badge">📜 Platform Policies</span>
          <h2 className="section-title">
            Streaming &amp; <span className="text-primary">Earning Guidelines</span>
          </h2>
          <p className="section-subtitle">
            Get the official regulations for hosts and agency partners. Download the PDF guides to learn more.
          </p>
        </div>

        {/* Double Column Program Grid */}
        <div className="policies-grid">
          {/* Host Program Card */}
          <div className="policy-program-card reveal">
            <div className="program-card-header host-header">
              <div className="program-icon-wrapper">
                <User size={28} />
              </div>
              <div>
                <h4>Hostess Program</h4>
                <p>Earning &amp; Rules Guide</p>
              </div>
            </div>
            
            <div className="program-card-body">
              <ul className="compact-benefits">
                <li><strong>Coin Conversion:</strong> 1,000,000 Coins = $100 standard payout.</li>
                <li><strong>Payout Protection:</strong> Guaranteed ₹95 - ₹98 per $ support.</li>
                <li><strong>Star Host Bonuses:</strong> Extra cash rewards &amp; weekly bonuses.</li>
              </ul>
            </div>

            <div className="program-card-footer">
              <a 
                href="/DateX_Streaming_Host_Policy.pdf" 
                download="DateX_Streaming_Host_Policy.pdf" 
                className="policy-download-btn host-btn"
              >
                <FileDown size={18} />
                Download Host Policy
              </a>
            </div>
          </div>

          {/* Agency Program Card */}
          <div className="policy-program-card reveal">
            <div className="program-card-header agency-header">
              <div className="program-icon-wrapper">
                <Users size={28} />
              </div>
              <div>
                <h4>Agency Program</h4>
                <p>Growth &amp; Commissions</p>
              </div>
            </div>

            <div className="program-card-body">
              <ul className="compact-benefits">
                <li><strong>High Commissions:</strong> Tiered payout splits from 10% up to 40%.</li>
                <li><strong>Recruitment Bonus:</strong> $20 extra reward per verified Star Host.</li>
                <li><strong>Diamond Selling:</strong> Buy direct and earn transaction margins.</li>
              </ul>
            </div>

            <div className="program-card-footer">
              <a 
                href="/DateX_Streaming_Agency_Policy.pdf" 
                download="DateX_Streaming_Agency_Policy.pdf" 
                className="policy-download-btn agency-btn"
              >
                <FileDown size={18} />
                Download Agency Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamingPolicies;
