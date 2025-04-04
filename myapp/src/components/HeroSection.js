import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <img src="/logo.jpg" alt="Company Logo" className="logo" />
          <div className="menu-icon"></div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <span className="tagline">🚀 12K+ GROWING BUSINESSES</span>
        <h1>
          <span className="slash">///</span> Amplify <span className="highlight">your growth</span> with
          <span className="smart-ai"> Smart AI </span> insights
        </h1>
        <p>One click away from transforming your business with powerful analytics.</p>

        {/* CTA Buttons */}
        <div className="buttons">
          <button className="primary-btn">Start Free Trial</button>
          <button className="secondary-btn">How it Works</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">GROWING PARTNERSHIPS AROUND THE WORLD</footer>
    </div>
  );
};

export default HeroSection;
