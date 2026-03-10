import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="section-header centered">
        <h2>Visual Stories</h2>
        <p className="section-subtitle">Watch our journey and impact unfold.</p>
      </div>
      <div className="video-grid">
        <div className="video-card">
          <div className="video-placeholder">
            <p>YouTube Video 1</p>
          </div>
        </div>
        <div className="video-card">
          <div className="video-placeholder">
            <p>YouTube Video 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
