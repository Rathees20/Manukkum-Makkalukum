import React from "react";
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
                <h3>Registered Office</h3>
                <p>123 Nature Way, Green City,<br />Tamil Nadu, India - 600001</p>
                <p><strong>Phone:</strong> +91 44 2345 6789</p>
              </div>
              <div className="office-card">
                <h3>Administrative Office</h3>
                <p>456 People Plaza, Eco Park,<br />Chennai, India - 600032</p>
                <p><strong>Phone:</strong> +91 44 9876 5432</p>
              </div>
            </div>

            <div className="contact-methods">
              <p><strong>General Email:</strong> contact@mannukkummakkalukum.org</p>
              <p><strong>Support Phone:</strong> +91 90000 00000</p>
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
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
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
