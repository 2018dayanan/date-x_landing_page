import textLogo from '../assets/logo_white.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from './Button';
import colors from '../styles/colors';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Intersection Observer for Scroll Spy
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = ['home', 'features', 'how-it-works', 'download'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', href: '/#home' },
    { name: 'Features', id: 'features', href: '/#features' },
    { name: 'How It Works', id: 'how-it-works', href: '/#how-it-works' },
    { name: 'Download', id: 'download', href: '/#download' },
  ];

  return (
    <nav className="navbar-wrapper" style={{ padding: scrolled ? '12px 0' : '20px 0' }}>
      <div
        className="container navbar-container"
        style={{
          background: scrolled
            ? `linear-gradient(135deg, rgba(244, 140, 37, 0.25) 0%, rgba(255, 0, 127, 0.2) 50%, rgba(112, 0, 255, 0.25) 100%)`
            : `linear-gradient(135deg, rgba(244, 140, 37, 0.15) 0%, rgba(255, 0, 127, 0.12) 50%, rgba(112, 0, 255, 0.15) 100%)`,
          padding: scrolled ? '10px 32px' : '14px 40px',
          maxWidth: scrolled ? '1000px' : '1200px',
        }}
      >
        {/* Colorful gradient overlay strip at top of navbar */}
        <div className="navbar-top-strip" />

        {/* Logo */}
        <Link to="/" className="logo-container">
          <img
            src={textLogo}
            alt="Date-x Logo"
            className="logo-main"
            style={{ filter: `drop-shadow(0 8px 20px ${colors.primary}66)` }}
          />
          {/* <img src={textLogo} alt="Date-x" className="logo-text" /> */}
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
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
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
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