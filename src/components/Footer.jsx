import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone, ChevronRight } from "lucide-react";
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
            <img src="/images/LOGO ReCrate.png" alt="Mannukkum Makkalukum Logo" className="footer-logo-image" />
            <h3>Mannukkum Makkalukum</h3>
          </div>
          <p className="footer-mission">
            A conservation NGO dedicated to ecology, environment, wildlife, and sustainable natural resource management. Rooted in the soil, dedicated to people.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/mm_trust/?hl=en" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a onClick={() => handleNavClick("#home")}><ChevronRight size={14} /> Home</a></li>
            <li><a onClick={() => handleNavClick("/about")}><ChevronRight size={14} /> About Us</a></li>
            <li><a onClick={() => handleNavClick("#programs")}><ChevronRight size={14} /> Programs</a></li>
            <li><a onClick={() => handleNavClick("#impact")}><ChevronRight size={14} /> Impact</a></li>
            <li><a onClick={() => handleNavClick("/contact")}><ChevronRight size={14} /> Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <p><strong>HQ:</strong> 123 Nature Way, Green City, Tamil Nadu, India</p>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <p><strong>Email:</strong> contact@mannukkummakkalukum.org</p>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <p><strong>Phone:</strong> +91-33-22234148</p>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <p><strong>Phone:</strong> +91-44-98765432</p>
            </div>
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
