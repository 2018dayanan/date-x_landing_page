import textLogo from '../assets/logo_white.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import './Footer.css';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/#features' },
      { name: 'Download', href: '/#download' },
      { name: 'Reviews', href: '/#testimonials' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  };

  return (
    <footer className="footer-wrapper">
      {/* Glassmorphism Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '0%',
        left: '0%',
        width: '400px',
        height: '400px',
        background: 'linear-gradient(135deg, rgba(244, 140, 37, 0.08), rgba(112, 0, 255, 0.08))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0%',
        right: '0%',
        width: '350px',
        height: '350px',
        background: 'linear-gradient(135deg, rgba(255, 0, 127, 0.08), rgba(0, 200, 83, 0.08))',
        backdropFilter: 'blur(40px)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Glass Top Border Gradient */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(244, 140, 37, 0.5), rgba(255, 0, 127, 0.5), rgba(112, 0, 255, 0.5), transparent)',
          marginBottom: '60px',
        }} />

        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-container">
                <img src={textLogo} alt="Date-x Logo" className="footer-logo-main" />
              </div>
            </Link>
            <p className="footer-description">
              The world's leading real-time social platform. Connecting millions through HD video and meaningful interactions.
            </p>

            {/* Glass Social Icons */}
            <div className="social-icons">
              {[
                { icon: <FaTwitter size={18} />, color: '#1DA1F2' },
                { icon: <FaInstagram size={18} />, color: '#E4405F' },
                { icon: <FaFacebookF size={18} />, color: '#1877F2' },
                { icon: <FaLinkedinIn size={18} />, color: '#0A66C2' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="social-icon"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = item.color;
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links with Glass Effect */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '28px',
                  position: 'relative',
                }}
              >
                {title}
                <div
                  className="footer-heading-indicator"
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '0',
                    width: '30px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #f48c25, #FF007F)',
                    borderRadius: '10px',
                  }}
                />
              </h4>
              <ul className="footer-links-list">
                {links.map((link) => (
                  <li key={link.name} className="footer-link-item">
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="footer-link"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '8px 16px',
                          borderRadius: '12px',
                          border: '1px solid transparent',
                          transition: 'all 0.3s ease',
                          display: 'inline-block',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(244, 140, 37, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(244, 140, 37, 0.3)';
                          e.currentTarget.style.color = '#f48c25';
                          e.currentTarget.style.paddingLeft = '20px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                          e.currentTarget.style.borderColor = 'transparent';
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                          e.currentTarget.style.paddingLeft = '16px';
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="footer-link"
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '8px 16px',
                          borderRadius: '12px',
                          border: '1px solid transparent',
                          transition: 'all 0.3s ease',
                          display: 'inline-block',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(244, 140, 37, 0.1)';
                          e.currentTarget.style.borderColor = 'rgba(244, 140, 37, 0.3)';
                          e.currentTarget.style.color = '#f48c25';
                          e.currentTarget.style.paddingLeft = '20px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                          e.currentTarget.style.borderColor = 'transparent';
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                          e.currentTarget.style.paddingLeft = '16px';
                        }}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Glass Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          marginBottom: '30px',
        }} />

        {/* Bottom Section with Glass Effect */}
        <div
          style={{
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', fontWeight: 500 }}>
              © 2026 Date-x. All rights reserved. Made with <a href="https://eonpulsetech.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f48c25', textDecoration: 'none', fontWeight: 700, transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF007F'} onMouseLeave={(e) => e.currentTarget.style.color = '#f48c25'}>Eonpulsetech</a>.
            </p>
          </div>

          <div className="footer-bottom-links">
            <Link
              to="/privacy"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f48c25';
                e.currentTarget.style.background = 'rgba(244, 140, 37, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(244, 140, 37, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Privacy
            </Link>
            <a
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF007F';
                e.currentTarget.style.background = 'rgba(255, 0, 127, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Terms
            </a>
            <a
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7000FF';
                e.currentTarget.style.background = 'rgba(112, 0, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(112, 0, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;