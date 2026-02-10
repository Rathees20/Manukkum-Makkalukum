import React, { useEffect, useState } from "react";
import "./WelcomePopup.css";

const SESSION_KEY = "mm_welcome_popup_seen";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(SESSION_KEY);
      if (!seen) {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // If storage is blocked, still show once per load.
      setOpen(true);
    }
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
          <div className="welcomePopup-badge">Tree Type</div>
        </div>

        <div className="welcomePopup-content">
          <h3 className="welcomePopup-title">One person per household should protect the environment.</h3>

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

