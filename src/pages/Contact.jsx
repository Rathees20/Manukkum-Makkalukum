import React from "react";
import { Instagram, Facebook, Twitter, Globe } from "lucide-react";
import "./SharedSections.css";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Our team will get back to you soon.");
  };

  return (
    <div className="contact-page-container" id="contact">
      {/* Contact Hero Banner */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-inner" data-aos="fade-up">
          <h1>Contact Us</h1>
          <div className="breadcrumbs">
            <span>Home</span> / <span>Contact Us</span>
          </div>
        </div>
      </section>

      <div className="page section content-wrapper">

        <div className="contact-layout">
          <div className="contact-info" data-aos="fade-right">
            <div className="office-grid">
              <div className="office-card">
                <h3>Our Office</h3>
                <p>Traventure Sunshine Apartment,<br />
                  Plot No: 67, Flat No - B, 2nd Floor,<br />
                  7th Street, Sree Sayee Nagar,<br />
                  Virugambakkam, Chennai - 600 092</p>
                <div className="contact-numbers">
                  <p><strong>Phone:</strong> +91 98400 32144</p>
                  <p><strong>Phone:</strong> +91 98421 25239</p>
                  <p><strong>Phone:</strong> +91 73958 44061</p>
                </div>
              </div>
            </div>

            <div className="contact-methods">
              <p><strong>General Email:</strong> mannukkummakkalukkum@gmail.com</p>
            </div>

            <div className="field-offices">
              <h3>Field Offices</h3>
              <div className="field-grid">
                <span>Coimbatore</span>
                <span>Madurai</span>
                <span>Trichy</span>
                <span>Salem</span>
                <span>Thanjavur</span>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/mannukkummakkalukkum" className="social-icon" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/share/1GYJdgoABY/" className="social-icon" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://x.com/MMTrustofficial" className="social-icon" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="https://en.wikipedia.org/wiki/Mannukkum_Makkalukkum" className="social-icon" aria-label="Wikipedia">
                  <Globe size={24} />
                </a>
              </div>
            </div>

          </div>

          <div className="contact-form-container" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name</label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="form-row">
                <label>Phone No</label>
                <input type="tel" placeholder="+91 00000 00000" required />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-row">
                <label>Interested In</label>
                <select required>
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="donation">Donation</option>
                  <option value="partnership">Partnership</option>
                  <option value="awareness">Awareness Program</option>
                </select>
              </div>
              <div className="form-row">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help?" required />
              </div>
              <button type="submit" className="btn btn-primary full-width">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
