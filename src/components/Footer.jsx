import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        window.location.hash = path;
      }, 100);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column about-col">
          <div className="footer-logo">
            <span className="logo-mark">🌱</span>
            <h3>Mannukkum Makkalukum</h3>
          </div>
          <p className="footer-mission">
            A conservation NGO dedicated to ecology, environment, wildlife, and sustainable natural resource management. Rooted in the soil, dedicated to people.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">LinkedIn</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a onClick={() => handleNavClick("#home")}>Home</a></li>
            <li><a onClick={() => handleNavClick("/about")}>About Us</a></li>
            <li><a onClick={() => handleNavClick("#programs")}>Programs</a></li>
            <li><a onClick={() => handleNavClick("#impact")}>Impact</a></li>
            <li><a onClick={() => handleNavClick("/contact")}>Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Focus Areas</h4>
          <ul className="footer-links">
            <li><a onClick={() => handleNavClick("/")}>Ecology</a></li>
            <li><a onClick={() => handleNavClick("/")}>Wildlife</a></li>
            <li><a onClick={() => handleNavClick("/")}>Resources</a></li>
            <li><a onClick={() => handleNavClick("#get-involved")}>Get Involved</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <div className="footer-contact">
            <p><strong>HQ:</strong> 123 Nature Way, Green City, Tamil Nadu, India</p>
            <p><strong>Email:</strong> contact@mannukkummakkalukum.org</p>
            <p><strong>Phone:</strong> +91-33-22234148</p>
            <p><strong>Phone:</strong> +91-44-98765432</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© {new Date().getFullYear()} naturewildlife.org | All Rights Reserved</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
