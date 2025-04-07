import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

      <div className="page-content">
        <Router>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/gifs" element={<GifSection />} />
            <Route path="/integrations" element={<IntegrationSection />} />
            <Route path="/pricing" element={<PricingSection />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};  

export default App;
