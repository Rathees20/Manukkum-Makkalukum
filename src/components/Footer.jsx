import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ChevronRight, Globe } from "lucide-react";
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
            <p className="reg-no">Registration No: 4/25/2020</p>
          </div>
          <p className="footer-mission">
            A conservation NGO dedicated to ecology, environment, wildlife, and sustainable natural resource management. Rooted in the soil, dedicated to people.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1GYJdgoABY/" className="social-icon" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/mannukkummakkalukkum" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/MMTrustofficial" className="social-icon" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://en.wikipedia.org/wiki/Mannukkum_Makkalukkum" className="social-icon" aria-label="Wikipedia">
              <Globe size={20} />
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
              <p><strong>HQ:</strong> Traventure Sunshine Apartment, Plot No: 67, Flat No - B, 2nd Floor, 7th Street, Sree Sayee Nagar, Virugambakkam, Chennai - 600 092</p>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <p><strong>Email:</strong> mannukkummakkalukkum@gmail.com</p>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <p><strong>Phone:</strong> +91 98400 32144</p>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <p><strong>Phone:</strong> +91 98421 25239</p>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <p><strong>Phone:</strong> +91 73958 44061</p>
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
