import React from 'react';
import './Expertise.css'; // Optional: If you want to add specific styles for this component

// Importing images
import softwareEngineeringImage from '../src/assets/images/software-engineering.jpeg';
import humanResourcesImage from '../src/assets/images/human_resources.jpeg';
import cloudComputingImage from '../src/assets/images/cloud-computing.jpeg';
import dataAnalysisImage from '../src/assets/images/4.png';
import digitalBrandingImage from '../src/assets/images/1.png';
import artificialIntelligenceImage from '../src/assets/images/2.png';
import cybersecurityImage from '../src/assets/images/3.png';

const services = [
  {
    title: "Software Engineering",
    description: "Develop robust software solutions to streamline your operations and boost efficiency.",
    details: "We craft custom software solutions tailored to your specific business needs. From web applications to enterprise systems, we develop software that is scalable, efficient, and reliable.",
    image: softwareEngineeringImage,
  },
  {
    title: "Human Resources",
    description: "Innovative HR solutions to manage and grow your team effectively.",
    details: "Our HR services streamline your employee management processes, offering solutions for talent acquisition, payroll management, and employee development.",
    image: humanResourcesImage,
  },
  {
    title: "Cloud Computing",
    description: "Scalable solutions to meet your growing needs. Enhance your business operations with our cloud-based services.",
    details: "Utilize cloud technology to store, manage, and process data efficiently. We offer scalable, secure, and cost-effective cloud solutions.",
    image: cloudComputingImage,
  },
  {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights to drive decision-making.",
    details: "Our data analysis services include predictive analytics, business intelligence reporting, and real-time data processing.",
    image: dataAnalysisImage,
  },
  {
    title: "Digital Branding",
    description: "Build a strong online presence with our digital branding solutions.",
    details: "From logo design to social media strategy, we help your brand connect with its audience.",
    image: digitalBrandingImage,
  },
  {
    title: "Artificial Intelligence",
    description: "Leverage the power of AI to automate processes and improve outcomes.",
    details: "Our AI solutions cover everything from machine learning algorithms to natural language processing.",
    image: artificialIntelligenceImage,
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced cybersecurity strategies.",
    details: "We offer risk assessments, network security, encryption, and real-time threat monitoring to safeguard your digital assets.",
    image: cybersecurityImage,
  },
];

const Expertise = () => {
  return (
    <section className="expertise">
      <h2 className="animated-heading">Capabilities</h2>
      <div className="expertise-cards">
        {services.map((service, index) => (
          <div className="expertise-card" key={index}>
            <img src={service.image} alt={service.title} className="expertise-card-image" />
            <div className="expertise-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>{service.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;