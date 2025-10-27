import React from "react";
import secure from "../../assets/secure.svg";
import phone from "../../assets/phone.svg";
import delivery from "../../assets/delivery.svg";

import feature1 from "../../assets/features1.png";
import feature2 from "../../assets/features2.png";
import feature3 from "../../assets/features3.png";

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left Column: Text with icons */}
        <div className="about-text">
          <h2>Discover our food app's key features</h2>
          <p>
            Discover fresh foods that delight your taste, nourish your body, and bring joy to every meal.
          </p>

          <div className="feature-item">
            <img src={delivery} alt="Delivery icon" className="feature-icon" />
            <div>
              <h3>Fast Food Delivery</h3>
              <p>Get your favourite meals delivered hot and fresh to your door in just a few minutes.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={secure} alt="Secure payment icon" className="feature-icon" />
            <div>
              <h3>Secure Online Payments</h3>
              <p>Pay securely using your preferred payment methods with a simple and quick checkout.</p>
            </div>
          </div>

          <div className="feature-item">
            <img src={phone} alt="Support icon" className="feature-icon" />
            <div>
              <h3>24/7 Order Support</h3>
              <p>Our support team is always ready to assist you with order queries or issues.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Large context images */}
        <div className="about-images">
  <img src={feature1} alt="Feature illustration 1" className="big-image" />
  <div className="small-images">
    <img src={feature2} alt="Feature illustration 2" />
    <img src={feature3} alt="Feature illustration 3" />
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
