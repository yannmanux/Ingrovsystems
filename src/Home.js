import React from 'react';
import './Home.css'; // Importation du fichier CSS

const Home = () => {
  return (
    <div className="home">
      {/* Section Hero */}
      <header className="hero">
        <h1>Innovating the Future with Cutting-Edge Solutions</h1>
        <p>Empowering Businesses with Advanced Technology and Expertise</p>
        <button className="hero-button">Get Started</button>
      </header>

      {/* Section Services */}
      <section className="services">
        <h2>Our Expertise</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-button">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section Social Proof */}
      <section className="social-proof">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="testimonial">
              "{testimonial.quote}" - <strong>{testimonial.client}</strong>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample data for services and testimonials
const services = [
  {
    title: "Cloud Computing",
    description: "Scalable solutions to meet your growing needs. Enhance your business operations with our cloud-based services."
  },
  {
    title: "Software Engineering",
    description: "Custom software development tailored to your business requirements. Delivering innovative solutions with precision."
  },
  {
    title: "Human Resources",
    description: "Streamline your HR processes with our expert services. From recruitment to employee management, we've got you covered."
  },
  {
    title: "Data Analysis",
    description: "Turn data into actionable insights. Leverage our expertise to make informed decisions and drive growth."
  },
  {
    title: "Digital Branding",
    description: "Create a strong online presence with our branding services. Build and enhance your brand’s identity."
  },
  {
    title: "Artificial Intelligence",
    description: "Implement AI solutions to automate tasks and gain valuable insights. Transform your business with smart technology."
  },
  {
    title: "Cybersecurity",
    description: "Protect your business from digital threats. Comprehensive cybersecurity solutions to keep your data safe."
  }
];

const testimonials = [
  { quote: "INGROV SYSTEMS transformed our business with their expertise!", client: "Client A" },
  { quote: "Their software solutions have been a game-changer for us.", client: "Client B" }
];

export default Home;