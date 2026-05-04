import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundOrbs from './BackgroundOrbs';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-wrapper">
      <BackgroundOrbs />
      <Navbar />
      
      <div className="container privacy-container">
        <div className="reveal">
          <h1 className="privacy-title">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="privacy-subtitle">Last updated: May 04, 2024</p>
        </div>

        <div className="glass privacy-card reveal">
          <section className="privacy-section">
            <h2 className="privacy-section-title">
              <span>🛡️</span> 1. Information We Collect
            </h2>
            <p className="privacy-text">
              We collect information to provide better services to all our users. This includes:
            </p>
            <ul className="privacy-list">
              <li className="privacy-list-item">Profile information (name, age, gender, photos)</li>
              <li className="privacy-list-item">Contact details (email address, phone number)</li>
              <li className="privacy-list-item">Device information (IP address, device type, OS)</li>
              <li className="privacy-list-item">Usage data and interaction history</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              <span>🚀</span> 2. How We Use Information
            </h2>
            <p className="privacy-text">
              Your information helps us maintain and improve our services, including:
            </p>
            <ul className="privacy-list">
              <li className="privacy-list-item">Personalizing your social experience and matches</li>
              <li className="privacy-list-item">Facilitating secure video connections</li>
              <li className="privacy-list-item">Processing rewards and virtual transactions</li>
              <li className="privacy-list-item">Providing customer support and safety features</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              <span>🔒</span> 3. Data Security
            </h2>
            <p className="privacy-text">
              We implement state-of-the-art security measures to protect your data from unauthorized 
              access, alteration, disclosure, or destruction. All video calls are encrypted 
              end-to-end to ensure your private moments stay private.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              <span>📧</span> 4. Contact Us
            </h2>
            <p className="privacy-text">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>privacy@date-x.com</strong>
            </p>
          </section>

          <Link to="/" className="back-home-link">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
