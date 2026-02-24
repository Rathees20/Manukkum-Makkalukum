import React, { useState } from "react";
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

const MentorCard = ({ mentor, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const bioLimit = 150;
  const shouldTruncate = mentor.role.length > bioLimit;

  const displayRole = isExpanded || !shouldTruncate
    ? mentor.role
    : `${mentor.role.substring(0, bioLimit)}...`;

  return (
    <div
      className={`mentor-card ${!mentor.img ? 'no-image-card' : ''} ${isExpanded ? 'expanded' : ''}`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {mentor.img && (
        <div className="mentor-img-container">
          <img src={mentor.img} alt={mentor.name} />
        </div>
      )}
      <div className="mentor-details">
        <h4>{mentor.name}</h4>
        <p className="mentor-designation">{mentor.designation}</p>
        <p className="mentor-role">
          {displayRole}
          {shouldTruncate && (
            <button
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " Read Less" : " Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

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
            <span className="brand-text">Mannukkum Makkalukum</span> Social Welfare Trust was inspired by the vision of Actor M. Soundara Raja to protect the environment and uplift rural communities. What began as a personal habit of planting saplings wherever he travelled blossomed into a dedicated movement. We believe that every individual has a responsibility towards nature, and our mission is to make 'Every household become an environmental activist'.
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
              name: "Nassar",
              role: "Nassar is an Indian actor. He is an Indian Film Actor, Film Producer, Film Director & Voice Artist who is well-known for his work in Tamil, Telugu, Kannada, Malayalam, Hindi and English movies.",
              designation: "Film Actor, Film Producer, Film Director & Voice Artist",
              img: "/images/Nassar15.jpeg"
            },
            {
              name: "Dr. Muthukumar Subramaniam",
              role: "56 years. Born and brought up in nagercoil ,the southern most town of India. 28 years of service in the field of medicine. Specialized in the department of Diabetology and working for Dr. Mohan's Diabetes specialities center, Annanagar as senior consultant.",
              designation: "Medical Professional",
              img: "/images/muthu.jpeg"
            },
            {
              name: "Dr. Saranya Jaikumar",
              role: "Dr. Saranya Jaikumar is one of India's first Doctorates in Educational Psychology and has made a significant impact in the field through her academic expertise and commitment to student development. As the founder of Voxdemy, she has tutored and mentored more than 7,000 psychology students across the globe, empowering learners with practical skills, academic clarity, and professional confidence. She serves as an Independent Expert to the Ministry of Women & Child Development, Government of India, Tamil Nadu Police Department, Samagra Shiksha, and numerous schools and colleges across India.",
              designation: "Educational Psychologist",
              img: "/images/c2.png"
            },
            {
              name: "Chitra Kumaresan",
              role: "Advisor",
              designation: "Social Worker",
              img: null
            }
          ].map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} index={index} />
          ))}
        </div>
      </section>

      {/* Trustee Section */}
      <section className="about-custom-section trustees-section">
        <SectionHeader darkText="Our" greenText="Trustees" />
        <div className="trustee-names-container" data-aos="fade-up">
          {[
            "M. Rajeshwari",
            "Sahadevan",
            "Nagendran",
            "C.Arunkumar",
            "T. Vettrivel Raja",
            "S. Mohan Ram",
            "S. Thuvaraka"
          ].map((name, index) => (
            <div key={index} className="trustee-name-item">
              <span className="dot"></span>
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
