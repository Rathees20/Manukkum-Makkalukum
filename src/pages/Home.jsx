import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page" id="home">
      <section className="hero">
        <div className="hero-image-overlay">
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80"
            alt="Nature Landscape"
            className="hero-bg-img"
          />
        </div>
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="hero-kicker">Welcome to</p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="highlight">மண்ணுக்கும் மக்களுக்கும்</span>
            </motion.h1>
            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Planting trees for a greener tomorrow and building kinder,
              climate-resilient communities.
            </motion.p>
            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Inspired by the life and work of <strong>M. Soundara Raja</strong>,
              this foundation is dedicated to restoring our land, planting hope
              in the form of saplings, and uplifting rural communities.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button
                className="btn btn-primary"
                onClick={() => (window.location.hash = "#get-involved")}
              >
                Join as Volunteer
              </button>
              <button
                className="btn btn-outline"
                onClick={() => (window.location.hash = "#programs")}
              >
                Explore Our Work
              </button>
            </motion.div>
            <motion.p
              className="hero-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              “Wherever I set foot, I leave a sapling behind.” – M. Soundara Raja
            </motion.p>
          </motion.div>

          <div
            className="hero-card"
            data-aos="fade-left"
            data-aos-delay="600"
          >
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
        </div>
      </section>
      {/* Focus Themes Section */}
      <section className="focus-themes" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Focus Themes</h2>
          <p>The core pillars of our environmental movement.</p>
        </div>
        <div className="themes-grid">
          <div className="theme-item" data-aos="fade-up" data-aos-delay="100">
            <div className="theme-icon">🌿</div>
            <h3>Ecology & Environment</h3>
            <p>Working towards a greener planet by restoring biodiversity and creating sustainable green corridors in rural and urban areas.</p>
          </div>
          <div className="theme-item" data-aos="fade-up" data-aos-delay="200">
            <div className="theme-icon">🐾</div>
            <h3>Wildlife Conservation</h3>
            <p>Dedicated to protecting natural habitats and ensuring a safe future for our precious wildlife through community-led efforts.</p>
          </div>
          <div className="theme-item" data-aos="fade-up" data-aos-delay="300">
            <div className="theme-icon">💧</div>
            <h3>Natural Resource Management</h3>
            <p>Promoting sustainable soil and water conservation practices to build climate-resilient communities for future generations.</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery" data-aos="fade-up">
        <div className="section-header">
          <h2>Photo Gallery</h2>
          <p>Glimpses of our journey on the ground.</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item" data-aos="zoom-in">
            <img src="/images/p1.jpeg" alt="Nature 1" />
          </div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100">
            <img src="/images/p2.jpeg" alt="Nature 2" />
          </div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200">
            <img src="/images/p3.jpeg" alt="Nature 3" />
          </div>
          <div className="gallery-item special-focus" data-aos="zoom-in" data-aos-delay="300">
            <img src="/images/p4.jpeg" alt="Nature 4" />
          </div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="400">
            <img src="/images/p5.jpeg" alt="Nature 5" />
          </div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="500">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80" alt="Nature 6" />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications" data-aos="fade-up">
        <div className="section-header">
          <h2>Publications &amp; Reports</h2>
          <p>Transparency in our action. Download our latest reports.</p>
        </div>
        <div className="pub-grid">
          <div className="pub-card" data-aos="fade-up">
            <span className="pub-icon">📄</span>
            <h3>Annual Report 2024</h3>
            <button className="btn btn-outline btn-small">Download PDF</button>
          </div>
          <div className="pub-card" data-aos="fade-up" data-aos-delay="100">
            <span className="pub-icon">📄</span>
            <h3>FCRA Compliances</h3>
            <button className="btn btn-outline btn-small">View Details</button>
          </div>
          <div className="pub-card" data-aos="fade-up" data-aos-delay="200">
            <span className="pub-icon">📄</span>
            <h3>Environment Audit</h3>
            <button className="btn btn-outline btn-small">Download PDF</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

