import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-wrapper">
      <Navbar />

      <div className="container terms-container">
        <div className="reveal">
          <h1 className="terms-title text-display-lg">Terms & <span style={{ color: 'var(--primary)' }}>Conditions</span></h1>
          <p className="terms-subtitle text-body-md">Last updated: May 29, 2026</p>
        </div>

        <div className="terms-card reveal">
          <section className="terms-section">
            <h2 className="terms-section-title">
              1. Acceptance of Terms
            </h2>
            <p className="terms-text text-body-md">
              By accessing and using DateX Streaming, you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, please do not access or use our application, website, or services.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">
              2. Eligibility & Account Security
            </h2>
            <p className="terms-text text-body-md">
              To create an account and use DateX Streaming, you must satisfy the following conditions:
            </p>
            <ul className="terms-list text-body-md">
              <li className="terms-list-item">You must be at least 18 years of age.</li>
              <li className="terms-list-item">You must provide accurate, current, and complete registration information.</li>
              <li className="terms-list-item">You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li className="terms-list-item">You must immediately notify us of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">
              3. User Conduct & Content Rules
            </h2>
            <p className="terms-text text-body-md">
              We strive to maintain a respectful, safe, and fun community. You agree NOT to:
            </p>
            <ul className="terms-list text-body-md">
              <li className="terms-list-item">Harass, abuse, stalk, or discriminate against other users.</li>
              <li className="terms-list-item">Post or transmit explicit, offensive, violent, or illegal content.</li>
              <li className="terms-list-item">Use the platform for any commercial solicitation or spamming.</li>
              <li className="terms-list-item">Impersonate any person or entity, or misrepresent your affiliation.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">
              4. Virtual Items & Subscriptions
            </h2>
            <p className="terms-text text-body-md">
              Datexstreaming may offer virtual items, rewards, or subscriptions for purchase.
              All purchases made within the app are final and non-refundable, except as required by applicable law.
              Virtual items have no monetary value outside of the platform.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">
              5. Disclaimer of Warranties
            </h2>
            <p className="terms-text text-body-md">
              Datexstreaming is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the reliability, security, availability, or accuracy of the services, including real-time video connections or match systems.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="terms-section-title">
              6. Contact Us
            </h2>
            <p className="terms-text text-body-md">
              If you have any questions or concerns regarding these Terms & Conditions, please reach out to us at:
              <br />
              <strong style={{ color: 'var(--on-surface)' }}>
                datexstreaming@gmail.com</strong>
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

export default TermsAndConditions;
