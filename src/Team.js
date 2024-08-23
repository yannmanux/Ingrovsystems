import React from 'react';
import './Team.css';
import profile from '../src/assets/images/profile.svg'

const Team = () => {
  return (
    <section className="team-section">
      <h3>Meet Our Team</h3>
      <div className="team-members">
        <div className="team-member">
          <img src={profile} alt="Team Member 2" />
          <h4>John Smith</h4>
          <p>CTO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
};

export default Team;
