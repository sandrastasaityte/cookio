import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/newsletter/image.png"
          alt="newsletter"
          className="newsletter-image"
        />

        <div className="newsletter-content">
          <button className="newsletter-close" aria-label="Close">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2 2 13M2 2l11 11"
                stroke="#1F2937"
                strokeOpacity=".7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="newsletter-text">
            <h1>Subscribe to our newsletter</h1>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
