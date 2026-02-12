import React from "react";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <div className="volunteer-section" id="get-involved">
      <div className="volunteer-header" data-aos="fade-up">
        <h2>VOLUNTEER <span className="highlight-green">WITH US</span></h2>
        <div className="title-underline"></div>
      </div>

      <div className="volunteer-content-wrapper" data-aos="fade-up">
        <h3 className="volunteer-sub-title">JOIN OUR MOVEMENT, VOLUNTEER</h3>
        
        <div className="volunteer-flex-container">
          <div className="volunteer-image-container">
            <img 
              src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg" 
              alt="Hands joined in circle" 
              className="volunteer-round-img"
            />
          </div>
          
          <div className="volunteer-text-content">
            <p>
              We believe bringing positive change in large scale is not a single handed process. Bringing constructive change in society must be supported by the <strong>'Power of People'</strong>.
            </p>
            <p>
              Thank you for expressing your interest with us for a greener future. We will respond to you as per the requirements and availability of volunteering opportunities.
            </p>
            <p>
              Working professionals and homemakers who have needed skills can also help us through online communication and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
