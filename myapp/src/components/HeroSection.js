import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Navbar with Logo */}
      <nav className="navbar">
        <div className="navbar-content">
          <img src="/logo.jpg" alt="Logo" className="logo" /> {/* Replace 'logo.png' with your actual logo file name */}
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
        <p>You are just one click away from transforming your business with powerful analytics support.</p>
        <div className="buttons">
          <button className="primary-btn">Start Free Trial</button>
          <button className="secondary-btn">How it Works</button>
        </div>
      </div>

      <footer className="footer">GROWING PARTNERSHIP AROUND THE WORLD</footer>
    </div>
  );
};

export default HeroSection;
