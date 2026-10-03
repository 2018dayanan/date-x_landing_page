import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './AccountDeletion.css';

const AccountDeletion: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="deletion-wrapper">
      <Navbar />
      
      <div className="container deletion-container">
        <div className="reveal">
          <h1 className="deletion-title text-display-lg">Account <span style={{ color: 'var(--primary)' }}>Deletion</span></h1>
          <p className="deletion-subtitle text-body-md">Request to delete your DateX Streming account and personal data</p>
        </div>

        <div className="deletion-card reveal">
          <section className="deletion-section">
            <h2 className="deletion-section-title">
              How to Delete Your Account
            </h2>
            <p className="deletion-text text-body-md">
              We respect your privacy and provide a simple way to delete your DateX Streming account and all associated personal data from our servers. 
              To request account deletion, please send an email to:
            </p>
            <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'var(--surface-container)', borderRadius: 'var(--radius-DEFAULT)', display: 'inline-block' }}>
              <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>datexstreaming@gmail.com</strong>
            </div>
          </section>

          <section className="deletion-section">
            <h2 className="deletion-section-title">
              What to Include in Your Request
            </h2>
            <p className="deletion-text text-body-md">
              To process your request quickly, please ensure your email includes the following details:
            </p>
            <ul className="deletion-list text-body-md">
              <li className="deletion-list-item">Your registered email address or phone number used to create the account.</li>
              <li className="deletion-list-item">Your DateX Streming username or profile nickname.</li>
              <li className="deletion-list-item">Subject line: "Account Deletion Request".</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2 className="deletion-section-title">
              What Happens to Your Data?
            </h2>
            <p className="deletion-text text-body-md">
              Once your account deletion request is verified and processed:
            </p>
            <ul className="deletion-list text-body-md">
              <li className="deletion-list-item">Your profile information, including photos, name, and bio, will be permanently deleted.</li>
              <li className="deletion-list-item">All chat and match histories will be permanently wiped.</li>
              <li className="deletion-list-item">Any virtual items, balances, or rewards will be forfeited and cannot be restored.</li>
              <li className="deletion-list-item">Your account will be immediately deactivated and cannot be recovered.</li>
            </ul>
            <p className="deletion-text text-body-md" style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--on-surface)' }}>
              Note: Complete data purging will be processed within 24 to 48 hours of verification.
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

export default AccountDeletion;
