import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Mannukkum Makkalukum Environmental Trust.
      </p>
      <p>For the wealth of the soil, and the welfare of the people.</p>
    </footer>
  );
};

export default Footer;

