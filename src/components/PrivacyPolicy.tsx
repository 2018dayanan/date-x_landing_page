import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: colors.deepBlue, minHeight: '100vh' }}>
      <Navbar />
      
      <div 
        style={{ 
          padding: '160px 0 100px',
          maxWidth: '800px',
          margin: '0 auto',
          color: colors.white,
          lineHeight: 1.8,
        }}
        className="container"
      >
        <Link 
          to="/" 
          style={{ 
            color: colors.primary, 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '40px',
            fontWeight: 600,
          }}
        >
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: '24px' }}>
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p style={{ color: colors.textSecondary, marginBottom: '40px' }}>
          Last updated: May 2024
        </p>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: colors.primary }}>1. Information We Collect</h2>
          <p style={{ color: colors.textSecondary, marginBottom: '16px' }}>
            We collect information that you provide directly to us when you create an account, 
            update your profile, use our video calling features, or communicate with us.
          </p>
          <ul style={{ color: colors.textSecondary, paddingLeft: '20px' }}>
            <li>Personal identifiers (name, email address, phone number)</li>
            <li>Profile information (photos, interests, bio)</li>
            <li>Usage data (call duration, frequency of use)</li>
            <li>Device information (IP address, device type, OS)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: colors.primary }}>2. How We Use Your Information</h2>
          <p style={{ color: colors.textSecondary, marginBottom: '16px' }}>
            We use the information we collect to provide, maintain, and improve our services, 
            including:
          </p>
          <ul style={{ color: colors.textSecondary, paddingLeft: '20px' }}>
            <li>Facilitating video calls and messages</li>
            <li>Personalizing your experience and matches</li>
            <li>Processing virtual gift transactions</li>
            <li>Sending technical notices and support messages</li>
            <li>Monitoring and analyzing trends and usage</li>
          </ul>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: colors.primary }}>3. Data Security</h2>
          <p style={{ color: colors.textSecondary, marginBottom: '16px' }}>
            We take reasonable measures to help protect information about you from loss, 
            theft, misuse and unauthorized access, disclosure, alteration and destruction. 
            All video calls and messages are encrypted during transmission.
          </p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: colors.primary }}>4. Sharing of Information</h2>
          <p style={{ color: colors.textSecondary, marginBottom: '16px' }}>
            We do not share your personal information with third parties except as described 
            in this policy, such as with your consent or to comply with legal obligations.
          </p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: colors.primary }}>5. Your Choices</h2>
          <p style={{ color: colors.textSecondary, marginBottom: '16px' }}>
            You may update or delete your account information at any time by logging into 
            your account settings or contacting us directly.
          </p>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: colors.primary }}>6. Contact Us</h2>
          <p style={{ color: colors.textSecondary }}>
            If you have any questions about this Privacy Policy, please contact us at: 
            <br />
            <strong>privacy@date-x.com</strong>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
