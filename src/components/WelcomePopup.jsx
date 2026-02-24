import React, { useEffect, useState } from "react";
import "./WelcomePopup.css";

const SESSION_KEY = "mm_welcome_popup_seen";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div className="welcomePopup-overlay" role="dialog" aria-modal="true">
      <div className="welcomePopup-card welcomePopup-tree-card">
        <button
          className="welcomePopup-close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="welcomePopup-image-container">
          <img
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80"
            alt="Native Tree Sapling"
            className="welcomePopup-image"
          />
          <div className="welcomePopup-overlay-content">
            <div className="welcomePopup-quote-container">
              <p className="welcomePopup-quote-tamil">"வீட்டுக்கொருவர் சுற்றுச் சூழலை பாதுகாக்க முன் வர வேண்டும்"</p>
              <p className="welcomePopup-credit-tamil">மு. சௌந்தர ராஜா</p>
              <div className="quote-divider"></div>
              <p className="welcomePopup-quote-english">"From Every Home, One Must Rise to Save Nature and Environment.”</p>
              <p className="welcomePopup-credit-english">— M. Soundara Raja</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="welcomePopup-backdropClose"
        aria-label="Close popup"
        onClick={() => setOpen(false)}
      />
    </div>
  );
}

