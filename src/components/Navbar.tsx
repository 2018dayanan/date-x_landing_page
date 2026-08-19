import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import './Navbar.css';
import Button from './Button';
import textLogo from '../assets/logo_dark.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

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
    { name: 'Home', id: 'home', href: '/#home', isRoute: false },
    { name: 'Features', id: 'features', href: '/#features', isRoute: false },
    { name: 'How It Works', id: 'how-it-works', href: '/#how-it-works', isRoute: false },
    { name: 'Download', id: 'download', href: '/#download', isRoute: false },
    { name: 'Agency Registration', id: 'agency-registration', href: '/agency-registration', isRoute: true },
  ];

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      return location.pathname === link.href;
    }
    return location.pathname === '/' && activeSection === link.id;
  };

  return (
    <nav className="navbar-wrapper" style={{ padding: scrolled ? '12px 0' : '20px 0' }}>
      <div
        className="container navbar-container"
        style={{
          padding: scrolled ? '10px 32px' : '14px 40px',
          maxWidth: scrolled ? '1050px' : '1240px',
        }}
      >
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={textLogo} alt="DateX" style={{ height: '36px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link ${isLinkActive(link) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isLinkActive(link) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        
        {/* Actions (Visible on all screens) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="https://play.google.com/store/apps/details?id=com.datexstreaming.app" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm" className="nav-download-btn">Download</Button>
          </a>

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
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className={`mobile-nav-link ${isLinkActive(link) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${isLinkActive(link) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <a href="https://play.google.com/store/apps/details?id=com.datexstreaming.app" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              <Button variant="primary" size="md" style={{ width: '100%' }}>Download App</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;