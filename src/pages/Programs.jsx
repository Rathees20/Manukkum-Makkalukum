import React from "react";
import "./Programs.css";

const Programs = () => {
  const [activeTab, setActiveTab] = React.useState("blog");

  const renderContent = () => {
    switch (activeTab) {
      case "blog":
        return (
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="/images/s1.jpeg" alt="Blog 1" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Blog</span>
                <h3>The Importance of Soil Health</h3>
                <p>Understanding how healthy soil contributes to a sustainable future...</p>
                <button className="btn-card">Read More</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/img01 (2).jpeg" alt="Blog 2" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Blog</span>
                <h3>Community Driven Conservation</h3>
                <p>How local communities are leading the charge in protecting nature...</p>
                <button className="btn-card">Read More</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/s4.jpeg" alt="Blog 3" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Blog</span>
                <h3>Restoring Green Cover</h3>
                <p>Our journey in planting native trees across the region...</p>
                <button className="btn-card">Read More</button>
              </div>
            </div>
          </div>
        );
      case "events":
        return (
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="/images/e3.jpeg" alt="Event 1" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Our Events</span>
                <h3>Annual Tree Planting Drive</h3>
                <p>Join us this weekend for our biggest plantation drive of the year...</p>
                <button className="btn-card">Register</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/e1.jpeg" alt="Event 2" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Our Events</span>
                <h3>Wildlife Awareness Workshop</h3>
                <p>An educational session on co-existing with local wildlife...</p>
                <button className="btn-card">Register</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/e2.jpeg" alt="Event 3" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Our Events</span>
                <h3>Community Clean-up Initiative</h3>
                <p>Join hands with us to create cleaner, greener communities...</p>
                <button className="btn-card">Register</button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="programs-initiatives" id="programs" data-aos="fade-up">
      <div className="section-header">
        <h2>Programs & Initiatives</h2>
        <p>Explore our ongoing efforts, latest blog posts, and upcoming events.</p>
      </div>

      <div className="programs-tabs">
        <button
          className={`tab-btn ${activeTab === "blog" ? "active" : ""}`}
          onClick={() => setActiveTab("blog")}
        >
          Blog
        </button>
        <button
          className={`tab-btn ${activeTab === "events" ? "active" : ""}`}
          onClick={() => setActiveTab("events")}
        >
          Our Events
        </button>
      </div>

      <div className="programs-content-display">
        {renderContent()}
      </div>
    </section>
  );
};

export default Programs;
