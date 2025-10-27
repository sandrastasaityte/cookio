import React, { useEffect } from "react";
import "./Hero.css";
import bg from "../../assets/bg.png";

const Hero = () => {
  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;

      shapes.forEach((shape, index) => {
        const factor = (index + 1) * 2;
        shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero">
      {/* Floating shapes */}
      <span className="shape shape1"></span>
      <span className="shape shape2"></span>
      <span className="shape shape3"></span>

      <div className="hero-container">
        {/* Left text content */}
        <div className="hero-text">
          <h3 className="hero-subtitle">Fresh Bites for Every Mood</h3>

          <h2 className="hero-offer">
            <span>Get More</span> <span>for Less — 25% Off!</span>
          </h2>

          <h1 className="hero-title">On Rice & Curries</h1>

          <div className="hero-price">
            <h4>Starting from</h4>
            <p className="price">
              <span className="currency">£</span>04.<span className="cents">99</span>
            </p>
          </div>

          <button className="hero-btn">Shop Now</button>
        </div>

        {/* Right image */}
        <div className="hero-image">
          <img src={bg} alt="Delicious Dish" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
