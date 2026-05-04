import React from 'react';
import colors from '../styles/colors';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Download', 'Reviews'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Resources: ['Help Center', 'Blog', 'Community', 'API Docs'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'GDPR'],
  };

  return (
    <footer
      style={{
        background: colors.deepBlue,
        padding: '100px 0 60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        {/* Top Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  background: colors.primaryGradient,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                }}
              >
                💜
              </div>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: colors.white,
                  letterSpacing: '-1px',
                }}
              >
                Date-x
              </span>
            </div>
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
                  <li key={link} style={{ marginBottom: '16px' }}>
                    <a
                      href="#"
                      style={{
                        color: colors.textSecondary,
                        fontSize: '15px',
                        fontWeight: 500,
                        transition: 'all 0.3s',
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
                      {link}
                    </a>
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
            © 2024 Date-x. All rights reserved. Made with 💜 worldwide.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#" style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500 }}>Privacy</a>
            <a href="#" style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500 }}>Terms</a>
            <a href="#" style={{ color: colors.textMuted, fontSize: '14px', fontWeight: 500 }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;