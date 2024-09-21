import React from 'react';
import './History.css'; // Optional: If you want to add specific styles for this component
import historyImage from '../src/assets/images/story2.jpeg'; // Import the history image

const History = () => {
  return (
    <section className="history">
      <div className="history-content">
        <img src={historyImage} alt="Company History" className="history-image" />
        <div className="history-text">
          <h2 className="animated-heading">Our Journey</h2>
          <p>
            Ingrov Systems was founded two years ago with a vision to revolutionize the tech industry through innovative solutions. Our journey began with a small team of passionate individuals who shared a common goal: to empower businesses with cutting-edge technology.
          </p>
          <p>
            Over the past two years, we have achieved significant milestones, including the successful launch of multiple software solutions, expansion into new markets, and the establishment of strong partnerships with key industry players.
          </p>
          <h3>Milestones</h3>
          <ul className="history-milestones">
            <li><strong>2022:</strong> Founded in January, launched our first product.</li>
            <li><strong>2022:</strong> Reached our first 100 clients by December.</li>
            <li><strong>2023:</strong> Expanded our services to include cloud computing and data analysis.</li>
            <li><strong>2023:</strong> Established partnerships with leading tech firms.</li>
            <li><strong>2023:</strong> Achieved recognition as one of the top startups in the region.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default History;