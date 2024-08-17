import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; 2024 INGROV SYSTEMS. All rights reserved.</p>
        <p><a href="#about">About Us</a> | <a href="#services">Services</a> | <a href="#contact">Contact</a></p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </footer>
  );
};

export default Footer;
