import React from "react";
import { Link, Element } from "react-scroll";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";
import GifSection from "./components/GifSection";
import IntegrationSection from "./components/IntegrationSection";
import PricingSection from "./components/PricingSection";

import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      {/* Static Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Links for Smooth Scrolling */}
      

      {/* Sections with Smooth Scroll */}
      <div className="page-content">
        <Element name="hero"><HeroSection /></Element>
        <Element name="dashboard"><Dashboard /></Element>
        <Element name="gifs"><GifSection /></Element>
        <Element name="integrations"><IntegrationSection /></Element>
        <Element name="pricing"><PricingSection /></Element>
      </div>
    </div>
  );
};

export default App;
