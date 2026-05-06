import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import './Footer.css';
import textLogo from '../assets/logo_dark.png';

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
  };

  return (
    <footer className="footer-wrapper">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-container">
                <img src={textLogo} alt="DateX Logo" style={{ height: '40px', width: 'auto' }} />
              </div>
            </Link>
            <p className="footer-description">
              The world's leading real-time social platform. Connecting millions through HD video and meaningful interactions.
            </p>

            {/* Social Icons */}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = item.color;
                    e.currentTarget.style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="footer-links-title">
                {title}
                <div className="footer-heading-indicator" />
              </h4>
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
          <div className="footer-copyright">
            <p>
              © 2026 DateX. All rights reserved. Made with <a href="https://eonpulsetech.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 700 }}>Eonpulsetech</a>.
            </p>
          </div>

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