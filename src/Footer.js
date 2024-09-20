import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../src/assets/images/ingrov-systems-logo-transparent.png'; 
import facebook from '../src/assets/images/icons8-facebook-48.png'
import twitter from '../src/assets/images/icons8-twitter-48.png'
import google from '../src/assets/images/icons8-google-48.png'
import linkedin from '../src/assets/images/icons8-linkedin-48.png'
import youtube from '../src/assets/images/icons8-youtube-48.png'



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="INGROV SYSTEMS Logo" className="footer-logo" />
        <p>&copy; 2024 INGROV SYSTEMS. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <p>
          <Link to="/about">About Us</Link> | 
          <Link to="/services">Services</Link> | 
          <Link to="/contact">Contact</Link>
        </p>
      </div>

      <div className="footer-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" className="social-icon" />
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <img src={google} alt="Google" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
