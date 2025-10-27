import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import cartAdded from "../../assets/cart-added.svg";
import menu from "../../assets/menu.svg";
import menuClose from "../../assets/menu-close.svg";
import Login from "../Login/Login";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const cartItems = 3; // Example cart items count

  const openLogin = () => setShowLoginModal(true);
  const closeLogin = () => setShowLoginModal(false);

  return (
    <>
      <nav className="navbar">
        {/* Left: Logo and Brand */}
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Foodie Logo" className="logo" />
          </Link>
          <div className="brand">Foodie<br />Fiesta</div>
        </div>

        {/* Center: Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>

        {/* Right: Cart and Login */}
        <div className="nav-right">
          <Link to="/cart" className="icon-link">
            <img src={cartAdded} alt="Cart" className="cart-icon" />
            {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
          </Link>

          <button className="login-btn" onClick={openLogin}>
            <img src={user} alt="User" className="user-icon" />
            <span>Login</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src={isMobileMenuOpen ? menuClose : menu} alt="Menu Toggle" />
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={closeLogin}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLogin}>
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
