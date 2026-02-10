import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (hash) => {
    window.location.hash = hash;
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-mark">🌱</span>
        <div>
          <div className="logo-title">For the Land and the People</div>
          <div className="logo-subtitle">
            M. Soundara Raja Social Welfare Foundation
          </div>
        </div>
      </div>
      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("#home")}>Home</button>
        <button onClick={() => handleNavClick("#about")}>About</button>
        <button onClick={() => handleNavClick("#programs")}>Programs</button>
        <button onClick={() => handleNavClick("#impact")}>Impact</button>
        <button onClick={() => handleNavClick("#get-involved")}>
          Get Involved
        </button>
        <button onClick={() => handleNavClick("#contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Navbar;

