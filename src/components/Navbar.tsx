import mainLogo from '../assets/main_log.png';
import textLogo from '../assets/text_logo.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
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
    <nav className="navbar-wrapper" style={{ padding: scrolled ? '12px 0' : '20px 0' }}>
      <div 
        className="container navbar-container"
        style={{
          padding: scrolled ? '10px 32px' : '14px 40px',
          maxWidth: scrolled ? '1000px' : '1200px',
        }}
      >
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={mainLogo} alt="Date-x Logo" className="logo-main" />
          <img src={textLogo} alt="Date-x" className="logo-text" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
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