import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import './Navbar.css';
import Button from './Button';
import textLogo from '../assets/logo_dark.png';

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
          padding: scrolled ? '10px 32px' : '14px 40px',
          maxWidth: scrolled ? '1000px' : '1200px',
        }}
      >
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={textLogo} alt="DateX" style={{ height: '36px', width: 'auto' }} />
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
        
        {/* Actions (Visible on all screens) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Button variant="primary" size="sm">Download</Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
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
            <Button variant="primary" size="md" style={{ width: '100%' }}>Download App</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;