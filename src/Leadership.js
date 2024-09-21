import React from 'react';
import './Leadership.css'; // Optional: If you want to add specific styles for this component
import leadershipImage from '../src/assets/images/story1.jpeg'; // Import the leadership image

const Leadership = () => {
  return (
    <section className="leadership">
      <div className="leadership-content">
        <img src={leadershipImage} alt="Leadership" className="leadership-image" />
        <div className="leadership-text">
          <h2 className="animated-heading">Leadership at Ingrov Systems</h2>
          <p>
            At Ingrov Systems, we have been committed to fostering innovative solutions since our inception two years ago. Our leadership philosophy is rooted in systems leadership, which emphasizes collaboration, inclusivity, and adaptability in addressing complex challenges.
          </p>
          <p>
            We believe that effective leadership is not just about authority but about enabling collective action across diverse stakeholders. Our leaders are dedicated to catalyzing change by engaging with our community and empowering others to contribute to our shared vision.
          </p>
          <h3>Our Leadership Principles</h3>
          <ul className="leadership-principles">
            <li><strong>Collaboration:</strong> We work together with all stakeholders to achieve common goals.</li>
            <li><strong>Adaptability:</strong> We embrace change and remain flexible in our approach.</li>
            <li><strong>Empowerment:</strong> We empower individuals and teams to take initiative and lead within their spheres of influence.</li>
            <li><strong>Transparency:</strong> We maintain open communication and share knowledge freely.</li>
            <li><strong>Accountability:</strong> We hold ourselves accountable for our actions and commitments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leadership;