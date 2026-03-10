import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import "./SharedSections.css";
import "./Impact.css";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      if (typeof value === "string" && value === "∞") {
        setDisplayValue("∞");
        return;
      }

      const targetValue = parseInt(value.toString().replace(/,/g, ""));
      let start = 0;
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(targetValue * (1 - Math.pow(1 - progress, 3)));

        if (frame === totalFrames) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current.toLocaleString() + (value.toString().includes("+") ? "+" : ""));
        }
      }, frameRate);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const Impact = () => {
  return (
    <div className="page section" id="impact">
      <div className="work-areas-header" data-aos="fade-up">
        <span className="work-areas-icon-simple" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            className="work-areas-icon-simple-svg"
          >
            <path
              d="M5 19c4.5 0 8.5-2.5 10.7-6.3C17.8 10.2 18.5 7.8 19 5.5 16.7 6 14.3 6.2 12 6.9 8.2 8.1 5 11.2 5 15v4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 14c1-.3 2.2-1.2 3-2.3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2>Our Growing Impact</h2>
      </div>

      <div className="impact-grid">
        <div className="impact-card" data-aos="zoom-in" data-aos-delay="100">
          <div className="impact-number">
            <Counter value="25,000+" />
          </div>
          <div className="impact-label">Saplings Planted</div>
          <p>Across schools, villages, and public spaces.</p>
        </div>
        <div className="impact-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="impact-number">
            <Counter value="80+" />
          </div>
          <div className="impact-label">Villages Reached</div>
          <p>With soil, water, and welfare programs.</p>
        </div>
        <div className="impact-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="impact-number">
            <Counter value="1,500+" />
          </div>
          <div className="impact-label">Volunteers</div>
          <p>Students, farmers, fans, and nature lovers.</p>
        </div>
        <div className="impact-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="impact-number">
            <Counter value="∞" />
          </div>
          <div className="impact-label">Saplings to Go</div>
          <p>We won&apos;t stop until every village is greener.</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;

