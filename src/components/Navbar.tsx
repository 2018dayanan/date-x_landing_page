import mainLogo from '../assets/main_log.png';
import textLogo from '../assets/text_logo.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import colors from '../styles/colors';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Download', href: '/#download' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(5, 11, 24, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(15px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(15px)' : 'none',
          padding: '12px 24px',
          borderRadius: scrolled ? '50px' : '0',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.4)' : 'none',
          maxWidth: scrolled ? '1000px' : '1300px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}>
            <img 
              src={mainLogo} 
              alt="Date-x Logo" 
              style={{ 
                width: '42px', 
                height: '42px', 
                objectFit: 'contain',
                filter: `drop-shadow(0 8px 20px ${colors.primary}44)` 
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

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: colors.white,
                fontSize: '15px',
                fontWeight: 600,
                opacity: 0.7,
                transition: 'all 0.3s',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>



        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: colors.white,
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            fontSize: '20px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '20px',
            right: '20px',
            background: 'rgba(5, 11, 24, 0.95)',
            backdropFilter: 'blur(20px)',
            padding: '30px',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            animation: 'fadeInUp 0.4s ease-out',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: colors.white,
                fontSize: '18px',
                fontWeight: 600,
                textAlign: 'center',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <Button variant="glass" size="md" style={{ width: '100%' }}>Login</Button>
            <Button variant="primary" size="md" style={{ width: '100%' }}>Download App</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;