import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="logo">MySite</h2>
        <ul>
          <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#about" onClick={toggleSidebar}>About</a></li>
          <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </div>

      {/* Content area (optional) */}
      <div className="content">
        <h1>Welcome to my website</h1>
      </div>
    </div>
  );
};

export default Sidebar;
