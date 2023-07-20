import { useState } from "react";
import React from "react";

import menulogoImage1 from '../../src/Group 14.png';
import menuwhiteImage from '../../src/menupluswhite.png';
import piChartImage from '../../src/sidebarimage1.png';

const Sidebar = () =>{

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    console.log('hover', isHovered)

    return(
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
)
}

export default Sidebar;