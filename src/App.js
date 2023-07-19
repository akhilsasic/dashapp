import React, { useState } from 'react';
import './App.css';
import menulogoImage1 from '../src/Group 14.png';
import menuwhiteImage from '../src/menupluswhite.png';
import piChartImage from '../src/sidebarimage1.png';
import performImage from '../src/performiage.png';
import upImage from '../src/upimage.png';
import graphImage from '../src/areachart.png';
import topmenuImage from '../src/Vector.png';

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">
            {/* Logo for the menu item */}
          </div>
          <div className="logo-text">
            {/* Text for the logo */}
            DASH
          </div>
        </div>
        <div className="pi-chart">
          {/* Vector image like a pi chart */}
          <img src={piChartImage} alt="Pi Chart" className="p-image" />
        </div>
        <div className="menu">
          <div
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo">
              {/* Logo for the menu item */}
              <img
                src={isHovered ? menuwhiteImage : menulogoImage1}
                alt="menu logo"
                className="l-image"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="text">
              {/* Text for the menu item */}
              Business Units 1
            </div>
          </div>
          <div
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo">
              {/* Logo for the menu item */}
              <img
                src={isHovered ? menuwhiteImage : menulogoImage1}
                alt="menu logo"
                className="l-image"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="text">
              {/* Text for the menu item */}
              Business Units 1
            </div>
          </div>
          <div
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo">
              {/* Logo for the menu item */}
              <img
                src={isHovered ? menuwhiteImage : menulogoImage1}
                alt="menu logo"
                className="l-image"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="text">
              {/* Text for the menu item */}
              Business Units 1
            </div>
          </div>
          <div
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo">
              {/* Logo for the menu item */}
              <img
                src={isHovered ? menuwhiteImage : menulogoImage1}
                alt="menu logo"
                className="l-image"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="text">
              {/* Text for the menu item */}
              Business Units 1
            </div>
          </div>
          <div
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo">
              {/* Logo for the menu item */}
              <img
                src={isHovered ? menuwhiteImage : menulogoImage1}
                alt="menu logo"
                className="l-image"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="text">
              {/* Text for the menu item */}
              Business Units 1
            </div>
          </div>
          <div
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="logo">
              {/* Logo for the menu item */}
              <img
                src={isHovered ? menuwhiteImage : menulogoImage1}
                alt="menu logo"
                className="l-image"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="text">
              {/* Text for the menu item */}
              Business Units 1
            </div>
          </div>
          {/* Repeat the above structure for other menu items */}
          
        </div>
      </div>
      <div className="content">
        <div className="top-section">
          {/* Menu icon */}
          <div className="menu-icon">
            <img src={topmenuImage} alt="top menu icon" className="tm-image" />
          </div>
          {/* Search bar */}
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search here"
            />
          </div>
          {/* Username and user image */}
          <div className="user">
            <div className="username" style={{ color: '#030BCE' }}>
              Username
            </div>
            {/* Circle for user image */}
            <div className="user-image"></div>
          </div>
        </div>
        <div className="graph">
          {/* Graph generated inside the rectangle */}
          <img src={graphImage} alt="graph" className="g-image" />
        </div>
        <div className="performance">
          {/* First rectangle */}
          <div className="performance-item">
            {/* Performance index pie chart */}
            <div className="performance-chart">
              {/* Semicircle with percentage of performance */}
              <img
                src={performImage}
                alt="Performance Chart"
                className="p-image"
              />
            </div>
            {/* Text below the performance chart */}
            {/* Text to the right of the rectangle */}
            <div className="performance-right-text">Performance Text</div>
          </div>
          {/* Second rectangle */}
          <div className="performance-item">
            {/* Text: Total Cost */}
            <div className="performance-text">Total Cost</div>
            {/* Amount in Rs */}
            <div className="performance-amount">Rs 1,36,90,000</div>
            {/* Vector */}
            <div className="performance-vector">
              <img src={upImage} alt="up arrow" className="u-image" />
              {/* Vector image */}
            </div>
          </div>
          {/* Third rectangle */}
          <div className="performance-item">
            {/* Similar structure as the second rectangle */}
            <div className="performance-text">Total Cost</div>
            {/* Amount in Rs */}
            <div className="performance-amount">Rs 36,10,000</div>
            {/* Vector */}
            <div className="performance-vector">
              <img src={upImage} alt="up arrow" className="u-image" />
              {/* Vector image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;




