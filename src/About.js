import React from 'react';
import './About.css';
import Mission from './Mission';
import Team from './Team';
import History from './History';
import Values from './Values';

const About = () => {
  return (
    <section className="about-section">
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">We drive innovation and excellence in technology, providing top-notch services that empower businesses to achieve their goals.</p>
        </div>
      </div>
      <div className="about-cards">
        <Mission />
        <Team />
        <History />
        <Values />
      </div>
    </section>
  );
};

export default About;
