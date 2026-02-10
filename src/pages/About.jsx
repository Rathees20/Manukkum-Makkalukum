import React from "react";

const About = () => {
  return (
    <div className="page section" id="about">
      <div className="section-header">
        <h2>About the Foundation</h2>
        <p>Rooted in the soil, grounded in people.</p>
      </div>

      <div className="two-column">
        <div>
          <h3>Our Story</h3>
          <img
            src="/image1.jpeg"
            alt="Actor M. Soundara Raja planting a sapling"
            className="about-img"
          />
          <p>
            With the guiding vision of improving both{" "}
            <strong>the wealth of the soil</strong> and{" "}
            <strong>the welfare of the people</strong>, actor M. Soundara Raja
            founded the social welfare initiative{" "}
            <strong>“For the Land and the People”</strong>.
          </p>
          <p>
            What began as a simple habit of{" "}
            <strong>planting a sapling wherever he sets foot</strong>—from film
            sets to remote villages—has grown into a collective movement that
            brings volunteers, farmers, students, and local leaders together.
          </p>
          <p>
            Today, every tree planted and every village reached is meant to be a
            living symbol of hope, reminding us that caring for the land is the
            first step to caring for our people.
          </p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <img
            src="/image2.jpeg"
            alt="Thriving green farmland and healthy soil"
            className="about-img"
          />
          <p>
            The foundation focuses on long-term, practical work that strengthens
            both the environment and the communities that depend on it.
          </p>
          <ul className="bullet-list">
            <li>Regenerate degraded lands with native trees and plants.</li>
            <li>Support farmers with sustainable, soil-friendly practices.</li>
            <li>Empower rural youth through environmental leadership.</li>
            <li>Create green corridors in and around villages and towns.</li>
          </ul>
          <p>
            Through consistent, on-the-ground efforts, we aim to create villages
            that are greener, healthier, and more resilient for future
            generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

