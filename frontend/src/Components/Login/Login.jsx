import React from "react";
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Welcome back</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <div className="forgot-password">
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit">Log in</button>
      </form>

      <p className="signup-text">
        Don’t have an account? <a href="#">Signup</a>
      </p>

      <div className="social-login">
        <button className="apple-login">
          <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo" />
          Log in with Apple
        </button>
        <button className="google-login">
          <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
