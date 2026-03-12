import React from "react";
import { X, Calendar, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Programs.css";

const Programs = () => {
  const [activeTab, setActiveTab] = React.useState("blog");
  const [showPopup, setShowPopup] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = React.useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setShowPopup(true);
  };

  const blogPosts = [
    {
      title: "The Importance of Soil Health",
      image: "/images/s1.jpeg",
      content: "Understanding how healthy soil contributes to a sustainable future...",
      fullContent: "Soil health is the foundation of a thriving ecosystem. It is essential for growing nutritious food, filtering water, and supporting biodiversity. In this blog post, we will explore the importance of soil health and how we can work to protect it."
    },
    {
      title: "Community Driven Conservation",
      image: "/images/img01 (2).jpeg",
      content: "How local communities are leading the charge in protecting nature...",
      fullContent: "Local communities are at the forefront of conservation efforts. They have a deep understanding of their environment and are often the most effective stewards of their natural resources. In this blog post, we will highlight some of the amazing conservation work being done by local communities."
    },
    {
      title: "Restoring Green Cover",
      image: "/images/s4.jpeg",
      content: "Our journey in planting native trees across the region...",
      fullContent: "Trees are essential for a healthy planet. They provide us with clean air, water, and food. They also help to regulate our climate and protect us from the effects of climate change. In this blog post, we will share our journey of planting native trees across the region."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "blog":
        return (
          <div className="programs-grid">
            {blogPosts.map((blog, index) => (
              <div className="program-card" key={index}>
                <div className="program-image">
                  <img src={blog.image} alt={blog.title} className="pos-top" />
                </div>
                <div className="program-info">
                  <span className="card-tag">Blog</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <button className="btn-card" onClick={() => handleReadMore(blog)}>Read More</button>
                </div>
              </div>
            ))}
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
                <p>Join us this weekend for our biggest plantation drive of the year.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/e1.jpeg" alt="Event 2" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Our Events</span>
                <h3>Wildlife Awareness Workshop</h3>
                <p>An educational session on co-existing with local wildlife.</p>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/e2.jpeg" alt="Event 3" className="pos-top" />
              </div>
              <div className="program-info">
                <span className="card-tag">Our Events</span>
                <h3>Community Clean-up Initiative</h3>
                <p>Join hands with us to create cleaner, greener communities.</p>
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
      <div className="work-areas-header">
        <span className="work-areas-icon-simple" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            className="work-areas-icon-simple-svg"
          >
            <path
              d="M5 19c4.5 0 8.5-2.5 10.7-6.3C17.8 10.2 18.5 7.8 19 5.5 16.7 6 14.3 6.2 12 6.9 8.2 8.1 5 11.2 5 15v4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 14c1-.3 2.2-1.2 3-2.3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2>Programs & Initiatives</h2>
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

      <AnimatePresence>
        {showPopup && selectedBlog && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="popup-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setShowPopup(false)}>
                <X size={20} />
              </button>

              <div className="popup-image-header">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
                <div className="popup-category-badge">Blog</div>
              </div>

              <div className="popup-body">
                <h2>{selectedBlog.title}</h2>
                <div className="popup-divider"></div>
                <p className="full-text">{selectedBlog.fullContent}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Programs;
