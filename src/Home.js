import React from 'react';
import './Home.css'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import realWorldImage from '../src/assets/images/modernization.png';
import commitmentImage from '../src/assets/images/commitment.jpeg';
import storyImage1 from '../src/assets/images/story1.jpeg'
import storyImage2 from '../src/assets/images/story2.jpeg'
import storyImage3 from '../src/assets/images/story3.jpeg'
import joinImage from '../src/assets/images/group_person.jpeg'


const Home = () => {
  const navigate = useNavigate(); 

  const services = [
    {
      title: "Software Engineering",
      description: "Develop robust software solutions to streamline your operations and boost efficiency."
    },
    {
      title: "Human Resources",
      description: "Innovative HR solutions to manage and grow your team effectively."
    },
    {
      title: "Cloud Computing",
      description: "Scalable solutions to meet your growing needs. Enhance your business operations with our cloud-based services."
    },
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights to drive decision-making."
    },
    {
      title: "Digital Branding",
      description: "Build a strong online presence with our digital branding solutions."
    },
    {
      title: "Artificial Intelligence",
      description: "Leverage the power of AI to automate processes and improve outcomes."
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced cybersecurity strategies."
    }
  ];

  const handleLearnMore = () => {
    navigate('/expertise');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const heroText = document.getElementById('hero-text');
      if (heroText) {
        heroText.style.display = 'none';  // Hide the hero text after 15 seconds
      }
    }, 5000); // 15 seconds in milliseconds

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <h1 id="hero-text">Welcome to Our Services</h1>
        <p>Your success is our priority.</p>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2 className="animated-heading">What We Do.</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-button" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Usage Section */}
      <section className="real-world-usage">
        <h2 className="animated-heading">Modern Solutions for Modern Challenges</h2>
        <div className="real-world-content">
          <img src={realWorldImage} alt="Modernization" className="real-world-image" />
          <div className="real-world-text">
            <p>Our services empower businesses to meet the demands of a rapidly changing world. Whether it's leveraging cloud technologies to enhance scalability or utilizing data analysis to uncover valuable insights, we help companies stay ahead of the curve.</p>
            <p>Artificial Intelligence is revolutionizing industries by automating tasks and providing smarter, faster solutions. Cybersecurity is crucial to protect against digital threats in this increasingly interconnected world, while digital branding allows companies to build their online presence and connect with their audience like never before.</p>
            <p>Through our expertise, we help you unlock new opportunities, optimize processes, and drive innovation in a world that demands constant modernization.</p>
          </div>
        </div>
      </section>

      <section className="commitment">
      <header>
        <h2 className="animated-heading">Harnessing Expertise: Our Commitment to Your Success</h2>
      </header>
      <div className="commitment-content">
        <img src={commitmentImage} alt="Commitment to Success" className="commitment-image" />
        <div className="commitment-text">
          <p>
            At INGROV SYSTEMS, we are dedicated to leveraging our expertise to drive your success. Our solutions are designed to address your immediate needs while fostering long-term growth. From advanced software engineering to cutting-edge cybersecurity, our commitment is to provide services that not only meet your current demands but also evolve with your future aspirations.
          </p>
        </div>
      </div>
    </section> 

    <section className="our-stories">
      <header className="stories-header">
        <h2 className="animated-heading">Our Stories</h2>
        <p className="stories-subtitle">
          Discover how our expertise has transformed businesses and driven success.
        </p>
      </header>
      <div className="stories-content">
        <div className="story-card">
          <img src={storyImage1} alt="Story 1" className="story-image" />
          <h3>Innovative Solutions for Growing Startups</h3>
          <p>
            We helped a tech startup streamline their operations with custom software solutions, significantly boosting their efficiency and growth.
          </p>
        </div>
        <div className="story-card">
          <img src={storyImage2} alt="Story 2" className="story-image" />
          <h3>Transforming HR Management</h3>
          <p>
            Our innovative HR solutions transformed the management processes for a large corporation, enhancing team collaboration and productivity.
          </p>
        </div>
        <div className="story-card">
          <img src={storyImage3} alt="Story 3" className="story-image" />
          <h3>Securing Digital Assets</h3>
          <p>
            Through advanced cybersecurity strategies, we secured the digital infrastructure of a financial institution, protecting their assets and reputation.
          </p>
        </div>
      </div>
    </section> 

    <section className="join-section">
      <div className="join-content">
        <img src={joinImage} alt="Join INGROV SYSTEMS" className="join-image" />
        <div className="join-text">
          <h2 className="animated-heading">Join INGROV SYSTEMS</h2>
          <p>
            Are you ready to be part of a dynamic team that is shaping the future? We are always looking for talented and passionate individuals to join us. 
            Explore our career opportunities and make an impact with INGROV SYSTEMS.
          </p>
          <button className="cta-button">Explore Careers</button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
