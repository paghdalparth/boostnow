import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">BoostNow Sample Dashboard</h1>
      <div className="dashboard-image-wrapper">
        <img src="/image.png" alt="Dashboard" className="dashboard-image" />
      </div>
    </div>
  );
};

export default Dashboard;
