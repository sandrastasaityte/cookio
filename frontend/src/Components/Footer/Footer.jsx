import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo + Description */}
        <div className="footer-left">
          <a href="/" className="footer-logo-name">
            <img src={logo} alt="FoodieFiesta Logo" />
            <span className="brand-name">FoodieFiesta</span>
          </a>
          <p className="footer-description">
            Craving something tasty but short on time? Our takeaway menu brings your favorite dishes straight to your hands—fresh, hot, and made with love.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="footer-middle">
          <div className="footer-section">
            <p className="footer-title">Company</p>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Partners</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <p className="footer-title">Support</p>
            <ul>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Safety Info</a></li>
              <li><a href="/">Cancellation</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Accessibility</a></li>
              <li><a href="/">Careers <span className="badge">We’re hiring!</span></a></li>
            </ul>
          </div>
        </div>

        {/* Right: Social + Newsletter */}
        <div className="footer-right">
          <p className="footer-title">Follow & Subscribe</p>
          <div className="social-newsletter">
            <div className="social-icons">
              <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 FoodieFiesta — Order Now & Savor Every Bite!</p>
      </div>
    </footer>
  );
};

export default Footer;
