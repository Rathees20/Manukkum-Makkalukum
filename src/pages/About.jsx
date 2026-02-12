import React from "react";
import "./SharedSections.css";
import "./About.css";
import { GiPlantRoots, GiWheat, GiLightBulb, GiPineTree } from "react-icons/gi";

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
      {/* Banner Section */}
      <div className="about-banner" data-aos="fade-down">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
          alt="Environmental banner"
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1 data-aos="zoom-in" data-aos-delay="200">About Us</h1>
        </div>
      </div>

      {/* Our Journey Section */}
      <section className="about-custom-section" data-aos="fade-up">
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

      {/* Mission & Vision Section - Redesigned */}
      <section className="mission-section" data-aos="fade-up">
        <div className="mission-intro">
          <span className="subtitle">Our Identity</span>
          <h2>Mannukkum Makkalukum</h2>
          <p className="tagline">Rooted in the soil, dedicated to people.</p>
        </div>

        <div className="mission-grid">
          <div className="mission-card story-card" data-aos="fade-right">
            <div className="mission-image-wrapper">
              <img src="/images/p5.jpeg" alt="Our Story" />
            </div>
            <div className="mission-content">
              <h3>Our Story</h3>
              <p>
                Inspired by the vision of improving both <strong>the wealth of the soil</strong> and
                <strong> the welfare of the people</strong>, Actor M. Soundara Raja helped
                pioneer this movement. We are more than an organization; we are a growing
                collective of nature lovers.
              </p>
            </div>
          </div>

          <div className="mission-card vision-card" data-aos="fade-left">
            <div className="mission-image-wrapper">
              <img src="/images/p1.jpeg" alt="Our Vision" />
            </div>
            <div className="mission-content">
              <h3>Our Vision</h3>
              <ul className="vision-list">
                <li>
                  <span className="icon"><GiPlantRoots /></span>
                  <span>Regenerate degraded lands with native species</span>
                </li>
                <li>
                  <span className="icon"><GiWheat /></span>
                  <span>Support sustainable, soil-friendly farming</span>
                </li>
                <li>
                  <span className="icon"><GiLightBulb /></span>
                  <span>Empower rural youth through leadership</span>
                </li>
                <li>
                  <span className="icon"><GiPineTree /></span>
                  <span>Create green corridors in every village</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="about-custom-section">
        <SectionHeader darkText="Our" greenText="Team" />
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
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
