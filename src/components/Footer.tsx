
import textLogo from '../assets/logo_white.png';
import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="container">
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
            {/* Social Icons */}
            <div className="social-icons">
              {['🐦', '📸', '📘', '💼'].map((icon, i) => (
                <div key={i} className="social-icon">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="footer-links-title">{title}</h4>
              <ul className="footer-links-list">
                {links.map((link) => (
                  <li key={link.name} className="footer-link-item">
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Date-x. All rights reserved. Made with 💜 Eonpulsetech.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;