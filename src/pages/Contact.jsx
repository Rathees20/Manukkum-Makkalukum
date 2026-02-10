import React from "react";
import "./SharedSections.css";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Our team will get back to you soon.");
  };

  return (
    <div className="page section" id="contact">
      <div className="section-header">
        <h2>Contact &amp; Next Steps</h2>
        <p>Let&apos;s plant the next sapling together with Mannukkum Makkalukum.</p>
      </div>

      <div className="contact-layout">
        <div>
          <h3>Reach Out</h3>
          <p>
            Share your interest, location, and how you&apos;d like to
            contribute. Our team will connect with you for upcoming drives and
            programs.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email</strong>: mannukkummakkalukum@example.org
            </p>
            <p>
              <strong>Phone / WhatsApp</strong>: +91-90000-00000
            </p>
            <p>
              <strong>Instagram</strong>: @mannukkummakkalukum
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input type="text" placeholder="Your full name" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Location
              <input
                type="text"
                placeholder="City / District / Village"
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              How would you like to help?
              <textarea
                rows="4"
                placeholder="Volunteer, host a drive, donate, partner..."
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary full-width">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

