import React from "react";

const About = () => {
  return (
    <div className="page section" id="about">
      <div className="section-header">
        <h2>About the Foundation</h2>
        <p>Rooted in the soil, grounded in people.</p>
      </div>

      <div className="two-column">
        <div>
          <h3>Our Story</h3>
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" 
            alt="Inspired leadership" 
            className="about-img"
          />
          <p>
            With the guiding vision of improving both{" "}
            <strong>the wealth of the soil</strong> and{" "}
            <strong>the welfare of the people</strong>, Actor M. Soundara Raja
            started the social welfare foundation{" "}
            <strong>“For the Land and the People”</strong>.
          </p>
          <p>
            From film sets to remote villages, he has made it a habit to{" "}
            <strong>plant saplings wherever he sets foot</strong> and leave
            behind living symbols of hope.
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <img 
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80" 
            alt="Fertile soil and growth" 
            className="about-img"
          />
          <ul className="bullet-list">
            <li>Regenerate degraded lands with native trees and plants.</li>
            <li>Support farmers with sustainable, soil-friendly practices.</li>
            <li>Empower rural youth through environmental leadership.</li>
            <li>Create green corridors in and around villages and towns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

