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
                <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80" alt="Blog 1" />
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
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" alt="Blog 2" />
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
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" alt="Blog 3" />
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
      case "upcoming":
        return (
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1523301386674-3130094dc85b?auto=format&fit=crop&w=800&q=80" alt="Event 1" />
              </div>
              <div className="program-info">
                <span className="card-tag">Upcoming</span>
                <h3>Annual Tree Planting Drive</h3>
                <p>Join us this weekend for our biggest plantation drive of the year...</p>
                <button className="btn-card">Register</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" alt="Event 2" />
              </div>
              <div className="program-info">
                <span className="card-tag">Upcoming</span>
                <h3>Wildlife Awareness Workshop</h3>
                <p>An educational session on co-existing with local wildlife...</p>
                <button className="btn-card">Register</button>
              </div>
            </div>
          </div>
        );
      case "ongoing":
        return (
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1596796472099-2a91217e997f?auto=format&fit=crop&w=800&q=80" alt="Ongoing 1" />
              </div>
              <div className="program-info">
                <span className="card-tag">Ongoing</span>
                <h3>Village Green Corridors</h3>
                <p>Developing sustainable green zones in 50 villages...</p>
                <button className="btn-card">Learn More</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80" alt="Ongoing 2" />
              </div>
              <div className="program-info">
                <span className="card-tag">Ongoing</span>
                <h3>Water Body Restoration</h3>
                <p>Reviving ancient ponds and lakes for water security...</p>
                <button className="btn-card">Learn More</button>
              </div>
            </div>
          </div>
        );
      case "updates":
        return (
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80" alt="Update 1" />
              </div>
              <div className="program-info">
                <span className="card-tag">Update</span>
                <h3>Quarterly Impact Report</h3>
                <p>Summary of our activities and impact for the last quarter...</p>
                <button className="btn-card">View Report</button>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="https://plus.unsplash.com/premium_photo-1661963874418-d111a1e124a5?auto=format&fit=crop&w=800&q=80" alt="Update 2" />
              </div>
              <div className="program-info">
                <span className="card-tag">Update</span>
                <h3>New Partnership Announcement</h3>
                <p>We are thrilled to partner with GreenEarth Initiative...</p>
                <button className="btn-card">Read More</button>
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
          className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={`tab-btn ${activeTab === "ongoing" ? "active" : ""}`}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing Events
        </button>
        <button
          className={`tab-btn ${activeTab === "updates" ? "active" : ""}`}
          onClick={() => setActiveTab("updates")}
        >
          Events & Updates
        </button>
      </div>

      <div className="programs-content-display">
        {renderContent()}
      </div>
    </section>
  );
};

export default Programs;
