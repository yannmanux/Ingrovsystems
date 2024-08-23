import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; 2024 INGROV SYSTEMS. All rights reserved.</p>
        <p>
          <Link to="/about">About Us</Link> | 
          <Link to="/services">Services</Link> | 
          <Link to="/contact">Contact</Link>
        </p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </footer>
  );
};

export default Footer;
