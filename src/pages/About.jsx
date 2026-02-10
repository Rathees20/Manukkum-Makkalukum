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
  const awards = [
    { title: "40 under 40 Awards", img: "https://images.unsplash.com/photo-1578574577315-3fbe0ee38c3a?auto=format&fit=crop&w=300&q=80" },
    { title: "Eco-Hero Awards", img: "https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?auto=format&fit=crop&w=300&q=80" },
    { title: "Rural Impact Awards", img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=300&q=80" },
    { title: "Nature Guard Appreciation", img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=300&q=80" },
    { title: "Green Leadership Awards", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80" },
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

      {/* Existing Content Re-styled */}
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

      {/* Awards Section */}
      <section className="about-custom-section">
        <SectionHeader darkText="" greenText="Awards" />
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-img-container">
                <img src={award.img} alt={award.title} />
              </div>
              <p>{award.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
