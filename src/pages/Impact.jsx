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
      <div className="section-header" data-aos="fade-up">
        <h2>Our Growing Impact</h2>
        <p>Small acts, repeated everywhere.</p>
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

