import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-mark">🌱</span>
        <div>
          <div className="logo-title">Mannukkum Makkalukum</div>
          <div className="logo-subtitle">Environmental Trust</div>
        </div>
      </div>
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#programs">Programs</a>
        <a href="#impact">Impact</a>
        <a href="#get-involved">Get Involved</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;

