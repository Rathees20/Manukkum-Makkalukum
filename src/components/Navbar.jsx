import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    if (hash === "/about" || hash === "/contact") {
      navigate(hash);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.location.hash = hash;
        }, 100);
      } else {
        window.location.hash = hash;
      }
    }
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left" onClick={() => handleNavClick("#home")} style={{ cursor: 'pointer' }}>
        <span className="logo-mark">🌱</span>
        <div>
          <div className="logo-title">Mannukkum Makkalukum</div>
          <div className="logo-subtitle">Environmental Trust</div>
        </div>
      </div>

      <button
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="mobile-nav" className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a onClick={() => handleNavClick("#home")}>Home</a>
        <a onClick={() => handleNavClick("/about")}>About</a>
        {/* <a onClick={() => handleNavClick("#focus-themes")}>Focus Areas</a> */}
        <a onClick={() => handleNavClick("#programs")}>Programs</a>
        <a onClick={() => handleNavClick("#impact")}>Impact</a>
        <a onClick={() => handleNavClick("#get-involved")}>Get Involved</a>
        <a onClick={() => handleNavClick("/contact")}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
