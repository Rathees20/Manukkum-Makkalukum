import React from "react";
import "./SharedSections.css";
import "./Impact.css";

const Impact = () => {
  return (
    <div className="page section" id="impact">
      <div className="section-header">
        <h2>Our Growing Impact</h2>
        <p>Small acts, repeated everywhere.</p>
      </div>

      <div className="impact-grid">
        <div className="impact-card">
          <div className="impact-number">25,000+</div>
          <div className="impact-label">Saplings Planted</div>
          <p>Across schools, villages, and public spaces.</p>
        </div>
        <div className="impact-card">
          <div className="impact-number">80+</div>
          <div className="impact-label">Villages Reached</div>
          <p>With soil, water, and welfare programs.</p>
        </div>
        <div className="impact-card">
          <div className="impact-number">1,500+</div>
          <div className="impact-label">Volunteers</div>
          <p>Students, farmers, fans, and nature lovers.</p>
        </div>
        <div className="impact-card">
          <div className="impact-number">∞</div>
          <div className="impact-label">Saplings to Go</div>
          <p>We won&apos;t stop until every village is greener.</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;

