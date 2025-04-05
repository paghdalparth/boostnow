import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const imageWrapper = document.querySelector(".dashboard-image-wrapper");
      if (imageWrapper) {
        const rect = imageWrapper.getBoundingClientRect();
        const scrollY = window.scrollY;

        if (rect.top < window.innerHeight - 100 && scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(true);
        } else if (scrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(false);
        }

        setLastScrollY(scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">BoostNow Sample Dashboard</h1>
      <div className={`dashboard-image-wrapper ${isVisible ? "visible" : "hidden"}`}>
        <img src="/image.png" alt="Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Dashboard;
