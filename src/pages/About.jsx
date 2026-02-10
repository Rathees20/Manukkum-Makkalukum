import React from "react";
import "./SharedSections.css";
import "./About.css";

const SectionHeader = ({ darkText, greenText }) => (
  <div className="custom-section-header">
    <div className="header-line"></div>
    <h2>
      <span className="dark-title">{darkText}</span>{" "}
      <span className="green-title">{greenText}</span>
    </h2>
    <div className="header-line"></div>
  </div>
);

const About = () => {
  const teamMembers = [
    { name: "John Doe", role: "Founder & Chairman", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
    { name: "Jane Smith", role: "Managing Director", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" },
    { name: "Robert Wilson", role: "Chief Coordinator", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
    { name: "Sarah Miller", role: "Project Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
    { name: "Michael Chen", role: "Environmental Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
    { name: "Emily Brown", role: "Community Outreach", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
    { name: "David Kumar", role: "Field Supervisor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" },
    { name: "Lisa Anderson", role: "Communication Manager", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=300&q=80" },
    { name: "Kevin Paul", role: "Volunteer Coordinator", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <div className="page about-page" id="about">
      {/* Our Journey Section */}
      <section className="about-custom-section">
        <SectionHeader darkText="Our" greenText="Journey" />
        <div className="journey-content">
          <p>
            <span className="brand-text">Mannukkum Makkalukum</span> environmental trust was inspired by the vision of Actor M. Soundara Raja to protect the environment and uplift rural communities. What began as a personal habit of planting saplings wherever he travelled blossomed into a dedicated movement. We believe that every individual has a responsibility towards nature, and our mission is to make 'Every household become an environmental activist'.
          </p>
          <p>
            From local sapling drives in schools and villages to promoting soil health and water conservation, our journey is rooted in the belief that healthy soil leads to healthy people. Today, we have reached over 80 villages and planted more than 25,000 saplings, continuing the legacy of creating living symbols of hope for future generations.
          </p>
        </div>
      </section>

      {/* Existing Content */}
      <div className="section">
        <div className="section-header">
          <h2>About Mannukkum Makkalukum</h2>
          <p>Rooted in the soil, dedicated to people.</p>
        </div>

        <div className="two-column">
          <div>
            <h3>Our Story</h3>
            <img
              src="/images/p5.jpeg"
              alt="Inspired leadership"
              className="about-img"
            />
            <p>
              With the guiding vision of improving both{" "}
              <strong>the wealth of the soil</strong> and{" "}
              <strong>the welfare of the people</strong>, Actor M. Soundara Raja
              helped inspire the environmental trust{" "}
              <strong>“Mannukkum Makkalukum”</strong>.
            </p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <img
              src="/images/p1.jpeg"
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

      {/* Our Team Section */}
      <section className="about-custom-section">
        <SectionHeader darkText="Our" greenText="Team" />
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-img-container">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
