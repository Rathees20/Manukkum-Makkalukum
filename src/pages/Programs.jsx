import React from "react";

const Programs = () => {
  return (
    <div className="page section section-alt" id="programs">
      <div className="section-header">
        <h2>Programs &amp; Initiatives</h2>
        <p>From saplings to sustainable communities.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <img 
            src="https://images.unsplash.com/photo-1599307337250-9884e6eeec01?auto=format&fit=crop&w=600&q=80" 
            alt="Sapling Drive" 
            className="card-img-top"
          />
          <h3>1. Sapling Drives Everywhere</h3>
          <p>
            Inspired by Soundara Raja&apos;s personal habit, our volunteers
            organize sapling drives in schools, villages, shooting spots, public
            functions, and more.
          </p>
          <ul className="bullet-list">
            <li>Native and fruit-bearing species prioritized.</li>
            <li>Community-based maintenance plans for each site.</li>
            <li>Engaging students and local youth as caretakers.</li>
          </ul>
        </div>

        <div className="card">
          <img 
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80" 
            alt="Soil and Water" 
            className="card-img-top"
          />
          <h3>2. Soil &amp; Water Stewardship</h3>
          <p>
            Healthy soil means healthy people. We support farmers and local
            panchayats with awareness and on-ground action.
          </p>
          <ul className="bullet-list">
            <li>Workshops on organic and regenerative farming.</li>
            <li>Rainwater harvesting and recharge pit support.</li>
            <li>Mulching, composting, and soil-enrichment campaigns.</li>
          </ul>
        </div>

        <div className="card">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80" 
            alt="Community Outreach" 
            className="card-img-top"
          />
          <h3>3. People &amp; Welfare Outreach</h3>
          <p>
            Along with ecological restoration, we focus on the welfare of the
            people who live closest to the land.
          </p>
          <ul className="bullet-list">
            <li>Health and nutrition camps for rural communities.</li>
            <li>Scholarships and mentoring for students.</li>
            <li>Skill-building workshops for women and youth.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programs;

