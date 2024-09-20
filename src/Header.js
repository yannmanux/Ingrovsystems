import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Ingrov from '../src/assets/images/ingrov-sys-logo3.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={Ingrov} alt="INGROV SYSTEMS Logo" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a
                href="/expertise"
                className={location.pathname === '/expertise' ? 'active' : ''}
              >
                Capabilities
              </a>
            </li>
            <li>
              <a
                href="/leadership"
                className={location.pathname === '/leadership' ? 'active' : ''}
              >
                Leadership
              </a>
            </li>
            <li>
              <a
                href="/history"
                className={location.pathname === '/history' ? 'active' : ''}
              >
                Company History
              </a>
            </li>
            <li>
              <a
                href="/contacts"
                className={location.pathname === '/contacts' ? 'active' : ''}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;