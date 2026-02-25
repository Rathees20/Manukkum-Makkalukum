import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DonationModal from "./DonationModal";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (["/about", "/contact", "/gallery", "/initiatives"].includes(path)) {
      navigate(path);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.location.hash = path;
        }, 100);
      } else {
        window.location.hash = path;
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-left" onClick={() => handleNavClick("#home")} style={{ cursor: 'pointer' }}>
          <img src="/images/LOGO ReCrate.png" alt="Mannukkum Makkalukum Logo" className="logo-image" />
          <div>
            <div className="logo-title">Mannukkum Makkalukum</div>
            <div className="logo-subtitle">Social Welfare Trust</div>
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
          <a onClick={() => handleNavClick("/about")}>About Us</a>
          <a onClick={() => handleNavClick("/initiatives")}>Initiatives</a>
          <a onClick={() => handleNavClick("/gallery")}>Gallery</a>
          <a onClick={() => handleNavClick("/contact")}>Contact</a>
          <button
            className="donate-nav-button"
            onClick={() => {
              setIsDonationModalOpen(true);
              setIsOpen(false);
            }}
          >
            Donate
          </button>
        </nav>
      </header>

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};


export default Navbar;
