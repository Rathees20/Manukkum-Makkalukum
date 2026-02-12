import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const heroImages = [
    "/images/img01 (13).jpeg",
    "/images/img01 (7).jpeg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const themeCards = 3; // Total number of theme cards

  // Hero image auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Theme cards auto-slide (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % themeCards);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [isMobile, themeCards]);

  return (
    <div className="page" id="home">
      <section className="hero">
        <div className="hero-image-overlay">
          <AnimatePresence>
            <motion.img
              key={heroImages[currentImageIndex]}
              src={heroImages[currentImageIndex]}
              alt="Nature Landscape"
              className="hero-bg-img pos-top"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </AnimatePresence>
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
          <h2>
            Our Mission & Themes <span className="leaf-icon-small">🍃</span>
          </h2>
          <p className="section-subtitle">
            "Every household should become an environmental activist!"
          </p>
        </div>


        {/* Desktop: Grid Layout */}
        {!isMobile && (
          <div className="themes-grid">
            {/* Theme 1 */}
            <div className="theme-item" data-aos="fade-up" data-aos-delay="100">
              <div className="theme-img-container">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=300&q=80"
                  alt="Soil and Agriculture"
                />
              </div>
              <h3>Wealth of the Soil</h3>
              <p>
                We believe that protecting our soil is the foundation of a prosperous society.
                By promoting tree plantation, sustainable farming, and ecological restoration,
                we work to revive the natural strength of the land and ensure food and water
                security for future generations.
              </p>
              <button className="btn-read-more">Read More</button>
            </div>

            {/* Theme 2 */}
            <div className="theme-item" data-aos="fade-up" data-aos-delay="200">
              <div className="theme-img-container">
                <img
                  src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=1024x1024&w=is&k=20&c=DQmak_9J4DwI1y9SVeG14sZK0oYethaBQwPTEbhGUDQ="
                  alt="Tree Plantation"
                />
              </div>
              <h3>Tree Plantation Movement</h3>
              <p>
                Inspired by the vision that nature must be protected at the right time,
                we encourage every household to plant and nurture trees. Protecting existing
                trees and increasing green cover ensures balanced rainfall, cleaner air,
                and a healthier ecosystem.
              </p>
              <button className="btn-read-more">Read More</button>
            </div>

            {/* Theme 3 */}
            <div className="theme-item" data-aos="fade-up" data-aos-delay="300">
              <div className="theme-img-container">
                <img
                  src="https://media.istockphoto.com/id/1549592912/photo/a-group-of-volunteers-holds-a-small-tree-in-their-hands-for-plant-concept-of-world.jpg?s=1024x1024&w=is&k=20&c=-J0G4JpiMODq_dl0dkvHCyMO6bIv0_zDOlGHM--ah1Y="
                  alt="Community Welfare"
                />
              </div>
              <h3>Welfare of the People</h3>
              <p>
                Our mission connects environmental protection with social upliftment.
                By restoring water bodies, conserving biodiversity, and empowering rural
                communities, we aim to reduce poverty and create a sustainable future
                where both land and people thrive together.
              </p>
              <button className="btn-read-more">Read More</button>
            </div>
          </div>
        )}

        {/* Mobile: Carousel */}
        {isMobile && (
          <div className="themes-carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="theme-item"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    setCurrentSlide((prev) => (prev + 1) % themeCards);
                  } else if (swipe > 10000) {
                    setCurrentSlide((prev) => (prev - 1 + themeCards) % themeCards);
                  }
                }}
              >
                {currentSlide === 0 && (
                  <>
                    <div className="theme-img-container">
                      <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=300&q=80"
                        alt="Soil and Agriculture"
                      />
                    </div>
                    <h3>Wealth of the Soil</h3>
                    <p>
                      We believe that protecting our soil is the foundation of a prosperous society.
                      By promoting tree plantation, sustainable farming, and ecological restoration,
                      we work to revive the natural strength of the land and ensure food and water
                      security for future generations.
                    </p>
                    <button className="btn-read-more">Read More</button>
                  </>
                )}
                {currentSlide === 1 && (
                  <>
                    <div className="theme-img-container">
                      <img
                        src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=1024x1024&w=is&k=20&c=DQmak_9J4DwI1y9SVeG14sZK0oYethaBQwPTEbhGUDQ="
                        alt="Tree Plantation"
                      />
                    </div>
                    <h3>Tree Plantation Movement</h3>
                    <p>
                      Inspired by the vision that nature must be protected at the right time,
                      we encourage every household to plant and nurture trees. Protecting existing
                      trees and increasing green cover ensures balanced rainfall, cleaner air,
                      and a healthier ecosystem.
                    </p>
                    <button className="btn-read-more">Read More</button>
                  </>
                )}
                {currentSlide === 2 && (
                  <>
                    <div className="theme-img-container">
                      <img
                        src="https://media.istockphoto.com/id/1549592912/photo/a-group-of-volunteers-holds-a-small-tree-in-their-hands-for-plant-concept-of-world.jpg?s=1024x1024&w=is&k=20&c=-J0G4JpiMODq_dl0dkvHCyMO6bIv0_zDOlGHM--ah1Y="
                        alt="Community Welfare"
                      />
                    </div>
                    <h3>Welfare of the People</h3>
                    <p>
                      Our mission connects environmental protection with social upliftment.
                      By restoring water bodies, conserving biodiversity, and empowering rural
                      communities, we aim to reduce poverty and create a sustainable future
                      where both land and people thrive together.
                    </p>
                    <button className="btn-read-more">Read More</button>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="carousel-indicators">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
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


      {/* Primary Work Areas Section */}
      <section className="primary-work-areas" data-aos="fade-up">
        <div className="work-areas-content">
          <div className="work-areas-header">
            <span className="leaf-icon">🍃</span>
            <h2>Primary Work Areas</h2>
          </div>

          <p>
            Our primary mission is to improve both the wealth of the soil and the
            welfare of the people. We focus on large-scale tree plantation,
            protection of existing trees, restoration of water bodies, and
            conservation of biodiversity to rebuild a balanced ecosystem.
          </p>

          <p>
            Through community participation, environmental awareness, and
            sustainable rural development initiatives, we encourage every
            household to become an environmental activist. By combining
            traditional wisdom with scientific approaches, we strive to
            create a greener, self-sustaining future for generations to come.
          </p>
        </div>

        <div className="work-areas-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
            alt="Tree plantation and sustainable agriculture"
          />
        </div>
      </section>


    </div>
  );
};

export default Home;

