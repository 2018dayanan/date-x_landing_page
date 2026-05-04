import mainLogo from '../assets/main_log.png';
import textLogo from '../assets/text_logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';

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
    <footer
      style={{
        background: 'transparent',
        padding: '100px 0 60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Top Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <img
                  src={mainLogo}
                  alt="Date-x Logo"
                  style={{
                    width: '42px',
                    height: '42px',
                    objectFit: 'contain'
                  }}
                />
                <img
                  src={textLogo}
                  alt="Date-x"
                  style={{
                    height: '24px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </Link>
            <p
              style={{
                fontSize: '16px',
                color: colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: '32px',
                maxWidth: '340px',
              }}
            >
              The world's leading real-time social platform. Connecting millions through HD video and meaningful interactions.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {['🐦', '📸', '📘', '💼'].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.primaryGradient;
                    e.currentTarget.style.transform = 'translateY(-5px) rotate(8deg)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: colors.white,
                  marginBottom: '28px',
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '16px' }}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        style={{
                          color: colors.textSecondary,
                          fontSize: '15px',
                          fontWeight: 500,
                          transition: 'all 0.3s',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = colors.primary;
                          e.currentTarget.style.paddingLeft = '5px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = colors.textSecondary;
                          e.currentTarget.style.paddingLeft = '0';
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        style={{
                          color: colors.textSecondary,
                          fontSize: '15px',
                          fontWeight: 500,
                          transition: 'all 0.3s',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = colors.primary;
                          e.currentTarget.style.paddingLeft = '5px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = colors.textSecondary;
                          e.currentTarget.style.paddingLeft = '0';
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

        {/* Bottom Section */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500 }}>
            © 2024 Date-x. All rights reserved. Made with 💜 Eonpulsetech.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link to="/privacy" style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Privacy</Link>
            <a href="#" style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Terms</a>
            <a href="#" style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;