import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page" id="home">
      <section className="hero">
        <div className="hero-image-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" 
            alt="Lush green reforestation" 
            className="hero-bg-img"
          />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">Actor Soundara Raja&apos;s Choice</p>
          <h1>
            For the <span className="highlight">Wealth of the Soil</span> and
            the <span className="highlight">Welfare of the People</span>
          </h1>
          <p className="hero-text">
            Inspired by the life and work of <strong>M. Soundara Raja</strong>,
            this foundation is dedicated to restoring our land, planting hope
            in the form of saplings, and uplifting rural communities.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => (window.location.hash = "#get-involved")}
            >
              Join the Movement
            </button>
            <button
              className="btn btn-outline"
              onClick={() => (window.location.hash = "#programs")}
            >
              Explore Programs
            </button>
          </div>
          <p className="hero-note">
            “Wherever I set foot, I leave a sapling behind.” – M. Soundara Raja
          </p>
        </div>

        <div className="hero-card">
          <img 
            src="https://images.unsplash.com/photo-1599307337250-9884e6eeec01?auto=format&fit=crop&w=600&q=80" 
            alt="Planting a sapling" 
            className="card-img-top"
          />
          <h3>Planting a Future</h3>
          <p>
            Every shoot we plant is a promise – to our farmers, to our
            children, and to the soil that sustains us.
          </p>
          <ul>
            <li>Native tree sapling drives</li>
            <li>Soil health &amp; water conservation</li>
            <li>Village-level awareness programs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;

