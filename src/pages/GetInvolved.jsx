import React from "react";
import "./SharedSections.css";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <div className="page section section-alt" id="get-involved">
      <div className="section-header" data-aos="fade-up">
        <h2>Get Involved</h2>
        <p>Actor Soundara Raja&apos;s choice can be yours too.</p>
      </div>

      <div className="get-involved-columns">
        <div data-aos="fade-right">
          <h3>Volunteer With Us</h3>
          <p>
            Whether you are a student, a working professional, or a fan of
            Soundara Raja sir, there is a place for you in this movement.
          </p>
          <ul className="bullet-list">
            <li>Join local sapling drives and awareness events.</li>
            <li>Adopt a tree and care for it in your area.</li>
            <li>Help us document stories and spread the word online.</li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <h3>Support the Mission</h3>
          <p>
            You can support the foundation through contributions in kind,
            partnerships, or by hosting drives in your institution or
            community.
          </p>
          <ul className="bullet-list">
            <li>Partner with us for CSR or institutional programs.</li>
            <li>Donate saplings, tools, or educational materials.</li>
            <li>Invite the team to your village, school, or event.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;

