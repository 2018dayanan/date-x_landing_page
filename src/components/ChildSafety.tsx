import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './PrivacyPolicy.css';

const ChildSafety: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-wrapper">
      <Navbar />

      <div className="container privacy-container">
        <div className="reveal">
          <h1 className="privacy-title text-display-lg">Child <span style={{ color: 'var(--primary)' }}>Safety</span> & CSAE Standards</h1>
          <p className="privacy-subtitle text-body-md">Effective Date: June 1, 2026 | Last Updated: June 1, 2026</p>
        </div>

        <div className="privacy-card reveal">
          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Our Commitment to Child Safety
            </h2>
            <p className="privacy-text text-body-md">
              DateX Streaming is a social and dating platform strictly intended for adults aged <strong>18 years and older</strong>. We have a zero-tolerance policy toward any content or behavior that sexually exploits or abuses minors. We are deeply committed to protecting children from sexual abuse and exploitation (CSAE) and maintaining a safe environment for all users.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Age Verification & Eligibility
            </h2>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item">Users <strong>must be 18 years or older</strong> to register and use DateX.</li>
              <li className="privacy-list-item">During registration, users are required to confirm their age.</li>
              <li className="privacy-list-item">We actively review and remove accounts that appear to belong to minors.</li>
              <li className="privacy-list-item">Any account found to belong to a user under 18 is <strong>immediately suspended and permanently banned</strong>.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Prohibited Content & Behavior
            </h2>
            <p className="privacy-text text-body-md">
              The following are strictly prohibited on DateX Streaming and will result in immediate account termination and reporting to authorities:
            </p>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item">Any content depicting, soliciting, or glorifying the sexual abuse or exploitation of minors (CSAM)</li>
              <li className="privacy-list-item">Grooming behaviors targeting minors</li>
              <li className="privacy-list-item">Sharing, distributing, or requesting child sexual abuse material (CSAM) of any kind</li>
              <li className="privacy-list-item">Any attempt to exploit, manipulate, or contact minors through our platform</li>
              <li className="privacy-list-item">Using our platform to facilitate trafficking or exploitation of children</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Detection & Prevention Measures
            </h2>
            <p className="privacy-text text-body-md">
               employs the following measures to prevent CSAE on our platform:
            </p>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item"><strong>Age confirmation</strong> at account registration</li>
              <li className="privacy-list-item"><strong>AI-powered content moderation</strong> to detect and block prohibited content</li>
              <li className="privacy-list-item"><strong>User reporting tools</strong> — every user can report suspicious profiles and content directly in the app</li>
              <li className="privacy-list-item"><strong>Manual review</strong> of flagged content by our trust & safety team</li>
              <li className="privacy-list-item"><strong>PhotoDNA / Hash-matching technology</strong> to detect known CSAM imagery</li>
              <li className="privacy-list-item"><strong>Regular audits</strong> of platform safety practices</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Reporting In-App
            </h2>
            <p className="privacy-text text-body-md">
              DateX Streaming provides <strong>in-app reporting</strong> on every profile and message. Users can report:
            </p>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item">Suspicious or underage-appearing profiles</li>
              <li className="privacy-list-item">Inappropriate or illegal content</li>
              <li className="privacy-list-item">Grooming or exploitative behavior</li>
            </ul>
            <p className="privacy-text text-body-md">
              Reports are reviewed by our Safety Team within <strong>24 hours</strong>. Critical reports involving potential CSAM are escalated immediately.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Reporting to Authorities
            </h2>
            <p className="privacy-text text-body-md">
              DateX Streaming complies with all applicable child safety laws, including:
            </p>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item"><strong>NCMEC (National Center for Missing & Exploited Children)</strong> — We report any confirmed CSAM to NCMEC via CyberTipline as required under 18 U.S.C. § 2258A</li>
              <li className="privacy-list-item"><strong>Local and national law enforcement</strong> — We cooperate fully with law enforcement investigations involving child safety</li>
              <li className="privacy-list-item">We retain necessary evidence securely to support legal investigations</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Compliance & Legal Standards
            </h2>
            <p className="privacy-text text-body-md">
              DateX Streaming complies with:
            </p>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item">The <strong>Children's Online Privacy Protection Act (COPPA)</strong></li>
              <li className="privacy-list-item"><strong>GDPR</strong> child data protection provisions</li>
              <li className="privacy-list-item">Platform-specific policies including <strong>Google Play</strong> and <strong>Apple App Store</strong> child safety requirements</li>
              <li className="privacy-list-item">All applicable regional and national child protection laws</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Contact — Designated Safety Point of Contact
            </h2>
            <p className="privacy-text text-body-md">
              For child safety concerns, CSAM reports, or compliance inquiries, contact our designated safety officer:
              <br /><br />
              <strong>📧 Email:</strong> <strong style={{ color: 'var(--on-surface)' }}>datexstreaming@gmail.com</strong><br />
              <strong>Subject Line:</strong> <code>CHILD SAFETY REPORT</code> or <code>CSAE COMPLIANCE</code>
            </p>
            <p className="privacy-text text-body-md">
              We aim to respond to all safety-related communications within <strong>24–48 hours</strong>.
            </p>
            <p className="privacy-text text-body-md">
              To report CSAM directly to authorities:
            </p>
            <ul className="privacy-list text-body-md">
              <li className="privacy-list-item">🇺🇸 <strong>NCMEC CyberTipline:</strong> <a href="https://www.missingkids.org/gethelpnow/cybertipline" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>www.missingkids.org/gethelpnow/cybertipline</a></li>
              <li className="privacy-list-item">🌐 <strong>INHOPE (Global):</strong> <a href="https://www.inhope.org" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>www.inhope.org</a></li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-section-title">
              Policy Updates
            </h2>
            <p className="privacy-text text-body-md">
              This policy is reviewed and updated regularly. Significant changes will be communicated to users via the app and this page.
              <br /><br />
              <em>DateX Streaming | datexstreaming@gmail.com</em>
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

export default ChildSafety;
