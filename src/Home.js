import React from 'react';
import './Home.css'; // Importation du fichier CSS

const Home = () => {
  return (
    <div className="home">
      {/* Section Hero */}
      <header className="hero">
        <video controls>
          <source src="../assets/images/1236-144355017_small.mp4" type="video/mp4" autoPlay loop muted></source>
          Votre navigateur ne prend pas en charge les videos HTML5.
        </video>
        <h1>Innovating the Future with Cutting-Edge Solutions</h1>
        <p>Empowering Businesses with Advanced Technology and Expertise</p>
      </header>

      {/* Section Services */}
      <section className="services">
        <h2>Our Expertise</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Cloud Computing</h3>
            <p>Scalable solutions to meet your growing needs. Enhance your business operations with our cloud-based services.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Software Engineering</h3>
            <p>Custom software development tailored to your business requirements. Delivering innovative solutions with precision.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Human Resources</h3>
            <p>Streamline your HR processes with our expert services. From recruitment to employee management, we've got you covered.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Data Analysis</h3>
            <p>Turn data into actionable insights. Leverage our expertise to make informed decisions and drive growth.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Digital Branding</h3>
            <p>Create a strong online presence with our branding services. Build and enhance your brand’s identity.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Artificial Intelligence</h3>
            <p>Implement AI solutions to automate tasks and gain valuable insights. Transform your business with smart technology.</p>
            <button>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Cybersecurity</h3>
            <p>Protect your business from digital threats. Comprehensive cybersecurity solutions to keep your data safe.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* Section Social Proof */}
      <section className="social-proof">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <blockquote>"INGROV SYSTEMS transformed our business with their expertise!" - Client A</blockquote>
          <blockquote>"Their software solutions have been a game-changer for us." - Client B</blockquote>
        </div>
      </section>

    </div>
  );
};

export default Home;
