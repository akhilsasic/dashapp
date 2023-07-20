import React, { useState } from 'react';
import './App.css';
import performImage from '../src/performiage.png';
import upImage from '../src/upimage.png';
import graphImage from '../src/areachart.png';
import topmenuImage from '../src/Vector.png';
import { LineChart, Line } from 'recharts'
import Sidebar from './components/Sidebar';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 200, pv: 1200, amt: 1600 },
  { name: 'Page C', uv: 600, pv: 3600, amt: 3000 },
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, // Duplicate entry
  { name: 'Page D', uv: 800, pv: 4800, amt: 4000 },
  // Add more data points as needed
];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

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
    <Sidebar/>
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
          {/* <img src={graphImage} alt="graph" className="g-image" /> */}
          {renderLineChart}
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




