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
    {
      name: "M.Soundara Raja BE.,MA",
      role: "Founder & President of MM Trust",
      designation: "Film Actor & Social Activist",
      img: "/images/Soundara Raja.jpeg"
    },
    {
      name: "M.Thiyagarajan BA",
      role: "General Secretary of MM Trust",
      designation: "Financier & Milk Society",
      img: "/images/Thiyagarajan.jpeg"
    },
    {
      name: "J. Tamanna Bsc.,MA",
      role: "Treasurer of MM Trust",
      designation: "CEO of Green Apple Media",
      img: "/images/Tamanna.jpeg"
    },
    {
      name: "Karthik Rajkumar",
      role: "Joint General Secretary of MM Trust",
      designation: "Film Art Director & Production Designer",
      img: "/images/Karthik Rajkumar.jpeg"
    },
    {
      name: "R.Ilangovan Dcop",
      role: "Deputy General Secretary of MM Trust",
      designation: "Ex President of Co-operative Society",
      img: "/images/Ilangovan.jpeg"
    },
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
              <p className="team-designation">{member.designation}</p>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors & Advisors Section */}
      <section className="about-custom-section">
        <SectionHeader darkText="Our" greenText="Mentors & Advisors" />
        <div className="mentor-grid">
          {[
            {
              name: "Nasar",
              role: "President of South Indian Film Artiste Association - Chennai",
              designation: "Film Actor, Writer & Producer",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" // Placeholder
            },
            {
              name: "Dr. Muthukumar MBBS",
              role: "Advisor",
              designation: "Medical Professional",
              img: "https://images.unsplash.com/photo-1537368910025-bc005caeb1f5?auto=format&fit=crop&w=300&q=80" // Placeholder
            },
            {
              name: "Dr. Saranya Jaykumar",
              role: "Advisor",
              designation: "Educationalist",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" // Placeholder
            },
            {
              name: "Chitra Kumaresan",
              role: "Advisor",
              designation: "Social Worker",
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80" // Placeholder
            }
          ].map((mentor, index) => (
            <div
              key={index}
              className="mentor-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mentor-img-container">
                <img src={mentor.img} alt={mentor.name} />
              </div>
              <div className="mentor-details">
                <h4>{mentor.name}</h4>
                <p className="mentor-designation">{mentor.designation}</p>
                <p className="mentor-role">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trustee Section */}
      <section className="about-custom-section">
        <SectionHeader darkText="Our" greenText="Trustees" />
        <div className="mentor-grid">
          {[
            "M. Rajeshwari",
            "Sahadevan",
            "Nagendran",
            "C.Arunkumar",
            "T. Vettrivel Raja",
            "S. Mohan Ram",
            "S. Thuvaraka"
          ].map((name, index) => (
            <div
              key={index}
              className="mentor-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mentor-img-container">
                <img
                  src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=256`}
                  alt={name}
                />
              </div>
              <div className="mentor-details">
                <h4>{name}</h4>
                <p className="mentor-role">Trustee</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
